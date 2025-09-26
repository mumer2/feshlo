//Mens Casual Shirts
import MCS1 from "../assets/CasualShirt/Mens-CasualShirts.webp";
import MCS1_1 from "../assets/CasualShirt/Mens-CasualShirts1.webp";
import MCS1_2 from "../assets/CasualShirt/Mens-CasualShirts2.webp";
import MCS1_3 from "../assets/CasualShirt/Mens-CasualShirts3.webp";

// Watches
import W1 from "../assets/Watches/W1.jpeg";
import W1_1 from "../assets/Watches/W1-1.jpeg";

import W2 from "../assets/Watches/W2.jpeg";
import W2_1 from "../assets/Watches/W2-1.jpeg";
import W2_2 from "../assets/Watches/W2-2.jpeg";
import W2_3 from "../assets/Watches/W2-3.jpeg";

import W3 from "../assets/Watches/W3.webp";
import W3_1 from "../assets/Watches/W3-1.webp";
import W3_2 from "../assets/Watches/W3-2.webp";

import W4 from "../assets/Watches/W4.jpeg";
import W4_1 from "../assets/Watches/W4-1.jpeg";
import W4_2 from "../assets/Watches/W4-2.jpeg";
import W4_3 from "../assets/Watches/W4-3.jpeg";

import W5 from "../assets/Watches/girlswatch1.webp";
import W5_1 from "../assets/Watches/girlswatch.webp";
import W5_2 from "../assets/Watches/girlswatch2.webp";

import W6 from "../assets/Watches/Hublot.webp";
import W6_1 from "../assets/Watches/Hublot-1.webp";
import W6_2 from "../assets/Watches/Hublot-2.webp";






export const products = [
// Mens Casual Shirts
  {
    id: 'MCS1', 
    name: 'Mens Gingham Check Shirt for Casual & Smart Casual Wear',         
    price: 5499, 
    salePrice: 4250, 
    quantity: 25,
    sizes: ["M", "L"], // ✅ only this product has sizes
    image: MCS1,
    hoverImage: MCS1_2,
     images: [
      MCS1,
      MCS1_1,
      MCS1_2,
      MCS1_3,
    ],
    
    collections: ['MCS','MFS'],
    categories:['casual-shirt','formal-shirt'],
   description: [
    {
      heading: "Specifications",
      points: [
        "Brand: Feshlo",
        "Style: Gingham Check",
        "Fit: Regular Fit",
        "Collar: Button-Down",
        "Sleeve Length: Long Sleeve",
        "Material: Premium, breathable fabric"
      ]
    },
    {
      heading: "Design & Details",
      points: [
        "Timeless and versatile checkered pattern",
        "Meticulous stitching and quality construction",
        "Effortless style for casual or smart-casual wear",
        "Durable and comfortable for all-day wear"
      ]
    }
  ]

  },



  // Watches
  {
    id: 'W1', 
    name: 'Luxury Golden Diamond Texture Dial Mens Watch – Stylish Analog Watch for Casual & Formal Wear',         
    price: 3800, 
    salePrice: 1950, 
    quantity: 25,
    image: W1,
    hoverImage: W1_1,
     images: [
      W1,
      W1_1,
    ],
    
    collection: 'watch',
    category:'watches',
    description: [
        {
    heading: "Specifications",
    points: [
      "Brand: Positif",
      "Dial Color: Golden",
      "Strap Material: Stainless Steel",
      "Strap Color: Golden",
      "Movement: Quartz",
      "Display: Analog",
      "Dual Time: Yes",
      "Clasp Type: Folding Clasp",
      "Style: Fashion, Business, Daily Wear"
    ]
  },
  {
    heading: "Design & Details",
    points: [
      "Diamond Shape Texture",
      "Golden Straps",
      "Furnished with White Stones"
    ]
  }
]

  },

   {
    id: 'W2', 
    name: 'Luxury Mens Watch Stylish Black Dial and Brown shade with Stainless Steel Strap',         
    price: 3500, 
    salePrice: 1650, 
    quantity: 25,
    image: W2,
    hoverImage: W2_2,
     images: [
      W2,
      W2_1,W2_2,W2_3
    ],
    
    collection: 'watch',
    category:'watches',
   description: [
  {
    heading: "Specifications",
    points: [
      "Brand: Positif",
      "Dial Color: Black",
      "Strap Material: Stainless Steel",
      "Strap Color: Silver",
      "Movement: Quartz",
      "Display: Analog",
      "Dual Time: Yes",
      "Sub-Dials: Decorative (Non-Functional)",
      "Clasp Type: Folding Clasp",
      "Style: Fashion, Business, Daily Wear"
    ]
  },
  {
    heading: "Features",
    points: [
      "Durable stainless steel strap.",
      "Perfect for casual and formal wear.",
    ]
  }
]

  },
  
   {
    id: 'W3', 
    name: 'KADMAN Mens Watch - Stylish Black Dial Stainless Steel Red Accent Timepiece for Modern Gents',         
    price: 3500, 
    salePrice: 1750, 
    quantity: 25,
    image: W3,
    hoverImage: W3_1,
     images: [
      W3,
      W3_1,W3_2,
    ],
    
    collection: 'watch',
    category:'watches',
  description: [
  {
    heading: "Specifications",
    points: [
      "Brand: KADMAN",
      "Dial Color: Black",
      "Strap Material: Stainless Steel",
      "Strap Color: Black",
      "Watch Case Material: Stainless Steel",
      "Water Resistance: Not specified"
    ]
  },
  {
    heading: "Product Overview",
    points: [
      "Elevate your style with the KADMAN Men's Watch, a sophisticated timepiece that combines elegance with modern design.",
      "Featuring a striking black dial with red accents, this watch is perfect for the contemporary man who values both form and function."
    ]
  },
  {
    heading: "Why Buy from Us?",
    points: [
      "High-Quality Product: We offer genuine KADMAN products, ensuring you receive a watch that meets the highest standards of quality and craftsmanship.",
      "Competitive Pricing: Our prices are competitive, making it easy to stay within your budget without compromising on style or quality.",
      "Excellent Customer Service: Our dedicated customer support team is here to assist you with any questions or concerns you may have."
    ]
  },
  {
    heading: "Order Now",
    points: [
      "Order now and experience the KADMAN difference!"
    ]
  }
]
  },

   {
    id: 'W4', 
    name: 'Stylish Mens Blue Dial Quartz Watch – Stylish Stainless Steel Wristwatch for Mens',         
    price: 3500, 
    salePrice: 1700, 
    quantity: 25,
    image: W4,
    hoverImage: W4_1,
     images: [
      W4,
      W4_1,W4_2,W4_3
    ],
    
    collection: 'watch',
    category:'watches',
   description: [
 {
    heading: "Key Features",
    points: [
      "Movement: Quartz",
      "Dial Color: Blue with texture finish",
      "Strap: Stainless Steel",
      "Display: Analog",
      "Water Resistance: Splash Resistant",
      "Origin: Swiss Made",
      "Ideal for: Men / Gents",
      "Occasion: Business, Casual, Formal"
    ]
  },
  {
    heading: "Product Overview",
    points: [
      "This beautiful wristwatch for men is a timeless piece that adds a premium touch to your outfit.",
      "A perfect gift for birthdays, anniversaries, or special events."
    ]
  }
]

  },


    {
    id: 'W5', 
    name: 'Stylish Floral Quartz Ladies Watch – Aqua Green Strap | Women Watches| Watch for Women',         
    price: 1999, 
    salePrice: 999, 
    quantity: 25,
    image: W5,
    hoverImage: W5_1,
     images: [
      W5,
      W5_1,W5_2
    ],
    
    collection: 'watch',
    category:'watches',
   description: [
 {
    heading: "Key Features",
    points: [
      "Elegant floral dial design",

"Aqua green durable silicone strap",

"Precise quartz movement",

"Lightweight and comfortable",

"Adjustable buckle clasp",

"Perfect for casual and formal wear",

"Ideal gift option for women",
    ]
  },
  {
    heading: "Product Overview",
    points: [
      "This beautiful wristwatch for women is a timeless piece that adds a premium touch to your outfit.",
      "A perfect gift for birthdays, anniversaries, or special events."
    ]
  }
]

  },


  {
    id: 'W6', 
    name: 'Luxury Hublot Style Chronograph Watch for Men – Premium Design with Rubber Strap',         
    price: 3599, 
    salePrice: 1999, 
    quantity: 0,
    image: W6,
    hoverImage: W6_2,
     images: [
      W6,
      W6_1,W6_2
    ],
    
    collection: 'watch',
    category:'watches',
   description: [
 {
    heading: "Key Features",
    points: [
     " Dial Shape: Round",

"Display: Analog",

"Strap Material: Rubber",

"Dial Color: Black",

"Strap Color: Black",

"Movement: Quartz",

"Style: Business, Casual, Fashion",
    ]
  },
  {
    heading: "Product Overview",
    points: [
      "Upgrade your style with this luxury Hublot-style chronograph men's watch – a perfect blend of class and functionality. Designed with a sleek stainless steel casing and a textured black dial, this timepiece adds a bold and modern touch to any outfit.",
      "A perfect gift for birthdays, anniversaries, or special events."
    ]
  }
]

  },



  // Watch End
  // { 
  //   id: 'p1', 
  //   name: 'Classic Tee',    
  //   price: 1999, 
  //   salePrice: 999, 
  //   quantity: 10,
  //   image: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'mens',
  //   category: 'mens-stitched',
  //   description: 'A timeless classic tee made from 100% organic cotton for everyday comfort.'
  // },
  // { 
  //   id: 'p2', 
  //   name: 'Mens Denim Jacket',   
  //   price: 4999, 
  //   salePrice: 3499, 
  //   quantity: 5,
  //   image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'mens',
  //   category: 'mens-stitched',
  //   description: 'A stylish denim jacket perfect for layering all year round.',
  //   sizes: ["S", "M", "L"], // ✅ only this product has sizes
  // },
  // { 
  //   id: 'p3', 
  //   name: 'Shalwar Kameez',   
  //   price: 3999, 
  //   salePrice: 2999, 
  //   quantity: 15,
  //   image: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'mens',
  //   category: 'mens-unstitched',  // ✅ fixed typo
  //   description: 'Traditional unstitched shalwar kameez fabric for custom tailoring.'
  // },
  // { 
  //   id: 'p4', 
  //   name: 'Running Shoes',  
  //   price: 6999, 
  //   salePrice: 4999, 
  //   quantity: 20,
  //   image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'mens',
  //   category: 'mens-stitched',
  //   description: 'Lightweight and breathable running shoes for maximum performance.'
  // },
  // { 
  //   id: 'p5', 
  //   name: 'Summer Dress',   
  //   price: 3999, 
  //   salePrice: 2999, 
  //   quantity: 12,
  //   image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'womens',
  //   category: 'womens',
  //   description: 'Flowy summer dress made with soft and breathable fabric.'
  // },
  // { 
  //   id: 'p6', 
  //   name: 'Leather Belt',   
  //   price: 1499, 
  //   salePrice: null, 
  //   quantity: 0,
  //   image: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'accessories',
  //   category: 'womens',
  //   description: 'Premium leather belt with a classic buckle, built to last.'
  // },
  // { 
  //   id: 'p7', 
  //   name: 'Beanie',         
  //   price: 999, 
  //   salePrice: null, 
  //   quantity: 25,
  //   image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?w=1200&auto=format&fit=crop',
  //   hoverImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
  //   collection: 'accessories',
  //   category: 'womens',
  //   description: 'Cozy knit beanie to keep you warm during colder months.'
  // },
];
