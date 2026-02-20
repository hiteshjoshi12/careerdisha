import React from 'react';
import { motion } from 'framer-motion';
import { 
  ListChecks, 
  FileCheck2, 
  MonitorPlay, 
  Headset, 
  FileBadge, 
  UserCheck 
} from 'lucide-react';

const solutions = [
  {
    title: "Universities Shortlisting",
    description: "We assist in selecting the best-fit universities based on your academic goals and preferences.",
    icon: <ListChecks size={28} />
  },
  {
    title: "Application Submissions",
    description: "We streamline the application process, ensuring all required documents are submitted accurately and on time.",
    icon: <FileCheck2 size={28} />
  },
  {
    title: "IELTS Preparation",
    description: "We offer specialized IELTS preparation to help you achieve your desired score and meet language proficiency requirements.",
    icon: <MonitorPlay size={28} />
  },
  {
    title: "Visa Support",
    description: "We guide you through the visa application process, helping you navigate the complexities and increase your chances of approval.",
    icon: <Headset size={28} />
  },
  {
    title: "SOP Support",
    description: "Our experts provide valuable guidance and support to craft a compelling Statement of Purpose (SOP) that highlights your strengths and aspirations.",
    icon: <FileBadge size={28} />
  },
  {
    title: "Dedicated Counselor",
    description: "You'll have a dedicated counselor who will provide personalized guidance and support throughout your educational journey.",
    icon: <UserCheck size={28} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

const Solutions = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden font-sans">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-orange-900/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-black text-white tracking-tight"
          >
            Your End-to-End Overseas Education Solution
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-orange-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"
          />
        </div>

        {/* Solutions Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300 shadow-2xl"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              {/* Icon Container - High Contrast Orange */}
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.1)] group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-50 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-[15px] group-hover:text-gray-300">
                {item.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-6 w-8 h-1 bg-orange-600/30 group-hover:w-full group-hover:bg-orange-600 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Solutions;