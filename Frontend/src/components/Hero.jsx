import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Using your local paths
import image1 from '../assets/hero-bg-1.png'; 
import image2 from '../assets/hero-bg-2.png'; 

const slides = [
  {
    image: image1,
    subheading: "STUDY ABROAD COUNSELLING",
    heading: "Unlocking Your Global Education - Expert Study Abroad Counseling",
  },
  {
    image: image2,
    subheading: "STUDY ABROAD COUNSELLING",
    heading: "Your Passport to Success - Premier Study Abroad Guidance",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[550px] md:h-[85vh] w-full bg-black overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Animated Background Image */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Darker Overlay for high contrast */}
            <div className="absolute inset-0 bg-black/75" />
          </motion.div>

          {/* Content Container */}
          <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-6 z-20 pt-[80px] lg:pt-[116px]">
            
            {/* Subheading - Now Brand Orange */}
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-orange-500 text-sm md:text-base font-bold tracking-[0.3em] mb-4 uppercase"
            >
              {slides[current].subheading}
            </motion.h3>

            {/* Main Heading - Pure White */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white text-3xl md:text-5xl lg:text-6xl font-black max-w-5xl leading-tight mb-10 drop-shadow-2xl"
            >
              {slides[current].heading}
            </motion.h1>

            {/* Primary Action Button - Orange Theme */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <button className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95">
                Let's Get Started
              </button>
            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Orange accents */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto p-3 bg-white/5 hover:bg-orange-600 border border-white/10 text-white rounded-full transition-all group"
        >
          <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 bg-white/5 hover:bg-orange-600 border border-white/10 text-white rounded-full transition-all group"
        >
          <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Bottom Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
         <motion.div 
           key={current}
           initial={{ width: 0 }}
           animate={{ width: "100%" }}
           transition={{ duration: 6, ease: "linear" }}
           className="h-full bg-orange-600"
         />
      </div>

    </section>
  );
};

export default Hero;