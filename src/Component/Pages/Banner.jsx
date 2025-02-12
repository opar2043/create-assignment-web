import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';  // Importing Framer Motion for animations

import img1 from '../../assets/pic-1.webp';
import img2 from '../../assets/pic-2.webp';
import img3 from '../../assets/pic-3.jpeg';
import img4 from '../../assets/pic-4.webp';
import img5 from '../../assets/pic-5.avif';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const slides = [
    { img: img1, heading: "Empowering Your Digital Journey" },
    { img: img2, heading: "Innovative Solutions for a Modern World" },
    { img: img3, heading: "Explore Limitless Possibilities" },
    { img: img4, heading: "Transforming Ideas into Reality" },
    { img: img5, heading: "Bringing Creativity to Life" },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-2xl shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <motion.h2
                className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold text-center px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slide.heading}
              </motion.h2>
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress Indicator */}
        <div className="autoplay-progress absolute bottom-4 right-4 flex items-center text-white">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-12 h-12">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeDasharray="125.6"
              strokeDashoffset="calc(125.6 * var(--progress, 1))"
              className="transition-all duration-300"
            ></circle>
          </svg>
          <span ref={progressContent} className="ml-2 text-lg font-semibold"></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
