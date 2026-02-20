import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './Footer'; 
import Profiling from './components/Profiling';
import Admissions from './components/Admissions';

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

// 3. Main Router Setup
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Admissions Route (with Header/Footer) */}
        <Route path="/admissions" element={<AdmissionsPage />} />

        {/* Profiling Route (Standalone Dashboard Layout) */}
        <Route path="/profiling" element={<Profiling />} />
      </Routes>
    </Router>
  );
}

export default App;