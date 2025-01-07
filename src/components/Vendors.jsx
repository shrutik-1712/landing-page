import React from 'react';
//ventdors 
import Assab from '../assets/Vendors/ASSAB LOGO.jpg'
import Hasco from '../assets/Vendors/HASCO.jpg'
import Honeywell from '../assets/Vendors/HONEYWELL.bmp'
import YUDO from '../assets/Vendors/YUDO.bmp'
import Bohiler from '../assets/Vendors/BOHLER.bmp'
import Husky from '../assets/Vendors/HUSKY.bmp'
import Infuse from '../assets/Vendors/INFUSE.bmp'
import Progressive from '../assets/Vendors/PROGRESSIVE.bmp'
import Moldmaster from '../assets/Vendors/MOLDMASTER.bmp'
import Meusburger from '../assets/Vendors/MEUSBURGER.bmp'
import Syentive from '../assets/Vendors/SYENTIVE.bmp'
import Uddenholm from '../assets/Vendors/UDDEHOLM.bmp'
//clients
import Tata from '../assets/Clients/TATA.bmp'
import AshokLayland from '../assets/Clients/ASHOK.bmp'
import Godrej from '../assets/Clients/GODREJ.bmp'
import Nilkamal from '../assets/Clients/NILKAMAL.bmp'
import Piaggio from '../assets/Clients/PIAGGIO.bmp'
import Eicher from '../assets/Clients/EICHER.bmp'
import Iac from '../assets/Clients/IAC.bmp'
import MotherSon from '../assets/Clients/MOTHERSON.bmp'
import River from '../assets/Clients/RIVER.bmp'
import STL from '../assets/Clients/STL.bmp'
import Smr from '../assets/Clients/SMR.bmp'
import Supbros from '../assets/Clients/SUBROS.bmp'
import Supreme from '../assets/Clients/SUPREME.bmp'
import Varroc from '../assets/Clients/VARROC.bmp'
import Schoolnet from '../assets/Clients/SCHOOLNET.bmp'
const Vendors = () => {
  const vendors = [
    { name: 'ASSAB', image: Assab },
    { name: 'Hasco', image: Hasco },
    { name: 'Honeywell', image: Honeywell },
    { name: 'YUDO', image: YUDO },
    { name:'Bohiler', image: Bohiler  },
    { name:'Husky', image: Husky  },
    { name:'Infuse', image:Infuse   },
    { name:'Progressive', image:Progressive   },
    { name:'Moldmaster', image: Moldmaster  },
    { name:'Meusburger', image: Meusburger  },
    { name:'Syentive', image: Syentive  },
    {name:'Uddenholm', image: Uddenholm}
  ];

  const clients = [
    { name: 'Tata',  image: Tata },
    { name: 'Ashok Layland',  image: AshokLayland },
    { name: 'Godrej', image: Godrej },
    { name: 'Nilkamal',  image: Nilkamal },
    { name: 'Piaggio',  image:  Piaggio },
    { name: 'Eicher',  image:Eicher   },
    { name: 'Iac',  image:  Iac },
    { name: 'MotherSon',  image:  MotherSon },
    { name: 'River',  image:  River },
    { name: 'STL',  image: STL  },
    { name: 'Smr',  image:Smr   },
    { name: 'Supbros',  image:Supbros   },
    { name: 'Supreme',  image: Supreme  },
    { name: 'Varroc',  image:  Varroc },
    { name: 'Schoolnet',  image: Schoolnet  },
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