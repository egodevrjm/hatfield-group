import canon from "../../data/hatfield/hatfield_canon.json";
import manifest from "../../data/hatfield/manifest.json";
import cocktails from "../../data/hatfield/hatfield_cocktails.json";

type JsonObject = Record<string, any>;
type JsonRpcRequest = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: JsonObject;
};

const SERVER_INFO = {
  name: "hatfield-canon",
  title: "Hatfield Canon",
  version: "1.1.0",
};

const RESOURCES = [
  {
    uri: "hatfield://manifest",
    name: "Hatfield manifest",
    mimeType: "application/json",
    description: "Collection manifest and counts for the Hatfield canon MCP server.",
  },
  {
    uri: "hatfield://products",
    name: "Hatfield products",
    mimeType: "application/json",
    description: "Structured product canon across spirits, Limestone Springs, wines, provisions, barware, merchandise, and experiences.",
  },
  {
    uri: "hatfield://venues",
    name: "Hatfield venues",
    mimeType: "application/json",
    description: "Structured venue canon across restaurants, inns, clubs, distilleries, Still House, wine estates, and planned sites.",
  },
  {
    uri: "hatfield://cocktails",
    name: "Hatfield cocktails",
    mimeType: "application/json",
    description: "Hatfield cocktail recipe guide sourced from the CSV recipe list.",
  },
];

const TOOL_DEFINITIONS = [
  {
    name: "get_manifest",
    description: "Return collection counts, source files, and server metadata.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_products",
    description: "List products, optionally filtered by division_id or category.",
    inputSchema: {
      type: "object",
      properties: {
        division_id: { type: "string" },
        category: { type: "string" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_product",
    description: "Get one product by id.",
    inputSchema: {
      type: "object",
      properties: { product_id: { type: "string" } },
      required: ["product_id"],
      additionalProperties: false,
    },
  },
  {
    name: "search_products",
    description: "Free-text search across product fields.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "list_venues",
    description: "List venues, optionally filtered by type, division_id, or status.",
    inputSchema: {
      type: "object",
      properties: {
        type: { type: "string" },
        division_id: { type: "string" },
        status: { type: "string" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_venue",
    description: "Get one venue by id.",
    inputSchema: {
      type: "object",
      properties: { venue_id: { type: "string" } },
      required: ["venue_id"],
      additionalProperties: false,
    },
  },
  {
    name: "search_venues",
    description: "Free-text search across venue fields.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "list_cocktails",
    description: "List all cocktail recipes with ids, names, and ingredients.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_cocktail",
    description: "Get one cocktail by name or id, including ingredient product matches by default.",
    inputSchema: {
      type: "object",
      properties: {
        name_or_id: { type: "string" },
        include_product_matches: { type: "boolean" },
      },
      required: ["name_or_id"],
      additionalProperties: false,
    },
  },
  {
    name: "search_cocktails",
    description: "Free-text search across cocktail names, ingredients, and methods.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "cocktails_for_product",
    description: "Find cocktails that mention a product, ingredient, category, or partial product name.",
    inputSchema: {
      type: "object",
      properties: { product_query: { type: "string" } },
      required: ["product_query"],
      additionalProperties: false,
    },
  },
  {
    name: "search",
    description: "Global free-text search across products, venues, divisions, and cocktails.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
      additionalProperties: false,
    },
  },
];

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function textContent(value: unknown) {
  return [{ type: "text", text: JSON.stringify(value, null, 2) }];
}

function normalise(value: string) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matches(item: unknown, query: string) {
  return JSON.stringify(item).toLowerCase().includes(String(query || "").toLowerCase());
}

function byField(items: JsonObject[], key: string, value: string) {
  const needle = String(value || "").toLowerCase();
  return items.find((item) => String(item[key] || "").toLowerCase() === needle) || null;
}

function filterBy(items: JsonObject[], filters: JsonObject) {
  return items.filter((item) =>
    Object.entries(filters).every(([key, value]) => {
      if (value === undefined || value === null || value === "") return true;
      return String(item[key] || "").toLowerCase() === String(value).toLowerCase();
    }),
  );
}

function productHitsForIngredient(ingredient: string) {
  const ingredientText = normalise(ingredient);
  return (canon.products as JsonObject[]).filter((product) => {
    const productName = normalise(product.name || "");
    const category = normalise(product.category || "");
    const aliases = [
      productName,
      productName.replace("hatfield ", ""),
      productName.replace("limestone springs ", ""),
      category,
    ].filter(Boolean);
    return aliases.some((alias) => ingredientText.includes(alias) || alias.includes(ingredientText));
  });
}

function productAliasesForQuery(query: string) {
  const direct = normalise(query);
  const matchedProducts = (canon.products as JsonObject[]).filter((product) => matches(product, query));
  return [
    direct,
    ...matchedProducts.flatMap((product) => {
      const name = normalise(product.name || "");
      return [
        name,
        name.replace("hatfield ", ""),
        name.replace("limestone springs ", ""),
        normalise(product.category || ""),
      ];
    }),
  ].filter(Boolean);
}

function cocktailWithProductLinks(cocktail: JsonObject) {
  return {
    ...cocktail,
    ingredient_product_matches: cocktail.ingredients.map((ingredient: string) => ({
      ingredient,
      products: productHitsForIngredient(ingredient).map((product) => ({
        id: product.id,
        name: product.name,
        division_id: product.division_id,
        category: product.category,
        retail_price: product.retail_price,
      })),
    })),
  };
}

function cocktailLookup(nameOrId: string) {
  const needle = normalise(String(nameOrId).replace(/_/g, " "));
  return (
    (cocktails as JsonObject[]).find((cocktail) =>
      [normalise(cocktail.id.replace(/_/g, " ")), normalise(cocktail.name)].includes(needle),
    ) || null
  );
}

function manifestPayload() {
  return {
    ...manifest,
    server: SERVER_INFO,
    collections: {
      ...manifest.collections,
      cocktails: "Hatfield cocktail recipe guide sourced from data/hatfield/hatfield_cocktails.csv.",
    },
    counts: {
      ...manifest.counts,
      cocktails: (cocktails as JsonObject[]).length,
    },
    mcp_endpoint: "/mcp/hatfield",
  };
}

function resourcePayload(uri: string) {
  if (uri === "hatfield://manifest") return manifestPayload();
  if (uri === "hatfield://products") return canon.products;
  if (uri === "hatfield://venues") return canon.venues;
  if (uri === "hatfield://cocktails") return cocktails;
  throw new Error(`Unknown resource: ${uri}`);
}

function callTool(name: string, args: JsonObject = {}) {
  switch (name) {
    case "get_manifest":
      return manifestPayload();
    case "list_products":
      return filterBy(canon.products as JsonObject[], {
        division_id: args.division_id,
        category: args.category,
      }).map(({ id, name, division_id, category, type, retail_price }) => ({
        id,
        name,
        division_id,
        category,
        type,
        retail_price,
      }));
    case "get_product":
      return byField(canon.products as JsonObject[], "id", args.product_id);
    case "search_products":
      return (canon.products as JsonObject[]).filter((product) => matches(product, args.query));
    case "list_venues":
      return filterBy(canon.venues as JsonObject[], {
        type: args.type,
        division_id: args.division_id,
        status: args.status,
      }).map(({ id, name, division_id, type, location, status }) => ({
        id,
        name,
        division_id,
        type,
        location,
        status,
      }));
    case "get_venue":
      return byField(canon.venues as JsonObject[], "id", args.venue_id);
    case "search_venues":
      return (canon.venues as JsonObject[]).filter((venue) => matches(venue, args.query));
    case "list_cocktails":
      return (cocktails as JsonObject[]).map(({ id, name, ingredients }) => ({ id, name, ingredients }));
    case "get_cocktail": {
      const cocktail = cocktailLookup(args.name_or_id);
      if (!cocktail) return null;
      return args.include_product_matches === false ? cocktail : cocktailWithProductLinks(cocktail);
    }
    case "search_cocktails":
      return (cocktails as JsonObject[])
        .filter((cocktail) => matches(cocktail, args.query))
        .map(cocktailWithProductLinks);
    case "cocktails_for_product": {
      const aliases = productAliasesForQuery(args.product_query);
      return (cocktails as JsonObject[])
        .filter((cocktail) => {
          const haystack = normalise([cocktail.name, ...cocktail.ingredients, cocktail.method].join(" "));
          return aliases.some((alias) => haystack.includes(alias));
        })
        .map(cocktailWithProductLinks);
    }
    case "search": {
      const query = String(args.query || "");
      return {
        products: (canon.products as JsonObject[])
          .filter((product) => matches(product, query))
          .slice(0, 25)
          .map(({ id, name, category, division_id }) => ({ id, name, category, division_id })),
        venues: (canon.venues as JsonObject[])
          .filter((venue) => matches(venue, query))
          .slice(0, 25)
          .map(({ id, name, type, location, division_id, status }) => ({ id, name, type, location, division_id, status })),
        divisions: (canon.divisions as JsonObject[])
          .filter((division) => matches(division, query))
          .slice(0, 25)
          .map(({ id, name, category, leader }) => ({ id, name, category, leader })),
        cocktails: (cocktails as JsonObject[])
          .filter((cocktail) => matches(cocktail, query))
          .slice(0, 25)
          .map(({ id, name, ingredients }) => ({ id, name, ingredients })),
      };
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

function jsonRpcResult(id: JsonRpcRequest["id"], result: unknown) {
  return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(id: JsonRpcRequest["id"], code: number, message: string) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message } };
}

function handleMessage(message: JsonRpcRequest) {
  const id = message.id;
  const params = message.params || {};

  if (!message.method) return jsonRpcError(id, -32600, "Invalid JSON-RPC request.");
  if (id === undefined && message.method.startsWith("notifications/")) return null;

  try {
    switch (message.method) {
      case "initialize":
        return jsonRpcResult(id, {
          protocolVersion: params.protocolVersion || "2025-06-18",
          capabilities: {
            tools: { listChanged: false },
            resources: { subscribe: false, listChanged: false },
          },
          serverInfo: SERVER_INFO,
        });
      case "ping":
        return jsonRpcResult(id, {});
      case "tools/list":
        return jsonRpcResult(id, { tools: TOOL_DEFINITIONS });
      case "tools/call": {
        const toolName = params.name;
        const result = callTool(toolName, params.arguments || {});
        return jsonRpcResult(id, {
          content: textContent(result),
          structuredContent: result,
        });
      }
      case "resources/list":
        return jsonRpcResult(id, { resources: RESOURCES });
      case "resources/read": {
        const uri = params.uri;
        const payload = resourcePayload(uri);
        return jsonRpcResult(id, {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(payload, null, 2),
            },
          ],
        });
      }
      default:
        return jsonRpcError(id, -32601, `Method not found: ${message.method}`);
    }
  } catch (error) {
    return jsonRpcError(id, -32000, error instanceof Error ? error.message : "Unknown server error.");
  }
}

export default async (req: Request) => {
  if (req.method === "GET") {
    return jsonResponse({
      server: SERVER_INFO,
      endpoint: "/mcp/hatfield",
      transport: "HTTP JSON-RPC",
      resources: RESOURCES,
      tools: TOOL_DEFINITIONS.map(({ name, description }) => ({ name, description })),
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  let payload: JsonRpcRequest | JsonRpcRequest[];
  try {
    payload = await req.json();
  } catch {
    return jsonResponse(jsonRpcError(null, -32700, "Parse error."), 400);
  }

  const messages = Array.isArray(payload) ? payload : [payload];
  const responses = messages.map(handleMessage).filter(Boolean);

  if (!responses.length) return new Response(null, { status: 204 });
  return jsonResponse(Array.isArray(payload) ? responses : responses[0]);
};

export const config = {
  path: "/mcp/hatfield",
};
