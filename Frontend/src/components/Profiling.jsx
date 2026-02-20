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

// Import your shared components (Adjust the paths if your folder structure is different)
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
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white">
      
      {/* 1. Reusable Super-Header with Dashboard Buttons Enabled */}
      <Header showDashboardButtons={true} />

      {/* 2. Main Layout (Sidebar + Content) */}
      {/* Added pt-[116px] to push content below the fixed header */}
      <div className="flex flex-1 overflow-hidden pt-[116px]">
        
        {/* Sidebar */}
        <aside className="hidden md:block w-72 bg-[#121212] flex-shrink-0 border-r border-gray-800 relative overflow-y-auto">
          <div className="py-10 px-4 relative">
            {/* The Vertical Connecting Line */}
            <div className="absolute left-[34px] top-[60px] bottom-[60px] w-0.5 bg-gray-800 z-0"></div>

            {/* Sidebar Steps */}
            <div className="flex flex-col gap-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5 px-4 cursor-pointer group"
                >
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#121212] border-[3px] border-gray-600 flex-shrink-0 mt-1.5 relative z-10 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(234,88,12,0.6)]" />

                  {/* Step Content */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-xs mb-1 uppercase tracking-wider">
                      <step.icon size={14} />
                      <span>Step {step.num}</span>
                    </div>
                    <span className="text-gray-300 font-semibold text-[15px] tracking-wide group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1 relative flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-6">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center -mt-16 w-full max-w-4xl">
            {/* Elegant Headings */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-orange-500 font-semibold tracking-widest text-sm uppercase mb-3"
            >
              Give us A Chance
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
            >
              To build your journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl font-medium mb-20"
            >
              Choose, What do you want to study Abroad?
            </motion.p>

            {/* Interactive Selection Rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16 w-full"
            >
              {degreeOptions.map((degree) => (
                <div
                  key={degree}
                  onClick={() => setSelectedLevel(degree)}
                  className="flex flex-col items-center gap-6 cursor-pointer group"
                >
                  {/* Outer Ring */}
                  <div
                    className={`w-32 h-32 md:w-[160px] md:h-[160px] rounded-full border-[4px] flex items-center justify-center transition-all duration-500
                    ${
                      selectedLevel === degree
                        ? "border-orange-500 bg-orange-500/10 scale-105 shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                        : "border-gray-800 group-hover:border-orange-500/50 group-hover:scale-105"
                    }`}
                  >
                    {/* Inner Target Dot */}
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-500
                      ${
                        selectedLevel === degree
                          ? "bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.5)] scale-110"
                          : "bg-gray-800 group-hover:bg-orange-500/50"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className={`text-xl md:text-2xl transition-all duration-300 tracking-wide
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
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profiling;