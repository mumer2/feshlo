import { useState, useEffect } from "react";

const announcements = [
  "Cash on Delivery available",
  "New arrivals are here!",
  "Limited-time offer : Upto 50% off on all products",
  "Pakistan Best Premium Quality Fashion Wears"
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
    <div className="w-full bg-green-700 text-white text-md text-center py-2 transition-all duration-500">
      {announcements[currentIndex]}
    </div>
  );
}
