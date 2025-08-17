import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1600&q=80',
      title: 'Big Sale',
      desc: 'Up to 50% off on all products'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80',
      title: 'New Arrivals',
      desc: 'Shop the latest trends'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80',
      title: 'Best Sellers',
      desc: 'Our most popular picks'
    }
  ];

  return (
    <div className="w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-gray-300 bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/40 p-6 rounded text-center">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
