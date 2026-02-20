import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpeg'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTravelOpen, setIsTravelOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm font-sans">
      {/* 1. Enhanced Top Bar - Higher Contrast for visibility */}
      <div className="bg-[#0a0a0a] text-white py-2 px-6 lg:px-12 flex justify-end items-center gap-8 text-sm font-medium">
        <a href="mailto:careerdisha@edumilestone.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
          <Mail size={16} className="text-orange-500" />
          <span className="tracking-wide">careerdisha@edumilestone.com</span>
        </a>
        <a href="tel:8305231137" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
          <Phone size={16} className="text-orange-500" />
          <span className="tracking-wide">8305231137</span>
        </a>
      </div>

      {/* 2. Main Navigation */}
      <nav className="bg-white px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Larger Logo Area */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img 
            src={logoImg} 
            alt="Career Disha" 
            className="h-16 w-auto object-contain" // Increased height from h-10 to h-16
          />
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-black uppercase">CAREER</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-orange-600 uppercase">Disha</span>
          </div>
        </motion.div>

        {/* 3. Desktop Menu - Exact text from your image */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-[15px] text-gray-700">
          <a href="#" className="hover:text-black transition-colors">Profiling</a>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsTravelOpen(true)}
            onMouseLeave={() => setIsTravelOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-black py-4 transition-colors">
              Travel Arrangements <ChevronDown size={16} className={`transition-transform duration-300 ${isTravelOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isTravelOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[90%] left-0 w-60 bg-white shadow-2xl rounded-xl py-3 border border-gray-100"
                >
                  <a href="#" className="block px-6 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors">Flights Booking</a>
                  <a href="#" className="block px-6 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors">Hotels Booking</a>
                  <a href="#" className="block px-6 py-2.5 hover:bg-orange-50 hover:text-orange-600 transition-colors">Abroad Accommodation</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="hover:text-black transition-colors">India & Overseas Admissions</a>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#ff0000] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-black transition-all shadow-md"
          >
            Let's Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2">
          <Menu size={28} />
        </button>
      </nav>

      {/* 4. Smooth Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-[320px] bg-white z-[70] p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-xl tracking-tighter">MENU</span>
                <X size={28} onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer" />
              </div>
              <div className="flex flex-col gap-6 font-bold text-lg text-gray-800">
                <a href="#">Profiling</a>
                <div className="space-y-4">
                  <p className="text-xs uppercase text-gray-400 tracking-widest">Travel Arrangements</p>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-orange-500">
                    <a href="#" className="text-base font-medium">Flights Booking</a>
                    <a href="#" className="text-base font-medium">Hotels Booking</a>
                  </div>
                </div>
                <a href="#">India & Overseas Admissions</a>
                <button className="bg-red-600 text-white py-4 rounded-xl mt-4 font-bold shadow-lg shadow-red-100">
                  Let's Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;