import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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