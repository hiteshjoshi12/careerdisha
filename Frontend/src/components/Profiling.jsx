import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  Search,
  FileCheck,
  FileEdit,
  TrendingUp,
  CreditCard,
} from "lucide-react";

import Header from "./Header";
import Footer from "../Footer";

const Profiling = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const steps = [
    { num: 1, title: "Complete Profiling", icon: FileText },
    { num: 2, title: "Shortlist Colleges", icon: Building2 },
    { num: 3, title: "English Test", icon: Search },
    { num: 4, title: "Documents", icon: FileCheck },
    { num: 5, title: "SOP Maker", icon: FileEdit },
    { num: 6, title: "Application Tracking", icon: TrendingUp },
    { num: 7, title: "Visa Documents", icon: CreditCard },
  ];

  const degreeOptions = ["Bachelors", "Masters", "Doctoral"];

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white overflow-hidden">
      
      {/* 1. Header */}
      <Header showDashboardButtons={true} />

      {/* 2. Main Layout - Takes remaining height below header */}
      <div className="flex flex-col md:flex-row flex-1 pt-[30px] lg:pt-[10px] overflow-hidden">
        
        {/* MOBILE STEPS: Horizontal scrollable bar (Hidden on Desktop) */}
        <div className="md:hidden w-full bg-[#121212] border-b border-gray-800 p-4 overflow-x-auto flex-shrink-0 no-scrollbar shadow-md">
          {/* min-w-max prevents items from squishing on small screens */}
          <div className="flex gap-4 min-w-max px-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-20">
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-gray-700 flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(234,88,12,0.1)]">
                  <step.icon size={16} className="text-orange-500" />
                </div>
                <span className="text-[10px] text-gray-400 font-medium text-center leading-tight uppercase tracking-wider">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP SIDEBAR: (Hidden on Mobile) */}
        <aside className="hidden md:flex w-64 lg:w-72 bg-[#121212] flex-shrink-0 border-r border-gray-800 relative overflow-y-auto flex-col">
          <div className="py-10 px-4 relative flex-1">
            {/* The Vertical Connecting Line */}
            <div className="absolute left-[34px] top-[60px] bottom-[60px] w-0.5 bg-gray-800 z-0"></div>

            <div className="flex flex-col gap-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5 px-4 cursor-pointer group"
                >
                  <div className="w-4 h-4 rounded-full bg-[#121212] border-[3px] border-gray-600 flex-shrink-0 mt-1.5 relative z-10 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(234,88,12,0.6)]" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-xs mb-1 uppercase tracking-wider">
                      <step.icon size={14} />
                      <span>Step {step.num}</span>
                    </div>
                    <span className="text-gray-300 font-semibold text-[13px] lg:text-[15px] tracking-wide group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1 relative flex flex-col bg-[#0a0a0a] overflow-y-auto w-full">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-orange-600/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

          {/* Inner wrapper ensures content centers vertically but allows scrolling if screen is too short */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-10 min-h-max w-full relative z-10 py-12">
            
            <div className="flex flex-col items-center text-center w-full max-w-4xl">
              
              <motion.h3
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-orange-500 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3"
              >
                Give us A Chance
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6 tracking-tight"
              >
                To build your journey
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-10 md:mb-16"
              >
                Choose, What do you want to study Abroad?
              </motion.p>

              {/* Dynamic Grid/Flex for Rings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                className="flex flex-row flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 w-full"
              >
                {degreeOptions.map((degree) => (
                  <div
                    key={degree}
                    onClick={() => setSelectedLevel(degree)}
                    className="flex flex-col items-center gap-4 lg:gap-6 cursor-pointer group"
                  >
                    <div
                      // Perfectly scaled rings: 96px -> 128px -> 160px
                      className={`w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-[3px] lg:border-[4px] flex items-center justify-center transition-all duration-500
                      ${
                        selectedLevel === degree
                          ? "border-orange-500 bg-orange-500/10 scale-105 shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                          : "border-gray-800 group-hover:border-orange-500/50 group-hover:scale-105"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full transition-all duration-500
                        ${
                          selectedLevel === degree
                            ? "bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.5)] scale-110"
                            : "bg-gray-800 group-hover:bg-orange-500/50"
                        }`}
                      />
                    </div>

                    <span
                      className={`text-base sm:text-xl lg:text-2xl transition-all duration-300 tracking-wide
                      ${
                        selectedLevel === degree
                          ? "text-orange-500 font-bold drop-shadow-[0_0_10px_rgba(234,88,12,0.3)]"
                          : "text-gray-400 group-hover:text-white font-medium"
                      }`}
                    >
                      {degree}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Moved Footer inside the scrollable main area so it doesn't take up permanent space on mobile */}
          <div className="flex-shrink-0 w-full mt-auto border-t border-gray-900">
            <Footer />
          </div>
        </main>

      </div>
    </div>
  );
};

export default Profiling;