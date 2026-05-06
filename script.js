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
    image: "assets/the-stave-listening-room.png",
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
    link: "hospitality.html",
  },
  wines: {
    date: "May 9, 2025",
    title: "Hatfield Wines deepens the Napa-Tuscany estate model.",
    body:
      "Hatfield Wines now works as a premium wine and estate hospitality pillar, with Napa and Chianti Classico production, tasting rooms, restaurants, events, and private villa guesthouse layers.",
    link: "group.html",
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

const storeProducts = [
  {
    id: "single-barrel",
    name: "Hatfield Single Barrel",
    category: "spirits",
    department: "Spirits",
    price: 74,
    image: "assets/product-single-barrel.png",
    badge: "8-year bourbon",
    description: "Barrel-numbered Kentucky bourbon with the serious house profile.",
  },
  {
    id: "small-batch",
    name: "Hatfield Small Batch",
    category: "spirits",
    department: "Spirits",
    price: 48,
    image: "assets/product-small-batch.png",
    badge: "6-year bourbon",
    description: "The better house pour: accessible, warm, and built for neat pours or highballs.",
  },
  {
    id: "cave-select",
    name: "Hatfield Cave Select",
    category: "spirits gifts",
    department: "Spirits",
    price: 185,
    image: "assets/product-cave-select.png",
    badge: "Allocated",
    description: "Ultra-limited cave-aged bourbon for Stave shelves and collector gifting.",
  },
  {
    id: "highland-gin",
    name: "Hatfield Highland Gin",
    category: "spirits",
    department: "Spirits",
    price: 52,
    image: "assets/product-highland-gin.png",
    badge: "Scotland",
    description: "Floral, citrus-forward Highland gin designed for Limestone Springs tonic.",
  },
  {
    id: "premium-tonic",
    name: "Limestone Springs Premium Tonic",
    category: "beverage",
    department: "Limestone",
    price: 8,
    image: "assets/product-premium-tonic.png",
    badge: "4-pack",
    description: "Clean quinine, citrus lift, and Kentucky limestone minerality.",
  },
  {
    id: "ginger-beer",
    name: "Limestone Springs Ginger Beer",
    category: "beverage",
    department: "Limestone",
    price: 8,
    image: "assets/product-ginger-beer.png",
    badge: "4-pack",
    description: "Real ginger heat. The default Kentucky Mule mixer.",
  },
  {
    id: "sparkling-water",
    name: "Limestone Springs Sparkling Water",
    category: "beverage",
    department: "Limestone",
    price: 18,
    image: "assets/product-sparkling-water.png",
    badge: "12 bottles",
    description: "Fine-bubble mineral water served across Hatfield properties.",
  },
  {
    id: "bbq-sauce",
    name: "Hatfield Bourbon BBQ Sauce",
    category: "provisions",
    department: "Provisions",
    price: 14,
    image: "assets/product-bbq-sauce.png",
    badge: "Pantry",
    description: "Bourbon-laced sauce from the Bar & Grill provisions range.",
  },
  {
    id: "hot-sauce",
    name: "Hatfield Reserve Hot Sauce",
    category: "provisions",
    department: "Provisions",
    price: 12,
    image: "assets/product-hot-sauce.png",
    badge: "Small batch",
    description: "Premium table heat for gift baskets, home kitchens, and restaurant shelves.",
  },
  {
    id: "rocks-glass",
    name: "Heavy-Bottom Rocks Glass",
    category: "barware",
    department: "Barware",
    price: 24,
    image: "assets/product-rocks-glass.png",
    badge: "Signature",
    description: "The low, weighty Hatfield glass used for neat pours and rocks serves.",
  },
  {
    id: "bar-kit",
    name: "Hatfield Bar Tool Kit",
    category: "barware gifts",
    department: "Barware",
    price: 68,
    image: "assets/product-bar-kit.png",
    badge: "Tools",
    description: "Bar spoon, jigger, ice pick, and mixing glass for a polished home bar.",
  },
  {
    id: "bourbon-mixer-gift",
    name: "Bourbon & Limestone Gift Set",
    category: "gifts beverage spirits",
    department: "Gift sets",
    price: 96,
    image: "assets/product-gift-set.png",
    badge: "Gift set",
    description: "Hatfield bourbon paired with Limestone Springs tonic and ginger beer.",
  },
];

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

const cocktails = [
  {
    category: "bourbon classic",
    name: "Rickhouse Julep",
    build: "Hatfield Reserve, mint, Demerara syrup, shaved ice",
    method: "Muddle mint gently with syrup, add bourbon, pack with shaved ice, and crown with fresh mint.",
    note: "A Kentucky house serve: cold, aromatic, and built around bourbon rather than sugar.",
  },
  {
    category: "bourbon classic",
    name: "The Phoenix",
    build: "Hatfield Reserve, Angostura, orange bitters, cherry, orange peel",
    method: "Build in a rocks glass over a large cube and stir until polished.",
    note: "Old Fashioned structure with enough restraint to let the whiskey stay in charge.",
  },
  {
    category: "bourbon classic",
    name: "Backroad Manhattan",
    build: "Hatfield Reserve, sweet vermouth, Angostura, black walnut bitters",
    method: "Stir cold, strain up, and finish with a cherry.",
    note: "A deeper, rounder Manhattan for late dinners and listening-room service.",
  },
  {
    category: "bourbon hosting",
    name: "Derby Week",
    build: "Bourbon, mint, lemon, barrel-aged honey syrup, sparkling rose float",
    method: "Shake the bourbon, lemon, mint, and honey syrup; strain over ice and top lightly.",
    note: "Bright, festive, and built for brunch tables rather than race-day cliche.",
  },
  {
    category: "bourbon classic",
    name: "Paper Plane",
    build: "Bourbon, Aperol, Amaro Nonino, lemon",
    method: "Shake equal parts hard and strain into a coupe.",
    note: "The modern bourbon classic: bitter, sour, balanced, and hard to improve.",
  },
  {
    category: "limestone bourbon",
    name: "Kentucky Mule",
    build: "Hatfield Small Batch, Limestone Springs Ginger Beer, lime",
    method: "Build tall over ice, squeeze lime, top with ginger beer, and stir once.",
    note: "The ginger beer does the work: real heat, clean finish, no syrupy drag.",
  },
  {
    category: "limestone bourbon",
    name: "Bourbon & Tonic",
    build: "Hatfield Single Barrel, Limestone Springs Premium Tonic, orange peel",
    method: "Build over clear ice in a highball glass and express orange oil over the top.",
    note: "A cleaner highball where quinine and limestone minerality bridge the bourbon's oak.",
  },
  {
    category: "limestone classic",
    name: "Highland G&T",
    build: "Hatfield Highland Gin, Limestone Springs Premium Tonic, lemon peel",
    method: "Build over large ice with a gentle lift from the spoon.",
    note: "The current Scotland serve while the single malt matures.",
  },
  {
    category: "limestone low-abv",
    name: "Zero-Proof Highball",
    build: "Limestone Springs Bitter Lemon, Sparkling Water, citrus",
    method: "Build tall over ice and finish with lemon or grapefruit peel.",
    note: "A proper non-alcoholic serve: bitter, bright, and not pretending to be a cocktail.",
  },
  {
    category: "classic bourbon",
    name: "Old Fashioned",
    build: "Bourbon or rye, Demerara, Angostura, orange",
    method: "Build in the glass over a large cube. Stir until integrated.",
    note: "No theatre required. The drink already works.",
  },
  {
    category: "classic bourbon",
    name: "Manhattan",
    build: "Hatfield Rye, sweet vermouth, Angostura, cherry",
    method: "Stir cold and strain up.",
    note: "Rye gives the structure; vermouth gives the room tone.",
  },
  {
    category: "classic bourbon",
    name: "Boulevardier",
    build: "Bourbon, Campari, sweet vermouth",
    method: "Stir equal parts and serve over ice or up.",
    note: "The winter cousin of the Negroni and a natural Hatfield bar call.",
  },
  {
    category: "classic bourbon",
    name: "Whiskey Sour",
    build: "Bourbon, lemon, simple syrup, egg white",
    method: "Dry shake, shake with ice, strain, and finish with bitters.",
    note: "A proper sour: texture matters as much as balance.",
  },
  {
    category: "low-abv limestone",
    name: "Americano",
    build: "Campari, sweet vermouth, Limestone Springs Club Soda, orange",
    method: "Build tall over ice and top with soda.",
    note: "First drink of the night: bitter, long, and easy to stay with.",
  },
  {
    category: "low-abv limestone",
    name: "Sbagliato",
    build: "Campari, sweet vermouth, sparkling wine",
    method: "Build over ice and lift gently.",
    note: "Low-ABV without feeling like a compromise.",
  },
  {
    category: "low-abv limestone",
    name: "Hugo Spritz",
    build: "Elderflower, sparkling wine, Limestone Springs Club Soda, mint, lime",
    method: "Build in a wine glass with plenty of ice and fresh mint.",
    note: "Alpine summer energy, useful for terraces and afternoon service.",
  },
  {
    category: "hosting classic",
    name: "Batched Negroni",
    build: "Gin, Campari, sweet vermouth",
    method: "Batch equal parts ahead, chill, and serve over ice with fresh orange peel.",
    note: "Party serve with no bottleneck at the bar.",
  },
  {
    category: "hosting limestone",
    name: "Pitcher Paloma",
    build: "Tequila blanco, grapefruit, lime, salt, Limestone Springs Sparkling Water",
    method: "Batch citrus and tequila, pour over ice, and lengthen with sparkling water.",
    note: "A clean cookout serve that stays bright across a long afternoon.",
  },
  {
    category: "hosting low-abv",
    name: "Pitcher Americano",
    build: "Campari, sweet vermouth, Limestone Springs Club Soda, orange",
    method: "Batch the bitter base, pour tall, and top each glass with soda.",
    note: "Aperitif service that scales without losing its edge.",
  },
];

function setText(id, value) {
  const node = document.querySelector(id);
  if (node) node.textContent = value;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
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
      note.textContent = `${city.dataset.city} is part of The Stave's open eight-club network, with local membership culture and a consistent listening-room format.`;
    });
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

  function filteredProducts() {
    const query = (search?.value || "").trim().toLowerCase();
    let list = storeProducts.filter((product) => {
      const categoryMatch = currentFilter === "all" || product.category.split(" ").includes(currentFilter);
      const searchMatch = [product.name, product.department, product.badge, product.description]
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
          <article class="store-product ${product.category.split(" ").includes("beverage") ? "is-limestone-product" : ""}">
            <img src="${product.image}" alt="" />
            <div>
              <span>${product.department} · ${product.badge}</span>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <footer>
                <strong>${formatCurrency(product.price)}</strong>
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
                <span>${formatCurrency(product.price)} each</span>
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
  renderCatalogue();
}

function initCocktails() {
  const grid = document.querySelector("#cocktail-grid");
  if (!grid) return;

  const filters = document.querySelectorAll(".cocktail-filter");
  let currentFilter = "all";

  function renderCocktails() {
    const visible = cocktails.filter((cocktail) => {
      return currentFilter === "all" || cocktail.category.split(" ").includes(currentFilter);
    });

    grid.innerHTML = visible
      .map(
        (cocktail) => `
          <article class="cocktail-card">
            <span>${cocktail.category.replaceAll("-", " ")}</span>
            <h3>${cocktail.name}</h3>
            <p>${cocktail.note}</p>
            <dl>
              <div><dt>Build</dt><dd>${cocktail.build}</dd></div>
              <div><dt>Method</dt><dd>${cocktail.method}</dd></div>
            </dl>
          </article>
        `,
      )
      .join("");
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentFilter = filter.dataset.cocktailFilter;
      filters.forEach((item) => item.classList.toggle("is-active", item === filter));
      renderCocktails();
    });
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
