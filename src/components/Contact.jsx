import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const addresses = [
  {
    title: 'Headquarters',
    address: '123 Main Street, City, Country',
    phone: '+1 234 567 890',
    mapUrl: 'https://www.google.com/maps/embed?pb=YOUR_HEADQUARTERS_EMBED_URL'
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
