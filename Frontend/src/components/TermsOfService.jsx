import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from '../Footer';

const TermsOfService = () => {
  const lastUpdated = "February 21, 2026";

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white overflow-x-hidden">
      
      {/* 1. Header */}
      <Header showDashboardButtons={false} />

      {/* 2. Main Content */}
      <main className="flex-1 relative pt-[120px] lg:pt-[160px] pb-24 px-6 lg:px-12 w-full max-w-5xl mx-auto">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        {/* Title Section */}
        <div className="mb-12 border-b border-gray-800 pb-8 relative z-10">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-3"
          >
            Legal Information
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>

        {/* Terms Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-gray-300 space-y-10 relative z-10"
        >
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">1.</span> Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-gray-400">
              By accessing and using the Career Disha website and its related services (including admissions consulting and travel booking), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">2.</span> Description of Services
            </h2>
            <p className="leading-relaxed text-gray-400 mb-4">
              Career Disha provides a platform for users to access educational profiling, apply for India & Overseas Admissions, and book travel arrangements (flights and hotels). We act as an intermediary between you and educational institutions, airlines, and hotel providers.
            </p>
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <p className="text-sm text-gray-400 italic">
                Note: We do not guarantee admission into any specific university, nor do we directly operate the flights or accommodations booked through our platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">3.</span> User Obligations & Accuracy of Information
            </h2>
            <p className="leading-relaxed text-gray-400">
              You agree to provide true, accurate, current, and complete information about yourself as prompted by our quotation and application forms. If you provide any information that is untrue or incomplete, Career Disha has the right to suspend or terminate your service request. You are solely responsible for ensuring your travel documents (passports, visas) and academic transcripts are valid and authentic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">4.</span> Quotations, Pricing, and Payments
            </h2>
            <p className="leading-relaxed text-gray-400">
              All quotes provided for flights, hotels, and educational packages are subject to availability and may fluctuate until a final booking is confirmed and paid for. Generating a "Verified Quote" does not guarantee the reservation of a seat, room, or university slot. Final prices will be communicated directly by our agents prior to payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">5.</span> Third-Party Services
            </h2>
            <p className="leading-relaxed text-gray-400">
              Our website links to or utilizes third-party services (such as airline databases, hotel registries, and university portals). Career Disha is not responsible for the content, privacy policies, or practices of any third-party websites or services. Any cancellations, delays, or disputes regarding travel must be handled in accordance with the specific airline or hotel's terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">6.</span> Limitation of Liability
            </h2>
            <p className="leading-relaxed text-gray-400">
              In no event shall Career Disha, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or goodwill, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; or (iii) unauthorized access, use or alteration of your transmissions or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-orange-500">7.</span> Contact Us
            </h2>
            <p className="leading-relaxed text-gray-400 mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-[#111] p-6 sm:p-8 rounded-2xl border border-gray-800 inline-flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-white font-black uppercase tracking-widest text-sm mb-2">General Inquiries</p>
                <a href="mailto:careerdisha@edumilestone.com" className="text-orange-500 hover:text-orange-400 font-medium block mb-1 transition-colors">careerdisha@edumilestone.com</a>
                <p className="text-gray-400">+91 7224954335</p>
              </div>
            </div>
          </section>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;