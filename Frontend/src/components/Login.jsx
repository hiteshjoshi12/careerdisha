import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from '../Footer'; // Adjust path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col text-white relative overflow-hidden">
      
      {/* 1. Header (No dashboard buttons so it shows "Home" or "Let's Get Started") */}
      <Header showDashboardButtons={false} />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 2. Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 pt-[30px] lg:pt-[20px] relative z-10 w-full">
        
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
              Welcome Back
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm font-medium"
            >
              Log in to continue your journey with Career Disha.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Email Input */}
            <div className="relative flex flex-col group focus-within:bg-white/[0.02] transition-colors rounded-xl border border-gray-800 focus-within:border-orange-500 bg-[#1a1a1a] px-4 py-3.5">
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-focus-within:text-orange-500 transition-colors mb-1">
                Email Address
              </label>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="bg-transparent border-none outline-none w-full text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0" 
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="bg-transparent border-none outline-none w-full text-base font-semibold text-white focus:ring-0 placeholder-gray-700 p-0 tracking-wider" 
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

            {/* Options (Remember Me & Forgot Password) */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-gray-600 group-hover:border-orange-500 flex items-center justify-center transition-colors">
                  <input type="checkbox" className="hidden peer" />
                  {/* Custom Checkmark (hidden by default, shown when peer is checked) - requires some custom CSS or state if you want it fully custom, but for now we'll keep it simple */}
                  <div className="w-2 h-2 bg-orange-500 rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 font-medium transition-colors">Remember me</span>
              </label>
              
              <Link to="/forgot-password" className="text-xs text-orange-500 hover:text-orange-400 font-bold transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full mt-4 bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95 group"
            >
              Sign In
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm text-gray-400 font-medium border-t border-gray-800 pt-6">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-orange-500 hover:text-orange-400 font-bold transition-colors ml-1">
              Create one now
            </Link>
          </div>
        </motion.div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default Login;