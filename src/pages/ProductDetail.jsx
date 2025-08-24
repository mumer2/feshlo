// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(""); // ✅ store size
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <p className="text-center mt-10">❌ Product not found</p>;

  const stock = Number(product.quantity ?? product.stock ?? Infinity);

  // handle quantity change safely
  const onQtyChange = (val) => {
    const n = Math.max(1, Number(val) || 1);
    setQuantity(Math.min(n, stock));
  };

  // ✅ Add to cart with size
  const handleAddToCart = () => {
    if (product.sizes?.length && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart(product, quantity, selectedSize); // pass size separately
    navigate("/cart");
  };

  // ✅ Buy now with size
  const handleBuyNow = () => {
    if (product.sizes?.length && !selectedSize) {
      alert("Please select a size before buying.");
      return;
    }
    clearCart();
    addToCart(product, quantity, selectedSize); // pass size separately
    navigate("/checkout");
  };

  const discount =
    product.salePrice && product.price
      ? Math.round(((product.price - product.salePrice) / product.price) * 100)
      : 0;

  const images = product.images || [product.image];

  const prevImage = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextImage();
    if (touchEndX - touchStartX > 50) prevImage();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IMAGE SLIDER */}
      <div className="relative">
  {/* Main Image */}
  <div className="relative w-full h-[500px] rounded-lg shadow-md">
    <img
      src={images[activeImage]}
      alt={product.name}
      className="w-full h-full object-cover rounded-lg transition-all duration-500"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    />

    {/* Arrows */}
    {images.length > 1 && (
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={prevImage}
          className="bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
        >
          {"<"}
        </button>
        <button
          onClick={nextImage}
          className="bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition"
        >
          {">"}
        </button>
      </div>
    )}
  </div>

  {/* Thumbnails */}
  <div className="flex mt-4 space-x-3 overflow-x-auto">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`thumb-${index}`}
        className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
          index === activeImage ? "border-black" : "border-transparent"
        }`}
        onClick={() => setActiveImage(index)}
      />
    ))}
  </div>
</div>

      {/* <div className="relative">
        <img
          src={images[activeImage]}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-lg shadow-md transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute font-bold w-10 top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute font-bold w-10 top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
            >
              {">"}
            </button>
          </>
        )}

        <div className="flex mt-4 space-x-3 overflow-x-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
                index === activeImage ? "border-black" : "border-transparent"
              }`}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div> */}

      {/* PRODUCT INFO */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* ✅ Product Code */}
        <p className="text-gray-500 text-sm mt-1">
          Product Code:{" "}
          <span className="font-mono">{product.code || product.id}</span>
        </p>

        {product.salePrice ? (
          <div className="mt-4">
            <span className="text-2xl font-bold text-green-700">
              Rs {product.salePrice.toLocaleString()}
            </span>
            <span className="line-through text-gray-500 ml-3">
              Rs {product.price.toLocaleString()}
            </span>
            <span className="text-sm text-red-600 ml-3">{discount}% OFF</span>
          </div>
        ) : (
          <div className="mt-4 text-2xl font-bold">
            Rs {product.price.toLocaleString()}
          </div>
        )}

        <p className="mt-3 text-blue-600 font-semibold">
          Available Quantity: {stock}
        </p>

        {/* ✅ SIZE SELECTOR */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-4">
            <label className="text-gray-700 font-medium block mb-2">
              Select Size:
            </label>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {stock > 0 && (
          <div className="mt-4 flex items-center space-x-3">
            <label className="text-gray-700 font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              max={stock}
              value={quantity}
              onChange={(e) => onQtyChange(e.target.value)}
              className="w-20 border rounded px-2 py-1"
            />
          </div>
        )}

        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-black text-white rounded"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="px-6 py-2 bg-red-600 text-white rounded"
          >
            Buy Now
          </button>
        </div>

        {/* <div className="mt-6">
          <h2 className="text-lg font-semibold">Product Description</h2>
          <p className="mt-2 text-gray-600">
            {product.description || "No description available."}
          </p>
        </div> */}

        <div className="mt-6">
  <h2 className="text-lg font-semibold">Product Description</h2>

  {Array.isArray(product.description) ? (
    product.description.map((section, index) => (
      <div key={index} className="mt-4">
        <h3 className="text-md font-semibold text-gray-800">{section.heading}</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
          {section.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))
  ) : (
    <p className="mt-2 text-gray-600">
      {product.description || "No description available."}
    </p>
  )}
</div>
      </div>
    </div>
  );
}







// // src/pages/ProductDetail.jsx
// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === String(id));
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const [activeImage, setActiveImage] = useState(0);

//   if (!product) return <p className="text-center mt-10">❌ Product not found</p>;

//   const stock = Number(product.quantity ?? product.stock ?? Infinity);

//   const onQtyChange = (val) => {
//     const n = Math.max(1, Number(val) || 1);
//     setQuantity(Math.min(n, stock));
//   };

//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//     navigate("/cart");
//   };

//   const handleBuyNow = () => {
//     clearCart();
//     addToCart(product, quantity);
//     navigate("/checkout");
//   };

//   const discount =
//     product.salePrice && product.price
//       ? Math.round(((product.price - product.salePrice) / product.price) * 100)
//       : 0;

//   const images = product.images || [product.image];

//   const prevImage = () =>
//     setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   const nextImage = () =>
//     setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//   let touchStartX = 0;
//   let touchEndX = 0;

//   const handleTouchStart = (e) => {
//     touchStartX = e.changedTouches[0].screenX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX = e.changedTouches[0].screenX;
//     if (touchStartX - touchEndX > 50) nextImage();
//     if (touchEndX - touchStartX > 50) prevImage();
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* IMAGE SLIDER */}
//       <div className="relative">
//         <img
//           src={images[activeImage]}
//           alt={product.name}
//           className="w-full h-[500px] object-cover rounded-lg shadow-md transition-all duration-500"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         />

//         {images.length > 1 && (
//           <>
//             <button
//               onClick={prevImage}
//               className="absolute font-bold w-10 top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
//             >
//               {"<"}
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute font-bold w-10 top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
//             >
//               {">"}
//             </button>
//           </>
//         )}

//         <div className="flex mt-4 space-x-3 overflow-x-auto">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`thumb-${index}`}
//               className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
//                 index === activeImage ? "border-black" : "border-transparent"
//               }`}
//               onClick={() => setActiveImage(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* PRODUCT INFO */}
//       <div>
//         <h1 className="text-3xl font-bold">{product.name}</h1>

//         {/* ✅ Product Code */}
//         <p className="text-gray-500 text-sm mt-1">
//           Product Code: <span className="font-mono">{product.code || product.id}</span>
//         </p>

//         {product.salePrice ? (
//           <div className="mt-4">
//             <span className="text-2xl font-bold text-green-700">
//               Rs {product.salePrice.toLocaleString()}
//             </span>
//             <span className="line-through text-gray-500 ml-3">
//               Rs {product.price.toLocaleString()}
//             </span>
//             <span className="text-sm text-red-600 ml-3">{discount}% OFF</span>
//           </div>
//         ) : (
//           <div className="mt-4 text-2xl font-bold">
//             Rs {product.price.toLocaleString()}
//           </div>
//         )}

//         <p className="mt-3 text-blue-600 font-semibold">
//           Available Quantity: {stock}
//         </p>

//         {stock > 0 && (
//           <div className="mt-4 flex items-center space-x-3">
//             <label className="text-gray-700 font-medium">Quantity:</label>
//             <input
//               type="number"
//               min="1"
//               max={stock}
//               value={quantity}
//               onChange={(e) => onQtyChange(e.target.value)}
//               className="w-20 border rounded px-2 py-1"
//             />
//           </div>
//         )}

//         <div className="mt-6 flex space-x-4">
//           <button
//             onClick={handleAddToCart}
//             className="px-6 py-2 bg-black text-white rounded"
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={handleBuyNow}
//             className="px-6 py-2 bg-red-600 text-white rounded"
//           >
//             Buy Now
//           </button>
//         </div>

//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Product Description</h2>
//           <p className="mt-2 text-gray-600">
//             {product.description || "No description available."}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }







// // src/pages/ProductDetail.jsx
// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { products } from "../data/products";
// import { useCart } from "../context/CartContext";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === String(id));
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart, clearCart } = useCart();
//   const navigate = useNavigate();

//   if (!product) return <p className="text-center mt-10">❌ Product not found</p>;

//   const stock = Number(product.quantity ?? product.stock ?? Infinity);

//   // ensure quantity never exceeds stock
//   const onQtyChange = (val) => {
//     const n = Math.max(1, Number(val) || 1);
//     setQuantity(Math.min(n, stock));
//   };

//   const handleAddToCart = () => {
//     addToCart(product, quantity); // pass selected quantity
//     navigate("/cart");
//   };

//   const handleBuyNow = () => {
//     clearCart();
//     addToCart(product, quantity);
//     navigate("/checkout");
//   };

//   const discount =
//     product.salePrice && product.price
//       ? Math.round(((product.price - product.salePrice) / product.price) * 100)
//       : 0;

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//       <div>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-[500px] object-cover rounded-lg shadow-md"
//         />
//       </div>

//       <div>
//         <h1 className="text-3xl font-bold">{product.name}</h1>

//         {product.salePrice ? (
//           <div className="mt-4">
//             <span className="text-2xl font-bold text-green-700">
//               Rs {product.salePrice.toLocaleString()}
//             </span>
//             <span className="line-through text-gray-500 ml-3">
//               Rs {product.price.toLocaleString()}
//             </span>
//             <span className="text-sm text-red-600 ml-3">{discount}% OFF</span>
//           </div>
//         ) : (
//           <div className="mt-4 text-2xl font-bold">Rs {product.price.toLocaleString()}</div>
//         )}

//         <p className="mt-3 text-blue-600 font-semibold">Available Quantity: {stock}</p>

//         {stock > 0 && (
//           <div className="mt-4 flex items-center space-x-3">
//             <label className="text-gray-700 font-medium">Quantity:</label>
//             <input
//               type="number"
//               min="1"
//               max={stock}
//               value={quantity}
//               onChange={(e) => onQtyChange(e.target.value)}
//               className="w-20 border rounded px-2 py-1"
//             />
//           </div>
//         )}

//         <div className="mt-6 flex space-x-4">
//           <button onClick={handleAddToCart} className="px-6 py-2 bg-black text-white rounded">
//             Add to Cart
//           </button>
//           <button onClick={handleBuyNow} className="px-6 py-2 bg-red-600 text-white rounded">
//             Buy Now
//           </button>
//         </div>

//         <div className="mt-6">
//           <h2 className="text-lg font-semibold">Product Description</h2>
//           <p className="mt-2 text-gray-600">{product.description || "No description available."}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
