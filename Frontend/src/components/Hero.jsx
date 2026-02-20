import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Replace these with your actual local image paths
import image1 from '../assets/hero-bg-1.png'; // The monuments image
import image2 from '../assets/hero-bg-2.png'; // The student/university image

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

  // Auto-play logic (changes slide every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[500px] md:h-[80vh] w-full bg-[#2a2a2a] overflow-hidden font-sans mt-[70px] lg:mt-[80px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Very subtle dark overlay to ensure text pops */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Centered Content Container */}
          <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-4 z-20">
            
            {/* Subheading (Golden Yellow) */}
            <motion.h3
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[#dca73a] text-sm md:text-base font-medium tracking-wide mb-3 uppercase"
            >
              {slides[current].subheading}
            </motion.h3>

            {/* Main Heading (White) */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white text-2xl md:text-4xl lg:text-[42px] font-bold max-w-5xl leading-tight mb-8"
            >
              {slides[current].heading}
            </motion.h1>

            {/* Standard Red Button */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button className="bg-[#ff0000] hover:bg-[#d40000] text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg">
                Let's Get Started
              </button>
            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left & Right Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <ChevronLeft size={30} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <ChevronRight size={30} />
      </button>

    </section>
  );
};

export default Hero;