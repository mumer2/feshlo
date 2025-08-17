import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import OrderModal from './OrderModal';

export default function ProductList({ showTitle = true }){
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-4 my-12">
      {showTitle && <h2 className="text-2xl font-semibold mb-6">All Products</h2>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} onOrder={setSelected} />)}
      </div>

      {selected && <OrderModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
