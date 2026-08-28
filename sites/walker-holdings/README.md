# Walker Holdings website

Standalone static website for the fictional Walker Holdings group.

## Preview

From this directory, run:

```sh
ruby -run -e httpd . -p 4173
```

Then open `http://localhost:4173`.

## Structure

- `index.html` — group overview
- `portfolio.html` — four operating companies
- `stewardship.html` — ownership philosophy
- `governance.html` — governance model and public leadership
- `contact.html` — fictional public contact layer
- `privacy.html` and `accessibility.html` — supporting statements
- `styles.css` and `script.js` — shared presentation and behaviour
- `assets/` — commissioned-style fictional architecture and governance imagery

The site uses a restrained image system: its own architecture and governance images plus selected imagery from the operating-company sites. It contains no external fonts, framework dependencies or disclosed private financial/ownership figures.

Contact addresses use the IANA-reserved `.example` domain because the company is fictional. Replace them only if a dedicated story-world domain is intentionally registered.

The portfolio links to the sibling standalone company websites. Those relative links work from the shared project tree; replace them with public domains when the individual sites are deployed separately.

## Deployment

`netlify.toml` is configured to publish this directory directly. The site should first be reviewed locally, then connected to a dedicated GitHub repository or subdirectory deployment.
