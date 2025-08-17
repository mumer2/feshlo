// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <p className="text-center mt-10">❌ Product not found</p>;

  const stock = Number(product.quantity ?? product.stock ?? Infinity);

  // ensure quantity never exceeds stock
  const onQtyChange = (val) => {
    const n = Math.max(1, Number(val) || 1);
    setQuantity(Math.min(n, stock));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // pass selected quantity
    navigate("/cart");
  };

  const handleBuyNow = () => {
    clearCart();
    addToCart(product, quantity);
    navigate("/checkout");
  };

  const discount =
    product.salePrice && product.price
      ? Math.round(((product.price - product.salePrice) / product.price) * 100)
      : 0;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

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
          <div className="mt-4 text-2xl font-bold">Rs {product.price.toLocaleString()}</div>
        )}

        <p className="mt-3 text-blue-600 font-semibold">Available Quantity: {stock}</p>

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
          <button onClick={handleAddToCart} className="px-6 py-2 bg-black text-white rounded">
            Add to Cart
          </button>
          <button onClick={handleBuyNow} className="px-6 py-2 bg-red-600 text-white rounded">
            Buy Now
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Product Description</h2>
          <p className="mt-2 text-gray-600">{product.description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
}
