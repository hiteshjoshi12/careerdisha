import React from 'react';
import { motion } from 'framer-motion';

// Using high-quality placeholder images for the 12 cards. 
// You can replace these URLs with your actual local image imports later.
const offersData = [
  { id: 1, title: 'Kuala Lumpur', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Kuala%20Lumpur_1769102650.png' },
  { id: 2, title: 'Kashmir Package', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Kashmir%20package_1770481682.png' },
  { id: 3, title: 'Kerala Backwaters', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Kerala%20Flyer_1770482115.png' },
  { id: 4, title: 'Abu Dhabi', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Amritsar%20to%20Abu%20Dhabi_1770734779.png' },
  { id: 5, title: 'London', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Delhi%20to%20London_1770734794.png' },
  { id: 6, title: 'Toronto', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Delhi%20to%20Toronto%20Apr2026_1770851961.png' },
  { id: 7, title: 'Dubai', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Delhi%20to%20Rome%20Apr2026_1770852038.png' },
  { id: 8, title: 'Singapore', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Milan%20to%20Delhi%20Mar2026_1770852064.png' },
  { id: 9, title: 'Maldives', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Toronto%20to%20Delhi%20Apr2026_1770852091.png' },
  { id: 10, title: 'Bali', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Rome%20to%20Delhi%20Feb%20Mar%202026%20_1770852498.png' },
  { id: 11, title: 'Paris', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Delhi%20to%20Rome%20Mar2026_1770852853.png' },
  { id: 12, title: 'New York', img: 'https://careerdisha.edumilestones.com/abroad-details/booking-offers/Delhi%20to%20Milan%20Feb%20and%20Mar%202026_1770853466.png' },
];

const LatestOffers = ({ onOpenModal }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 z-10 relative">
      
      {/* Header Section */}
      <div className="mb-10 text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase"
        >
          Latest Offers
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-orange-500 font-semibold text-sm mt-2"
        >
          Note: These offers are subject to availability, and prices may fluctuate.
        </motion.p>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-16 h-1 bg-orange-600 mt-4 rounded-full origin-left" 
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {offersData.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 6) * 0.1 }} // Stagger effect row by row
            className="group relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-[#111] border border-gray-800 shadow-xl cursor-pointer"
          >
            {/* Offer Image */}
            <img 
              src={offer.img} 
              alt={offer.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            {/* Hover Accent Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-2xl transition-colors duration-500 pointer-events-none" />

            {/* Action Button */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center px-4">
              {/* This calls the modal function passed down from the parent */}
              <button 
                onClick={() => onOpenModal('flight')} 
                className="bg-black/80 backdrop-blur-md border border-gray-700 group-hover:border-orange-500 group-hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] active:scale-95"
              >
                Get An Offer
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestOffers;