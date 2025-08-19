import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Images
import Cover1 from '../assets/Cover1.png';
import Cover2 from '../assets/Cover2.png';
import Cover3 from '../assets/Cover3.png';
import Cover4 from '../assets/Cover4.png';




const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: Cover1,
      title: 'Big Sale',
      desc: 'Up to 50% off on all products'
    },
    {
      id: 2,
      img: Cover2,
      title: 'New Arrivals',
      desc: 'Shop the latest trends'
    },
    {
      id: 3,
      img: Cover3,
      title: 'Best Sellers',
      desc: 'Our most popular picks'
    },
      {
      id: 4,
      img: Cover4,
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
