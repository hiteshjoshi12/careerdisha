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
    <section className="py-24 bg-[#fcfcfc] relative overflow-hidden font-sans">
      
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-50/50 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-orange-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 tracking-tight"
          >
            Your End-to-End Overseas Education Solution
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"
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
              whileHover={{ y: -8 }}
              className="group relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100/80"
            >
              {/* Top Accent Line that expands on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 rounded-tl-2xl group-hover:w-full transition-all duration-500 ease-out" />

              {/* Icon Container - Color flips on hover */}
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Solutions;