import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Building2,
  Search,
  FileCheck,
  FileEdit,
  TrendingUp,
  CreditCard,
  ArrowLeft
} from "lucide-react";

import Header from "./Header";
import Footer from "../Footer";

// 1. IMPORT YOUR CLEANED-UP FORM COMPONENTS
import BachelorsForm from "./BachelorsForm";
import MastersForm from "./MastersForm";
import DoctoralForm from "./DoctoralForm";

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
      
      <Header showDashboardButtons={true} />

      <div className="flex flex-col md:flex-row flex-1 pt-[20px] lg:pt-[30px] overflow-hidden">
        
        {/* MOBILE STEPS (Sidebar) */}
        <div className="md:hidden w-full bg-[#121212] border-b border-gray-800 p-3 overflow-x-auto flex-shrink-0 no-scrollbar shadow-md">
          <div className="flex gap-4 min-w-max px-2">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-16">
                <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-gray-700 flex items-center justify-center mb-1.5 shadow-[0_0_10px_rgba(234,88,12,0.1)]">
                  <step.icon size={14} className="text-orange-500" />
                </div>
                <span className="text-[9px] text-gray-400 font-medium text-center leading-tight uppercase tracking-wider">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:flex w-64 lg:w-72 bg-[#121212] flex-shrink-0 border-r border-gray-800 relative overflow-y-auto flex-col">
          <div className="py-8 px-4 relative flex-1">
            <div className="absolute left-[34px] top-[50px] bottom-[50px] w-0.5 bg-gray-800 z-0"></div>
            <div className="flex flex-col gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start gap-4 px-4 cursor-pointer group">
                  <div className={`w-3.5 h-3.5 rounded-full border-[2px] flex-shrink-0 mt-1.5 relative z-10 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] ${index === 0 ? 'bg-orange-500 border-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.6)]' : 'bg-[#121212] border-gray-600 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.6)]'}`} />
                  <div className="flex flex-col">
                    <div className={`flex items-center gap-2 font-bold text-[10px] mb-0.5 uppercase tracking-wider ${index === 0 ? 'text-orange-500' : 'text-gray-500 group-hover:text-orange-500'}`}>
                      <step.icon size={12} />
                      <span>Step {step.num}</span>
                    </div>
                    <span className={`font-semibold text-[13px] tracking-wide transition-colors ${index === 0 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {step.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 relative flex flex-col bg-[#0a0a0a] overflow-y-auto w-full">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-orange-600/5 blur-[80px] lg:blur-[100px] rounded-full pointer-events-none" />

          <div className="flex-1 flex flex-col p-6 lg:p-10 min-h-max w-full relative z-10">
            
            <AnimatePresence>
              {selectedLevel && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  onClick={() => setSelectedLevel(null)}
                  className="self-start flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors font-bold text-xs uppercase tracking-widest mb-8"
                >
                  <ArrowLeft size={16} /> Back to Selection
                </motion.button>
              )}
            </AnimatePresence>

            <div className="w-full flex-1 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                
                {/* STATE 1: Choose Level Rings */}
                {!selectedLevel && (
                  <motion.div 
                    key="selection"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center w-full max-w-2xl py-12"
                  >
                    <motion.h3 className="text-orange-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2">
                      Give us A Chance
                    </motion.h3>
                    <motion.h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 lg:mb-4 tracking-tight">
                      To build your journey
                    </motion.h1>
                    <motion.p className="text-gray-400 text-sm sm:text-base font-medium mb-8 md:mb-12">
                      Choose, What do you want to study Abroad?
                    </motion.p>

                    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 w-full">
                      {degreeOptions.map((degree) => (
                        <div key={degree} onClick={() => setSelectedLevel(degree)} className="flex flex-col items-center gap-3 lg:gap-4 cursor-pointer group">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-[2px] lg:border-[3px] flex items-center justify-center transition-all duration-500 border-gray-800 group-hover:border-orange-500/50 group-hover:scale-105">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full transition-all duration-500 bg-gray-800 group-hover:bg-orange-500/50" />
                          </div>
                          <span className="text-sm sm:text-base lg:text-lg transition-all duration-300 tracking-wide text-gray-400 group-hover:text-white font-medium">
                            {degree}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 2. RENDER YOUR IMPORTED COMPONENTS HERE */}
                {selectedLevel === "Bachelors" && <BachelorsForm key="bachelors" />}
                {selectedLevel === "Masters" && <MastersForm key="masters" />}
                {selectedLevel === "Doctoral" && <DoctoralForm key="doctoral" />}

              </AnimatePresence>
            </div>
          </div>

          <div className="flex-shrink-0 w-full mt-auto border-t border-gray-900">
            <Footer />
          </div>
        </main>

      </div>
    </div>
  );
};

export default Profiling;