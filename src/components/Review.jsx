import React, { useState, useEffect, useRef } from "react";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0); // ⭐ rating state
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const reviewsContainer = useRef(null);
  const FUNCTION_URL =
    "https://feshlo-backend.netlify.app/.netlify/functions/reviews";

  // 🔹 Fetch reviews
  const fetchReviews = async () => {
    try {
      const res = await fetch(FUNCTION_URL);
      if (!res.ok) throw new Error("Failed to fetch reviews");
      const data = await res.json();

      if (Array.isArray(data)) {
        setReviews(data);
      } else {
        setReviews([]);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // 🔹 Submit review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text || rating === 0) return;

    setSubmitting(true);
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text, rating }),
      });

      const data = await res.json();

      if (data.success) {
        // Prepend new review
        setReviews((prev) => [data.review, ...prev]);
        setName("");
        setText("");
        setRating(0);

        // Auto-scroll to top
        if (reviewsContainer.current) {
          reviewsContainer.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } catch (err) {
      console.error("Error submitting review:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // 🔹 Helper: initials
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // 🔹 Render stars
  const renderStars = (stars) =>
    [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={i < stars ? "gold" : "lightgray"}
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.285 3.947c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.785.57-1.84-.196-1.54-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.08 9.373c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.283-3.946z" />
      </svg>
    ));

  // 🔹 Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
          Customer Reviews
        </h1>

        {/* ⭐ Rating Summary */}
        {!loading && reviews.length > 0 && (
          <div className="flex flex-col items-center mb-6">
           <p className="text-gray-500 text-sm sm:text-base">
              Total Reviews:  {reviews.length}
            </p>
            <div className="flex items-center">
              {renderStars(Math.round(averageRating))}
              <span className="ml-2 text-lg font-semibold text-gray-700">
                {averageRating} / 5
              </span>
            </div>
           
          </div>
        )}

        {loading && (
          <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
            Loading reviews...
          </p>
        )}

        {/* Review Form */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <form
            className="flex flex-col gap-3 sm:gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              required
            />
            <textarea
              placeholder="Write your review..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              required
            />
            {/* ⭐ Star rating input */}
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={star <= rating ? "gold" : "lightgray"}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.285 3.947c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.785.57-1.84-.196-1.54-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.08 9.373c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.283-3.946z" />
                  </svg>
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`bg-blue-500 text-white px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-600 transition ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Reviews List */}
        {reviews.length === 0 && !loading ? (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first!
          </p>
        ) : (
          <div
            ref={reviewsContainer}
            className="max-h-96 overflow-y-auto flex flex-col gap-4 px-1 pb-2"
          >
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="w-full bg-white rounded-lg shadow-md p-4 sm:p-5 hover:shadow-lg transition"
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                    {getInitials(rev.name)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {rev.name}
                    </h3>
                    <div className="flex">{renderStars(rev.rating || 0)}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{rev.text}</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">
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





// import React, { useState, useEffect, useRef } from "react";

// export default function Review() {
//   const [reviews, setReviews] = useState([]);
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   const reviewsContainer = useRef(null);
//   const FUNCTION_URL =
//     "https://feshlo-backend.netlify.app/.netlify/functions/reviews";

//   const fetchReviews = async () => {
//     try {
//       const res = await fetch(FUNCTION_URL);
//       if (!res.ok) throw new Error("Failed to fetch reviews");
//       const data = await res.json();
//       setReviews(data);
//     } catch (err) {
//       console.error("Error fetching reviews:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !text) return;

//     setSubmitting(true);
//     try {
//       const res = await fetch(FUNCTION_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, text }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setReviews((prev) => [data.review, ...prev]);
//         setName("");
//         setText("");
//         if (reviewsContainer.current) {
//           reviewsContainer.current.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }
//     } catch (err) {
//       console.error("Error submitting review:", err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const getInitials = (name) =>
//     name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();

//   // Auto-scroll effect
//   useEffect(() => {
//     const container = reviewsContainer.current;
//     if (!container) return;

//     let scrollAmount = 0;
//     const speed = 1; // pixels per frame
//     let animationFrameId;

//     const scrollReviews = () => {
//       if (!container) return;
//       scrollAmount += speed;
//       if (scrollAmount >= container.scrollWidth - container.clientWidth) {
//         scrollAmount = 0; // Reset scroll to start
//       }
//       container.scrollLeft = scrollAmount;
//       animationFrameId = requestAnimationFrame(scrollReviews);
//     };

//     animationFrameId = requestAnimationFrame(scrollReviews);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [reviews]);

//   return (
//     <div className="w-full bg-gray-50 py-10">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-gray-800">
//           Customer Reviews
//         </h1>

//         <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
//           {loading ? "Loading reviews..." : `Total Reviews: ${reviews.length}`}
//         </p>

//         {/* Form */}
//         <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
//           <form className="flex flex-col sm:flex-row gap-3 sm:gap-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full sm:flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//             />
//             <input
//               type="text"
//               placeholder="Write your review..."
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               className="w-full sm:flex-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//             />
//             <button
//               type="submit"
//               disabled={submitting}
//               className={`bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-600 transition ${
//                 submitting ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {submitting && (
//                 <svg
//                   className="animate-spin h-5 w-5 mr-2 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                   ></path>
//                 </svg>
//               )}
//               {submitting ? "Submitting..." : "Submit"}
//             </button>
//           </form>
//         </div>

//         {/* Reviews */}
//         {reviews.length === 0 && !loading ? (
//           <p className="text-center text-gray-500">No reviews yet. Be the first!</p>
//         ) : (
//           <div
//             ref={reviewsContainer}
//             className="flex overflow-x-auto gap-3 sm:gap-4 py-2 scroll-smooth px-1"
//           >
//             {reviews.map((rev, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-[200px] sm:min-w-[240px] md:min-w-[250px] bg-white rounded-lg shadow-md p-3 sm:p-5 flex-shrink-0 hover:shadow-xl transition"
//               >
//                 <div className="flex items-center mb-2 sm:mb-3">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-2 sm:mr-3 text-xs sm:text-sm">
//                     {getInitials(rev.name)}
//                   </div>
//                   <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
//                     {rev.name}
//                   </h3>
//                 </div>
//                 <p className="text-gray-700 text-sm sm:text-base">{rev.text}</p>
//                 <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 truncate">
//                   {new Date(rev.date).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
