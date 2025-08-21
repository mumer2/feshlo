// ProductList.jsx
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import OrderModal from "./OrderModal";
import Review from "./Review"; // Import Review component

export default function ProductList({
  showTitle = true,
  searchQuery = "",
  collection = "",
  category = "",
}) {
  const [selected, setSelected] = useState(null);

  // Filter products based on search query, collection, and category
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCollection = collection
      ? p.collection.toLowerCase() === collection.toLowerCase()
      : true;
    const matchesCategory = category
      ? p.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearch && matchesCollection && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 my-12">
      {showTitle && (
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">All Products</h2>
      )}

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onOrder={setSelected} />
          ))}
        </div>
      )}

      {selected && <OrderModal product={selected} onClose={() => setSelected(null)} />}

      {/* Reviews Section */}
      <div className="mt-20">
        <Review />
      </div>
    </section>
  );
}



// // ProductList.jsx
// import { useState } from "react";
// import { products } from "../data/products";
// import ProductCard from "./ProductCard";
// import OrderModal from "./OrderModal";

// export default function ProductList({ showTitle = true, searchQuery = "", collection = "", category = "" }) {
//   const [selected, setSelected] = useState(null);

//   // Filter products based on search query, collection, and category
//   const filteredProducts = products.filter((p) => {
//     const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCollection = collection ? p.collection.toLowerCase() === collection.toLowerCase() : true;
//     const matchesCategory = category ? p.category.toLowerCase() === category.toLowerCase() : true;

//     return matchesSearch && matchesCollection && matchesCategory;
//   });

//   return (
//     <section className="max-w-6xl mx-auto px-4 my-12">
//       {showTitle && <h2 className="text-2xl font-semibold mb-6">All Products</h2>}

//       {filteredProducts.length === 0 ? (
//         <p className="text-gray-500">No products found.</p>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
//           {filteredProducts.map((p) => (
//             <ProductCard key={p.id} product={p} onOrder={setSelected} />
//           ))}
//         </div>
//       )}

//       {selected && <OrderModal product={selected} onClose={() => setSelected(null)} />}
//     </section>
//   );
// }

