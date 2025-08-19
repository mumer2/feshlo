// ProductList.jsx
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import OrderModal from "./OrderModal";

export default function ProductList({ showTitle = true, searchQuery = "", collection = "" }) {
  const [selected, setSelected] = useState(null);

  // Filter products based on search query and collection
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCollection = collection ? p.collection === collection : true;
    return matchesSearch && matchesCollection;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 my-12">
      {showTitle && <h2 className="text-2xl font-semibold mb-6">All Products</h2>}

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onOrder={setSelected} />
          ))}
        </div>
      )}

      {selected && <OrderModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}


// // ProductList.jsx
// import { useState } from "react";
// import { products } from "../data/products";
// import ProductCard from "./ProductCard";
// import OrderModal from "./OrderModal";

// export default function ProductList({ showTitle = true, searchQuery = "" }) {
//   const [selected, setSelected] = useState(null);

//   // Filter products based on search query
//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <section className="max-w-6xl mx-auto px-4 my-12">
//       {showTitle && <h2 className="text-2xl font-semibold mb-6">All Products</h2>}

//       {filteredProducts.length === 0 ? (
//         <p className="text-gray-500">No products found.</p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((p) => (
//             <ProductCard key={p.id} product={p} onOrder={setSelected} />
//           ))}
//         </div>
//       )}

//       {selected && (
//         <OrderModal product={selected} onClose={() => setSelected(null)} />
//       )}
//     </section>
//   );
// }


// import { useState } from 'react';
// import { products } from '../data/products';
// import ProductCard from './ProductCard';
// import OrderModal from './OrderModal';

// export default function ProductList({ showTitle = true }){
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="max-w-6xl mx-auto px-4 my-12">
//       {showTitle && <h2 className="text-2xl font-semibold mb-6">All Products</h2>}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(p => <ProductCard key={p.id} product={p} onOrder={setSelected} />)}
//       </div>

//       {selected && <OrderModal product={selected} onClose={() => setSelected(null)} />}
//     </section>
//   );
// }
