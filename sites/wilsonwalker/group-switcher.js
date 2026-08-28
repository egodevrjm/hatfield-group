(() => {
  const script = document.currentScript;
  const currentSite = script?.dataset.currentSite;
  const footer = document.querySelector("footer");

  if (!currentSite || !footer || document.querySelector(".walker-network")) return;

  const sites = [
    { id: "walker", label: "Walker Holdings", url: "https://walker-holdings.vercel.app/" },
    { id: "wilsonwalker", label: "WilsonWalker", url: "https://wilsonwalker.vercel.app/" },
    { id: "albury", label: "Albury Acoustics", url: "https://albury-acoustics.vercel.app/" },
    { id: "hatfield", label: "Hatfield Group", url: "https://hatfield-group.vercel.app/" },
    { id: "limestone", label: "Limestone Springs", url: "https://limestone-springs.vercel.app/" },
    { id: "phoenix", label: "Phoenix Media", url: "https://phoenix-media-chi.vercel.app/" },
  ];

  const palettes = {
    walker: ["#071527", "#f7f5ef", "#d24a4e"],
    wilsonwalker: ["#11100e", "#f4f1ea", "#9b1637"],
    phoenix: ["#050505", "#f7f7f4", "#ff2a1f"],
    hatfield: ["#09261f", "#f3eee3", "#d98b65"],
    limestone: ["#123fb6", "#ffffff", "#f5cd22"],
    albury: ["#0b1013", "#f3f2ee", "#ff5a00"],
  };

  const [background, foreground, accent] = palettes[currentSite];
  const network = document.createElement("nav");
  network.className = "walker-network";
  network.setAttribute("aria-label", "Walker Holdings websites");
  network.style.setProperty("--walker-network-bg", background);
  network.style.setProperty("--walker-network-fg", foreground);
  network.style.setProperty("--walker-network-accent", accent);

  const label = document.createElement("p");
  label.className = "walker-network__label";
  label.textContent = currentSite === "walker" ? "Our companies" : "Walker Holdings network";
  network.append(label);

  const links = document.createElement("div");
  links.className = "walker-network__links";
  sites.forEach((site) => {
    const link = document.createElement("a");
    link.href = site.url;
    link.textContent = site.label;
    if (site.id === currentSite) link.setAttribute("aria-current", "page");
    links.append(link);
  });
  network.append(links);
  footer.before(network);

  if (document.querySelector("#walker-network-styles")) return;
  const styles = document.createElement("style");
  styles.id = "walker-network-styles";
  styles.textContent = `
    .walker-network {
      display: grid;
      grid-template-columns: minmax(10rem, .65fr) minmax(0, 2.35fr);
      gap: clamp(1.5rem, 4vw, 5rem);
      align-items: start;
      padding: clamp(1.75rem, 3.6vw, 3.25rem) clamp(1.25rem, 5vw, 5.5rem);
      color: var(--walker-network-fg);
      background: var(--walker-network-bg);
      border-top: 1px solid color-mix(in srgb, var(--walker-network-fg) 24%, transparent);
      border-bottom: 1px solid color-mix(in srgb, var(--walker-network-fg) 18%, transparent);
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .walker-network__label {
      margin: 0;
      color: var(--walker-network-accent);
      font-size: .68rem;
      font-weight: 700;
      letter-spacing: .17em;
      line-height: 1.4;
      text-transform: uppercase;
    }
    .walker-network__links {
      display: flex;
      flex-wrap: wrap;
      gap: .75rem clamp(1.25rem, 2.5vw, 2.75rem);
    }
    .walker-network__links a {
      position: relative;
      color: inherit;
      font-size: clamp(.86rem, 1.1vw, 1.02rem);
      font-weight: 500;
      letter-spacing: .015em;
      line-height: 1.35;
      text-decoration: none;
    }
    .walker-network__links a::after {
      position: absolute;
      right: 0;
      bottom: -.38rem;
      left: 0;
      height: 1px;
      content: "";
      background: var(--walker-network-accent);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 180ms ease;
    }
    .walker-network__links a:hover::after,
    .walker-network__links a:focus-visible::after,
    .walker-network__links a[aria-current="page"]::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    .walker-network__links a[aria-current="page"] {
      color: var(--walker-network-accent);
    }
    .walker-network__links a:focus-visible {
      outline: 2px solid var(--walker-network-accent);
      outline-offset: .35rem;
    }
    @media (max-width: 760px) {
      .walker-network { grid-template-columns: 1fr; gap: 1.25rem; padding-block: 2rem; }
      .walker-network__links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
      .walker-network__links a { padding-bottom: .35rem; border-bottom: 1px solid color-mix(in srgb, var(--walker-network-fg) 16%, transparent); }
      .walker-network__links a::after { bottom: -.05rem; }
    }
    @media (max-width: 390px) {
      .walker-network__links { grid-template-columns: 1fr; }
    }
    @media print { .walker-network { display: none; } }
  `;
  document.head.append(styles);
})();
