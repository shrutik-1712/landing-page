import React from 'react';
//ventdors 
import Assab from '../assets/Vendors/ASSAB.png'
import Hasco from '../assets/Vendors/HASCO-Logo.jpg'
import Honeywell from '../assets/Vendors/Honeywell.png'
import YUDO from '../assets/Vendors/YUDO.png'

//clients
import Tata from '../assets/Clients/Tata.jpg'
import AshokLayland from '../assets/Clients/AshokLayland.png'
import Godrej from '../assets/Clients/Godrej.jpg'
import Nilkamal from '../assets/Clients/Nilkamal.jpg'
import samvardhana from '../assets/Clients/samvardhana.jpg'
const Vendors = () => {
  const vendors = [
    { name: 'ASSAB', image: Assab },
    { name: 'Hasco', image: Hasco },
    { name: 'Honeywell', image: Honeywell },
    { name: 'YUDO', image: YUDO },
  ];

  const clients = [
    { name: 'Tata',  image: Tata },
    { name: 'Ashok Layland',  image: AshokLayland },
    { name: 'Godrej', image: Godrej },
    { name: 'Nilkamal',  image: Nilkamal },
    { name: 'samvardhana',  image:  samvardhana },
  ];

  return (
    <div className="w-full overflow-hidden">
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Trusted Vendors</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="flex-none w-64 mx-4 p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-full h-auto mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-center">{vendor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Our Valued Clients</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-reverse">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-none w-64 mx-4 p-6 bg-white rounded-lg shadow-sm"
              >
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="w-full h-auto mb-4 "
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{client.name}</h3>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll-reverse {
          display: flex;
          animation: scroll 20s linear infinite reverse;
        }
        
        @media (max-width: 768px) {
          .animate-scroll, .animate-scroll-reverse {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default Vendors;