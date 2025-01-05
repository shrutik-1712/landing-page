import React from 'react';
import BannerSlider from './components/BannerSlider';
import Vendors from './components/Vendors';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      
      <main>
      <Navbar />
        <BannerSlider />
        <Vendors />
        <Awards />
        <Contact />
        <Footer/>
      </main>
      
    </div>
    </>
  );
};

export default App;