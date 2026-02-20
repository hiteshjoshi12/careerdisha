import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, GraduationCap, Globe2, ArrowRight } from 'lucide-react';

const admissionOptions = [
  {
    title: "Online India Admissions",
    description: "Explore flexible digital learning opportunities from top-tier Indian institutions.",
    icon: <Monitor size={32} />,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Campus India Admissions",
    description: "Experience traditional academic excellence at premier university campuses across India.",
    icon: <GraduationCap size={32} />,
    color: "from-orange-600 to-orange-700"
  },
  {
    title: "Overseas Admissions",
    description: "Globalize your career with admissions into prestigious international universities.",
    icon: <Globe2 size={32} />,
    color: "from-orange-700 to-orange-800"
  }
];

const Admissions = () => {
  return (
    // FIX: Replaced py-24 with specific pt/pb values to perfectly clear the fixed Header
    <section className="min-h-screen bg-[#0a0a0a] pt-[40px] lg:pt-[50px] pb-24 px-6 lg:px-12 flex flex-col items-center justify-center font-sans overflow-hidden relative">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Animated Heading */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm "
          >
            Your Academic Path
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Choose The Best Fit For You
          </motion.h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.6)]" />
        </div>

        {/* Admissions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {admissionOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-[#111] p-10 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all duration-500 shadow-2xl flex flex-col items-center text-center"
            >
              {/* Decorative Circle behind icon */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/5 rounded-full blur-2xl group-hover:bg-orange-600/10 transition-colors" />

              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center mb-8 text-orange-500 group-hover:scale-110 group-hover:text-white group-hover:bg-orange-600 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                {option.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-50 transition-colors">
                {option.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {option.description}
              </p>

              {/* Button Action */}
              <div className="mt-auto flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:gap-4 transition-all">
                Explore Now <ArrowRight size={14} />
              </div>

              {/* Bottom Glow bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-orange-600 rounded-full group-hover:w-[80%] transition-all duration-500 shadow-[0_0_15px_rgba(234,88,12,1)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admissions;