const divisionSpotlight = {
  distillery: {
    title: "Hatfield Distillery & Spirits",
    copy:
      "The Bardstown distillery is Hatfield's original business: a Kentucky bourbon house founded in the 1800s, acquired by Walker Holdings in 1978, and led today by Master Distiller Carolyn Hatfield-Moore.",
    revenue: "~$115M",
    role: "Original credibility anchor",
    reach: "All 50 states, UK, EU, Japan, Australia, duty-free",
  },
  bar: {
    title: "Hatfield Bar & Grill",
    copy:
      "Sixteen company-owned bourbon-forward restaurants form Hatfield's most public hospitality layer, with franchised Bar & Grill locations expanding quickly across US and international markets.",
    revenue: "~$140M",
    role: "Public-facing restaurant channel",
    reach: "14 US company locations plus London, with franchise growth",
  },
  inns: {
    title: "Hatfield Inns",
    copy:
      "Eight company-owned boutique hotels translate bourbon hospitality into lodging, with properties in Kentucky, Nashville, London, and Edinburgh plus early franchise growth.",
    revenue: "~$95M",
    role: "Boutique hospitality lodging",
    reach: "~480 company-owned rooms plus franchise properties",
  },
  stave: {
    title: "The Stave",
    copy:
      "The Stave is Hatfield's premium members' club network: culturally warm, whiskey-and-music specific, and built around protected serious listening rooms.",
    revenue: "~$95M",
    role: "Global cultural club network",
    reach: "London, New York, Los Angeles, Nashville, Miami, Austin, Paris, Dubai",
  },
  still: {
    title: "Still House",
    copy:
      "Still House gives Hatfield a destination dining register at serious restaurant quality, with Bardstown established and Perthshire tied to the Scotland distillery.",
    revenue: "~$22M",
    role: "Prestige food and distillery hospitality",
    reach: "Bardstown, Kentucky and Perthshire, Scotland",
  },
  wines: {
    title: "Hatfield Wines",
    copy:
      "Hatfield Wines operates premium estate hospitality in Napa Valley and Chianti Classico, with Isabelle Durand overseeing the winemaking programme.",
    revenue: "~$125M",
    role: "Premium wine and estate hospitality",
    reach: "US, UK, EU, Japan, Australia, Italian domestic",
  },
  limestone: {
    title: "Limestone Springs Beverage Co.",
    copy:
      "Limestone Springs is a Kentucky beverage company established in 1952 and acquired by Hatfield in 2002, spanning tonics, mixers, sodas, sparkling water, still water, hotel channels, airlines, retail, and e-commerce.",
    revenue: "~$110M",
    role: "Premium non-alcoholic beverage engine",
    reach: "30+ countries",
  },
  scotland: {
    title: "Hatfield Scotland",
    copy:
      "The Perthshire distillery produces gin now while Hatfield's Scotch single malt matures, creating a long-term prestige spirits platform.",
    revenue: "~$18M",
    role: "Scottish spirits and hospitality play",
    reach: "Perthshire, Scotland",
  },
  licensing: {
    title: "Licensing, Provisions & Merchandise",
    copy:
      "Hatfield's licensing division connects restaurants, inns, provisions, barware, apparel, and supply requirements into a global brand footprint.",
    revenue: "~$115M",
    role: "Franchise and brand-extension engine",
    reach: "~33-42 franchised locations open or in build-out",
  },
};

const products = {
  single: {
    kicker: "94 proof · 8-year bourbon",
    title: "Hatfield Single Barrel",
    copy:
      "A barrel-numbered bourbon with eight years of age, structured oak, and the depth expected from Hatfield's core Kentucky range.",
    status: "Core range",
    role: "Premium single-barrel expression",
    channel: "Retail, bars, Hatfield properties",
  },
  cave: {
    kicker: "15-21 year · cave-aged bourbon",
    title: "Hatfield Cave Select",
    copy:
      "Ultra-limited cave-aged bourbon positioned for premium hospitality, collector gifting, and selective allocation.",
    status: "Ultra-limited",
    role: "Allocated prestige bottle",
    channel: "Hatfield properties, The Stave, limited allocation",
  },
  rye: {
    kicker: "92 proof · 5-year rye",
    title: "Hatfield Rye",
    copy:
      "The spice-forward whiskey drinker's bottle: useful in cocktails, credible neat, and part of the expanded permanent spirits range.",
    status: "Permanent range",
    role: "Cocktail and neat pour bridge",
    channel: "Retail, restaurants, cocktail programmes",
  },
  gin: {
    kicker: "43.5% ABV · Highland gin",
    title: "Hatfield Highland Gin",
    copy:
      "The current Scotland product: floral, citrus-forward, clean juniper, heather in the background, and built for Limestone Springs Premium Tonic.",
    status: "Operational",
    role: "Funds the Scotch programme",
    channel: "UK, US, EU, Hatfield venues",
  },
  malt: {
    kicker: "Barrels filling · not yet released",
    title: "Hatfield Perthshire Single Malt",
    copy:
      "Production began in 2025. The first legal release could be 2028, but the serious programme is built around patience, not a rushed three-year bottle.",
    status: "Maturing",
    role: "Long-term Scotch prestige programme",
    channel: "Future release",
  },
};

const venues = {
  bar: {
    image: "assets/bar-grill-inns.png",
    kicker: "16 company-owned locations",
    title: "Hatfield Bar & Grill",
    copy:
      "The most public-facing Hatfield venue brand: bourbon-forward, upscale casual, restaurant-scale, and the proving ground for franchise expansion.",
    revenue: "~$140M",
    signal: "Bourbon trial channel",
  },
  inns: {
    image: "assets/bar-grill-inns.png",
    kicker: "8 company-owned boutique hotels",
    title: "Hatfield Inns",
    copy:
      "Boutique lodging with bourbon hospitality at the center: lobby bars, room service, tasting cards, and regional design language.",
    revenue: "~$95M",
    signal: "Bourbon tourism and urban lodging",
  },
  stave: {
    image: "assets/stave-club-hero.png",
    kicker: "8 open clubs · ~41,000 members",
    title: "The Stave",
    copy:
      "A premium whiskey-and-music members' club network built around hospitality, curated programming, and serious listening rooms.",
    revenue: "~$95M",
    signal: "Cultural heat plus protected listening rooms",
  },
  still: {
    image: "assets/distillery-origin.png",
    kicker: "Bardstown + Perthshire",
    title: "Still House",
    copy:
      "Destination restaurants on distillery grounds, with Bardstown established and Perthshire extending the format into Scotland.",
    revenue: "~$22M",
    signal: "Fine dining register",
  },
};

const pairings = {
  mule: {
    kicker: "Ginger beer · lime · bourbon",
    title: "Kentucky Mule",
    copy:
      "Limestone Springs Ginger Beer is the bartender favourite: spicy, real-ginger, and built for bourbon rather than treated as an afterthought.",
    product: "Limestone Springs Ginger Beer",
    channel: "Bars, Hatfield properties, retail 4-packs",
    signal: "Cocktail credibility",
  },
  tonic: {
    kicker: "Premium tonic · Hatfield bourbon",
    title: "Bourbon & Tonic",
    copy:
      "The flagship tonic is deliberately cleaner and less sweet, with a mineral profile that bridges bourbon's caramel-oak notes.",
    product: "Limestone Springs Premium Tonic",
    channel: "On-trade, retail, Hatfield bars",
    signal: "Bourbon and mixer compatibility",
  },
  gin: {
    kicker: "Highland gin · premium tonic",
    title: "Highland G&T",
    copy:
      "Hatfield Highland Gin and Limestone Springs Premium Tonic make the Scotland programme immediately legible before the single malt is ready.",
    product: "Highland Gin + Premium Tonic",
    channel: "The Stave, Hatfield Scotland, premium bars",
    signal: "Cross-division serve",
  },
  zero: {
    kicker: "Sparkling water · bitter lemon · citrus",
    title: "Zero-proof highball",
    copy:
      "Limestone Springs is not dependent on alcohol. The soda, sparkling, bitter lemon, and tonic ranges stand on their own in premium hospitality.",
    product: "Bitter Lemon or Sparkling Water",
    channel: "Hotels, airlines, restaurants, DTC",
    signal: "Premium non-alcoholic growth",
  },
};

const stories = {
  scotland: {
    date: "June 12, 2025",
    title: "Hatfield Scotland enters its first full production year in Perthshire.",
    body:
      "Hatfield Scotland is operational near Aberfeldy, producing Hatfield Highland Gin while its first Scotch single malt stock matures. The project gives Hatfield a second spirits tradition and a long-term prestige play rooted in Highland water, patient cask work, and Still House Scotland hospitality.",
    link: "spirits.html",
  },
  franchise: {
    date: "June 5, 2025",
    title: "Franchise programme reaches 33-42 locations open or in build-out.",
    body:
      "Hatfield's licensing and franchise operation is scaling Bar & Grill and Inns through metro-protected territories, required training, quality audits, and mandatory Hatfield bourbon, Limestone Springs, and provisions supply.",
    link: "group.html",
  },
  limestone: {
    date: "May 28, 2025",
    title: "Limestone Springs continues its 30-country premium mixer expansion.",
    body:
      "The Frankfort operation now functions as a full beverage company: tonics, ginger beer, ginger ale, craft sodas, sparkling water, still water, cocktail mixers, airline contracts, retail, DTC, and captive Hatfield property channels.",
    link: "beverages.html",
  },
  stave: {
    date: "May 20, 2025",
    title: "The Stave Dubai opens as the network's eighth club.",
    body:
      "The DIFC club adds a carefully controlled luxury and business bridge to a network already spanning London, New York, Los Angeles, Nashville, Miami, Austin, and Paris, while retaining the protected listening-room principle.",
    link: "stave.html",
  },
  wines: {
    date: "May 9, 2025",
    title: "Hatfield Wines deepens the Napa-Tuscany estate model.",
    body:
      "Hatfield Wines now works as a premium wine and estate hospitality pillar, with Napa and Chianti Classico production, tasting rooms, restaurants, events, and private villa guesthouse layers.",
    link: "group.html",
  },
  stavePipeline: {
    date: "April 24, 2025",
    title: "The Stave confirms Chicago, Tokyo, Milan, and Toronto as priority pipeline cities.",
    body:
      "Hatfield's members' club network is evaluating Chicago for 2026, Tokyo and Milan for 2027, and Toronto for 2028, with each site required to include the network listening-room specification before member preview.",
    link: "stave.html",
  },
  products: {
    date: "April 16, 2025",
    title: "Hatfield product catalogue expands across spirits, Limestone Springs, wines, provisions, and barware.",
    body:
      "The product team has formalised a broader catalogue covering bourbon, rye, gin, maturing Scotch, Napa and Tuscan wines, mixers, sauces, bitters, glassware, apparel, tours, memberships, and venue-led experiences.",
    link: "products.html",
  },
  cocktails: {
    date: "April 8, 2025",
    title: "Hatfield publishes a hospitality serve library for bourbon, Limestone Springs, and low-ABV formats.",
    body:
      "The cocktail library gives restaurants, clubs, store customers, and home hosts a clearer serve system: classic bourbon builds, Limestone highballs, aperitivo-length drinks, and non-alcoholic premium serves.",
    link: "cocktails.html",
  },
  stillHouse: {
    date: "March 27, 2025",
    title: "Still House Scotland opens private-dining previews on the Perthshire distillery grounds.",
    body:
      "The restaurant format is being used to introduce Hatfield Scotland's gin programme while the single malt matures, pairing destination dining with the distillery's long-term spirits project.",
    link: "hospitality.html",
  },
  inns: {
    date: "March 13, 2025",
    title: "Hatfield Inns introduces member-rate alignment with The Stave network.",
    body:
      "The hospitality team is aligning select Inns inventory with Stave member and guest travel patterns, strengthening the bridge between lodging, private clubs, restaurants, and Hatfield's spirits portfolio.",
    link: "hospitality.html",
  },
};

const timelineCopy = {
  buckner: {
    title: "David Buckner",
    copy:
      "Recruited in 2012 to professionalise the management structure, Buckner sets strategy, reviews P&L, visits locations, and lets expert operators do the work they were hired to do.",
  },
  board: {
    title: "Walker oversight",
    copy:
      "Walker Holdings is the majority owner. Eleanor Vance sits on the Hatfield board for strategic oversight and capital allocation, not menu edits or day-to-day operations.",
  },
  divisions: {
    title: "Division leaders",
    copy:
      "Carolyn Hatfield-Moore, Fiona MacAllister, Marcus Boyle, Isabelle Durand, and the hospitality operators carry real autonomy inside the broader Hatfield strategy.",
  },
};

let storeProducts = [];

const catalogueProducts = [
  ["spirits", "Hatfield Original Bourbon", "Hatfield Distillery", "80 proof, 4-year Kentucky Straight Bourbon.", "$28-32", "Retail, restaurants, Hatfield venues"],
  ["spirits", "Hatfield Small Batch Bourbon", "Hatfield Distillery", "90 proof, 6-year bourbon batched from 15-20 barrels.", "$45-55", "Retail, bars, restaurant house pour"],
  ["spirits", "Hatfield Single Barrel Bourbon", "Hatfield Distillery", "94 proof, 8-year hand-selected single barrels with barrel numbers.", "$75-90", "Retail, bars, Hatfield properties"],
  ["spirits", "Hatfield Rye Whiskey", "Hatfield Distillery", "92 proof, 5-year Kentucky Straight Rye with a spice-forward profile.", "$38-45", "Retail, cocktails, on-trade"],
  ["spirits", "Hatfield Reserve", "Hatfield Distillery", "100 proof, 12-year annual limited release selected from top barrels.", "$175-200", "Allocated, premium retail, Hatfield properties"],
  ["spirits", "Hatfield Cave Select", "Hatfield Distillery", "15-21 year cave-aged bourbon from the limestone cave programme.", "$500-800", "Hatfield properties, allocation, The Stave"],
  ["spirits", "Hatfield Wheated Bourbon", "Hatfield Distillery", "90 proof, 7-year wheat-mash bourbon with a softer profile.", "$55-65", "Retail and whiskey-led bars"],
  ["spirits", "Hatfield Bottled in Bond", "Hatfield Distillery", "100 proof bonded bourbon from a single distillery and single season.", "$42-50", "Retail, whiskey education, bar programmes"],
  ["spirits", "Hatfield Kentucky Straight Malt Whiskey", "Hatfield Distillery", "Limited 88 proof American malt whiskey aged in Kentucky.", "$85-100", "Limited retail, The Stave, Still House"],
  ["spirits", "Hatfield Highland Gin", "Hatfield Scotland", "43.5% ABV Highland gin with clean juniper, citrus, and heather notes.", "£38-42", "UK, US, EU, Hatfield venues"],
  ["spirits", "Hatfield Highland Gin Cask Rested", "Hatfield Scotland", "46% ABV gin rested three months in ex-bourbon casks.", "£48-55", "Premium bars, Hatfield Scotland, limited retail"],
  ["spirits", "Hatfield Perthshire Single Malt", "Hatfield Scotland", "Highland single malt maturing in Perthshire with a long release horizon.", "Coming soon", "Future prestige release"],
  ["wines", "The Hollow Cabernet", "Hatfield Wines", "Napa Cabernet from old-vine estate fruit.", "$175-200", "Wine estate, premium retail, restaurants"],
  ["wines", "Radio Silence Red Blend", "Hatfield Wines", "Bordeaux-style Napa red blend of Cabernet, Merlot, Cabernet Franc, and Petit Verdot.", "$85-110", "Restaurants, wine estate, retail"],
  ["wines", "A Still Small Voice White", "Hatfield Wines", "Chardonnay with 12 months in French oak.", "$55-70", "Dining, tasting rooms, retail"],
  ["wines", "Starlight & Steel Sparkling", "Hatfield Wines", "Traditional-method sparkling wine: Chardonnay and Pinot Noir.", "$75-95", "Events, brunch, receptions"],
  ["wines", "Estate Rose", "Hatfield Wines", "Seasonal Grenache and Mourvedre rose made for terrace service.", "$32-38", "Seasonal retail and hospitality"],
  ["wines", "Hatfield Chianti Classico", "Hatfield Wines Tuscany", "DOCG Sangiovese-dominant Chianti Classico from the Tuscany estate.", "$45-60", "Tasting room, Italian restaurant, retail"],
  ["wines", "Hatfield Gran Selezione", "Hatfield Wines Tuscany", "Single-vineyard old-vine Sangiovese with extended oak ageing.", "$95-140", "Premium Italian wine channel"],
  ["wines", "Hatfield Toscana IGT", "Hatfield Wines Tuscany", "Sangiovese-forward Super Tuscan-style estate wine.", "$55-75", "Restaurant and retail"],
  ["limestone", "Limestone Springs Sparkling Water", "Limestone Springs", "Fine-bubble mineral water from Kentucky limestone water.", "$2.50-4", "Tableside, room service, retail"],
  ["limestone", "Limestone Springs Still Water", "Limestone Springs", "Still mineral water with clean, slightly sweet profile.", "$2-3.50", "Hatfield properties, retail"],
  ["limestone", "Limestone Springs Premium Tonic", "Limestone Springs", "Natural quinine, restrained sweetness, built for gin and bourbon highballs.", "$6-8 / 4-pack", "Bars, retail, cocktail kits"],
  ["limestone", "Limestone Springs Light Tonic", "Limestone Springs", "Lower sugar and calorie tonic with the same limestone water base.", "$6-8 / 4-pack", "Retail and premium mixers"],
  ["limestone", "Limestone Springs Elderflower Tonic", "Limestone Springs", "Floral tonic designed for gin, aperitif, and low-ABV serves.", "$6-8 / 4-pack", "UK/EU bars and retail"],
  ["limestone", "Limestone Springs Aromatic Tonic", "Limestone Springs", "Pink aromatic tonic with bitter and spice notes.", "$6-8 / 4-pack", "Gin, bourbon highballs, premium bars"],
  ["limestone", "Limestone Springs Ginger Beer", "Limestone Springs", "Real ginger root, visible heat, and the default Kentucky Mule mixer.", "$6-8 / 4-pack", "Bars, retail, Hatfield properties"],
  ["limestone", "Limestone Springs Ginger Ale", "Limestone Springs", "Traditional whiskey highball mixer with a lighter ginger profile.", "$2.50-3.50", "Retail, bars, room service"],
  ["limestone", "Limestone Springs Cola", "Limestone Springs", "Craft cola with real vanilla, kola nut, cinnamon, and no HFCS.", "$2.50-3.50", "Retail and bourbon-and-cola service"],
  ["limestone", "Limestone Springs Lemon", "Limestone Springs", "Adult lemon soda with real lemon juice and light sweetness.", "$2.50-3.50", "Retail and hospitality"],
  ["limestone", "Limestone Springs Blood Orange", "Limestone Springs", "Tart Sicilian blood orange soda with a bitter citrus edge.", "$2.50-3.50", "Retail and premium soda shelves"],
  ["limestone", "Limestone Springs Root Beer", "Limestone Springs", "Kentucky heritage root beer with sassafras, vanilla, and wintergreen.", "$2.50-3.50", "Retail, restaurants, cookouts"],
  ["limestone", "Limestone Springs Cream Soda", "Limestone Springs", "Vanilla cream soda made with real vanilla bean.", "$2.50-3.50", "Retail and casual soda service"],
  ["limestone", "Limestone Springs Bitter Lemon", "Limestone Springs", "Quinine and lemon mixer with strong European bar logic.", "$2.50-3.50", "Bars, retail, aperitif serves"],
  ["limestone", "Limestone Springs Club Soda", "Limestone Springs", "Pure carbonated limestone water for highballs and spritzes.", "$2-3.50", "Bar rail and retail"],
  ["limestone", "Limestone Springs Tonic Syrup", "Limestone Springs", "Concentrated tonic syrup for home and professional bar programmes.", "$14-18", "Home bar, cocktail kits, professional bars"],
  ["provisions", "Hatfield Original Hot Sauce", "Hatfield Provisions", "Cayenne-forward vinegar table sauce.", "$7-9", "Retail, restaurant tables, gift sets"],
  ["provisions", "Hatfield Reserve Hot Sauce", "Hatfield Provisions", "Premium hot sauce with apple cider base and Small Batch reduction.", "$12-15", "Limited retail and gift sets"],
  ["provisions", "Hatfield Bourbon BBQ Sauce", "Hatfield Provisions", "Smoky sauce with bourbon reduction for grilling and pantry use.", "$9-12", "Retail, cookouts, gift baskets"],
  ["provisions", "Hatfield Smoky Dry Rub", "Hatfield Provisions", "Smoked paprika, brown sugar, and garlic blend.", "$8-10", "Retail and grilling season"],
  ["provisions", "Hatfield Steak Sauce", "Hatfield Provisions", "Dried fruit and malt vinegar premium table sauce.", "$8-10", "Bar & Grill, retail, pantry"],
  ["provisions", "Hatfield Bourbon Mustard", "Hatfield Provisions", "Whole-grain bourbon-infused mustard.", "$7-9", "Retail and charcuterie boards"],
  ["provisions", "Hatfield Cocktail Cherries", "Hatfield Provisions", "Premium cherries soaked in Hatfield bourbon.", "$14-16", "Home bar, cocktail kits"],
  ["provisions", "Hatfield Barrel-Aged Honey", "Hatfield Provisions", "Kentucky honey aged in spent bourbon barrels.", "$12-15", "Breakfast, cheese boards, gift sets"],
  ["provisions", "Hatfield Smoked Salt", "Hatfield Provisions", "Hardwood smoked finishing salt.", "$9-11", "Kitchen, cocktails, gifting"],
  ["provisions", "Hatfield Aromatic Bitters", "Hatfield Provisions", "Aromatic bitters for Old Fashioneds, Manhattans, and bar kits.", "$12-14", "Home bar and gift bundles"],
  ["provisions", "Hatfield Orange Bitters", "Hatfield Provisions", "Citrus-forward bitters for whiskey and aperitif serves.", "$12-14", "Home bar and gift bundles"],
  ["barware", "Hatfield Heavy-Bottom Rocks Glass", "Hatfield Barware", "Weighted double rocks glass used across Hatfield bars.", "$28 / $95 set", "Store, Bar & Grill, The Stave"],
  ["barware", "Hatfield Highball Glass", "Hatfield Barware", "Tall glass with weighted base for highballs and Limestone pairings.", "$75 set", "Store and bar service"],
  ["barware", "Hatfield Tasting Glass", "Hatfield Barware", "Tulip-style nosing glass for tastings and distillery tours.", "$22 / $75 set", "Distillery, store, The Stave"],
  ["barware", "Hatfield Decanter", "Hatfield Barware", "Lead-free crystal decanter with clean lines.", "$125", "Store and premium gifting"],
  ["barware", "Hatfield Cocktail Kit", "Hatfield Barware", "Spoon, jigger, strainer, muddler, and ice pick in a leather roll.", "$120", "Holiday and home bar gifting"],
  ["barware", "Hatfield Bar Spoon", "Hatfield Barware", "Long-handled bar spoon with weighted tip.", "$18", "Store and cocktail kits"],
  ["barware", "Hatfield Jigger", "Hatfield Barware", "Weighted 1oz/2oz jigger.", "$22", "Store and cocktail kits"],
  ["barware", "Hatfield Ice Pick", "Hatfield Barware", "Tool for hand-chipping ice, used at Still House.", "$35", "Store and premium barware"],
  ["barware", "Hatfield Logo Tee", "Hatfield Merchandise", "Heavyweight cotton tee with minimal branding.", "$35", "Venue retail and DTC"],
  ["barware", "Hatfield Work Shirt", "Hatfield Merchandise", "Chambray work shirt with embroidered chest logo.", "$75", "Venue retail and DTC"],
  ["barware", "Hatfield Apron", "Hatfield Merchandise", "Waxed canvas apron based on Bar & Grill staff kit.", "$65", "Store, food, gifting"],
  ["barware", "Hatfield Cap", "Hatfield Merchandise", "Structured cap with embroidered logo.", "$30-45", "Venue retail and DTC"],
  ["experiences", "Hatfield Cave Experience", "Hatfield Distillery", "Three-hour distillery and cave tasting for 4-6 guests.", "$250", "Reservation-only visitor experience"],
  ["experiences", "Still House Tasting Menu", "Still House", "Seven-course menu by Marcus Boyle with optional pairing.", "$165 + pairing", "Bardstown and Perthshire dining"],
  ["experiences", "The Stave Membership London", "The Stave", "Annual private club membership in Soho.", "£3,500 / year", "Members' club"],
  ["experiences", "The Stave Membership NYC", "The Stave", "Annual private club membership in Tribeca.", "$5,000 / year", "Members' club"],
].map(([category, name, division, detail, price, channel]) => ({
  category,
  name,
  division,
  detail,
  price,
  channel,
}));

storeProducts = catalogueProducts.map((product) => {
  const numericPrice = extractStorePrice(product.price);
  return {
    id: slugifyProductName(product.name),
    name: product.name,
    category: storeCategoryFor(product),
    department: storeDepartmentFor(product),
    price: numericPrice,
    displayPrice: product.price,
    image: storeImageFor(product),
    badge: storeBadgeFor(product),
    description: product.detail,
    channel: product.channel,
  };
});

const cocktailIngredientLinks = [
  { aliases: ["single barrel bourbon"], label: "Hatfield Single Barrel Bourbon", href: "store.html?search=Single%20Barrel", channel: "Shop" },
  { aliases: ["small batch bourbon"], label: "Hatfield Small Batch Bourbon", href: "store.html?search=Small%20Batch", channel: "Shop" },
  { aliases: ["bottled in bond bourbon"], label: "Hatfield Bottled in Bond", href: "products.html?search=Bottled%20in%20Bond", channel: "Products" },
  { aliases: ["reserve bourbon"], label: "Hatfield Reserve", href: "products.html?search=Reserve", channel: "Products" },
  { aliases: ["wheated bourbon", "wheated"], label: "Hatfield Wheated Bourbon", href: "products.html?search=Wheated", channel: "Products" },
  { aliases: ["rye whiskey"], label: "Hatfield Rye Whiskey", href: "products.html?search=Rye%20Whiskey", channel: "Products" },
  { aliases: ["bourbon", "original"], label: "Hatfield Original Bourbon", href: "products.html?search=Original%20Bourbon", channel: "Products" },
  { aliases: ["cask rested gin"], label: "Hatfield Highland Gin Cask Rested", href: "products.html?search=Cask%20Rested%20Gin", channel: "Products" },
  { aliases: ["highland gin"], label: "Hatfield Highland Gin", href: "store.html?search=Highland%20Gin", channel: "Shop" },
  { aliases: ["starlight & steel sparkling"], label: "Starlight & Steel Sparkling", href: "products.html?search=Starlight%20Steel", channel: "Products" },
  { aliases: ["estate rose", "estate rosé"], label: "Estate Rose", href: "products.html?search=Estate%20Rose", channel: "Products" },
  { aliases: ["red blend"], label: "Radio Silence Red Blend", href: "products.html?search=Radio%20Silence", channel: "Products" },
  { aliases: ["chardonnay"], label: "A Still Small Voice White", href: "products.html?search=Still%20Small%20Voice", channel: "Products" },
  { aliases: ["chianti"], label: "Hatfield Chianti Classico", href: "products.html?search=Chianti", channel: "Products" },
  { aliases: ["premium tonic"], label: "Limestone Springs Premium Tonic", href: "store.html?search=Premium%20Tonic", channel: "Shop" },
  { aliases: ["elderflower tonic"], label: "Limestone Springs Elderflower Tonic", href: "products.html?search=Elderflower%20Tonic", channel: "Products" },
  { aliases: ["aromatic tonic"], label: "Limestone Springs Aromatic Tonic", href: "products.html?search=Aromatic%20Tonic", channel: "Products" },
  { aliases: ["ginger beer"], label: "Limestone Springs Ginger Beer", href: "store.html?search=Ginger%20Beer", channel: "Shop" },
  { aliases: ["ginger ale"], label: "Limestone Springs Ginger Ale", href: "products.html?search=Ginger%20Ale", channel: "Products" },
  { aliases: ["blood orange"], label: "Limestone Springs Blood Orange", href: "products.html?search=Blood%20Orange", channel: "Products" },
  { aliases: ["root beer"], label: "Limestone Springs Root Beer", href: "products.html?search=Root%20Beer", channel: "Products" },
  { aliases: ["cream soda"], label: "Limestone Springs Cream Soda", href: "products.html?search=Cream%20Soda", channel: "Products" },
  { aliases: ["bitter lemon"], label: "Limestone Springs Bitter Lemon", href: "products.html?search=Bitter%20Lemon", channel: "Products" },
  { aliases: ["sparkling water"], label: "Limestone Springs Sparkling Water", href: "store.html?search=Sparkling%20Water", channel: "Shop" },
  { aliases: ["still water"], label: "Limestone Springs Still Water", href: "products.html?search=Still%20Water", channel: "Products" },
  { aliases: ["club soda"], label: "Limestone Springs Club Soda", href: "products.html?search=Club%20Soda", channel: "Products" },
  { aliases: ["cola"], label: "Limestone Springs Cola", href: "products.html?search=Cola", channel: "Products" },
  { aliases: ["lemon soda", "lemon"], label: "Limestone Springs Lemon", href: "products.html?search=Lemon", channel: "Products" },
  { aliases: ["tonic syrup"], label: "Limestone Springs Tonic Syrup", href: "products.html?search=Tonic%20Syrup", channel: "Products" },
  { aliases: ["barrel-aged honey"], label: "Hatfield Barrel-Aged Honey", href: "products.html?search=Barrel-Aged%20Honey", channel: "Products" },
  { aliases: ["smoked salt"], label: "Hatfield Smoked Salt", href: "products.html?search=Smoked%20Salt", channel: "Products" },
  { aliases: ["aromatic bitters", "bitters"], label: "Hatfield Aromatic Bitters", href: "products.html?search=Aromatic%20Bitters", channel: "Products" },
  { aliases: ["orange bitters"], label: "Hatfield Orange Bitters", href: "products.html?search=Orange%20Bitters", channel: "Products" },
  { aliases: ["cherry"], label: "Hatfield Cocktail Cherries", href: "products.html?search=Cocktail%20Cherries", channel: "Products" },
  { aliases: ["tonic"], label: "Limestone Springs Premium Tonic", href: "store.html?search=Premium%20Tonic", channel: "Shop" },
];

const cocktails = [
  {
    name: "The Stump",
    ingredients: ["2 oz Bourbon", "Root Beer", "Fresh lime zest"],
    method: "Pour bourbon over ice. Top with Root Beer. Express lime zest over surface and drop in.",
  },
  {
    name: "Kentucky Mule",
    ingredients: ["2 oz Bourbon", "4 oz Ginger Beer", "3/4 oz lime juice", "2 dashes Aromatic Bitters"],
    method: "Pour bourbon and lime over ice. Top with ginger beer and bitters. Stir once.",
  },
  {
    name: "The Hollow",
    ingredients: ["2 oz Single Barrel Bourbon", "1 bar spoon Barrel-Aged Honey", "3 dashes Aromatic Bitters", "1 Cherry"],
    method: "Stir honey and bitters. Add ice and bourbon. Stir 20 rotations. Garnish with orange peel and cherry.",
  },
  {
    name: "Cave Highball",
    ingredients: ["2 oz Small Batch Bourbon", "4 oz Premium Tonic", "1 dash Orange Bitters"],
    method: "Fill glass with ice. Add bourbon, then tonic, then bitters. Stir gently.",
  },
  {
    name: "Bardstown Sour",
    ingredients: ["2 oz Bottled in Bond Bourbon", "3/4 oz lemon juice", "3/4 oz honey syrup", "1 egg white", "2 dashes Aromatic Bitters"],
    method: "Dry shake all but bitters. Add ice and shake hard. Double strain. Dash bitters on foam.",
  },
  {
    name: "Rye Manhattan",
    ingredients: ["2 oz Rye Whiskey", "1 oz sweet vermouth", "3 dashes Aromatic Bitters", "1 Cherry"],
    method: "Stir ingredients with ice for 30 rotations. Strain into chilled coupe. Add cherry.",
  },
  {
    name: "Wheated & Cola",
    ingredients: ["2 oz Wheated Bourbon", "Cola", "Lime wedge"],
    method: "Pour bourbon over ice. Top with cola. Squeeze and drop lime.",
  },
  {
    name: "The Reserve Sipper",
    ingredients: ["2 oz Reserve Bourbon", "1 drop Still Water (optional)"],
    method: "Pour neat. Add water drop if desired. Serve in rocks glass.",
  },
  {
    name: "Smoky Paloma",
    ingredients: ["2 oz Rye Whiskey", "1 oz grapefruit juice", "1/2 oz lime juice", "Lemon soda", "Smoked Salt rim"],
    method: "Rim glass with salt. Shake rye and juices. Strain into glass over ice. Top with lemon soda.",
  },
  {
    name: "Rickhouse Julep",
    ingredients: ["2 1/2 oz Small Batch Bourbon", "1 bar spoon honey", "8 mint leaves", "Crushed ice"],
    method: "Muddle mint and honey. Fill with crushed ice. Add bourbon. Stir until frosted. Garnish with mint.",
  },
  {
    name: "Bourbon Ginger Smash",
    ingredients: ["2 oz Original", "3 ginger slices", "3/4 oz lemon juice", "1/2 oz simple syrup", "Ginger Ale"],
    method: "Muddle ginger. Add bourbon, lemon, and syrup. Shake hard. Double strain over ice. Top with ginger ale.",
  },
  {
    name: "Rye Sazerac",
    ingredients: ["2 oz Rye Whiskey", "1 sugar cube", "3 dashes Aromatic Bitters", "Absinthe rinse", "Lemon peel"],
    method: "Rinse glass with absinthe. Muddle sugar, bitters, and water. Add rye and ice. Stir and strain neat. Express lemon peel and discard.",
  },
  {
    name: "Wheated Cherry Sour",
    ingredients: ["2 oz Wheated", "1 oz cherry juice", "3/4 oz lemon juice", "1 egg white", "2 dashes Orange Bitters"],
    method: "Dry shake all but bitters. Add ice and shake hard. Double strain. Add bitters and cherry.",
  },
  {
    name: "BiB Hot Toddy",
    ingredients: ["2 oz Bottled in Bond Bourbon", "1 tbsp honey", "1/2 oz lemon juice", "4 oz hot water", "Cinnamon stick"],
    method: "Combine honey, lemon, and bourbon in mug. Top with hot water. Stir with cinnamon stick.",
  },
  {
    name: "Blood Orange Boulevardier",
    ingredients: ["1 1/2 oz Single Barrel Bourbon", "1 oz Campari", "1 oz sweet vermouth", "1/2 oz Blood Orange"],
    method: "Stir bourbon, Campari, and vermouth. Strain over large ice cube. Top with blood orange soda.",
  },
  {
    name: "Perthshire Negroni",
    ingredients: ["1 oz Cask Rested Gin", "1 oz Campari", "1 oz sweet vermouth", "1 dash Orange Bitters"],
    method: "Stir all ingredients with ice. Strain into rocks glass over large cube.",
  },
  {
    name: "Highland & Tonic",
    ingredients: ["2 oz Highland Gin", "4 oz Elderflower Tonic"],
    method: "Build in glass over ice. Do not stir.",
  },
  {
    name: "Highland Gimlet",
    ingredients: ["2 oz Highland Gin", "3/4 oz lime juice", "1/2 oz simple syrup"],
    method: "Shake hard with ice. Double strain into chilled coupe.",
  },
  {
    name: "Aromatic Highball",
    ingredients: ["2 oz Highland Gin", "4 oz Aromatic Tonic", "1 dash Aromatic Bitters"],
    method: "Pour gin over ice. Top with tonic and bitters. Stir once.",
  },
  {
    name: "Heather Collins",
    ingredients: ["2 oz Highland Gin", "1 oz lemon juice", "1/2 oz simple syrup", "Club Soda"],
    method: "Shake gin, lemon, and syrup. Strain over ice. Top with club soda.",
  },
  {
    name: "Cask Rested Old Fashioned",
    ingredients: ["2 oz Cask Rested Gin", "1 bar spoon honey", "2 dashes Orange Bitters", "1 dash Aromatic Bitters"],
    method: "Stir honey and bitters. Add large cube and gin. Stir 20 rotations. Express orange peel.",
  },
  {
    name: "Bitter Lemon & Gin",
    ingredients: ["2 oz Highland Gin", "4 oz Bitter Lemon"],
    method: "Build in glass over ice. Stir once.",
  },
  {
    name: "The Last Light",
    ingredients: ["1 1/2 oz Highland Gin", "3/4 oz elderflower liqueur", "3/4 oz lemon juice", "Sparkling Water"],
    method: "Shake gin, liqueur, and lemon. Strain into flute or coupe. Top with sparkling water.",
  },
  {
    name: "Rose Spritz",
    ingredients: ["3 oz Estate Rose", "2 oz Sparkling Water", "1 oz Blood Orange"],
    method: "Build over ice in wine glass. Stir gently.",
  },
  {
    name: "Starlight Royale",
    ingredients: ["5 oz Starlight & Steel Sparkling", "1 bar spoon honey", "2 dashes Orange Bitters"],
    method: "Add honey and bitters to flute. Top slowly with sparkling wine.",
  },
  {
    name: "Still Small Spritz",
    ingredients: ["3 oz Chardonnay", "2 oz Elderflower Tonic", "cucumber", "mint"],
    method: "Build over ice. Add cucumber, top with tonic. Garnish with mint.",
  },
  {
    name: "Radio Silence Sangria",
    ingredients: ["1 bottle Red Blend", "2 oz honey", "4 oz Blood Orange", "Seasonal fruit", "Cinnamon"],
    method: "Steep wine, honey, and fruit 4+ hours. Serve over ice topped with blood orange soda.",
  },
  {
    name: "Tuscan Spritz",
    ingredients: ["3 oz Chianti", "2 oz Ginger Ale", "Rosemary sprig"],
    method: "Build over ice in wine glass. Top with ginger ale. Add slapped rosemary.",
  },
  {
    name: "Sparkling Lemon Drop",
    ingredients: ["3 oz Starlight & Steel Sparkling", "1/2 oz lemon juice", "1/4 oz simple syrup", "1 oz Lemon"],
    method: "Shake lemon and syrup. Strain into flute. Top with sparkling wine and lemon soda.",
  },
  {
    name: "Rose Paloma",
    ingredients: ["3 oz Estate Rose", "1 oz grapefruit juice", "1 oz Club Soda", "Smoked Salt rim"],
    method: "Rim glass with salt. Build over ice. Top with club soda.",
  },
  {
    name: "Chardonnay Ginger Fizz",
    ingredients: ["3 oz Chardonnay", "2 oz Ginger Beer", "Lemon zest"],
    method: "Build over ice. Top with ginger beer. Add lemon zest.",
  },
  {
    name: "Wake Up Call",
    ingredients: ["6 oz Cola", "1 cooled espresso shot", "Lemon zest"],
    method: "Pour espresso over ice. Top slowly with cola. Express lemon zest.",
  },
  {
    name: "Cherry Float",
    ingredients: ["8 oz Cream Soda", "1 scoop vanilla gelato", "1 squeezed cherry"],
    method: "Place gelato in glass. Squeeze cherry over top. Top slowly with cream soda.",
  },
  {
    name: "Golden Child",
    ingredients: ["5 oz Ginger Beer", "2 oz blood orange juice", "Lemon zest"],
    method: "Pour juice over ice. Top with ginger beer. Express lemon zest.",
  },
  {
    name: "Limestone Spritz",
    ingredients: ["4 oz Blood Orange", "2 oz Aromatic Tonic", "Rosemary"],
    method: "Build over ice. Add slapped rosemary.",
  },
  {
    name: "The Stillwater",
    ingredients: ["6 oz Elderflower Tonic", "1/2 oz Tonic Syrup", "Cucumber", "Mint"],
    method: "Muddle cucumber and mint. Add ice and syrup. Top with tonic.",
  },
  {
    name: "Porch Swing",
    ingredients: ["6 oz Lemon", "1 bar spoon honey", "4 mint leaves", "1/2 oz lemon juice"],
    method: "Dissolve honey in lemon juice. Add ice and mint. Top with lemon soda.",
  },
  {
    name: "Root Beer Float",
    ingredients: ["8 oz Root Beer", "2 scoops vanilla ice cream"],
    method: "Place ice cream in glass. Top slowly with root beer.",
  },
  {
    name: "Bitter Sunset",
    ingredients: ["5 oz Bitter Lemon", "1 oz grapefruit juice", "1/4 oz Tonic Syrup", "Smoked Salt rim"],
    method: "Rim glass with salt. Combine juice and syrup. Top with bitter lemon.",
  },
  {
    name: "Ginger Highball",
    ingredients: ["6 oz Ginger Ale", "1/2 oz lime juice", "Mint", "1 dash Bitters"],
    method: "Build over ice. Add lime and ginger ale. Float bitters and add mint.",
  },
  {
    name: "Sparkling Honey Lemon",
    ingredients: ["6 oz Sparkling Water", "1 tsp honey", "1/2 oz lemon juice", "pinch Smoked Salt"],
    method: "Dissolve honey in lemon juice and salt. Add ice. Top with sparkling water.",
  },
  {
    name: "Cola Lime Cooler",
    ingredients: ["4 oz Cola", "2 oz Club Soda", "1 oz lime juice"],
    method: "Add lime and cola to ice. Top with club soda.",
  },
  {
    name: "Cream & Orange",
    ingredients: ["4 oz Cream Soda", "4 oz Blood Orange"],
    method: "Build over crushed ice. Layer cream soda over blood orange using a spoon.",
  },
  {
    name: "The Architect",
    ingredients: ["2 oz Vodka", "1 oz blackberry puree", "3/4 oz lemon juice", "2 oz Ginger Beer"],
    method: "Shake vodka, puree, and lemon. Strain over crushed ice. Top with ginger beer.",
  },
  {
    name: "Botanical Garden",
    ingredients: ["2 oz Gin", "3/4 oz grapefruit juice", "1/2 oz simple syrup", "3 basil leaves", "Splash of Tonic"],
    method: "Muddle basil. Add gin, grapefruit, and syrup. Shake hard. Strain over fresh ice. Top with tonic.",
  },
  {
    name: "The Journeyman",
    ingredients: ["2 oz Aged Rum", "1/2 oz cold brew coffee", "1/4 oz maple syrup", "2 dashes Orange Bitters"],
    method: "Stir all ingredients with ice for 20 rotations. Serve over a large cube with an orange peel.",
  },
  {
    name: "Bluegrass Botanical",
    ingredients: ["2 oz Vodka", "3/4 oz elderflower liqueur", "1/2 oz lime juice", "cucumber slice", "black pepper"],
    method: "Muddle cucumber. Shake with vodka, liqueur, and lime. Strain into a coupe. Garnish with cracked black pepper.",
  },
  {
    name: "Appalachian Smoke",
    ingredients: ["2 oz Blanco Tequila", "1/2 oz Mezcal", "3/4 oz lime juice", "1/2 oz smoked honey syrup"],
    method: "Shake all ingredients with ice. Strain into a rocks glass over fresh ice. Garnish with a lime wheel.",
  },
  {
    name: "The Plumb Line",
    ingredients: ["2 oz Bourbon", "1 tbsp plum jam", "3/4 oz lemon juice", "2 dashes Aromatic Bitters"],
    method: "Shake bourbon, jam, lemon, and bitters vigorously. Double strain into a chilled coupe.",
  },
  {
    name: "Sunset Over Frankfort",
    ingredients: ["1 oz Bourbon", "1 oz Aperol", "3/4 oz lemon juice", "2 oz grapefruit soda"],
    method: "Shake bourbon, Aperol, and lemon. Strain into a Collins glass over ice. Top with grapefruit soda.",
  },
  {
    name: "Spiced Pear Smash",
    ingredients: ["2 oz Vodka", "1 oz pear nectar", "1/2 oz lemon juice", "pinch of cinnamon"],
    method: "Shake all ingredients with ice. Strain into a rocks glass. Garnish with a cinnamon stick.",
  },
].map(decorateCocktail);

function normalizeIngredient(value) {
  return value
    .toLowerCase()
    .replaceAll("rosé", "rose")
    .replace(/^\d+(\s+\d\/\d|\/\d)?\s*/g, "")
    .replace(/^(oz|tbsp|tsp|bar spoon|bottle|scoop|scoops|dashes?|dash|drop|pinch)\s+/g, "")
    .replace(/[()]/g, "")
    .trim();
}

function ingredientProductLink(ingredient) {
  const normalized = normalizeIngredient(ingredient);
  if (
    /juice|zest|wedge|peel|slice|mint|cucumber|rosemary|cinnamon|seasonal fruit|gelato|ice cream|espresso|simple syrup|honey syrup|smoked honey|maple syrup|pear nectar|blackberry|plum jam|sweet vermouth|campari|aperol|vodka|tequila|mezcal|rum|absinthe|egg white|hot water|sugar cube|basil|pepper/.test(normalized)
  ) {
    return null;
  }
  return cocktailIngredientLinks.find((link) =>
    link.aliases.some((alias) => normalized.includes(alias.toLowerCase().replaceAll("rosé", "rose"))),
  );
}

function decorateCocktail(recipe) {
  const text = `${recipe.name} ${recipe.ingredients.join(" ")}`.toLowerCase();
  const tags = [];
  if (/bourbon|rye|wheated|bottled in bond|original|reserve/.test(text)) tags.push("whiskey");
  if (/gin|negroni/.test(text)) tags.push("gin");
  if (/rose|rosé|chardonnay|chianti|red blend|starlight/.test(text)) tags.push("wine");
  if (/root beer|ginger beer|ginger ale|tonic|cola|cream soda|blood orange|bitter lemon|club soda|sparkling water|lemon soda|tonic syrup/.test(text)) tags.push("limestone");
  if (!/bourbon|rye|wheated|gin|vodka|tequila|mezcal|rum|campari|aperol|vermouth|liqueur|wine|chianti|chardonnay|rose|rosé|blend|sparkling/.test(text)) {
    tags.push("zero-proof");
  }
  if (/build|pour|top slowly|top with/i.test(recipe.method)) tags.push("built");
  if (/shake|dry shake/i.test(recipe.method)) tags.push("shaken");
  if (/stir/i.test(recipe.method)) tags.push("stirred");
  if (/1 bottle|4\+ hours|sangria|float|porch|cooler|spritz/i.test(`${recipe.name} ${recipe.method}`)) tags.push("hosting");

  const uniqueTags = [...new Set(tags.length ? tags : ["house"])];
  const linkedIngredients = recipe.ingredients.map((ingredient) => ({
    name: ingredient,
    product: ingredientProductLink(ingredient) || null,
  }));
  const productCount = linkedIngredients.filter((ingredient) => ingredient.product).length;

  return {
    ...recipe,
    category: uniqueTags.join(" "),
    tags: uniqueTags,
    linkedIngredients,
    productCount,
    service: uniqueTags.includes("zero-proof")
      ? "No-proof"
      : uniqueTags.includes("wine")
        ? "Wine & spritz"
        : uniqueTags.includes("gin")
          ? "Gin"
          : uniqueTags.includes("whiskey")
            ? "Whiskey"
            : "House",
  };
}

function setText(id, value) {
  const node = document.querySelector(id);
  if (node) node.textContent = value;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function slugifyProductName(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractStorePrice(value) {
  const match = String(value).match(/[\d,]+(?:\.\d+)?/);
  return match ? Number(match[0].replace(/,/g, "")) : 0;
}

function storeDepartmentFor(product) {
  const departments = {
    spirits: "Spirits",
    wines: "Wines",
    limestone: "Limestone Springs",
    provisions: "Provisions",
    barware: product.division.includes("Merchandise") ? "Merchandise" : "Barware",
    experiences: "Experiences",
  };
  return departments[product.category] || product.division;
}

function storeCategoryFor(product) {
  const categories = [product.category];
  if (product.category === "limestone") categories.push("beverage");
  if (["barware", "experiences"].includes(product.category)) categories.push("gifts");
  if (product.channel.toLowerCase().includes("gift")) categories.push("gifts");
  return categories.join(" ");
}

function storeBadgeFor(product) {
  if (product.category === "spirits") return product.detail.match(/\b\d+(?:-\d+)?-year\b/i)?.[0] || "Bottle";
  if (product.category === "limestone") return product.price.includes("4-pack") ? "4-pack" : "Beverage";
  if (product.category === "wines") return product.division.replace("Hatfield Wines ", "");
  if (product.category === "experiences") return "Reservation";
  if (product.division.includes("Merchandise")) return "Merch";
  return product.channel.split(",")[0];
}

function storeImageFor(product) {
  const name = product.name.toLowerCase();
  if (name.includes("single barrel")) return "assets/product-single-barrel.png";
  if (name.includes("small batch") || name.includes("original bourbon") || name.includes("wheated") || name.includes("bottled in bond") || name.includes("rye whiskey") || name.includes("straight malt")) return "assets/product-small-batch.png";
  if (name.includes("reserve") || name.includes("cave select")) return "assets/product-cave-select.png";
  if (name.includes("gin") || name.includes("single malt")) return "assets/product-highland-gin.png";
  if (name.includes("tonic")) return "assets/product-premium-tonic.png";
  if (name.includes("ginger beer") || name.includes("ginger ale")) return "assets/product-ginger-beer.png";
  if (name.includes("sparkling water") || name.includes("still water") || name.includes("club soda")) return "assets/product-sparkling-water.png";
  if (name.includes("bbq")) return "assets/product-bbq-sauce.png";
  if (name.includes("hot sauce")) return "assets/product-hot-sauce.png";
  if (name.includes("glass") || name.includes("decanter")) return "assets/product-rocks-glass.png";
  if (name.includes("kit") || name.includes("spoon") || name.includes("jigger") || name.includes("ice pick")) return "assets/product-bar-kit.png";
  if (product.category === "wines") return "assets/hatfield-wines-estate.png";
  if (product.category === "experiences") return "assets/stave-club-hero.png";
  if (product.category === "limestone") return "assets/product-gift-set.png";
  return "assets/hatfield-product-system.png";
}

function formatStorePrice(product) {
  return product.displayPrice || formatCurrency(product.price);
}

function initDivisionSpotlight() {
  const cards = document.querySelectorAll(".division-card");
  const filters = document.querySelectorAll(".filter");
  if (!cards.length) return;

  function setSpotlight(key) {
    const item = divisionSpotlight[key];
    if (!item) return;
    setText("#spotlight-title", item.title);
    setText("#spotlight-copy", item.copy);
    setText("#spotlight-revenue", item.revenue);
    setText("#spotlight-role", item.role);
    setText("#spotlight-reach", item.reach);
    cards.forEach((card) => card.classList.toggle("is-selected", card.dataset.feature === key));
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selected = filter.dataset.filter;
      filters.forEach((item) => item.classList.toggle("is-active", item === filter));
      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        card.classList.toggle("is-hidden", selected !== "all" && !categories.includes(selected));
      });
    });
  });

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.addEventListener("click", () => setSpotlight(card.dataset.feature));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setSpotlight(card.dataset.feature);
      }
    });
  });

  setSpotlight("distillery");
}

function initProductExplorer() {
  const choices = document.querySelectorAll(".product-choice");
  if (!choices.length) return;

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const product = products[choice.dataset.product];
      if (!product) return;
      choices.forEach((item) => item.classList.toggle("is-active", item === choice));
      setText("#product-kicker", product.kicker);
      setText("#product-title", product.title);
      setText("#product-copy", product.copy);
      setText("#product-status", product.status);
      setText("#product-role", product.role);
      setText("#product-channel", product.channel);
    });
  });
}

function initVenueExplorer() {
  const tabs = document.querySelectorAll(".venue-tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const venue = venues[tab.dataset.venue];
      if (!venue) return;
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      const image = document.querySelector("#venue-image");
      if (image) image.src = venue.image;
      setText("#venue-kicker", venue.kicker);
      setText("#venue-title", venue.title);
      setText("#venue-copy", venue.copy);
      setText("#venue-revenue", venue.revenue);
      setText("#venue-signal", venue.signal);
    });
  });
}

function initCityGrid() {
  const cities = document.querySelectorAll(".city-grid button");
  const note = document.querySelector(".city-note");
  if (!cities.length || !note) return;

  cities.forEach((city) => {
    city.addEventListener("click", () => {
      cities.forEach((item) => item.classList.toggle("is-active", item === city));
      note.textContent = city.dataset.members
        ? `${city.dataset.city}: ${city.dataset.members}.`
        : `${city.dataset.city} is part of The Stave's open eight-club network, with local membership culture and a consistent listening-room format.`;
    });
  });
}

function initStavePage() {
  const form = document.querySelector(".stave-form");
  if (!form) return;

  const modes = document.querySelectorAll(".stave-mode");
  const note = document.querySelector("#stave-form-note");
  const confirmation = document.querySelector(".stave-confirmation");
  const room = document.querySelector("#stave-room");
  let activeMode = "membership";

  const modeCopy = {
    membership: "Membership inquiry selected. The committee route, city, and sponsor context matter most.",
    guest: "Guest request selected. This creates a front-desk preview for a hosted visit.",
    listening: "Listening-room request selected. Party size is capped by room availability and session rules.",
    private: "Private-event request selected. Use the note field for timing, host, and room requirements.",
  };

  modes.forEach((mode) => {
    mode.addEventListener("click", () => {
      activeMode = mode.dataset.staveMode;
      modes.forEach((item) => item.classList.toggle("is-active", item === mode));
      if (note) note.textContent = modeCopy[activeMode];
      if (room && activeMode === "listening") room.value = "Listening room";
      if (room && activeMode === "private") room.value = "Private dining";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.querySelector("#stave-city")?.value || "London";
    const date = document.querySelector("#stave-date")?.value || "date pending";
    const time = document.querySelector("#stave-time")?.value || "time pending";
    const party = document.querySelector("#stave-party")?.value || "2";
    const route = document.querySelector("#stave-route")?.value || "General inquiry";
    const roomChoice = room?.value || "Main dining";
    const reference = `STV-${Math.floor(100000 + Math.random() * 900000)}`;
    const label = activeMode.replace("-", " ");
    confirmation.textContent = `${reference}: ${label} preview for ${city}, ${date} at ${time}, ${party} guest${party === "1" ? "" : "s"}, ${roomChoice.toLowerCase()}, via ${route.toLowerCase()}. No external booking has been placed.`;
  });
}

function initPairingExplorer() {
  const choices = document.querySelectorAll(".pairing-choice");
  if (!choices.length) return;

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const pairing = pairings[choice.dataset.pairing];
      if (!pairing) return;
      choices.forEach((item) => item.classList.toggle("is-active", item === choice));
      setText("#pairing-kicker", pairing.kicker);
      setText("#pairing-title", pairing.title);
      setText("#pairing-copy", pairing.copy);
      setText("#pairing-product", pairing.product);
      setText("#pairing-channel", pairing.channel);
      setText("#pairing-signal", pairing.signal);
    });
  });
}

function initNews() {
  const filters = document.querySelectorAll(".news-filter");
  const cards = document.querySelectorAll(".news-card");
  if (!cards.length) return;

  function setStory(key) {
    const story = stories[key];
    if (!story) return;
    setText("#story-date", story.date);
    setText("#story-title", story.title);
    setText("#story-body", story.body);
    const link = document.querySelector("#story-link");
    if (link) link.href = story.link;
    cards.forEach((card) => card.classList.toggle("is-active", card.dataset.story === key));
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selected = filter.dataset.news;
      filters.forEach((item) => item.classList.toggle("is-active", item === filter));
      cards.forEach((card) => {
        const categories = card.dataset.newsCategory.split(" ");
        card.classList.toggle("is-hidden", selected !== "all" && !categories.includes(selected));
      });
    });
  });

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.addEventListener("click", () => setStory(card.dataset.story));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setStory(card.dataset.story);
      }
    });
  });

  setStory("scotland");
}

function initTimeline() {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const detail = timelineCopy[item.dataset.timeline];
      if (!detail) return;
      items.forEach((button) => button.classList.toggle("is-active", button === item));
      setText("#timeline-title", detail.title);
      setText("#timeline-copy", detail.copy);
    });
  });
}

function initStore() {
  const grid = document.querySelector("#store-grid");
  if (!grid) return;

  const filters = document.querySelectorAll(".store-filter");
  const search = document.querySelector("#store-search");
  const sort = document.querySelector("#store-sort");
  const resultCount = document.querySelector("#store-result-count");
  const activeFilter = document.querySelector("#store-active-filter");
  const drawer = document.querySelector(".cart-drawer");
  const cartItems = document.querySelector(".cart-items");
  const cartEmpty = document.querySelector(".cart-empty");
  const cartCount = document.querySelector(".cart-count");
  const promoInput = document.querySelector("#promo-code");
  const fulfilmentChoices = document.querySelectorAll(".fulfilment-choice");
  const note = document.querySelector(".checkout-note");
  let currentFilter = "all";
  let cart = [];
  let promoApplied = false;
  let fulfilment = "ship";
  const params = new URLSearchParams(window.location.search);
  const initialSearch = params.get("search");
  const initialFilter = params.get("filter");
  if (initialSearch && search) search.value = initialSearch;
  if (initialFilter) currentFilter = initialFilter;

  function filteredProducts() {
    const query = (search?.value || "").trim().toLowerCase();
    let list = storeProducts.filter((product) => {
      const categoryMatch = currentFilter === "all" || product.category.split(" ").includes(currentFilter);
      const searchMatch = [product.name, product.department, product.badge, product.description, product.channel, product.displayPrice]
        .join(" ")
        .toLowerCase()
        .includes(query);
      return categoryMatch && searchMatch;
    });

    const selectedSort = sort?.value || "featured";
    if (selectedSort === "price-low") list = list.sort((a, b) => a.price - b.price);
    if (selectedSort === "price-high") list = list.sort((a, b) => b.price - a.price);
    if (selectedSort === "name") list = list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }

  function renderProducts() {
    const productsToRender = filteredProducts();
    grid.innerHTML = productsToRender
      .map(
        (product) => `
          <article class="store-product ${product.category.split(" ").includes("limestone") ? "is-limestone-product" : ""}">
            <img src="${product.image}" alt="" />
            <div>
              <span>${product.department} · ${product.badge}</span>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <footer>
                <strong>${formatStorePrice(product)}</strong>
                <button type="button" data-add-product="${product.id}">Add</button>
              </footer>
            </div>
          </article>
        `,
      )
      .join("");
    if (resultCount) resultCount.textContent = `${productsToRender.length} product${productsToRender.length === 1 ? "" : "s"}`;
    if (activeFilter) {
      const label = document.querySelector(`.store-filter[data-store-filter="${currentFilter}"]`)?.textContent || "All products";
      activeFilter.textContent = label;
    }
  }

  function cartSubtotal() {
    return cart.reduce((sum, item) => {
      const product = storeProducts.find((entry) => entry.id === item.id);
      return product ? sum + product.price * item.quantity : sum;
    }, 0);
  }

  function renderCart() {
    const subtotal = cartSubtotal();
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const shipping = cart.length === 0 || fulfilment === "pickup" ? 0 : subtotal >= 125 ? 0 : 12;
    const total = Math.max(subtotal - discount + shipping, 0);
    const itemTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCount) cartCount.textContent = String(itemTotal);
    if (cartEmpty) cartEmpty.hidden = cart.length > 0;
    if (cartItems) {
      cartItems.innerHTML = cart
        .map((item) => {
          const product = storeProducts.find((entry) => entry.id === item.id);
          if (!product) return "";
          return `
            <article class="cart-item">
              <img src="${product.image}" alt="" />
              <div>
                <strong>${product.name}</strong>
                <span>${formatStorePrice(product)} each</span>
                <div class="quantity-stepper">
                  <button type="button" data-cart-minus="${product.id}">−</button>
                  <output>${item.quantity}</output>
                  <button type="button" data-cart-plus="${product.id}">+</button>
                </div>
              </div>
              <button class="cart-remove" type="button" data-cart-remove="${product.id}">Remove</button>
            </article>
          `;
        })
        .join("");
    }

    setText("#cart-subtotal", formatCurrency(subtotal));
    setText("#cart-discount", `-${formatCurrency(discount)}`);
    setText("#cart-shipping", fulfilment === "pickup" ? "Pick up" : formatCurrency(shipping));
    setText("#cart-total", formatCurrency(total));
  }

  function addToCart(id) {
    const existing = cart.find((item) => item.id === id);
    if (existing) existing.quantity += 1;
    else cart.push({ id, quantity: 1 });
    renderCart();
    openCart();
  }

  function updateQuantity(id, delta) {
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== id);
    renderCart();
  }

  function openCart() {
    drawer?.classList.add("is-open");
    drawer?.setAttribute("aria-hidden", "false");
  }

  function closeCart() {
    drawer?.classList.remove("is-open");
    drawer?.setAttribute("aria-hidden", "true");
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentFilter = filter.dataset.storeFilter;
      filters.forEach((item) => item.classList.toggle("is-active", item === filter));
      renderProducts();
    });
  });

  search?.addEventListener("input", renderProducts);
  sort?.addEventListener("change", renderProducts);

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-product]");
    if (button) addToCart(button.dataset.addProduct);
  });

  cartItems?.addEventListener("click", (event) => {
    const plus = event.target.closest("[data-cart-plus]");
    const minus = event.target.closest("[data-cart-minus]");
    const remove = event.target.closest("[data-cart-remove]");
    if (plus) updateQuantity(plus.dataset.cartPlus, 1);
    if (minus) updateQuantity(minus.dataset.cartMinus, -1);
    if (remove) {
      cart = cart.filter((item) => item.id !== remove.dataset.cartRemove);
      renderCart();
    }
  });

  document.querySelectorAll(".cart-open").forEach((button) => button.addEventListener("click", openCart));
  document.querySelector(".cart-close")?.addEventListener("click", closeCart);
  drawer?.addEventListener("click", (event) => {
    if (event.target === drawer) closeCart();
  });

  document.querySelector("#apply-promo")?.addEventListener("click", () => {
    promoApplied = (promoInput?.value || "").trim().toUpperCase() === "HATFIELD10";
    if (note) note.textContent = promoApplied ? "HATFIELD10 applied to this order preview." : "Try HATFIELD10 for the promo preview.";
    renderCart();
  });

  fulfilmentChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      fulfilment = choice.dataset.fulfilment;
      fulfilmentChoices.forEach((item) => item.classList.toggle("is-active", item === choice));
      renderCart();
    });
  });

  filters.forEach((filter) => {
    filter.classList.toggle("is-active", filter.dataset.storeFilter === currentFilter);
  });

  document.querySelector(".checkout-button")?.addEventListener("click", () => {
    if (!cart.length) {
      if (note) note.textContent = "Add at least one product to review an order.";
      return;
    }
    const reference = `HF-${Math.floor(100000 + Math.random() * 900000)}`;
    if (note) note.textContent = `Order preview ${reference} created. Checkout is not connected to payment, address, or fulfilment systems.`;
  });

  renderProducts();
  renderCart();
}

function initCatalogue() {
  const grid = document.querySelector("#catalogue-grid");
  if (!grid) return;

  const filters = document.querySelectorAll(".catalogue-filter");
  const search = document.querySelector("#catalogue-search");
  const count = document.querySelector("#catalogue-result-count");
  let currentFilter = "all";
  const params = new URLSearchParams(window.location.search);
  const initialSearch = params.get("search");
  const initialFilter = params.get("filter");
  if (initialSearch && search) search.value = initialSearch;
  if (initialFilter) currentFilter = initialFilter;

  function renderCatalogue() {
    const query = (search?.value || "").trim().toLowerCase();
    const visible = catalogueProducts.filter((product) => {
      const categoryMatch = currentFilter === "all" || product.category === currentFilter;
      const searchMatch = [product.name, product.division, product.detail, product.price, product.channel]
        .join(" ")
        .toLowerCase()
        .includes(query);
      return categoryMatch && searchMatch;
    });

    grid.innerHTML = visible
      .map(
        (product) => `
          <article class="catalogue-card" data-category="${product.category}">
            <span>${product.division}</span>
            <h3>${product.name}</h3>
            <p>${product.detail}</p>
            <dl>
              <div><dt>Price</dt><dd>${product.price}</dd></div>
              <div><dt>Channel</dt><dd>${product.channel}</dd></div>
            </dl>
          </article>
        `,
      )
      .join("");

    if (count) count.textContent = `${visible.length} product${visible.length === 1 ? "" : "s"}`;
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentFilter = filter.dataset.catalogueFilter;
      filters.forEach((item) => item.classList.toggle("is-active", item === filter));
      renderCatalogue();
    });
  });

  search?.addEventListener("input", renderCatalogue);
  filters.forEach((filter) => {
    filter.classList.toggle("is-active", filter.dataset.catalogueFilter === currentFilter);
  });
  renderCatalogue();
}

function initCocktails() {
  const grid = document.querySelector("#cocktail-grid");
  if (!grid) return;

  const filters = document.querySelectorAll(".cocktail-filter");
  const search = document.querySelector("#cocktail-search");
  const count = document.querySelector("#cocktail-result-count");
  let currentFilter = "all";
  const params = new URLSearchParams(window.location.search);
  const initialSearch = params.get("search");
  const initialFilter = params.get("filter");
  if (initialSearch && search) search.value = initialSearch;
  if (initialFilter) currentFilter = initialFilter;

  function renderIngredient(ingredient) {
    const name = escapeHTML(ingredient.name);
    if (!ingredient.product) return `<li><span>${name}</span></li>`;
    return `
      <li>
        <a href="${ingredient.product.href}">
          <span>${name}</span>
          <small>${ingredient.product.channel}</small>
        </a>
      </li>
    `;
  }

  function renderCocktails() {
    const query = (search?.value || "").trim().toLowerCase();
    const visible = cocktails.filter((cocktail) => {
      const categoryMatch = currentFilter === "all" || cocktail.tags.includes(currentFilter);
      const searchMatch = [cocktail.name, cocktail.service, cocktail.method, cocktail.ingredients.join(" "), cocktail.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query);
      return categoryMatch && searchMatch;
    });

    grid.innerHTML = visible
      .map(
        (cocktail) => `
          <article class="cocktail-card recipe-card">
            <div class="recipe-card-head">
              <span>${escapeHTML(cocktail.service)}</span>
              <strong>${cocktail.productCount} linked product${cocktail.productCount === 1 ? "" : "s"}</strong>
            </div>
            <h3>${escapeHTML(cocktail.name)}</h3>
            <ol class="ingredient-list">
              ${cocktail.linkedIngredients.map(renderIngredient).join("")}
            </ol>
            <dl>
              <div><dt>Method</dt><dd>${escapeHTML(cocktail.method)}</dd></div>
            </dl>
            <footer class="recipe-tags">
              ${cocktail.tags.map((tag) => `<span>${escapeHTML(tag.replace("-", " "))}</span>`).join("")}
            </footer>
          </article>
        `,
      )
      .join("");

    if (!visible.length) {
      grid.innerHTML = `
        <article class="cocktail-card recipe-card">
          <span>No matches</span>
          <h3>No recipes found.</h3>
          <p>Try a product name like Ginger Beer, Bourbon, Tonic, or Bitters.</p>
        </article>
      `;
    }
    if (count) count.textContent = `${visible.length} recipe${visible.length === 1 ? "" : "s"}`;
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentFilter = filter.dataset.cocktailFilter;
      filters.forEach((item) => item.classList.toggle("is-active", item === filter));
      renderCocktails();
    });
  });

  search?.addEventListener("input", renderCocktails);
  filters.forEach((filter) => {
    filter.classList.toggle("is-active", filter.dataset.cocktailFilter === currentFilter);
  });
  renderCocktails();
}

initDivisionSpotlight();
initProductExplorer();
initVenueExplorer();
initCityGrid();
initPairingExplorer();
initNews();
initTimeline();
initStore();
initCatalogue();
initCocktails();
initStavePage();
