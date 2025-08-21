import React, { useState, useEffect, useRef } from "react";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const reviewsContainer = useRef(null);
  const FUNCTION_URL =
    "https://feshlo-backend.netlify.app/.netlify/functions/reviews";

  const fetchReviews = async () => {
    try {
      const res = await fetch(FUNCTION_URL);
      if (!res.ok) throw new Error("Failed to fetch reviews");
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text) return;

    setSubmitting(true);
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text }),
      });

      const data = await res.json();

      if (data.success) {
        setReviews((prev) => [data.review, ...prev]);
        setName("");
        setText("");
        if (reviewsContainer.current) {
          reviewsContainer.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    } catch (err) {
      console.error("Error submitting review:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // Auto-scroll effect
  useEffect(() => {
    const container = reviewsContainer.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    let animationFrameId;

    const scrollReviews = () => {
      if (!container) return;
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // Reset scroll to start
      }
      container.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scrollReviews);
    };

    animationFrameId = requestAnimationFrame(scrollReviews);

    return () => cancelAnimationFrame(animationFrameId);
  }, [reviews]);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
          Customer Reviews
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          {loading ? "Loading reviews..." : `Total Reviews: ${reviews.length}`}
        </p>

        {/* Form */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Write your review..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full sm:flex-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={submitting}
              className={`bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-600 transition ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Reviews */}
        {reviews.length === 0 && !loading ? (
          <p className="text-center text-gray-500">No reviews yet. Be the first!</p>
        ) : (
          <div
            ref={reviewsContainer}
            className="flex overflow-x-auto gap-3 sm:gap-4 py-2 scroll-smooth px-1"
          >
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="min-w-[200px] sm:min-w-[240px] md:min-w-[250px] bg-white rounded-lg shadow-md p-3 sm:p-5 flex-shrink-0 hover:shadow-xl transition"
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-2 sm:mr-3 text-xs sm:text-sm">
                    {getInitials(rev.name)}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                    {rev.name}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{rev.text}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 truncate">
                  {new Date(rev.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
