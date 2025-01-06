import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CompanyLogo from '../assets/logo.svg';
import Brochure from '../assets/Brochure.pdf';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnquiry = () => {
    navigate('/enquiry');
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed w-full z-50 bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={CompanyLogo} 
            alt="Company Logo" 
            className="h-12 w-auto"
          />
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex gap-4">
          <a 
            href={Brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 hover:text-blue-800"
          >
            BROCHURE
          </a>
          <button 
            onClick={handleEnquiry}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ENQUIRY
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4">
              <a 
                href={Brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-blue-600 hover:text-blue-800"
              >
                BROCHURE
              </a>
              <a 
                href="https://www.omgalaxymould.com/index"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-blue-600 hover:text-blue-800"
              >
                Website
              </a>
              <button 
                onClick={handleEnquiry}
                className="py-2 text-blue-600 hover:text-blue-800"
              >
                ENQUIRY
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;