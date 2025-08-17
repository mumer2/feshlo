import { useParams } from 'react-router-dom';
import { collections } from '../data/products';

export default function CollectionPage() {
  const { slug } = useParams();
  const collection = collections.find(c => c.slug === slug);

  if (!collection) return <p className="p-4">Collection not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 my-12">
      <h1 className="text-3xl font-bold mb-6">{collection.name}</h1>
      <img src={collection.image} alt={collection.name} className="w-full rounded-lg mb-6" />
      <p>Products from {collection.name} will go here...</p>
    </div>
  );
}
