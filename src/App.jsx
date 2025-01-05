import React from 'react';
import BannerSlider from './components/BannerSlider';
import Vendors from './components/Vendors';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      
      <main>
      <NavBar />
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