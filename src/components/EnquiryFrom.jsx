import React, { useState } from 'react';

const EnquiryForm = () => {
  const interests = [
    'CPVC', 'PPR', 'Industrial', 'PVC', 'PP', 'Automobile',
    'HDPE', 'Electrical / Electronics', 'White Goods',
    'Drip Irrigation', 'Guttering', 'Others'
  ];

  const [formData, setFormData] = useState({
    name: '',
    businessCard: null,
    companyName: '',
    contactNumber: '',
    email: '',
    interests: [],
    projectComments: '',
    attendedBy: '',
    repliedOn: ''
  });

  const [previewUrl, setPreviewUrl] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        businessCard: null,
        companyName: '',
        contactNumber: '',
        email: '',
        interests: [],
        projectComments: '',
        attendedBy: '',
        repliedOn: ''
      });
      setPreviewUrl('');
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          businessCard: file
        }));
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }
    } else if (type === 'checkbox') {
      const updatedInterests = checked 
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
        
      setFormData(prev => ({
        ...prev,
        interests: updatedInterests
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-8">
            OM Galaxy - Enquiry Form
            </h1>
            
            <div className="w-full">
              {isSubmitted ? (
                <div className="text-center text-green-600 py-8">
                  <p className="text-lg sm:text-xl">Thank you for your enquiry!</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold border-b pb-2">Personal Details</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Business Card</label>
                        <input
                          type="file"
                          name="businessCard"
                          accept="image/*"
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {previewUrl && (
                          <div className="mt-2 relative">
                            <img 
                              src={previewUrl} 
                              alt="Business card preview" 
                              className="w-full max-w-xs h-auto rounded-lg border"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Contact Number *</label>
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Email ID *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold border-b pb-2">Interests</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            id={interest}
                            name="interests"
                            value={interest}
                            checked={formData.interests.includes(interest)}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={interest} className="ml-2 text-sm">
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold border-b pb-2">Project Comments</h3>
                    <textarea
                      name="projectComments"
                      value={formData.projectComments}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-medium"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;