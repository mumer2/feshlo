import { useState } from "react";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name,
      comment,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 border rounded-2xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          rows="3"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first!</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="p-3 border rounded-lg bg-gray-50 shadow-sm"
            >
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
