// Shop.jsx
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  return <ProductList showTitle={false} searchQuery={searchQuery} />;
}

// import ProductList from '../components/ProductList';
// export default function Shop(){ return <ProductList showTitle={false} />; }
