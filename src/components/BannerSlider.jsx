import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  { id: 1, title: 'Welcome to Our Company', subtitle: 'Innovation Meets Excellence' },
  { id: 2, title: 'Leading the Industry', subtitle: 'With Cutting-Edge Solutions' },
  { id: 3, title: 'Global Presence', subtitle: 'Serving Clients Worldwide' },
];

const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {banners[currentBanner].title}
            </motion.h1>
            <motion.p
              className="text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {banners[currentBanner].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerSlider;