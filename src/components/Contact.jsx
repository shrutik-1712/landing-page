import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const addresses = [
  {
    title: 'Headquarters',
    address: 'Plot No 14, Gauriapada Agro Vruksh Lagwad CHS Ltd. Survey No 198, Hissa No 5/1 Part, Village Gokhiware, Taluka Vasai, Palghar 401208',
    phone: '+1 234 567 890',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7604.76483007556!2d72.86242!3d19.404515000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af2d4383856b%3A0x1b0cd71bf6ef063!2sOm%20Galaxy%20Precision%20Mould%20crafts%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1736258535289!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    title: 'Regional Office',
    address: '456 Business Ave, City, Country',
    phone: '+1 234 567 891',
    mapUrl: 'https://www.google.com/maps/embed?pb=YOUR_REGIONAL_EMBED_URL'
  },
  {
    title: 'Manufacturing Unit',
    address: '789 Industrial Blvd, City, Country',
    phone: '+1 234 567 892',
    mapUrl: 'https://www.google.com/maps/embed?pb=YOUR_MANUFACTURING_EMBED_URL'
  }
];

const AddressCard = ({ location, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-100px'
  });

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-4xl mx-auto mb-16 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4">{location.title}</h3>
            <div className="space-y-4">
              <p className="text-gray-600">{location.address}</p>
              <p className="text-blue-600 font-medium">{location.phone}</p>
            </div>
          </div>
          <div className="h-[300px] md:h-auto">
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
          </div>
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
