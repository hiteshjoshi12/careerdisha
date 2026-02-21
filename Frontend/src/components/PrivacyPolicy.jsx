import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from '../Footer';

const PrivacyPolicy = () => {
  const lastUpdated = "February 21, 2026";

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white overflow-x-hidden">
      
      {/* 1. Header */}
      <Header showDashboardButtons={false} />

      {/* 2. Main Content */}
      <main className="flex-1 relative pt-[30px] lg:pt-[30px] pb-24 px-6 lg:px-12 w-full max-w-5xl mx-auto">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        {/* Title Section */}
        <div className="mb-12 border-b border-gray-800 pb-8">
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>

        {/* Policy Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="prose prose-invert prose-orange max-w-none text-gray-300 space-y-8"
        >
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Career Disha. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our advertisements on platforms like Meta (Facebook and Instagram).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect personal identification information from you in a variety of ways, including, but not limited to, when you:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Fill out a form for travel quotations or university admissions.</li>
              <li>Subscribe to our newsletter.</li>
              <li>Interact with our Meta Ads or lead generation forms.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong>Data Collected:</strong> This may include your Name, Email Address, Phone Number, Travel Preferences, and Academic History.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Meta (Facebook) Ads and Tracking Technologies</h2>
            <p className="leading-relaxed mb-4">
              We use third-party advertising partners, including Meta Platforms, Inc., to display advertisements on other websites. To do this effectively, we utilize tracking technologies such as the Meta Pixel.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Meta Pixel:</strong> This tool allows us to understand the actions people take on our website and measure the effectiveness of our Meta ads. It may collect data regarding your device, IP address, and browsing actions.</li>
              <li><strong>Custom Audiences:</strong> We may share hashed (anonymized) email addresses with Meta to create Custom Audiences, allowing us to show relevant ads to people who have already interacted with Career Disha.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You can opt out of personalized advertising by visiting your Facebook Ad Settings or through the Digital Advertising Alliance's opt-out platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect primarily to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Process your travel bookings and admission applications.</li>
              <li>Respond to your customer service requests and provide quotations.</li>
              <li>Send periodic emails and updates regarding your inquiries.</li>
              <li>Deliver targeted advertising and retargeting campaigns via Meta Ads.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Sharing Your Information</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information with our business partners. We must share your specific details with airlines, hotels, and educational institutions strictly to fulfill the services you have requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800 inline-block">
              <p className="text-white font-bold mb-2">Career Disha</p>
              <p className="text-gray-400">Email: <a href="mailto:careerdisha@edumilestone.com" className="text-orange-500 hover:underline">careerdisha@edumilestone.com</a></p>
              <p className="text-gray-400 mt-1">Phone: +91 7224954335</p>
            </div>
          </section>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;