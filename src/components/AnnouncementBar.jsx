import { useState, useEffect } from "react";

const announcements = [
  "Cash on Delivery available",
  "New arrivals are here!",
  "Limited-time offer : Upto 30% off on all products"
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="w-full bg-black text-white text-sm text-center py-2 transition-all duration-500">
      {announcements[currentIndex]}
    </div>
  );
}
