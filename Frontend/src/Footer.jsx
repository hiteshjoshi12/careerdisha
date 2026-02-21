import React from 'react';
import { Link } from 'react-router-dom';
import eduLogo from './assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 py-8 px-6 lg:px-12 font-sans relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-600/50 to-transparent shadow-[0_0_20px_rgba(234,88,12,0.3)]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Left Side: Copyright & Legal Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          
          <div className="text-gray-400 font-medium text-[15px] tracking-wide">
            Copyright © {new Date().getFullYear()} <span className="text-white font-bold">Career Disha</span> 
            <span className="text-orange-600 ml-1">.</span>
          </div>

          {/* Legal Links for Meta Ads Compliance */}
          <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-gray-500">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-800">|</span>
            {/* You can build this Terms page later, or just leave it as a placeholder */}
            <Link to="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>

        </div>

        {/* Right Side: Powered By with Dark Styling */}
        <div className="flex items-center gap-4 group">
          <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">
            Powered By
          </span>
          
          <div className="bg-white/5 p-2 rounded-lg border border-white/5 group-hover:border-orange-500/30 transition-all duration-300">
            <img 
              src={eduLogo} 
              alt="Edumilestones" 
              className="h-6 w-auto object-contain brightness-110 contrast-125" 
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;