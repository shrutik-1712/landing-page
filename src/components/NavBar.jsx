import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full z-50 bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">COMPANY LOGO</div>
        <div className="flex gap-6">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-800">BROCHURE</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            TOOL ENQUIRY
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;