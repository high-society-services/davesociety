/* =====================================================================
 *  DAVE SOCIETY — SHOP CONFIGURATION
 *  ---------------------------------------------------------------------
 *  This is the ONLY file you need to edit to change the shop's content:
 *  name, logo, About and FAQ text, products (categories, tags, options,
 *  prices and stock), filter labels, the Request Services form wording,
 *  social links, and the WhatsApp / Telegram details used for ordering.
 *
 *  Look for "TODO" and "[Placeholder]" — those are values that still
 *  need real content. After editing, save the file and refresh the page.
 *
 *  Prices are written in pounds (e.g. 245 or 49.5). The shop shows and
 *  totals everything in GBP (£).
 *
 *  Stock: each price/stock pair is a number of pieces you hold. A stock
 *  of 0 marks the item as an ENQUIRY ("out of stock"). Customers can
 *  still add it and send it to you; stock and quantity are confirmed in
 *  chat. Quantities above the listed stock are not blocked either.
 * ===================================================================== */

export const shopConfig = {
  /* ------------------------------------------------------------------
   * SHOP IDENTITY
   * ------------------------------------------------------------------ */
  shop: {
    name: 'Dave Society',
    tagline: 'Elite Personal Shopping Service',

    // Logo images (paths are relative to index.html).
    // Set either to '' to fall back to a styled text wordmark.
    logo: {
      header: 'logo-wordmark.webp', // compact logo in the top bar
      hero: 'logo-hero.webp', // large logo with tagline on the home section
    },
  },

  /* ------------------------------------------------------------------
   * HOME SECTION
   * ------------------------------------------------------------------ */
  home: {
    browseButton: 'Browse the collection',
    collectionHeading: 'The Collection',
  },

  /* ------------------------------------------------------------------
   * ABOUT
   * TODO: replace the placeholder About text with your own.
   * ------------------------------------------------------------------ */
  about: {
    heading: 'About',
    // PLACEHOLDER TEXT — replace each paragraph with your own wording.
    paragraphs: [
      'Welcome to Dave Society, an elite UK private concierge and personal shopping service.',
      'We take pride in providing only premium, authentic goods, and operating with absolute discretion and confidentiality.',
      'With dedicated 24/7 assistance, we provide personalised solutions that work for you.',
      'Every request is handled with care, securely and without delay.',
    ],
  },

  /* ------------------------------------------------------------------
   * FAQ
   * TODO: the exact FAQ questions and answers still need to be supplied.
   * Add, remove or reword entries freely. Each entry opens and closes.
   * ------------------------------------------------------------------ */
  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept almost all payment methods, and work flexibly with our customers to suit their needs. Please contact us and let us know how you would like to pay.',
      },
      {
        question: 'What delivery services do you offer?',
        answer:
          'You choose which delivery provider or service you would like to use, and we will facilitate the process for you. Please contact us if you would like to discuss delivery options.',
      },
      {
        question: 'How do I place an order?',
        answer:
          'If you are a new customer or are having trouble ordering, please contact us and we will assist you.',
      },
    ],
  },

  /* ------------------------------------------------------------------
   * SOCIAL LINKS
   * Paste the full web address of each profile (starting https://).
   * Any entry left with url: '' is hidden. Delete platforms you don't use.
   * TODO: none of these have been supplied yet.
   * ------------------------------------------------------------------ */
  social: [
    { name: 'Instagram', url: '' }, // e.g. https://www.instagram.com/yourname
    { name: 'Facebook', url: '' }, // e.g. https://www.facebook.com/yourpage
    { name: 'TikTok', url: '' }, // e.g. https://www.tiktok.com/@yourname
    { name: 'Pinterest', url: '' }, // e.g. https://www.pinterest.com/yourname
    { name: 'X', url: '' }, // e.g. https://x.com/yourname
  ],

  /* ------------------------------------------------------------------
   * CURRENCY + LOCALE
   * ------------------------------------------------------------------ */
  currency: {
    code: 'GBP',
    locale: 'en-GB',
  },

  /* ------------------------------------------------------------------
   * STOCK WORDING
   * Products show "In stock" when any option has stock. Otherwise they
   * show the out-of-stock badge and can only be sent as an enquiry.
   * ------------------------------------------------------------------ */
  stock: {
    inStock: 'In stock',
    outOfStock: 'Out of stock · enquire',
    enquiryButton: 'Add as enquiry',
    outOfStockNote:
      'This piece is out of stock. Adding it makes it an enquiry: we’ll confirm availability in chat.',
    overStockNote:
      'Your quantity is more than our listed stock. We’ll confirm the stock and quantity in chat.',
    cartEnquiry: 'Enquiry — stock and quantity confirmed in chat',
    notListed: 'This option combination isn’t available. Please choose another.',
  },

  /* ------------------------------------------------------------------
   * SEARCH + FILTER WORDING AND PRICE BANDS
   * Price bands: 'min' is inclusive and 'max' is exclusive, in pounds.
   * Use max: null for no upper limit. A product matches a band when its
   * lowest option price falls inside it.
   * ------------------------------------------------------------------ */
  filters: {
    searchLabel: 'Search products',
    searchPlaceholder: 'Name, description or tag',
    availabilityLabel: 'Availability',
    availabilityAll: 'All products',
    availabilityIn: 'In stock',
    availabilityOut: 'Out of stock (enquiry)',
    priceLabel: 'Price',
    priceAny: 'Any price',
    categoryLabel: 'Category',
    categoryAny: 'All categories',
    tagsLabel: 'Tags',
    tagsHint: 'Show pieces with any selected tag',
    clearLabel: 'Clear filters',
    noResults: 'No pieces match these filters. Try clearing them, or send us a request below.',
    priceBands: [
      { label: 'Under £100', min: 0, max: 100 },
      { label: '£100 to under £200', min: 100, max: 200 },
      { label: '£200 and over', min: 200, max: null },
    ],
  },

  /* ------------------------------------------------------------------
   * CHECKOUT CONTACTS (WhatsApp / Telegram)
   * TODO: these have NOT been supplied yet. Until they are filled in,
   * the WhatsApp / Telegram buttons stay disabled with an explanation.
   *
   * whatsappNumber: full international number, digits only, no "+",
   *                 no spaces, no leading 0. UK example format: 447700900000
   * telegramUsername: your public Telegram username without the "@".
   *                 (Telegram → Settings → Username.) Example format: highsociety
   * ------------------------------------------------------------------ */
  contact: {
    whatsappNumber: '447441476761',
    telegramUsername: 'roman_highsociety',
  },

  /* ------------------------------------------------------------------
   * CHECKOUT WORDING
   * ------------------------------------------------------------------ */
  checkout: {
    cartNote: 'Your order will be processed once it`s been placed and we`ve confirmed it with you.',
    detailsIntro:
      'We only need your name and postcode for now.',
    messagingIntro:
      'Choose how to send your order. This opens WhatsApp or Telegram (app or website) with your order message already written. Your order is not placed until you press Send in that app.',
    afterOpen:
      'Your order message should now be open in {app}. Nothing has been sent yet — check the message and press Send in {app} to place your order. We’ll reply there to confirm.',
    thanks: 'Thanks for sending your order. We’ll reply in {app} to confirm delivery and payment.',

    // The order message the customer sends. {shop} is replaced with the shop name.
    messageGreeting: 'I’d like to place an order.',
    messageFooter: 'Payment and delivery will be confirmed in chat. Thank you',
    // Labels used inside the order message.
    messageLabels: {
      name: 'Name',
      postcode: 'Postcode',
      order: 'ORDER',
      subtotal: 'Subtotal',
      enquiry: 'ENQUIRY — stock and quantity to be confirmed in chat',
    },
  },

  /* ------------------------------------------------------------------
   * REQUEST SERVICES (sourcing requests)
   * Collects only a name, UK postcode and a text description, then hands
   * the customer to WhatsApp or Telegram with a prefilled message.
   * ------------------------------------------------------------------ */
  request: {
    heading: 'Request Services',
    intro:
      'Tell us what you need, and we’ll get back to you as soon as possible.',
    nameLabel: 'Your Name',
    postcodeLabel: 'UK postcode',
    postcodeHint: 'For example, SW1A 1AA',
    descriptionLabel: 'What is your request?',
    descriptionHint: 'Describe the what you need.',
    submit: 'Continue',
    sendIntro:
      'Choose how to send your request. This opens WhatsApp or Telegram with your message already written. Nothing is sent until you press Send in that app.',
    afterOpen:
      'Your request should now be open in {app}. Nothing has been sent yet — press Send in {app} to send it. We’ll reply there.',
    // {shop} is replaced with the shop name.
    messageGreeting: 'Hello {shop}, I’d like to request a service.',
    messageFooter: 'Thank you.',
    messageLabels: {
      name: 'Name',
      postcode: 'Postcode',
      request: 'Request',
    },
  },

/* ------------------------------------------------------------------
   * PRODUCT CATALOGUE
   * ⚠️ SAMPLE PRODUCTS — TEMPORARY. Replace these with your real items.
   *
   * Each product:
   *   id           unique short text, no spaces (keeps carts working)
   *   name         product name
   *   description  shown in the product pop-up and used by search
   *   image        path to an image file (or '' to show the fallback)
   *   imageAlt     short description of the image for screen readers
   *   categories   list of categories, e.g. ['Bags']. Can be more than one.
   *   tags         list of tags, e.g. ['leather', 'gift']. Can be more than one.
   *
   *   For a product WITHOUT options:
   *     price        price in pounds
   *     stock        number of pieces held (0 = enquiry)
   *     options      [] (or leave it out)
   *
   *   For a product WITH options (size, colour, …):
   *     options      list of choices, e.g. [{ name: 'Size', values: ['S', 'M'] }]
   *     variants     one entry per option combination you sell:
   *                    { options: { Size: 'M' }, price: 189, stock: 4 }
   *                  Each variant needs a price and stock. Price and stock
   *                  are set separately for each option. A combination with
   *                  no variant can't be ordered.
   * ------------------------------------------------------------------ */
  products: [
    {
      id: 'c',
      name: 'C',
      description:
        'Pure fishscale double wash, Columbian import. Enquire for variety and larger sizes, cost depends on variety.',
      image: 'Polish_20261119_223424260.jpg',
      imageAlt: 'c image',
      categories: ['Unprocessed'],
      tags: ['unprocessed', 'white', 'powder', 'stimulant', 'party'],
      options: [{ name: 'Size', values: ['0.5g', '1g', '1.5g', '3.5g', '7g', '14g', '28g'] }],
      variants: [
        { options: { Size: '0.5g' }, price: 40 , stock: 3 },
        { options: { Size: '1g' }, price: 70, stock: 3 },
        { options: { Size: '1.5g' }, price: 100, stock: 9 },
        { options: { Size: '3.5g' }, price: 200, stock: 6 },
         { options: { Size: '7g' }, price: 350, stock: 3 },
        { options: { Size: '14g' }, price: 600, stock: 7 },
        { options: { Size: '28g' }, price: 1100, stock: 2 },
      ],
    },
    {
      id: 'k',
      name: 'K',
      description:
        'High quality red label, Netherlands import. Enquire for brand, variety and larger sizes. Cost depends on variety.',
      image: 'Polish_20261119_223733844.jpg',
      imageAlt: 'k image',
      categories: ['Unprocessed'],
      tags: ['unprocessed', 'white', 'powder', 'party' ],
      options: [{ name: 'Size', values: ['1g', '2g', '3.5g', '7g', '14g', '28g'] }],
      variants: [
        { options: { Size: '1g' }, price: 25, stock: 8 },
        { options: { Size: '2g' }, price: 40, stock: 5 },
        { options: { Size: '3.5g' }, price: 60, stock: 4 },
        { options: { Size: '7g' }, price: 100, stock: 2 },
        { options: { Size: '14g' }, price: 180, stock: 9 },
        { options: { Size: '28g' }, price: 300, stock: 5 },
      ],
    },
    {
      id: 'md',
      name: 'MD',
      description:
        'Pure champagne, Netherlands import. Enquire for brand variety and larger sizes. Cost depends on variety.',
      image: 'Polish_20261119_225406908.jpg',
      imageAlt: 'md image',
      categories: ['Unprocessed'],
      tags: ['unprocessed', 'stimulant', 'party'],
      options: [{ name: 'Size', values: ['1g', '2g', '3.5g', '7g', '14g', '28g'] }],
      variants: [
        { options: { Size: '1g' }, price: 30, stock: 5 },
        { options: { Size: '2g' }, price: 50, stock: 8 },
        { options: { Size: '3.5g' }, price: 70, stock: 4 },
        { options: { Size: '7g' }, price: 120, stock: 2 },
        { options: { Size: '14g' }, price: 200, stock: 5 },
        { options: { Size: '28g' }, price: 360, stock: 8 },
      ],
    },
    {
      id: 'pnk',
      name: 'Pink',
      description:
        'Premium blend high quality Netherlands import. Enquire for brand variety and larger sizes. Cost depends on variety.',
      image: 'Polish_20261119_224011271.jpg',
      imageAlt: 'pink image',
      categories: ['Unprocessed'],
      tags: ['powder', 'party', 'stimulant', 'unprocessed'],
      options: [{ name: 'Size', values: ['1g', '2g', '3.5g', '7g', '14g', '28g'] }],
      variants: [
        { options: { Size: '1g' }, price: 60, stock: 6 },
        { options: { Size: '2g' }, price: 110, stock: 8 },
        { options: { Size: '3.5g' }, price: 180, stock: 4 },
        { options: { Size: '7g' }, price: 350, stock: 5 },
        { options: { Size: '14g' }, price: 600, stock: 5 },
        { options: { Size: '28g' }, price: 1100, stock: 8 },
      ],
    },
    {
      id: 'xtc',
      name: 'X',
      description: 'High strength unadultarated Netherlands import. Enquire for brand variety and larger sizes. Cost depends on variety.',
      image: 'Polish_20261119_225524078.jpg',
      imageAlt: 'X image',
      categories: ['Pills', 'Unprocesssed'],
      tags: ['party', 'unprocessed', 'stimulant'],
options: [{ name: 'Size', values: ['1', '2', '5', '10', '50', '100'] }],
      variants: [
        { options: { Size: '1' }, price: 10, stock: 5 },
        { options: { Size: '2' }, price: 18, stock: 8 },
        { options: { Size: '5' }, price: 40, stock: 4 },
        { options: { Size: '10' }, price: 60, stock: 5 },
        { options: { Size: '50' }, price: 300, stock: 8 },
        { options: { Size: '100' }, price: 700, stock: 6 },
        ],
    },
    {
      id: 'wd',
      name: 'Bud',
      description:
        'High potency, California import. Enquire for brand variety and larger sizes. Cost depends on variety.',
      image: 'Polish_20261119_225645496.jpg',
      imageAlt: 'bud image',
      categories: ['Plants'],
      tags: ['Plants', 'cannabis', 'natural'],
     options: [{ name: 'Size', values: ['3.5g', '7g', '14g', '28g'] }],
      variants: [
        { options: { Size: '3.5g' }, price: 30, stock: 5 },
        { options: { Size: '7g' }, price: 55, stock: 9 },
        { options: { Size: '14g' }, price: 100, stock: 4 },
        { options: { Size: '28g' }, price: 180, stock: 6 },
     ],
    },
    {
      id: 'hsh',
      name: 'Hash',
      description:
        'Bubble hash, black and sticky, California import. Enquire for brand variety and larger sizes. Cost depends on variety.',
      image: 'Polish_20261119_225722672.jpg',
      imageAlt: 'hash image',
      categories: ['Plants','party'],
      tags: ['Plants', 'cannabis', 'natural'],
     options: [{ name: 'Size', values: ['1g', '2g', '3g', '6g', '12g', '25g'] }],
      variants: [
        { options: { Size: '1g' }, price: 10, stock: 6 },
        { options: { Size: '2g' }, price: 20, stock: 8 },
        { options: { Size: '3g' }, price: 30, stock: 4 },
        { options: { Size: '6g' }, price: 50, stock: 4 },
        { options: { Size: '12g' }, price: 90, stock: 4 },
        { options: { Size: '25g' }, price: 170, stock: 5 },
  ],
    },
    {
      id: 'drreddy',
      name: 'Dr Reddy`s Pregabalin 300mg',
      description:
        'Pregabalin is a gabapentinoid prescribed for the management of neuropathic pain, seizures, and generalised anxiety disorder. All medicines are authentic and sealed pharmacy stock. Enquire for variety and larger sizes, cost depends on variety.',
      image: 'Polish_20261119_225814193.jpg',
      imageAlt: 'drreddy image',
      categories: ['Pills', 'Medicine'],
      tags: ['anti-anxiety', 'gaba', 'medicine', 'pills'],
     options: [{ name: 'Size', values: ['14pills', '56pills'] }],
      variants: [
        { options: { Size: '14pills' }, price: 20, stock: 8 },
        { options: { Size: '56pills' }, price: 60, stock: 10 },
       ],
    },
  ],

  
