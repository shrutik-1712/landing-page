import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image1 from '../assets/BannerImages/Image-1.png'
import Image2 from '../assets/BannerImages/Image-2.jpg'
import Image3 from '../assets/BannerImages/Image-3.jpg'

const banners = [
  {
    id: 1,
    title: 'Welcome to OM GALAXY',
    subtitle: 'Innovation Meets Excellence',
    image: Image1,
    mobileImage: Image1,
  },
  {
    id: 2,
    title: 'Leading the Industry',
    subtitle: 'With Cutting-Edge Solutions',
    image: Image2,
    mobileImage: Image2
  },
  {
    id: 3,
    title: 'Global Presence',
    subtitle: 'Serving Clients Worldwide',
    image: Image3,
    mobileImage: Image3
  }
];

const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => setCurrentBanner((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen md:h-[600px] overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={isMobile ? banner.mobileImage : banner.image}
              alt={banner.title}
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;