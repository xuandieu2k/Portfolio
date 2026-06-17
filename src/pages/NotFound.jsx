import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Terminal } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-block p-4 bg-emerald-500/10 rounded-2xl mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <Terminal size={48} className="text-emerald-500" />
        </div>
        
        <h1 className="text-8xl font-black text-white mb-4 tracking-tighter">404</h1>
        <p className="text-emerald-400 font-mono text-xl mb-8 uppercase tracking-widest">System Error: Page Not Found</p>
        
        <div className="glass p-6 rounded-xl max-w-md mx-auto mb-10 text-left">
          <p className="text-slate-400 font-mono text-sm leading-relaxed">
            <span className="text-emerald-500">DieuOS v1.0.4:</span> Requested module could not be initialized. Path traversal failed.
            <br />
            <span className="text-slate-600">&gt; Looking for alternatives...</span>
            <br />
            <span className="text-slate-600">&gt; Recovery recommended.</span>
          </p>
        </div>

        <Link 
          to="/" 
          className="btn-primary inline-flex items-center gap-2 py-3 px-8"
        >
          <Home size={20} />
          Return to Base
        </Link>
      </motion.div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default NotFound;
