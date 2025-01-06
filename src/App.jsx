import React from 'react';
import BannerSlider from './components/BannerSlider';
import Vendors from './components/Vendors';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EnquiryForm from './components/EnquiryFrom';
import Navbar from './components/NavBar';
import EnquiryPage from './components/EnqiryPage';
import HomePage from './components/HomePage';
const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      
      <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
      </Routes>
    </BrowserRouter>
        
      </main>
      
    </div>
    </>
  );
};

export default App;