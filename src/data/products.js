// Watches
import W1 from "../assets/Watches/W1.jpeg";
import W1_1 from "../assets/Watches/W1-1.jpeg";
import W2 from "../assets/Watches/W2.jpeg";
import W2_1 from "../assets/Watches/W2-1.jpeg";
import W2_2 from "../assets/Watches/W2-2.jpeg";
import W2_3 from "../assets/Watches/W2-3.jpeg";





export const products = [
  // Watches
  {
    id: 'W1', 
    name: 'Golden color beautiful Watch for Mens',         
    price: 3800, 
    salePrice: 1950, 
    quantity: 25,
    image: W1,
    hoverImage: W1_1,
     images: [
      W1,
      W1_1,
    ],
    
    collection: 'Accessories',
    category:'watches',
    description: 'Cozy knit beanie to keep you warm during colder months.'
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
      W2_1,W2_2,W2_3,
    ],
    
    collection: 'Accessories',
    category:'watches',
    description: [
    `Specifications:

Brand: Positif

Dial Color: Blue

Strap Material: Stainless Steel

Strap Color: Silver

Movement: Quartz

Display: Analog

Dual Time: Yes

Water Resistant: 100M (Not Guaranteed – Avoid Submerging)

Sub-Dials: Decorative (Non-Functional)

Clasp Type: Folding Clasp

Style: Fashion, Business, Daily Wear`,
    "Durable stainless steel strap.",
    "Perfect for casual and formal wear.",
    "Water-resistant up to 50 meters."
  ]
  },
  { 
    id: 'p1', 
    name: 'Classic Tee',    
    price: 1999, 
    salePrice: 999, 
    quantity: 10,
    image: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'mens',
    category: 'mens-stitched',
    description: 'A timeless classic tee made from 100% organic cotton for everyday comfort.'
  },
  { 
    id: 'p2', 
    name: 'Mens Denim Jacket',   
    price: 4999, 
    salePrice: 3499, 
    quantity: 5,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'mens',
    category: 'mens-stitched',
    description: 'A stylish denim jacket perfect for layering all year round.',
    sizes: ["S", "M", "L"], // ✅ only this product has sizes
  },
  { 
    id: 'p3', 
    name: 'Shalwar Kameez',   
    price: 3999, 
    salePrice: 2999, 
    quantity: 15,
    image: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'mens',
    category: 'mens-unstitched',  // ✅ fixed typo
    description: 'Traditional unstitched shalwar kameez fabric for custom tailoring.'
  },
  { 
    id: 'p4', 
    name: 'Running Shoes',  
    price: 6999, 
    salePrice: 4999, 
    quantity: 20,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'mens',
    category: 'mens-stitched',
    description: 'Lightweight and breathable running shoes for maximum performance.'
  },
  { 
    id: 'p5', 
    name: 'Summer Dress',   
    price: 3999, 
    salePrice: 2999, 
    quantity: 12,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'womens',
    category: 'womens',
    description: 'Flowy summer dress made with soft and breathable fabric.'
  },
  { 
    id: 'p6', 
    name: 'Leather Belt',   
    price: 1499, 
    salePrice: null, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'accessories',
    category: 'womens',
    description: 'Premium leather belt with a classic buckle, built to last.'
  },
  { 
    id: 'p7', 
    name: 'Beanie',         
    price: 999, 
    salePrice: null, 
    quantity: 25,
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    collection: 'accessories',
    category: 'womens',
    description: 'Cozy knit beanie to keep you warm during colder months.'
  },
];
