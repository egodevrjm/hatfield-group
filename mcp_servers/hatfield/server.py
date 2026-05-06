# /// script
# requires-python = ">=3.10"
# dependencies = [
#   "mcp>=1.2.0",
# ]
# ///
"""Hatfield Group canon MCP server.

Read-only access to data/hatfield/hatfield_canon.json for in-scene RPG lookups.
Run with: uv run server.py
"""

from __future__ import annotations

import json
import csv
from pathlib import Path
from typing import Any

from mcp.server.fastmcp import FastMCP

REPO_ROOT = Path(__file__).resolve().parents[2]
CANON_PATH = REPO_ROOT / "data" / "hatfield" / "hatfield_canon.json"
MANIFEST_PATH = REPO_ROOT / "data" / "hatfield" / "manifest.json"
COCKTAILS_PATH = REPO_ROOT / "data" / "hatfield" / "hatfield_cocktails.csv"

with CANON_PATH.open() as f:
    CANON: dict[str, Any] = json.load(f)
with MANIFEST_PATH.open() as f:
    MANIFEST: dict[str, Any] = json.load(f)
with COCKTAILS_PATH.open(newline="") as f:
    COCKTAILS: list[dict[str, Any]] = [
        {
            "id": row["Name"].lower().replace("&", "and").replace(" ", "_").replace("'", ""),
            "name": row["Name"],
            "ingredients": [part.strip() for part in row["Ingredients"].split(";") if part.strip()],
            "method": row["Method"],
            "source": str(COCKTAILS_PATH.relative_to(REPO_ROOT)),
        }
        for row in csv.DictReader(f)
    ]

mcp = FastMCP("hatfield-canon")


def _find(collection: list[dict], key: str, value: str) -> dict | None:
    value_lc = value.lower()
    for item in collection:
        if str(item.get(key, "")).lower() == value_lc:
            return item
    return None


def _matches(item: dict, query: str) -> bool:
    q = query.lower()
    return q in json.dumps(item, default=str).lower()


def _filter(collection: list[dict], **filters: str | None) -> list[dict]:
    out = []
    for item in collection:
        ok = True
        for k, v in filters.items():
            if v is None:
                continue
            if str(item.get(k, "")).lower() != v.lower():
                ok = False
                break
        if ok:
            out.append(item)
    return out


def _normalise(value: str) -> str:
    return "".join(ch.lower() for ch in value if ch.isalnum() or ch.isspace()).strip()


def _cocktail_lookup(name_or_id: str) -> dict | None:
    needle = _normalise(name_or_id.replace("_", " "))
    for cocktail in COCKTAILS:
        if needle in {_normalise(cocktail["id"].replace("_", " ")), _normalise(cocktail["name"])}:
            return cocktail
    return None


def _product_hits_for_ingredient(ingredient: str) -> list[dict]:
    ingredient_lc = _normalise(ingredient)
    hits = []
    for product in CANON["products"]:
        product_name = _normalise(product.get("name", ""))
        product_category = _normalise(product.get("category", ""))
        aliases = [
            product_name,
            product_name.replace("hatfield ", ""),
            product_name.replace("limestone springs ", ""),
            product_category,
        ]
        if any(alias and (alias in ingredient_lc or ingredient_lc in alias) for alias in aliases):
            hits.append(product)
    return hits


def _cocktail_with_product_links(cocktail: dict) -> dict:
    return {
        **cocktail,
        "ingredient_product_matches": [
            {
                "ingredient": ingredient,
                "products": [
                    {k: p.get(k) for k in ("id", "name", "division_id", "category", "retail_price")}
                    for p in _product_hits_for_ingredient(ingredient)
                ],
            }
            for ingredient in cocktail["ingredients"]
        ],
    }


# ---------- Resources ----------

@mcp.resource("hatfield://manifest")
def resource_manifest() -> str:
    """Hatfield MCP manifest and collection counts."""
    manifest = {
        **MANIFEST,
        "collections": {
            **MANIFEST.get("collections", {}),
            "cocktails": "CSV-backed Hatfield cocktail recipe guide with ingredients and method.",
        },
        "counts": {
            **MANIFEST.get("counts", {}),
            "cocktails": len(COCKTAILS),
        },
    }
    return json.dumps(manifest, indent=2)


@mcp.resource("hatfield://products")
def resource_products() -> str:
    """Full structured product canon."""
    return json.dumps(CANON["products"], indent=2)


@mcp.resource("hatfield://venues")
def resource_venues() -> str:
    """Full structured venue canon."""
    return json.dumps(CANON["venues"], indent=2)


@mcp.resource("hatfield://cocktails")
def resource_cocktails() -> str:
    """Full Hatfield cocktail recipe guide."""
    return json.dumps(COCKTAILS, indent=2)


# ---------- Group / structure ----------

@mcp.tool()
def get_manifest() -> dict:
    """Return the canon manifest: schema version, story ceiling date, source files, counts."""
    return {
        **MANIFEST,
        "collections": {
            **MANIFEST.get("collections", {}),
            "cocktails": "CSV-backed Hatfield cocktail recipe guide with ingredients and method.",
        },
        "counts": {
            **MANIFEST.get("counts", {}),
            "cocktails": len(COCKTAILS),
        },
        "cocktails_data_file": str(COCKTAILS_PATH.relative_to(REPO_ROOT)),
    }


@mcp.tool()
def get_group() -> dict:
    """Hatfield Group top-level: CEO, valuation, revenue, board, capital structure, Walker relationship."""
    return CANON["group"]


@mcp.tool()
def get_walker_relationship() -> dict:
    """Explicit Walker Holdings <-> Hatfield Group boundary. Use this to avoid drift
    (e.g. 'Eleanor runs Hatfield' is explicitly false)."""
    return CANON["group"]["relationship_to_walker_holdings"]


# ---------- Divisions ----------

@mcp.tool()
def list_divisions() -> list[dict]:
    """List all 10 Hatfield Group divisions (id, name, category, leader, scale)."""
    return [
        {k: d.get(k) for k in ("id", "name", "category", "location", "leader", "annual_revenue_usd", "employees")}
        for d in CANON["divisions"]
    ]


@mcp.tool()
def get_division(division_id: str) -> dict | None:
    """Get full detail on one division by id (e.g. 'hatfield_distillery_spirits', 'the_stave')."""
    return _find(CANON["divisions"], "id", division_id)


# ---------- Products ----------

@mcp.tool()
def list_products(division_id: str | None = None, category: str | None = None) -> list[dict]:
    """List products. Optionally filter by division_id or category (e.g. 'bourbon', 'mixers', 'wine')."""
    items = _filter(CANON["products"], division_id=division_id, category=category)
    return [
        {k: p.get(k) for k in ("id", "name", "division_id", "category", "type", "retail_price")}
        for p in items
    ]


@mcp.tool()
def get_product(product_id: str) -> dict | None:
    """Get full detail on one product by id (proof, age, profile, distribution, scene_recognition)."""
    return _find(CANON["products"], "id", product_id)


@mcp.tool()
def search_products(query: str) -> list[dict]:
    """Free-text search across all product fields. Returns matching products with full detail."""
    return [p for p in CANON["products"] if _matches(p, query)]


# ---------- Venues ----------

@mcp.tool()
def list_venues(
    type: str | None = None,
    division_id: str | None = None,
    status: str | None = None,
) -> list[dict]:
    """List venues. Optional filters:
      - type: e.g. 'company-owned restaurant', 'private members club'
      - division_id: e.g. 'the_stave', 'hatfield_inns'
      - status: e.g. 'operational', 'planned'
    """
    items = _filter(CANON["venues"], type=type, division_id=division_id, status=status)
    return [
        {k: v.get(k) for k in ("id", "name", "division_id", "type", "location", "status")}
        for v in items
    ]


@mcp.tool()
def get_venue(venue_id: str) -> dict | None:
    """Get full detail on one venue by id (features, tours, scene_rule, etc.).
    Example ids: 'the_stave_london', 'hatfield_distillery_bardstown', 'bar_grill_lexington'."""
    return _find(CANON["venues"], "id", venue_id)


@mcp.tool()
def search_venues(query: str) -> list[dict]:
    """Free-text search across all venue fields. Returns matching venues with full detail.
    Useful when you only know a city or partial name (e.g. 'London', 'Bardstown', 'Soho')."""
    return [v for v in CANON["venues"] if _matches(v, query)]


# ---------- Cocktails ----------

@mcp.tool()
def list_cocktails() -> list[dict]:
    """List all Hatfield cocktail recipes from the CSV-backed recipe guide."""
    return [
        {
            "id": cocktail["id"],
            "name": cocktail["name"],
            "ingredients": cocktail["ingredients"],
        }
        for cocktail in COCKTAILS
    ]


@mcp.tool()
def get_cocktail(name_or_id: str, include_product_matches: bool = True) -> dict | None:
    """Get one cocktail by name or id. Optionally include matching Hatfield products for ingredients."""
    cocktail = _cocktail_lookup(name_or_id)
    if not cocktail:
        return None
    return _cocktail_with_product_links(cocktail) if include_product_matches else cocktail


@mcp.tool()
def search_cocktails(query: str) -> list[dict]:
    """Free-text search across cocktail names, ingredients, and methods."""
    return [_cocktail_with_product_links(c) for c in COCKTAILS if _matches(c, query)]


@mcp.tool()
def cocktails_for_product(product_query: str) -> list[dict]:
    """Find cocktails that mention a product, ingredient, category, or partial product name.
    Examples: 'Ginger Beer', 'Single Barrel', 'tonic', 'Rye Whiskey'."""
    needle = _normalise(product_query)
    matches = []
    product_names = [
        _normalise(p.get("name", "")) for p in search_products(product_query)
    ]
    for cocktail in COCKTAILS:
        haystack = _normalise(" ".join([cocktail["name"], *cocktail["ingredients"], cocktail["method"]]))
        if needle in haystack or any(product_name and product_name in haystack for product_name in product_names):
            matches.append(_cocktail_with_product_links(cocktail))
    return matches


@mcp.tool()
def get_cocktail_guide_summary() -> dict:
    """Return cocktail guide counts and the Hatfield products most often referenced by recipes."""
    product_mentions: dict[str, int] = {}
    for cocktail in COCKTAILS:
        for ingredient in cocktail["ingredients"]:
            for product in _product_hits_for_ingredient(ingredient):
                product_mentions[product["name"]] = product_mentions.get(product["name"], 0) + 1
    return {
        "recipe_count": len(COCKTAILS),
        "source": str(COCKTAILS_PATH.relative_to(REPO_ROOT)),
        "top_product_mentions": sorted(
            product_mentions.items(),
            key=lambda item: item[1],
            reverse=True,
        )[:20],
    }


# ---------- Franchise / distribution ----------

@mcp.tool()
def get_franchise_operations() -> dict:
    """Franchise terms, open locations, build-out pipeline, support ops, financials, projections."""
    return CANON["franchise_operations"]


@mcp.tool()
def get_distribution() -> dict:
    """Sales channels, geography, product-category revenue, captive Hatfield supply channels."""
    return CANON["distribution_and_channels"]


# ---------- Canon guardrails ----------

@mcp.tool()
def get_global_rules() -> dict:
    """The 10 stated_fact / photo / public_inference / alex_business_role rules.
    READ THIS BEFORE writing any Hatfield scene to avoid common drift."""
    return CANON["global_rules"]


@mcp.tool()
def get_public_knowledge() -> dict:
    """What the public knows, what is not public, and the product photo inference rule."""
    return CANON["public_knowledge"]


@mcp.tool()
def get_renderer_contract() -> dict:
    """Required files, lookup policy, and example answers for the business-renderer skill."""
    return CANON["business_renderer_contract"]


# ---------- Global search ----------

@mcp.tool()
def search(query: str) -> dict:
    """Global free-text search across products, venues, and divisions.
    Returns up to 25 hits per collection. Use when you don't know which collection to look in."""
    q = query.lower()

    def hits(coll, key_fields):
        out = []
        for item in coll:
            if _matches(item, q):
                out.append({k: item.get(k) for k in key_fields if k in item})
        return out[:25]

    return {
        "products": hits(CANON["products"], ["id", "name", "category", "division_id"]),
        "venues": hits(CANON["venues"], ["id", "name", "type", "location", "division_id", "status"]),
        "divisions": hits(CANON["divisions"], ["id", "name", "category", "leader"]),
        "cocktails": [
            {k: c.get(k) for k in ("id", "name", "ingredients")}
            for c in COCKTAILS
            if _matches(c, q)
        ][:25],
    }


if __name__ == "__main__":
    mcp.run()
