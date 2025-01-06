import React from 'react';
import EnquiryForm from './EnquiryFrom';
import Navbar from './NavBar';

const EnquiryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default EnquiryPage;