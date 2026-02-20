import React from 'react';
import eduLogo from './assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 py-8 px-6 lg:px-12 font-sans relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-600/50 to-transparent shadow-[0_0_20px_rgba(234,88,12,0.3)]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Side: Copyright with Orange Accent */}
        <div className="text-gray-400 font-medium text-[15px] tracking-wide">
          Copyright © <span className="text-white font-bold">Career Disha</span> 
          <span className="text-orange-600 ml-1">.</span>
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