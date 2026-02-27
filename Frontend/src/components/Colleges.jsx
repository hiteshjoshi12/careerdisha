import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Briefcase, Stethoscope, Building, Award } from 'lucide-react';
import Header from './Header';
import Footer from '../Footer';

// Your Data in JSON format
const collegeData = {
  engineering: [
    { name: "Birla Institute of Technology and Science, Pilani (BITS PILANI)", rank: "11" },
    { name: "SRM Institute of Science and Technology (SRM, CHENNAI)", rank: "22" },
    { name: "Amrita School of Engineering", rank: "23" },
    { name: "Chandigarh University", rank: "31" },
    { name: "International Institute of Information Technology, Hyderabad", rank: "38" },
    { name: "Netaji Subhas University of Technology", rank: "70" }
  ],
  management: [
    { name: "Symbiosis Institute of Business Management, Pune", rank: "11" },
    { name: "Chandigarh University", rank: "32" },
    { name: "Christ University", rank: "57" },
    { name: "Manipal University Jaipur", rank: "81" },
    { name: "MIT World Peace University (MIT-WPU)", rank: "NOT RANKED" },
    { name: "Narsee Monjee Institute of Management Studies (NMIMS, MUMBAI)", rank: "24" }
  ],
  medical: [
    { name: "Kasturba Medical College, Manipal", rank: "10" },
    { name: "Vardhman Mahavir Medical College", rank: "22" },
    { name: "Siksha 'O' Anusandhan (SOA UNIVERSITY)", rank: "15" },
    { name: "Sri Ramachandra Institute of Higher Education and Research", rank: "21" },
    { name: "M. S. Ramaiah Medical College", rank: "50" }
  ]
};

const Colleges = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const tabs = [
    { id: 'engineering', label: 'Engineering', icon: <Cpu size={18} /> },
    { id: 'management', label: 'Management', icon: <Briefcase size={18} /> },
    { id: 'medical', label: 'Medical', icon: <Stethoscope size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white overflow-hidden relative">
      <Header showDashboardButtons={false} />

      {/* Ambient Glows */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="flex-1 relative pt-[120px] lg:pt-[160px] pb-24 px-4 sm:px-6 lg:px-12 w-full max-w-7xl mx-auto z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-3"
          >
            Top Ranked Institutions
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            Discover Premier Colleges
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium max-w-2xl mx-auto"
          >
            Explore the highest-rated institutions across India based on the latest updated NIRF rankings.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.4)] scale-105'
                  : 'bg-[#111] border border-gray-800 text-gray-400 hover:border-orange-500 hover:text-white'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Grid Display */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {collegeData[activeTab].map((college, index) => (
                <div 
                  key={index} 
                  className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-orange-500 mb-5 group-hover:scale-110 transition-transform">
                      <Building size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-orange-100 transition-colors">
                      {college.name}
                    </h3>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 bg-[#0a0a0a] w-fit px-4 py-2 rounded-lg border border-gray-800">
                    <Award size={16} className="text-orange-500" />
                    <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">
                      NIRF Rank: <span className="text-orange-500">{college.rank}</span>
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Colleges;