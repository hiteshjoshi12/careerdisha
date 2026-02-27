import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './Footer'; 
import Profiling from './components/Profiling';
import Admissions from './components/Admissions';
import TravelBooking from './components/TravelBooking';
import WhatsAppWidget from './components/WhatsAppWidget';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/Login';
import Register from './components/Register';
import Colleges from './components/Colleges';
import MetaPixelTracker from './components/MetaPixelTracker';

// 1. Landing Page Wrapper
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow">  {/* <--- Padding removed here */}
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
};

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow"> {/* <--- Padding removed here */}
        <Admissions />
      </main>
      <Footer />
    </div>
  );
};

const TravelPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-[2px] lg:pt-[1px]">
        <TravelBooking />
      </main>
      <Footer />
    </div>
  );
};

// 3. Main Router Setup
function App() {
  return (
    <Router>
      <MetaPixelTracker />
      <ScrollToTop />
      <WhatsAppWidget />
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Admissions Route (with Header/Footer) */}
        <Route path="/admissions" element={<AdmissionsPage />} />

        {/* Profiling Route (Standalone Dashboard Layout) */}
        <Route path="/profiling" element={<Profiling />} />
        {/* 2. Add the NEW Route here */}
  <Route path="/colleges" element={<Colleges />} />

        <Route path="/travel" element={<TravelPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;