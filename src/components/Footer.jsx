import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 justify-center">
            OMG Auto moulds is part of Om Galaxy Group, specializing in Design & Manufacturing moulds of the Automotive & the White Goods Industry.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://omgautomould.com/#about"  target='_blank' className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="https://omgautomould.com/#services" target='_blank' className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="https://www.omgalaxymould.com/products#" target='_blank' className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="https://www.omgalaxymould.com/services#design-and-development" target='_blank' className="text-gray-400 hover:text-white">Design and development</a></li>
              <li><a href="https://www.omgalaxymould.com/services#manufacturing-facilities" target='_blank' className="text-gray-400 hover:text-white">Manufacturing</a></li>
              <li><a href="https://www.omgalaxymould.com/services#mould-trial-section" target='_blank' className="text-gray-400 hover:text-white">Modal trial</a></li>
              <li><a href="https://www.omgalaxymould.com/services#after-sales-service" target='_blank' className="text-gray-400 hover:text-white">After Sales</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/om-galaxy-precision-mould-crafts-pvt-ltd/" target='_blank' className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.linkedin.com/company/om-galaxy-precision-mould-crafts-pvt-ltd/" target='_blank' className="text-gray-400 hover:text-white">Youtube</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100080379252659" target='_blank' className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="https://www.instagram.com/omgalaxymouldcrafts/" target='_blank' className="text-gray-400 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Om Galaxy precision mould crafts pvt ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;