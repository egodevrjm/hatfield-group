# Alex Wilson world — public websites

The public-facing static websites for the fictional Alex Wilson story world. This repository intentionally contains only finished website material; private canon, company bibles, financial records and working story files remain outside it.

Hatfield occupies the repository root to preserve the existing Netlify project. A deploy-only Hatfield mirror and the remaining sites are independent Vercel project roots:

- `sites/hatfield`
- `sites/walker-holdings`
- `sites/wilsonwalker`
- `sites/phoenix-media`
- `sites/limestone-springs`
- `sites/albury-acoustics`
- `sites/alex-wilson`

All sites are plain static HTML, CSS and JavaScript. Generated pages are committed as deployable output; their private source registers remain in the world-building workspace.

The existing public Hatfield MCP data and Netlify function remain in `data/hatfield` and `netlify/functions`; they are deliberately separate from the private company bible.
