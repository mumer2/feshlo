import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { products } from "../data/products"; // ✅ product list

import logo from "../assets/FeshloLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useCart();
  const navigate = useNavigate();

  const linkBase = "block py-2 px-4 text-gray-700 hover:text-black transition";
  const linkActive = "block py-2 px-4 text-black font-semibold";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
  ];

  // ✅ total cart items
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // ✅ filter products live
  const results = searchTerm
    ? products.filter(
        (p) =>
          String(p.code).toLowerCase() === searchTerm.toLowerCase() ||
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // ✅ handle enter press
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Feshlo Logo" className="h-10 w-auto" />
          </Link>

          {/* <Link to="/" className="text-xl font-bold">
            Feshlo
          </Link> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? linkActive : linkBase)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* 🔍 Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-700 hover:text-black"
            >
              <FiSearch size={22} />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-black"
            >
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* ✅ Search Input + Results */}
        {searchOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b shadow-md p-3">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search by name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border px-3 py-2 rounded-md"
                autoFocus
              />
            </form>

            {/* Search Results */}
            {searchTerm && (
              <div className="mt-2 bg-white rounded shadow max-h-60 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        navigate(`/shop?search=${encodeURIComponent(p.name)}`);
                        setSearchOpen(false);
                        setSearchTerm("");
                      }}
                      className="w-full text-left block p-2 border-b last:border-none hover:bg-gray-100"
                    >
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-gray-500">Code: {p.code}</p>
                    </button>
                  ))
                ) : (
                  <p className="p-2 text-gray-500">No product found</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="flex flex-col border-t border-gray-200">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? linkActive : linkBase)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";
// import { FiShoppingCart } from "react-icons/fi";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cart } = useCart();

//   const linkBase = "block py-2 px-4 text-gray-700 hover:text-black transition";
//   const linkActive = "block py-2 px-4 text-black font-semibold";

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/shop", label: "Shop" },
//     { to: "/contact", label: "Contact" },
//   ];

//   // ✅ total cart items
//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
//       <div className="max-w-6xl mx-auto px-4">
//         <nav className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="text-xl font-bold">
//             Feshlo
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6">
//             {navLinks.map(({ to, label }) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 className={({ isActive }) => (isActive ? linkActive : linkBase)}
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             {/* Cart */}
//             <Link to="/cart" className="relative p-2 text-gray-700 hover:text-black">
//               <FiShoppingCart size={22} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden p-2 text-gray-700 hover:text-black"
//             >
//               {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Dropdown */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${
//             menuOpen ? "max-h-40" : "max-h-0"
//           }`}
//         >
//           <div className="flex flex-col border-t border-gray-200">
//             {navLinks.map(({ to, label }) => (
//               <NavLink
//                 key={to}
//                 to={to}
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) => (isActive ? linkActive : linkBase)}
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
