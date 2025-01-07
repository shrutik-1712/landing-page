import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone } from 'lucide-react';

const addresses = [
  {
    title: 'Headquarters',
    address: '4,5,6 Blue chip ind estate 5,Sativali Road,Waliv Fata Behind Modi Hyundai; Vasai Rd, Road, near Real ind estate, Vasai-Virar, Maharashtra 401208',
    phone: '+91-8605996655 / 44 / 22',
    alternateNumber:'+91-98924 23179',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7604.76483007556!2d72.86242!3d19.404515000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af2d4383856b%3A0x1b0cd71bf6ef063!2sOm%20Galaxy%20Precision%20Mould%20crafts%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1736258535289!5m2!1sen!2sin" '
  },
  {
    title: 'Office-1',
    address: 'Survey No 14/3 ,Gala No 2, Near Suraksha Marin, Chinchoti Bhiwandi Road , Opposite Universal College ,Poman,Vasai(E), Palghar 401208',
    phone: '+91-8605996655 / 44 / 22 ',
    alternateNumber:'+91-98924 23179',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3803.496369011422!2d72.9230833!3d19.356805599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIxJzI0LjUiTiA3MsKwNTUnMjMuMSJF!5e1!3m2!1sen!2sin!4v1736268809165!5m2!1sen!2sin'
  },
  {
    title: 'Office-2',
    address: 'Plot No 63/9 , Chakan MIDC, Phase 3, Opp.Radhesham WellPack, Near Siddhivinayak Hotel,Taluka Khed,Pune-410501',
    phone: '+91-8605996655 / 44 / 22',
    alternateNumber:'+91-98924 23179',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3463.721135998545!2d73.83134207519674!3d18.726499982407358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQzJzM1LjQiTiA3M8KwNTAnMDIuMSJF!5e1!3m2!1sen!2sin!4v1736268983167!5m2!1sen!2sin'
  }
];

const AddressCard = ({ location, index }) => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-100px'
  });

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber.split('/')[0].trim()}`;
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-4xl mx-auto mb-16 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className={`grid grid-cols-1 ${isMapExpanded ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4">{location.title}</h3>
            <div className="space-y-4">
              <p className="text-gray-600">{location.address}</p>
              <div 
                className="flex items-center text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors"
                onClick={() => handlePhoneClick(location.phone)}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>{location.phone}</span>
              </div>
              <div 
                className="flex items-center text-blue-600 font-medium cursor-pointer hover:text-blue-800 transition-colors"
                onClick={() => handlePhoneClick(location.alternateNumber)}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>{location.alternateNumber}</span>
              </div>
            </div>
          </div>
          <motion.div 
            className={`${isMapExpanded ? 'h-[600px]' : 'h-[300px]'} md:h-auto cursor-pointer`}
            onClick={() => setIsMapExpanded(!isMapExpanded)}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <iframe
              src={location.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="space-y-8">
          {addresses.map((location, index) => (
            <AddressCard key={location.title} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;