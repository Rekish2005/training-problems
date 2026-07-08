export const categories = [
  "Electronics",
  "Fashion",
  "Mobiles",
  "Laptops",
  "Home Appliances",
  "Grocery",
  "Books",
  "Sports",
  "Beauty",
  "Toys"
];

export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max (256GB, Titanium Gray)",
    brand: "Apple",
    category: "Mobiles",
    price: 139900,
    discountPercentage: 8,
    rating: 4.8,
    reviewsCount: 1420,
    stockStatus: "In Stock",
    salesCount: 5200,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The iPhone 15 Pro Max is forged in titanium and features the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "iPhone 15 Pro Max",
      "Storage": "256 GB",
      "Color": "Natural Titanium",
      "Display": "6.7-inch Super Retina XDR OLED",
      "Processor": "A17 Pro chip",
      "Camera": "48MP Main | 12MP Ultra Wide | 12MP 5x Telephoto",
      "Battery Life": "Up to 29 hours video playback",
      "Weight": "221 grams"
    },
    reviews: [
      { id: 101, user: "Alex M.", rating: 5, title: "Absolutely stunning", comment: "The titanium finish is beautiful and feels extremely light compared to previous models. Dynamic island is very helpful.", date: "2026-05-12" },
      { id: 102, user: "Sarah T.", rating: 4, title: "Great camera, but expensive", comment: "The 5x zoom is incredible. Battery easily lasts a full day of heavy usage. A bit pricey but worth it.", date: "2026-06-01" }
    ]
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra (512GB, Titanium Black)",
    brand: "Samsung",
    category: "Mobiles",
    price: 129900,
    discountPercentage: 12,
    rating: 4.7,
    reviewsCount: 890,
    stockStatus: "Only 4 Left",
    salesCount: 4100,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Galaxy S24 Ultra",
      "Storage": "512 GB",
      "Color": "Titanium Black",
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Camera": "200MP Main | 50MP + 10MP Telephoto | 12MP Ultra Wide",
      "Battery Capacity": "5000 mAh",
      "S-Pen": "Included"
    },
    reviews: [
      { id: 201, user: "John D.", rating: 5, title: "AI features are game-changing", comment: "Live translate and circle to search work perfectly. Best screen on any phone ever.", date: "2026-04-20" },
      { id: 202, user: "Elena R.", rating: 4, title: "Excellent screen, massive size", comment: "The anti-reflective screen coating is brilliant. S-Pen is very useful. It is a bit blocky in hand though.", date: "2026-05-18" }
    ]
  },
  {
    id: 3,
    name: "MacBook Pro 16\" (M3 Max chip, 36GB Unified Memory)",
    brand: "Apple",
    category: "Laptops",
    price: 349900,
    discountPercentage: 5,
    rating: 4.9,
    reviewsCount: 310,
    stockStatus: "In Stock",
    salesCount: 1200,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Monday, July 7",
    description: "The MacBook Pro 16-inch blasts forward with M3 Max, an outrageously advanced chip that brings massive performance for extreme workflows. Up to 22 hours of battery life.",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "MacBook Pro 16",
      "Processor": "M3 Max (14-core CPU, 30-core GPU)",
      "Memory": "36 GB Unified RAM",
      "Storage": "1 TB SSD",
      "Display": "16.2-inch Liquid Retina XDR",
      "OS": "macOS Sonoma",
      "Battery Life": "Up to 22 hours",
      "Color": "Space Black"
    },
    reviews: [
      { id: 301, user: "Devin K.", rating: 5, title: "Insane speed", comment: "Compiles massive projects in seconds. Display is gorgeous and the space black color looks sleek.", date: "2026-03-10" },
      { id: 302, user: "Mia W.", rating: 5, title: "Worth every penny", comment: "Absolutely incredible battery life and thermals. The fans rarely spin up even during video rendering.", date: "2026-04-12" }
    ]
  },
  {
    id: 4,
    name: "Dell XPS 15 OLED (Core i9, 32GB RAM, 1TB SSD)",
    brand: "Dell",
    category: "Laptops",
    price: 219900,
    discountPercentage: 15,
    rating: 4.5,
    reviewsCount: 420,
    stockStatus: "In Stock",
    salesCount: 2300,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Wednesday, July 9",
    description: "Experience absolute visual perfection with the Dell XPS 15. Equipped with a stunning 3.5K OLED InfinityEdge display and Intel's 13th Gen Core i9 processor.",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "XPS 15 9530",
      "Processor": "Intel Core i9-13900H",
      "Memory": "32 GB DDR5 RAM",
      "Storage": "1 TB PCIe NVMe SSD",
      "Graphics": "NVIDIA GeForce RTX 4060",
      "Display": "15.6-inch OLED Touch (3456 x 2160)",
      "Weight": "1.92 kg",
      "OS": "Windows 11 Home"
    },
    reviews: [
      { id: 401, user: "Marcus P.", rating: 4, title: "The screen is breathtaking", comment: "Colors on the OLED display pop like nothing else. Keyboard is very comfortable. Battery runs out fast under load.", date: "2026-02-15" }
    ]
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 29999,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 2150,
    stockStatus: "In Stock",
    salesCount: 8900,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "With two processors controlling 8 microphones, Auto NC Optimizer for automatically optimizing noise canceling based on your wearing conditions and environment.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "WH1000XM5/B",
      "Type": "Over-Ear",
      "Battery Life": "Up to 30 hours",
      "Noise Cancellation": "Active (Industry Leading)",
      "Bluetooth Version": "5.2",
      "Weight": "250 grams",
      "Fast Charging": "3 min gives 3 hours playback"
    },
    reviews: [
      { id: 501, user: "Clara S.", rating: 5, title: "Best active noise cancellation", comment: "Blocks out airplane engine noise completely. Super lightweight and comfortable for long flights.", date: "2026-06-25" },
      { id: 502, user: "Tim B.", rating: 4, title: "Superb sound, minor app gripes", comment: "Sound quality is phenomenal. The Sony app is a bit cluttered but the custom EQ is great.", date: "2026-06-29" }
    ]
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2 (GPS + Cellular, 49mm Titanium)",
    brand: "Apple",
    category: "Electronics",
    price: 89900,
    discountPercentage: 6,
    rating: 4.8,
    reviewsCount: 540,
    stockStatus: "In Stock",
    salesCount: 3200,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP, a magical new way to use your watch without touching the screen.",
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Watch Ultra 2",
      "Case Size": "49mm",
      "Material": "Aerospace-grade Titanium",
      "Display Brightness": "Up to 3000 nits",
      "Water Resistance": "100 meters (swimproof & recreational dive)",
      "Battery Life": "Up to 36 hours (72 hours in low power mode)",
      "GPS": "Precision dual-frequency GPS"
    },
    reviews: [
      { id: 601, user: "David H.", rating: 5, title: "Ultimate adventure watch", comment: "Battery easily lasts 3 full days. The bright screen is legible in blazing sunlight. Love the action button.", date: "2026-06-15" }
    ]
  },
  {
    id: 7,
    name: "Men's Premium Distressed Leather Bomber Jacket",
    brand: "Timberland",
    category: "Fashion",
    price: 14999,
    discountPercentage: 30,
    rating: 4.4,
    reviewsCount: 180,
    stockStatus: "In Stock",
    salesCount: 950,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tuesday, July 8",
    description: "Crafted from 100% genuine full-grain leather, this distressed bomber jacket is a classic wardrobe staple. Features ribbed cuffs, full zipper closure, and quilted lining.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Material": "100% Genuine Leather",
      "Lining": "100% Polyester Quilted",
      "Fit": "Regular Fit",
      "Closure": "Heavy-duty Front Zipper",
      "Pockets": "2 hand pockets, 2 interior pockets",
      "Care Instructions": "Professional Leather Clean Only"
    },
    reviews: [
      { id: 701, user: "Arthur C.", rating: 5, title: "Smells like premium leather!", comment: "The quality is outstanding. Fits true to size and feels very heavy and warm.", date: "2026-05-10" }
    ]
  },
  {
    id: 8,
    name: "Women's Double-Breasted Classic Trench Coat",
    brand: "Burberry",
    category: "Fashion",
    price: 149999,
    discountPercentage: 10,
    rating: 4.7,
    reviewsCount: 95,
    stockStatus: "Only 2 Left",
    salesCount: 180,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Monday, July 7",
    description: "A signature double-breasted trench coat tailored in water-resistant cotton gabardine. Detailed with classic epaulettes, gun flap, and a belted waist.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Material": "100% Cotton Gabardine",
      "Lining": "Vintage Check Cotton",
      "Closure": "Double-breasted button closure",
      "Length": "Mid-length (104cm/40.9in)",
      "Origin": "Made in Europe"
    },
    reviews: [
      { id: 801, user: "Victoria B.", rating: 5, title: "Timeless classic", comment: "Fits beautifully. The gabardine is completely wind and water-resistant. Truly a lifetime investment.", date: "2026-06-18" }
    ]
  },
  {
    id: 9,
    name: "Dyson V15 Detect Cordless Vacuum Cleaner",
    brand: "Dyson",
    category: "Home Appliances",
    price: 59900,
    discountPercentage: 15,
    rating: 4.6,
    reviewsCount: 1120,
    stockStatus: "In Stock",
    salesCount: 3100,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Dyson's most powerful, intelligent cordless vacuum. Count and measure size of microscopic dust particles, with real-time scientific proof on screen.",
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "V15 Detect",
      "Suction Power": "240 AW",
      "Run Time": "Up to 60 minutes",
      "Bin Volume": "0.2 gallons (0.76 L)",
      "Weight": "6.8 lbs (3.08 kg)",
      "Filtration": "Whole-machine HEPA filtration"
    },
    reviews: [
      { id: 901, user: "Gary L.", rating: 5, title: "Green laser is magic", comment: "The laser light reveals hair and dust you cannot see with the naked eye. The auto suction adjust works brilliantly.", date: "2026-04-05" }
    ]
  },
  {
    id: 10,
    name: "Instant Pot Duo Crisp 11-in-1 Air Fryer & Pressure Cooker",
    brand: "Instant Pot",
    category: "Home Appliances",
    price: 14999,
    discountPercentage: 25,
    rating: 4.5,
    reviewsCount: 3450,
    stockStatus: "In Stock",
    salesCount: 12500,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The Instant Pot Duo Crisp + Air Fryer is the best of all worlds. With 11-in-1 functionality, it does everything a regular Instant Pot does, but swap out the lid to air fry.",
    images: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Capacity": "8 Quarts",
      "Power": "1500 Watts",
      "Programs": "11 Customizable Smart Programs",
      "Inner Pot": "Food-grade Stainless Steel (18/8)",
      "Dimensions": "14.8 x 13.6 x 14.2 inches"
    },
    reviews: [
      { id: 1001, user: "Rebecca P.", rating: 5, title: "Saves so much counter space", comment: "Can pressure cook a chicken then air fry the skin to a perfect crisp in the same machine. Incredibly convenient.", date: "2026-03-29" }
    ]
  },
  {
    id: 11,
    name: "Premium Organic Whole Coffee Beans (1kg Bag)",
    brand: "Ethical Bean",
    category: "Grocery",
    price: 1499,
    discountPercentage: 10,
    rating: 4.3,
    reviewsCount: 780,
    stockStatus: "In Stock",
    salesCount: 15400,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "A dark, bold roast with a sweet, chocolaty finish. 100% Arabica, USDA Organic, and Fairtrade certified. Sourced directly from cooperative farmers in Central/South America.",
    images: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Weight": "1 kg (2.2 lbs)",
      "Roast Level": "Dark Roast",
      "Certifications": "USDA Organic | Fairtrade",
      "Ingredients": "100% Organic Coffee Beans",
      "Shelf Life": "12 Months"
    },
    reviews: [
      { id: 1101, user: "Robert D.", rating: 4, title: "Smooth and rich flavor", comment: "Grinds beautifully for espresso. No oily sheen, very pleasant dark cocoa notes. Will buy again.", date: "2026-06-20" }
    ]
  },
  {
    id: 12,
    name: "Pure Organic Maple Syrup (Grade A Amber, 32 fl. oz.)",
    brand: "Maple Farms",
    category: "Grocery",
    price: 1899,
    discountPercentage: 5,
    rating: 4.7,
    reviewsCount: 650,
    stockStatus: "In Stock",
    salesCount: 8200,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "100% pure Canadian Grade A maple syrup. Rich, amber color and warm, classic maple flavor. Perfect for pancakes, waffles, baking, or sweetening beverages.",
    images: [
      "https://images.unsplash.com/photo-1589733933701-78939c3e1e2d?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Volume": "32 fl. oz (946 ml)",
      "Grade": "Grade A Amber Rich Taste",
      "Organic": "Yes",
      "Packaging": "BPA-free jug",
      "Storage": "Refrigerate after opening"
    },
    reviews: [
      { id: 1201, user: "Lily J.", rating: 5, title: "Tastes amazing!", comment: "Nothing compares to pure maple syrup. This brand is excellent, thick, and perfectly sweet.", date: "2026-05-30" }
    ]
  },
  {
    id: 13,
    name: "Atomic Habits by James Clear (Hardcover Edition)",
    brand: "Penguin Books",
    category: "Books",
    price: 499,
    discountPercentage: 40,
    rating: 4.8,
    reviewsCount: 22400,
    stockStatus: "In Stock",
    salesCount: 110000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Author": "James Clear",
      "Publisher": "Avery (Hardcover)",
      "Publication Date": "October 16, 2018",
      "Language": "English",
      "Pages": "320 pages",
      "ISBN-10": "0735211299",
      "Dimensions": "6.3 x 1.1 x 9.3 inches"
    },
    reviews: [
      { id: 1301, user: "Chris L.", rating: 5, title: "Life changing philosophy", comment: "Simple, easy to digest, and extremely actionable. The idea of 1% improvement everyday is powerful.", date: "2026-01-10" }
    ]
  },
  {
    id: 14,
    name: "The Lord of the Rings: Deluxe Illustrated Edition",
    brand: "HarperCollins",
    category: "Books",
    price: 4999,
    discountPercentage: 15,
    rating: 4.9,
    reviewsCount: 3100,
    stockStatus: "In Stock",
    salesCount: 12400,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "A very special deluxe edition of J.R.R. Tolkien's masterpiece, illustrated in full color by the author himself and printed on fine acid-free paper.",
    images: [
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Author": "J.R.R. Tolkien",
      "Illustrations": "30+ color illustrations by the author",
      "Publisher": "HarperCollins (Deluxe)",
      "Format": "Slipcased Hardcover",
      "Pages": "1248 pages",
      "Weight": "4.6 lbs"
    },
    reviews: [
      { id: 1401, user: "Gandalf S.", rating: 5, title: "An absolute treasure", comment: "The binding is gorgeous, the paper quality is top-notch, and having Tolkien's own illustrations makes it perfect.", date: "2026-02-14" }
    ]
  },
  {
    id: 15,
    name: "Schwinn IC4 Indoor Ergonomic Exercise Bike",
    brand: "Schwinn",
    category: "Sports",
    price: 79900,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 1580,
    stockStatus: "In Stock",
    salesCount: 4500,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Friday, July 10",
    description: "The Schwinn IC4 Bike provides a premium, low-impact cardio workout designed to connect with popular cycling apps like Peloton and Zwift via Bluetooth.",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "IC4 Bike",
      "Resistance": "100 micro-adjustable levels (Magnetic)",
      "Connectivity": "Bluetooth Smart (Zwift, Peloton, Jrny)",
      "Console": "Full color LCD display",
      "Heart Rate Monitor": "Bluetooth Armband included",
      "Max User Weight": "330 lbs"
    },
    reviews: [
      { id: 1501, user: "Hana G.", rating: 5, title: "Peloton killer for half the price", comment: "Extremely quiet. Hooked it up to my iPad to run the Peloton app. The iPad holder is very sturdy.", date: "2026-05-02" }
    ]
  },
  {
    id: 16,
    name: "Lululemon Take Power Yoga Mat (5mm Thick)",
    brand: "Lululemon",
    category: "Sports",
    price: 8900,
    discountPercentage: 10,
    rating: 4.5,
    reviewsCount: 320,
    stockStatus: "In Stock",
    salesCount: 2200,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Find your footing. This 5mm yoga mat features an innovative rippled surface design to help you feel anchored in your poses. Natural rubber base gives excellent cushioning.",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Material": "Natural Rubber, Polyurethane",
      "Thickness": "5 mm (0.2 in)",
      "Dimensions": "26\" x 71\" (66cm x 180cm)",
      "Weight": "5.2 lbs (2.36 kg)",
      "Grip Type": "Rippled, ultra-grip dry or wet"
    },
    reviews: [
      { id: 1601, user: "Zen J.", rating: 4, title: "Super grippy, rubber smell", comment: "Absolutely no slipping even in hot yoga. It does smell like rubber for the first couple of weeks.", date: "2026-06-27" }
    ]
  },
  {
    id: 17,
    name: "The Ordinary Hyaluronic Acid 2% + B5 Serum",
    brand: "The Ordinary",
    category: "Beauty",
    price: 799,
    discountPercentage: 5,
    rating: 4.4,
    reviewsCount: 4200,
    stockStatus: "In Stock",
    salesCount: 34000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "A water-based formula combining low-, medium- and high-molecular weight hyaluronic acid molecules and a next-generation HA crosspolymer to support multi-depth hydration.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Volume": "30 ml (1 fl. oz)",
      "Skin Type": "All skin types",
      "Active Ingredients": "Hyaluronic Acid, Vitamin B5",
      "Cruelty Free": "Yes",
      "Fragrance Free": "Yes"
    },
    reviews: [
      { id: 1701, user: "Emma W.", rating: 5, title: "Must-have hydration!", comment: "My skin feels so plumped and smooth after using this. Incredible value for money.", date: "2026-06-12" }
    ]
  },
  {
    id: 18,
    name: "L'Occitane Ultra-Rich 25% Shea Butter Body Cream",
    brand: "L'Occitane",
    category: "Beauty",
    price: 3999,
    discountPercentage: 12,
    rating: 4.7,
    reviewsCount: 880,
    stockStatus: "In Stock",
    salesCount: 5100,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Monday, July 7",
    description: "An intensive nourishing body cream formulated with a high concentration of organic Shea Butter (25%) to help deliver intense nourishment to dry or sensitive skin.",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Volume": "200 ml (6.7 oz)",
      "Shea Butter Concentration": "25% (Certified Organic)",
      "Skin Concern": "Very Dry / Sensitive Skin",
      "Longevity": "Up to 72 hours hydration",
      "Packaging": "Metal tin"
    },
    reviews: [
      { id: 1801, user: "Sophie T.", rating: 5, title: "Saves my winter skin", comment: "So thick and luxurious. Smells wonderful but not overwhelming. Keeps dry patches away all day.", date: "2026-05-02" }
    ]
  },
  {
    id: 19,
    name: "LEGO Star Wars Millennium Falcon Building Kit (75257)",
    brand: "LEGO",
    category: "Toys",
    price: 14999,
    discountPercentage: 15,
    rating: 4.8,
    reviewsCount: 6800,
    stockStatus: "In Stock",
    salesCount: 15200,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Inspire youngsters and adults with this 75257 LEGO Star Wars Millennium Falcon model. This brick-built version of the iconic Corellian cargo ship features an array of details.",
    images: [
      "https://images.unsplash.com/photo-1585366119957-e5730f3d5827?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model Number": "75257",
      "Piece Count": "1351 Pieces",
      "Minifigures": "7 Star Wars characters (Finn, Chewbacca, Lando, etc.)",
      "Dimensions": "Over 5\" high, 17\" long and 12\" wide",
      "Recommended Age": "9+ Years"
    },
    reviews: [
      { id: 1901, user: "Luke S.", rating: 5, title: "Amazing build experience", comment: "Took me about 6 hours to build. The cockpit opens, and the interior details are very cool. High playability.", date: "2026-04-18" }
    ]
  },
  {
    id: 20,
    name: "Playmags 100-Piece Magnetic Building Tile Set",
    brand: "Playmags",
    category: "Toys",
    price: 4999,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 1980,
    stockStatus: "Out of Stock",
    salesCount: 9300,
    isNewArrival: false,
    deliveryInfo: "Temporarily Out of Stock. Order now to reserve.",
    description: "Playmags magnetic building blocks help children develop fine motor skills and creativity. Stronger magnets allow kids to build taller towers and sturdier structures.",
    images: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Piece Count": "100 magnetic tiles",
      "Material": "BPA-free Food-grade ABS Plastic",
      "Magnets": "Super-strong Neodymium",
      "Includes": "Tiles, cars, windows, click-ins booklet",
      "Ages": "3+ Years"
    },
    reviews: [
      { id: 2001, user: "Tanya P.", rating: 5, title: "Keeps kids busy for hours", comment: "My 4 and 7 year olds build castles and towers constantly. Magnets are very strong. Highly recommend.", date: "2026-06-03" }
    ]
  },
  {
    id: 21,
    name: "Google Pixel 8 Pro (256GB, Obsidian)",
    brand: "Google",
    category: "Mobiles",
    price: 99999,
    discountPercentage: 10,
    rating: 4.6,
    reviewsCount: 520,
    stockStatus: "In Stock",
    salesCount: 2900,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Monday, July 7",
    description: "The Google Pixel 8 Pro is the all-pro phone engineered by Google. It features the Google Tensor G3 chip and advanced AI systems to edit photos and screen calls.",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Pixel 8 Pro",
      "Storage": "256 GB",
      "Color": "Obsidian Black",
      "Display": "6.7-inch Super Actua Display",
      "Processor": "Google Tensor G3",
      "Camera": "50MP Main | 48MP Telephoto | 48MP Ultra Wide",
      "Battery Capacity": "5050 mAh"
    },
    reviews: [
      { id: 2101, user: "Jordan R.", rating: 5, title: "Best camera processing", comment: "Magic Eraser and Best Take are wizardry. The flat screen is a major improvement.", date: "2026-06-05" }
    ]
  },
  {
    id: 22,
    name: "OnePlus 12 (512GB, Silky Black)",
    brand: "OnePlus",
    category: "Mobiles",
    price: 69999,
    discountPercentage: 15,
    rating: 4.5,
    reviewsCount: 380,
    stockStatus: "In Stock",
    salesCount: 1800,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tuesday, July 8",
    description: "Redefined flagship performance featuring Snapdragon 8 Gen 3, Trinity Engine, and 4th Gen Hasselblad Camera System for mobile, with 100W SUPERVOOC charging.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "OnePlus 12",
      "Storage": "512 GB",
      "Memory": "16 GB LPDDR5X RAM",
      "Color": "Silky Black",
      "Display": "6.82-inch 2K 120Hz ProXDR",
      "Processor": "Snapdragon 8 Gen 3",
      "Charging": "100W wired | 50W wireless AIRVOOC"
    },
    reviews: [
      { id: 2201, user: "Nate K.", rating: 4, title: "Charges insanely fast", comment: "From 1% to 100% in under 30 minutes! Display is incredibly bright. Camera is good but not quite Apple level.", date: "2026-05-22" }
    ]
  },
  {
    id: 23,
    name: "Samsung Galaxy Z Fold 5 (512GB, Phantom Black)",
    brand: "Samsung",
    category: "Mobiles",
    price: 154999,
    discountPercentage: 11,
    rating: 4.6,
    reviewsCount: 220,
    stockStatus: "Only 3 Left",
    salesCount: 950,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The ultimate 7.6-inch folding screen display phone. Offers massive productivity options with Multi-Window multitask layouts, a slimmer hinge design, and S-Pen compatibility.",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Galaxy Z Fold 5",
      "Storage": "512 GB",
      "Main Display": "7.6-inch Dynamic AMOLED 2X 120Hz",
      "Cover Display": "6.2-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2 for Galaxy",
      "Weight": "253 grams"
    },
    reviews: [
      { id: 2301, user: "Tyler S.", rating: 5, title: "A tablet in my pocket", comment: "Great for reading documents and spreadsheets on the go. The fold gap is finally gone.", date: "2026-06-11" }
    ]
  },
  {
    id: 24,
    name: "ASUS ROG Zephyrus G14 Gaming Laptop",
    brand: "ASUS",
    category: "Laptops",
    price: 149999,
    discountPercentage: 12,
    rating: 4.6,
    reviewsCount: 510,
    stockStatus: "In Stock",
    salesCount: 2100,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Wednesday, July 9",
    description: "High-performance gaming meets premium portable design. Featuring a 14-inch ROG Nebula HDR display, AMD Ryzen 9 processor, and NVIDIA GeForce RTX 4070 graphics.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "ROG Zephyrus G14 GA403",
      "Processor": "AMD Ryzen 9 8945HS",
      "Memory": "16 GB LPDDR5X",
      "Storage": "1 TB PCIe 4.0 SSD",
      "Graphics": "NVIDIA GeForce RTX 4070 (8GB)",
      "Display": "14-inch OLED 3K 120Hz",
      "Weight": "1.5 kg"
    },
    reviews: [
      { id: 2401, user: "GamerX", rating: 5, title: "Perfect portable powerhouse", comment: "The OLED screen is absolutely gorgeous for both work and gaming. Thermals are solid for a 14-inch chassis.", date: "2026-06-19" }
    ]
  },
  {
    id: 25,
    name: "HP Spectre x360 14\" 2-in-1 Touchscreen Laptop",
    brand: "HP",
    category: "Laptops",
    price: 139999,
    discountPercentage: 10,
    rating: 4.7,
    reviewsCount: 340,
    stockStatus: "In Stock",
    salesCount: 1650,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tuesday, July 8",
    description: "Impeccably crafted convertible laptop. Rotating 360-degree hinge allows tablet, tent, or laptop mode. Equipped with an Intel Core Ultra 7 processor and custom AI features.",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Spectre x360 14-eu000",
      "Processor": "Intel Core Ultra 7 155H",
      "Memory": "16 GB LPDDR5x RAM",
      "Storage": "1 TB PCIe NVMe SSD",
      "Display": "14-inch 2.8K OLED Touch (120Hz)",
      "Stylus Pen": "Rechargeable MPP2.0 Tilt Pen included"
    },
    reviews: [
      { id: 2501, user: "Alice L.", rating: 5, title: "Stunning design & keyboard", comment: "The gem-cut chassis is premium. Keyboard is tactile and quiet. Stylus works flawlessly for drawing.", date: "2026-05-14" }
    ]
  },
  {
    id: 26,
    name: "Lenovo ThinkPad X1 Carbon Gen 11 Business Laptop",
    brand: "Lenovo",
    category: "Laptops",
    price: 179999,
    discountPercentage: 15,
    rating: 4.8,
    reviewsCount: 290,
    stockStatus: "In Stock",
    salesCount: 1900,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Monday, July 7",
    description: "The ultimate business machine. Crafted in carbon fiber for durability, featuring a lightweight frame, legendary keyboard, and top-tier enterprise security features.",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "ThinkPad X1 Carbon Gen 11",
      "Processor": "Intel Core i7-1365U vPro",
      "Memory": "32 GB LPDDR5 RAM",
      "Storage": "1 TB PCIe Gen 4 SSD",
      "Display": "14-inch WUXGA IPS Anti-Glare",
      "Weight": "1.12 kg",
      "OS": "Windows 11 Pro"
    },
    reviews: [
      { id: 2601, user: "Richard V.", rating: 5, title: "The gold standard for office work", comment: "Featherlight, indestructible, and the best keyboard in the business. vPro features are great for IT management.", date: "2026-04-18" }
    ]
  },
  {
    id: 27,
    name: "Sony WH-CH720N Noise Canceling Wireless Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 9990,
    discountPercentage: 30,
    rating: 4.3,
    reviewsCount: 1240,
    stockStatus: "In Stock",
    salesCount: 6500,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Enjoy comfortable, all-day listening with Sony's lightest wireless noise-cancelling headphones. Built with the Integrated Processor V1 for impressive noise reduction.",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "WHCH720N/B",
      "Type": "Over-Ear",
      "Weight": "192 grams",
      "Battery Life": "Up to 35 hours (NC On)",
      "Bluetooth": "Version 5.2",
      "Multipoint Connection": "Yes (Pair 2 devices)"
    },
    reviews: [
      { id: 2701, user: "Peter G.", rating: 4, title: "Super lightweight, good ANC", comment: "So comfortable I forget I am wearing them. Noise canceling is good for the price, though not XM5 level.", date: "2026-06-10" }
    ]
  },
  {
    id: 28,
    name: "Bose QuietComfort Ultra Wireless Earbuds",
    brand: "Bose",
    category: "Electronics",
    price: 25900,
    discountPercentage: 10,
    rating: 4.5,
    reviewsCount: 810,
    stockStatus: "In Stock",
    salesCount: 4200,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Premium noise-cancelling earbuds featuring breakthrough spatialized audio for more immersive listening, CustomTune sound personalization, and clear phone calls.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "QuietComfort Ultra Earbuds",
      "Type": "True Wireless Earbuds",
      "Noise Cancelling": "World-class CustomTune",
      "Battery Life": "Up to 6 hours (24 total with case)",
      "Water Resistance": "IPX4 sweatproof"
    },
    reviews: [
      { id: 2801, user: "Kelly M.", rating: 5, title: "Unreal noise canceling", comment: "ANC is better than any over-ear headphones I have owned. Immersive audio mode makes music feel live.", date: "2026-06-21" }
    ]
  },
  {
    id: 29,
    name: "Kindle Paperwhite Signature Edition (32 GB)",
    brand: "Amazon",
    category: "Electronics",
    price: 14999,
    discountPercentage: 15,
    rating: 4.7,
    reviewsCount: 4890,
    stockStatus: "In Stock",
    salesCount: 15600,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Designed for reading, with a flush-front design and 300 ppi glare-free display that reads like real paper. Wireless charging, auto-adjusting front light, and 32GB storage.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Kindle Paperwhite Signature",
      "Storage": "32 GB",
      "Display": "6.8-inch with integrated light",
      "Resolution": "300 ppi",
      "Waterproofing": "IPX8 (Submersion in fresh water up to 2m)",
      "Charging": "USB-C & Qi Wireless Charging",
      "Battery Life": "Up to 10 weeks"
    },
    reviews: [
      { id: 2901, user: "Dan H.", rating: 5, title: "The perfect e-reader", comment: "Auto-brightness and warm light make reading in bed comfortable. Wireless charging works great.", date: "2026-05-30" }
    ]
  },
  {
    id: 30,
    name: "Ray-Ban Classic Wayfarer Sunglasses (Polarized Black)",
    brand: "Ray-Ban",
    category: "Fashion",
    price: 9990,
    discountPercentage: 15,
    rating: 4.5,
    reviewsCount: 1450,
    stockStatus: "In Stock",
    salesCount: 8800,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The most recognizable style in the history of sunglasses. Distinctive shape is paired with the traditional Ray-Ban signature logo on the sculpted temples.",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "RB2140 Wayfarer",
      "Frame Material": "Acetate",
      "Lens Technology": "Polarized Green Classic G-15",
      "Lens Width": "50 mm",
      "Bridge Width": "22 mm",
      "Temple Length": "150 mm"
    },
    reviews: [
      { id: 3001, user: "Frank L.", rating: 5, title: "Pure quality classic", comment: "Polarized lenses cut glare perfectly. Feels solid and sturdy. Unbeatable style.", date: "2026-06-11" }
    ]
  },
  {
    id: 31,
    name: "Nike Air Max 270 Men's Running Sneakers",
    brand: "Nike",
    category: "Fashion",
    price: 12995,
    discountPercentage: 10,
    rating: 4.6,
    reviewsCount: 2850,
    stockStatus: "In Stock",
    salesCount: 14200,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Nike's first lifestyle Air Max shoe delivers style, comfort and big attitude. Inspired by Air Max icons, it showcases Nike's greatest innovation with its large window.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Air Max 270",
      "Upper": "Engineered Mesh & Synthetic",
      "Midsole": "Dual-density foam with large Air unit",
      "Outsole": "Durable solid rubber",
      "Color": "Black/White-Anthracite",
      "Weight": "12.1 oz"
    },
    reviews: [
      { id: 3101, user: "Marcus T.", rating: 5, title: "Like walking on clouds", comment: "Extremely comfortable for walking around all day. The heel cushion is amazing. Looks sharp too.", date: "2026-06-25" }
    ]
  },
  {
    id: 32,
    name: "Levi's Men's 511 Slim Fit Flex Jeans",
    brand: "Levi's",
    category: "Fashion",
    price: 3499,
    discountPercentage: 25,
    rating: 4.4,
    reviewsCount: 8740,
    stockStatus: "In Stock",
    salesCount: 22000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "A modern slim with room to move. The 511 Slim Fit Jeans are a classic since now, cut to sit below the waist with a slim fit from hip to ankle and active flex stretch.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Style": "511 Slim Fit",
      "Material": "99% Cotton, 1% Elastane",
      "Stretch": "Levi's Flex stretch technology",
      "Closure": "Zip fly with button closure",
      "Care": "Machine wash cold"
    },
    reviews: [
      { id: 3201, user: "Sam B.", rating: 4, title: "Great fit with comfortable stretch", comment: "Slim but not skin-tight. The flex fabric gives a bit of stretch which is perfect for comfort.", date: "2026-05-18" }
    ]
  },
  {
    id: 33,
    name: "Keurig K-Elite Single Serve Coffee Maker (Slate)",
    brand: "Keurig",
    category: "Home Appliances",
    price: 15999,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 6540,
    stockStatus: "In Stock",
    salesCount: 18900,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The Keurig K-Elite brewer combines a premium finish and programmable features to deliver both modern design and the ultimate in beverage customization.",
    images: [
      "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "K-Elite Single Serve",
      "Water Reservoir": "75 oz capacity",
      "Brew Sizes": "4, 6, 8, 10, 12 oz cups",
      "Special Settings": "Strong Brew | Iced Setting",
      "Hot Water Dispense": "On demand button",
      "Dimensions": "13.1 x 9.9 x 12.7 inches"
    },
    reviews: [
      { id: 3301, user: "Linda C.", rating: 5, title: "Best Keurig I've owned", comment: "The strong brew feature actually makes a difference. Giant water tank means I only refill it once a week.", date: "2026-04-12" }
    ]
  },
  {
    id: 34,
    name: "Philips Airfryer XXL Premium (Fat Removal Technology)",
    brand: "Philips",
    category: "Home Appliances",
    price: 18999,
    discountPercentage: 15,
    rating: 4.7,
    reviewsCount: 2210,
    stockStatus: "In Stock",
    salesCount: 9600,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Wednesday, July 9",
    description: "The Philips Premium Airfryer XXL is the only airfryer with fat removal technology that separates and captures excess fat. Fry with little or no added oil.",
    images: [
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "HD9650/96",
      "Capacity": "4 quarts (3 lbs bag of fries)",
      "Fat Removal Tech": "Yes (Starfish base design)",
      "Power": "1725 Watts",
      "Preheating": "Instant (no preheating required)"
    },
    reviews: [
      { id: 3401, user: "Mark D.", rating: 5, title: "Superb results, huge basket", comment: "Perfect crispy chicken wings. Basket is big enough to feed a family of 4 easily. Clean up in dishwasher is easy.", date: "2026-05-20" }
    ]
  },
  {
    id: 35,
    name: "iRobot Roomba j7+ Self-Emptying Robot Vacuum",
    brand: "iRobot",
    category: "Home Appliances",
    price: 69900,
    discountPercentage: 25,
    rating: 4.4,
    reviewsCount: 1180,
    stockStatus: "Only 2 Left",
    salesCount: 3800,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The Roomba j7+ robot vacuum identifies and avoids obstacles like pet waste and charging cords, while emptying its bin into the Clean Base Automatic Dirt Disposal system.",
    images: [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "Roomba j755020",
      "Navigation": "PrecisionVision (avoid cords/pet waste)",
      "Suction Power": "10x Power-Lifting Suction compared to 600 series",
      "Bin Capacity": "0.4 liters",
      "Clean Base Capacity": "Holds up to 60 days of dirt"
    },
    reviews: [
      { id: 3501, user: "Steve N.", rating: 4, title: "Actually avoids charging cables", comment: "My old roomba always got stuck on phone chargers. This one spots them and drives around them. Great self-empty tank.", date: "2026-06-03" }
    ]
  },
  {
    id: 36,
    name: "Kirkland Signature Organic Extra Virgin Olive Oil (1L)",
    brand: "Kirkland Signature",
    category: "Grocery",
    price: 1599,
    discountPercentage: 8,
    rating: 4.6,
    reviewsCount: 3100,
    stockStatus: "In Stock",
    salesCount: 35000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "USDA Organic Extra Virgin Olive Oil. First cold pressed, extracted from organic olives grown and harvested in Italy. Mild, balanced flavor profile suitable for salads or cooking.",
    images: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Volume": "1 Liter (33.8 fl. oz.)",
      "Pressing Method": "First Cold Pressed",
      "Origin": "100% Italian olives",
      "Organic": "USDA Organic Certified",
      "Packaging": "Dark plastic bottle to protect from light"
    },
    reviews: [
      { id: 3601, user: "Chef Tony", rating: 5, title: "Best everyday olive oil", comment: "Incredibly high quality for this price. Smooth taste with a light peppery finish. Great for everyday cooking.", date: "2026-06-01" }
    ]
  },
  {
    id: 37,
    name: "Nature's Way Organic Raw Wildflower Honey (500g)",
    brand: "Nature's Way",
    category: "Grocery",
    price: 799,
    discountPercentage: 5,
    rating: 4.7,
    reviewsCount: 890,
    stockStatus: "In Stock",
    salesCount: 9200,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "100% pure, raw, unfiltered organic wildflower honey. Collected from wild bee colonies in natural forests. Retains natural pollen, enzymes, and antioxidants.",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Weight": "500 grams (1.1 lbs)",
      "Unfiltered": "Yes",
      "Raw": "Yes",
      "Organic": "USDA Certified Organic",
      "Packaging": "Squeeze jar"
    },
    reviews: [
      { id: 3701, user: "Jane D.", rating: 5, title: "Thick and highly aromatic", comment: "Tastes like real wildflower meadows. Much thicker than standard supermarket honey. Perfect in tea.", date: "2026-05-15" }
    ]
  },
  {
    id: 38,
    name: "Uji Matcha Premium Ceremonial Green Tea Powder",
    brand: "Uji Matcha",
    category: "Grocery",
    price: 1899,
    discountPercentage: 10,
    rating: 4.8,
    reviewsCount: 1420,
    stockStatus: "In Stock",
    salesCount: 8100,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Authentic Japanese ceremonial-grade matcha sourced directly from shaded tea fields in Uji, Kyoto. First spring harvest, stone-ground into a fine emerald powder.",
    images: [
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Weight": "100 grams (3.5 oz)",
      "Grade": "Ceremonial Grade",
      "Origin": "Kyoto, Uji, Japan",
      "Organic": "Yes (JAS Organic Certified)",
      "Servings": "Approx. 50-70 cups"
    },
    reviews: [
      { id: 3801, user: "Yuki S.", rating: 5, title: "Vibrant green, no bitterness", comment: "Remarkable sweet, umami flavor. Whished into a thick froth easily. This is true ceremonial matcha.", date: "2026-06-28" }
    ]
  },
  {
    id: 39,
    name: "Educated: A Memoir by Tara Westover (Paperback)",
    brand: "Random House",
    category: "Books",
    price: 399,
    discountPercentage: 20,
    rating: 4.7,
    reviewsCount: 45800,
    stockStatus: "In Stock",
    salesCount: 154000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Author": "Tara Westover",
      "Publisher": "Random House Trade Paperbacks",
      "Publication Date": "February 8, 2022",
      "Language": "English",
      "Pages": "352 pages",
      "ISBN-13": "978-0399590528"
    },
    reviews: [
      { id: 3901, user: "Nora B.", rating: 5, title: "Incredible storytelling", comment: "A gripping and beautifully written look at family bonds and the power of self-education. Read it in 2 days.", date: "2026-04-14" }
    ]
  },
  {
    id: 40,
    name: "Sapiens: A Brief History of Humankind (Paperback)",
    brand: "Harper",
    category: "Books",
    price: 499,
    discountPercentage: 35,
    rating: 4.6,
    reviewsCount: 38200,
    stockStatus: "In Stock",
    salesCount: 98000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Yuval Noah Harari spans the whole of human history, from the first humans to walk the earth to the radical—and sometimes devastating—breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions.",
    images: [
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Author": "Yuval Noah Harari",
      "Publisher": "Harper Perennial",
      "Publication Date": "May 15, 2018",
      "Pages": "512 pages",
      "Language": "English",
      "ISBN-13": "978-0062316110"
    },
    reviews: [
      { id: 4001, user: "Victor P.", rating: 5, title: "Mind-bending perspective", comment: "Completely changes how you look at currency, religion, empire, and human destiny. Very readable history.", date: "2026-05-02" }
    ]
  },
  {
    id: 41,
    name: "Deep Work by Cal Newport (Hardcover Edition)",
    brand: "Grand Central",
    category: "Books",
    price: 399,
    discountPercentage: 15,
    rating: 4.5,
    reviewsCount: 9850,
    stockStatus: "In Stock",
    salesCount: 45000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Rules for focused success in a distracted world. Cal Newport argues that distraction is not a minor annoyance, but a fundamental barrier to creating high-value work.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Author": "Cal Newport",
      "Publisher": "Grand Central Publishing",
      "Publication Date": "January 5, 2016",
      "Pages": "304 pages",
      "Language": "English",
      "ISBN-13": "978-1455586691"
    },
    reviews: [
      { id: 4101, user: "Matt F.", rating: 5, title: "Extremely practical advice", comment: "Highly recommended for knowledge workers. Practical templates on how to block time and focus.", date: "2026-03-22" }
    ]
  },
  {
    id: 42,
    name: "Hydro Flask Wide Mouth Water Bottle (32 oz, Cobalt)",
    brand: "Hydro Flask",
    category: "Sports",
    price: 3499,
    discountPercentage: 10,
    rating: 4.8,
    reviewsCount: 16800,
    stockStatus: "In Stock",
    salesCount: 52000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Insulated stainless steel wide mouth water bottle. TempShield double-wall vacuum insulation keeps beverages cold for up to 24 hours and hot for up to 12 hours.",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Capacity": "32 fl. oz (946 ml)",
      "Material": "18/8 Pro-Grade Stainless Steel",
      "Lid": "Leakproof Flex Straw Cap",
      "Insulation": "TempShield Double-Wall Vacuum",
      "Color": "Cobalt Blue",
      "BPA Free": "Yes"
    },
    reviews: [
      { id: 4201, user: "Dave J.", rating: 5, title: "Keeps ice solid all day", comment: "Left it in a hot car for 8 hours and there was still ice inside when I returned. Very durable powder coat finish.", date: "2026-06-14" }
    ]
  },
  {
    id: 43,
    name: "Spalding TF-1000 Classic Indoor Basketball (Size 7)",
    brand: "Spalding",
    category: "Sports",
    price: 5999,
    discountPercentage: 15,
    rating: 4.6,
    reviewsCount: 1540,
    stockStatus: "In Stock",
    salesCount: 6800,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "The tournament standard. Features deep channels, ZK microfiber composite leather cover for elite moisture management, and responsive cushion carcass structure.",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model": "TF-1000 Classic",
      "Size": "Official Size 7 (29.5\" circumference)",
      "Material": "ZK Microfiber Composite Leather",
      "Court Type": "Indoor Court Use Only",
      "Shipped": "Fully Inflated"
    },
    reviews: [
      { id: 4301, user: "Coach Mike", rating: 5, title: "Best indoor game ball", comment: "The grip is incredible even when hands get sweaty. Bounces true and has excellent durability.", date: "2026-05-18" }
    ]
  },
  {
    id: 44,
    name: "Premium Resistance Loop Exercise Bands Set",
    brand: "FitSimplify",
    category: "Sports",
    price: 699,
    discountPercentage: 20,
    rating: 4.5,
    reviewsCount: 84300,
    stockStatus: "In Stock",
    salesCount: 125000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "Set of 5 heavy-duty natural latex resistance loop bands. Includes carry bag and instruction booklet. Levels range from Extra Light to Extra Heavy.",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Count": "5 Bands in set",
      "Material": "100% Eco-friendly Natural Latex",
      "Band Length": "12 inches",
      "Width": "2 inches",
      "Include": "Carrying pouch, E-Book guide"
    },
    reviews: [
      { id: 4401, user: "Kelsey P.", rating: 5, title: "Great value, sturdy bands", comment: "They do not roll up during leg workouts like cheap bands do. The varied strengths are very useful.", date: "2026-06-10" }
    ]
  },
  {
    id: 45,
    name: "CeraVe Hydrating Facial Cleanser (16 fl. oz)",
    brand: "CeraVe",
    category: "Beauty",
    price: 1299,
    discountPercentage: 10,
    rating: 4.7,
    reviewsCount: 19800,
    stockStatus: "In Stock",
    salesCount: 65000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "Non-foaming face wash formulated with three essential ceramides (1, 3, 6-II) and hyaluronic acid to cleanse and hydrate dry skin without stripping moisture.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Volume": "16 fl. oz (473 ml)",
      "Skin Type": "Normal to Dry Skin",
      "Key Ingredients": "Ceramides, Hyaluronic Acid",
      "Fragrance": "Fragrance-free",
      "Dermatologist Approved": "Yes"
    },
    reviews: [
      { id: 4501, user: "Leo R.", rating: 5, title: "Saves my dry skin", comment: "Highly recommended by my dermatologist. It cleanses well without leaving my skin feeling tight or dry.", date: "2026-06-24" }
    ]
  },
  {
    id: 46,
    name: "Laneige Lip Sleeping Mask (Berry Flavor)",
    brand: "Laneige",
    category: "Beauty",
    price: 1490,
    discountPercentage: 5,
    rating: 4.8,
    reviewsCount: 11200,
    stockStatus: "In Stock",
    salesCount: 42000,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "An intensive treatment lip mask that targets dryness. Formulated with Berry Mix Complex, Vitamin C, and antioxidants to reveal smooth, supple lips by morning.",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Weight": "20 grams (0.7 oz)",
      "Flavor": "Berry",
      "Use": "Overnight leave-on mask",
      "Spatula": "Included in box"
    },
    reviews: [
      { id: 4601, user: "Mia H.", rating: 5, title: "Miracle lip balm", comment: "I put it on before bed and wake up with completely soft lips. One jar lasts forever.", date: "2026-06-29" }
    ]
  },
  {
    id: 47,
    name: "COSRX Snail Mucin 96% Power Repairing Essence",
    brand: "COSRX",
    category: "Beauty",
    price: 1450,
    discountPercentage: 20,
    rating: 4.6,
    reviewsCount: 22400,
    stockStatus: "In Stock",
    salesCount: 88000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Formulated with 96.3% Snail Secretion Filtrate, this essence protects the skin from moisture loss while improving skin elasticity and soothing dry patches.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Volume": "100 ml (3.38 fl. oz)",
      "Snail Mucin Content": "96.3%",
      "Texture": "Lightweight, viscous gel",
      "Skin Concerns": "Dehydration, Dullness, Redness"
    },
    reviews: [
      { id: 4701, user: "Tina K.", rating: 5, title: "The glow is real!", comment: "Makes my skin look so glass-like and smooth. Absorbs quickly and doesn't clog my pores.", date: "2026-05-19" }
    ]
  },
  {
    id: 48,
    name: "LEGO Architecture London Skyline Building Kit",
    brand: "LEGO",
    category: "Toys",
    price: 3499,
    discountPercentage: 10,
    rating: 4.7,
    reviewsCount: 3820,
    stockStatus: "In Stock",
    salesCount: 8900,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Build a detailed model of the London skyline, featuring the National Gallery, Nelson's Column, London Eye, Big Ben and Tower Bridge.",
    images: [
      "https://images.unsplash.com/photo-1585366119957-e5730f3d5827?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Model Number": "21034",
      "Piece Count": "468 Pieces",
      "Dimensions": "Over 5\" high, 11\" wide and 3\" deep",
      "Skyline Includes": "London Eye, Tower Bridge, Big Ben, Nelson's Column",
      "Age": "12+ Years"
    },
    reviews: [
      { id: 4801, user: "Nigel T.", rating: 5, title: "Beautiful display piece", comment: "Fun to build and looks wonderful on my office desk. The booklet includes history of each building.", date: "2026-06-12" }
    ]
  },
  {
    id: 49,
    name: "Hasbro Jenga Classic Wood Block Stacking Game",
    brand: "Hasbro",
    category: "Toys",
    price: 999,
    discountPercentage: 20,
    rating: 4.8,
    reviewsCount: 24500,
    stockStatus: "In Stock",
    salesCount: 110000,
    isNewArrival: false,
    deliveryInfo: "FREE delivery Sunday on ₹499+ orders",
    description: "The classic block balancing game. Pull out a block, place it on top, but don't let the tower fall! Simple, classic, and great for family game nights.",
    images: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Game": "Jenga Classic",
      "Blocks Count": "54 hardwood blocks",
      "Players": "1 or more players",
      "Setup Sleeve": "Included to build tower"
    },
    reviews: [
      { id: 4901, user: "FamilyGuy", rating: 5, title: "Always a hit at parties", comment: "Simple rules, suspenseful, and everyone can play from toddlers to grandparents.", date: "2026-06-27" }
    ]
  },
  {
    id: 50,
    name: "Catan Board Game (5th Edition)",
    brand: "Asmodee",
    category: "Toys",
    price: 3499,
    discountPercentage: 18,
    rating: 4.8,
    reviewsCount: 14500,
    stockStatus: "In Stock",
    salesCount: 42000,
    isNewArrival: true,
    deliveryInfo: "FREE delivery Tomorrow, July 5",
    description: "Guide your settlers to victory through clever trading and development. Trade resource cards (grain, wool, ore, brick, lumber) to buy roads, settlements, and cities.",
    images: [
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
    ],
    specifications: {
      "Game": "Catan (Settlers of Catan)",
      "Players": "3 to 4 players (Up to 6 with expansion)",
      "Game Duration": "60 to 90 minutes",
      "Components": "Hexagonal tiles, dice, tokens, cards, wooden pieces"
    },
    reviews: [
      { id: 5001, user: "BoardGameNerd", rating: 5, title: "The gateway board game", comment: "The perfect introduction to modern board gaming. Easy to learn, deeply strategic, and different every time.", date: "2026-06-20" }
    ]
  }
];
