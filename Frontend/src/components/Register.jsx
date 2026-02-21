import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from '../Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your registration logic here
    console.log("Registering user:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white relative overflow-x-hidden">
      
      {/* 1. Header */}
      <Header showDashboardButtons={false} />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* 2. Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 pt-[30px] lg:pt-[20px] relative z-10 w-full mb-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-[#111] rounded-3xl border border-gray-800 shadow-2xl p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Decorative Top Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 blur-[2px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-orange-400" />

          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-3xl font-black text-white tracking-tight mb-2"
            >
              Create Account
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm font-medium"
            >
              Start your educational and travel journey today.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Full Name */}
            <div className="relative flex flex-col group focus-within:bg-white/[0.02] transition-colors rounded-xl border border-gray-800 focus-within:border-orange-500 bg-[#1a1a1a] px-4 py-3.5">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors mb-1">
                Full Name
              </label>
              <div className="flex items-center gap-3">
                <User size={18} className="text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="bg-transparent border-none outline-none w-full text-sm sm:text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0" 
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative flex flex-col group focus-within:bg-white/[0.02] transition-colors rounded-xl border border-gray-800 focus-within:border-orange-500 bg-[#1a1a1a] px-4 py-3.5">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors mb-1">
                Email Address
              </label>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com" 
                  className="bg-transparent border-none outline-none w-full text-sm sm:text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0" 
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="relative flex flex-col group focus-within:bg-white/[0.02] transition-colors rounded-xl border border-gray-800 focus-within:border-orange-500 bg-[#1a1a1a] px-4 py-3.5">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors mb-1">
                Phone Number
              </label>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  className="bg-transparent border-none outline-none w-full text-sm sm:text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0" 
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative flex flex-col group focus-within:bg-white/[0.02] transition-colors rounded-xl border border-gray-800 focus-within:border-orange-500 bg-[#1a1a1a] px-4 py-3.5">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors mb-1">
                Password
              </label>
              <div className="flex items-center gap-3">
                <Lock size={18} className="text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••" 
                  className="bg-transparent border-none outline-none w-full text-sm sm:text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0 tracking-wider" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-600 hover:text-white transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="relative flex flex-col group focus-within:bg-white/[0.02] transition-colors rounded-xl border border-gray-800 focus-within:border-orange-500 bg-[#1a1a1a] px-4 py-3.5">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors mb-1">
                Confirm Password
              </label>
              <div className="flex items-center gap-3">
                <Lock size={18} className="text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••" 
                  className="bg-transparent border-none outline-none w-full text-sm sm:text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0 tracking-wider" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-600 hover:text-white transition-colors focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="mt-2 flex items-start gap-3">
              <div className="w-4 h-4 rounded border border-gray-600 flex items-center justify-center mt-0.5 flex-shrink-0 relative overflow-hidden">
                <input type="checkbox" required className="absolute inset-0 opacity-0 cursor-pointer peer z-10" />
                <div className="w-2 h-2 bg-orange-500 rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs text-gray-400 font-medium leading-relaxed">
                By creating an account, I agree to Career Disha's{' '}
                <Link to="/terms-of-service" className="text-orange-500 hover:text-orange-400 font-bold transition-colors">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-orange-500 hover:text-orange-400 font-bold transition-colors">Privacy Policy</Link>.
              </span>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95 group"
            >
              Sign Up
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-8 text-center text-sm text-gray-400 font-medium border-t border-gray-800 pt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-500 hover:text-orange-400 font-bold transition-colors ml-1">
              Log in here
            </Link>
          </div>
        </motion.div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default Register;