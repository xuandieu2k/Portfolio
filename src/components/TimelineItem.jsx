import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, role, company, description, isConcurrent }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className="relative pl-12 pb-16 last:pb-0 group"
    >
      {/* Timeline Line & Dot */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800 group-hover:bg-emerald-500/30 transition-colors duration-500">
        <div className="absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-zinc-950 border-2 border-slate-700 group-hover:border-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-500" />
        {isConcurrent && (
          <div className="absolute top-2 left-3 w-[20px] h-[2px] bg-emerald-500/20 border-t border-dashed border-emerald-500/40" />
        )}
      </div>

      <div className="relative">
        <span className="font-mono text-emerald-500 text-xs font-bold tracking-widest mb-2 block">{year}</span>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{role}</h3>
          <span className="hidden sm:block text-slate-700">•</span>
          <p className="text-slate-400 font-medium">{company}</p>
        </div>
        
        <div className="glass-panel p-6 rounded-2xl border-white/5 group-hover:border-emerald-500/20 transition-all duration-500">
          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
          {isConcurrent && (
            <div className="mt-4 flex items-center gap-2">
              <span className="badge">Parallel Track</span>
              <span className="text-[10px] text-slate-600 font-mono italic">Performed concurrently with full-time role</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
