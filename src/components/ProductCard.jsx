import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  const discount =
    product.salePrice && product.price
      ? Math.round(((product.price - product.salePrice) / product.price) * 100)
      : 0;

  const isOutOfStock = product.quantity === 0;

  // toggle hover state on touch (mobile)
  const handleTouch = (e) => {
    e.preventDefault(); // prevent click triggering immediately
    setHovered(!hovered);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouch} // mobile tap
    >
      <div className="relative">
        <img
          src={hovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-all duration-300"
        />

        {isOutOfStock && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </span>
        )}

        {product.salePrice && !isOutOfStock && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <div className="flex items-center space-x-2">
          {product.salePrice ? (
            <>
              <span className="text-red-600 font-bold">
                ₹{(product.salePrice / 100).toFixed(2)}
              </span>
              <span className="line-through text-gray-500">
                ₹{(product.price / 100).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-bold">
              ₹{(product.price / 100).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
