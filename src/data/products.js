// export const collections = [
//   { id: 'c1', name: 'Men', image: 'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop' },
//   { id: 'c2', name: 'Women', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
//   { id: 'c3', name: 'Accessories', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
// ];

export const collections = [
  {
    id: 1,
    name: "Men's Collection",
    slug: "mens",
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: "Women's Collection",
    slug: "womens",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
  },
];


// export const products = [
//   { id: 'p1', name: 'Classic Tee',    price: 1999, image: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?q=80&w=1200&auto=format&fit=crop', category: 'Men' },
//   { id: 'p2', name: 'Denim Jacket',   price: 4999, image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop', category: 'Women' },
//   { id: 'p3', name: 'Leather Belt',   price: 1499, image: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?q=80&w=1200&auto=format&fit=crop', category: 'Accessories' },
//   { id: 'p4', name: 'Running Shoes',  price: 6999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop', category: 'Men' },
//   { id: 'p5', name: 'Summer Dress',   price: 3999, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop', category: 'Women' },
//   { id: 'p6', name: 'Beanie',         price:  999, image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?q=80&w=1200&auto=format&fit=crop', category: 'Accessories' },
// ];


export const products = [
  { 
    id: 'p1', 
    name: 'Classic Tee',    
    price: 1999, 
    salePrice: 999, 
    quantity: 10,
    image: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1520975940464-9bcd8b0885b3?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    category: 'Men',
    description: 'A timeless classic tee made from 100% organic cotton for everyday comfort.'
  },
  { 
    id: 'p2', 
    name: 'Denim Jacket',   
    price: 4999, 
    salePrice: 3499, 
    quantity: 5,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    category: 'Women',
    description: 'A stylish denim jacket perfect for layering all year round.'
  },
  { 
    id: 'p3', 
    name: 'Leather Belt',   
    price: 1499, 
    salePrice: null, 
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1600687812155-8fa274dfa58b?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    category: 'Accessories',
    description: 'Premium leather belt with a classic buckle, built to last.'
  },
  { 
    id: 'p4', 
    name: 'Running Shoes',  
    price: 6999, 
    salePrice: 4999, 
    quantity: 20,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    category: 'Men',
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
    category: 'Women',
    description: 'Flowy summer dress made with soft and breathable fabric.'
  },
  { 
    id: 'p6', 
    name: 'Beanie',         
    price: 999, 
    salePrice: null, 
    quantity: 25,
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6dd?crop=entropy&cs=tinysrgb&w=1200&h=1200&fit=crop',
    category: 'Accessories',
    description: 'Cozy knit beanie to keep you warm during colder months.'
  },
];
