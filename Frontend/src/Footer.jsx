import React from 'react';
// Import the edumilestones logo here once you have it in your assets folder
import eduLogo from './assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-[#1e2a3b] font-bold text-[17px]">
          Copyright © Career Disha
        </div>

        {/* Right Side: Powered By */}
        <div className="flex items-center gap-3">
          <span className="text-[#1e2a3b] font-medium text-base">
            Powered By:
          </span>
          
          {/* Use the actual imported image here */}
          <img src={eduLogo} alt="Edumilestones" className="h-7 object-contain" />
          
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;