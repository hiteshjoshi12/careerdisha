import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import logoImg from "../assets/logo.jpeg";

const Header = ({ showDashboardButtons = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTravelOpen, setIsTravelOpen] = useState(false);

  return (
    // Changed base to #0a0a0a to perfectly match the page background
    <header className="top-0 left-0 w-full z-50 font-sans">
      
      {/* 1. Top Contact Bar - Pure Black for a tiny bit of depth at the very top */}
      <div className="hidden lg:flex bg-black text-gray-400 py-1.5 px-6 lg:px-12 justify-end items-center gap-8 text-[11px] font-semibold tracking-wider border-b border-gray-900">
        <a href="mailto:careerdisha@edumilestone.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
          <Mail size={12} className="text-orange-500" /> careerdisha@edumilestone.com
        </a>
        <a href="tel:8305231137" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
          <Phone size={12} className="text-orange-500" /> +91 8305231137
        </a>
      </div>

      {/* 2. Main Nav Container - Solid #0a0a0a (Removed opacity/blur so it doesn't shift the color) */}
      <nav className="px-6 lg:px-12 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <img src={logoImg} alt="Career Disha" className="h-14 w-auto object-contain rounded-md" />
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">CAREER</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-orange-500 uppercase">Disha</span>
          </div>
        </Link>

        {/* 3. Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-[14px] text-gray-300">
          <Link to="/profiling" className="hover:text-orange-500 transition-colors uppercase tracking-wide">
            Profiling
          </Link>
          
          {/* Travel Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsTravelOpen(true)}
            onMouseLeave={() => setIsTravelOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-orange-500 py-4 transition-colors uppercase tracking-wide">
              Travel Arrangements <ChevronDown size={14} className={`transition-transform duration-300 ${isTravelOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isTravelOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  // Dropdown gets #111111 so it visibly floats above the #0a0a0a background
                  className="absolute top-[85%] left-0 w-60 bg-[#111111] shadow-2xl rounded-xl py-3 border border-gray-800"
                >
                  {['Flights Booking', 'Hotels Booking', 'Abroad Accommodation'].map((item) => (
                    <a key={item} href="#" className="block px-6 py-2.5 text-gray-400 hover:bg-orange-600/10 hover:text-orange-500 transition-colors text-[13px]">
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/admissions" className="hover:text-orange-500 transition-colors uppercase tracking-wide">
            India & Overseas Admissions
          </Link>

          {/* 4. Conditional Action Buttons */}
          <div className="flex items-center gap-4 border-l border-gray-800 pl-8 ml-4">
            {showDashboardButtons ? (
              <>
                <Link to="/">
                  <button className="text-gray-300 hover:text-orange-500 font-bold px-4 py-2 transition-colors uppercase text-sm tracking-widest">
                    Home
                  </button>
                </Link>
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-2.5 rounded-md font-bold text-sm transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95 uppercase tracking-widest">
                  Login
                </button>
              </>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.03, backgroundColor: "#ea580c" }}
                whileTap={{ scale: 0.97 }}
                className="bg-orange-600 text-white px-8 py-3 rounded-md font-bold text-sm transition-all shadow-lg shadow-orange-900/20 uppercase tracking-widest"
              >
                Let's Get Started
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-white">
          <Menu size={28} />
        </button>
      </nav>

      {/* 5. Smooth Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              // Mobile sidebar perfectly matches the #0a0a0a background
              className="fixed right-0 top-0 h-full w-[80%] max-w-[320px] bg-[#0a0a0a] z-[70] p-8 shadow-2xl flex flex-col border-l border-gray-800"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-black text-xl tracking-tighter text-white">MENU</span>
                <X size={28} onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer text-white" />
              </div>
              <div className="flex flex-col gap-6 font-bold text-lg text-gray-300">
                <Link to="/profiling" onClick={() => setIsMobileMenuOpen(false)}>Profiling</Link>
                <div className="space-y-4">
                  <p className="text-xs uppercase text-gray-500 tracking-widest font-black">Travel Arrangements</p>
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-orange-600">
                    <a href="#" className="text-base font-medium">Flights Booking</a>
                    <a href="#" className="text-base font-medium">Hotels Booking</a>
                  </div>
                </div>
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>India & Overseas Admissions</Link>
                
                {/* Mobile Conditional Buttons */}
                {showDashboardButtons ? (
                  <div className="flex flex-col gap-4 mt-4">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-4 border border-gray-800 rounded-xl">
                      Home
                    </Link>
                    <button className="bg-orange-600 text-white py-4 rounded-xl shadow-xl shadow-orange-900/40">
                      Login
                    </button>
                  </div>
                ) : (
                  <button className="bg-orange-600 text-white py-4 rounded-xl mt-4 font-bold shadow-xl shadow-orange-900/40">
                    Let's Get Started
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;