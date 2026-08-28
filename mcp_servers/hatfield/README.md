# Hatfield MCP Server

Read-only MCP server for the Hatfield canon.

It exposes:

- Products from `data/hatfield/hatfield_canon.json`
- Venues from `data/hatfield/hatfield_canon.json`
- Cocktails from `data/hatfield/hatfield_cocktails.csv`

## Run

From the repository root:

```bash
uv run mcp_servers/hatfield/server.py
```

If your MCP client needs a config entry, point it at:

```json
{
  "mcpServers": {
    "hatfield-canon": {
      "command": "uv",
      "args": [
        "run",
        "/absolute/path/to/hatfield-group/mcp_servers/hatfield/server.py"
      ]
    }
  }
}
```

## Resources

- `hatfield://manifest`
- `hatfield://products`
- `hatfield://venues`
- `hatfield://cocktails`

## Main Tools

- `list_products`, `get_product`, `search_products`
- `list_venues`, `get_venue`, `search_venues`
- `list_cocktails`, `get_cocktail`, `search_cocktails`
- `cocktails_for_product`
- `get_cocktail_guide_summary`
- `search`

The cocktail tools include ingredient-level product matches where available, so a recipe such as `Kentucky Mule` can point back to matching Hatfield products like Limestone Springs Ginger Beer and Hatfield bitters.
