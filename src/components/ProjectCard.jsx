import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, links, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className="glass-card flex flex-col h-full rounded-3xl p-8 group overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-500" />
      
      <div className="flex justify-between items-start mb-8 z-10">
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 flex items-center justify-center p-0.5">
            <img 
              src={image} 
              alt={`${title} icon`} 
              className="w-full h-full object-cover rounded-[14px] transform group-hover:scale-110 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150/09090b/3ddc84?text=' + title.charAt(0);
              }}
            />
          </div>
        </div>
        
        <div className="flex gap-2 z-20">
          {links.playStore && (
            <a 
              href={links.playStore} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/5 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 rounded-full border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
              title="Google Play Store"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {links.appStore && (
            <a 
              href={links.appStore} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/5 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 rounded-full border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
              title="Apple App Store"
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {tags.map((tag, index) => (
          <span key={index} className="badge">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
