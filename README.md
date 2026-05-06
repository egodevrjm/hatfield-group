# Hatfield Group Website

Static multi-page website for Hatfield Group.

## Deploy

This site is static HTML/CSS/JavaScript. For Netlify:

- Base directory: `.`
- Build command: leave empty
- Publish directory: `.`

The `netlify.toml` file already sets the publish directory.

## MCP Endpoint

The site also deploys a read-only Hatfield MCP endpoint as a Netlify Function:

- Local/function path: `netlify/functions/hatfield-mcp.mts`
- Public path after deploy: `/mcp/hatfield`
- Production URL: `https://hatfield-group.netlify.app/mcp/hatfield`

It exposes products, venues, and cocktails through MCP-style JSON-RPC methods:

- `tools/list`
- `tools/call`
- `resources/list`
- `resources/read`

Useful tool names include `search_products`, `search_venues`, `search_cocktails`, `get_cocktail`, `cocktails_for_product`, and global `search`.

Example request:

```bash
curl https://hatfield-group.netlify.app/mcp/hatfield \
  -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"cocktails_for_product","arguments":{"product_query":"Limestone Springs Ginger Beer"}}}'
```
