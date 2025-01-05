import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const vendors = [
  'Vendor 1', 'Vendor 2', 'Vendor 3', 'Vendor 4', 'Vendor 5', 'Vendor 6'
];

const Vendors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Trusted Vendors
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor}
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-center">{vendor}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;