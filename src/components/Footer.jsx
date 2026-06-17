import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://github.com/xuandieu2k" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-400 transition-all hover:scale-110"
            title="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:xuandieu12300@gmail.com" 
            className="text-slate-500 hover:text-emerald-400 transition-all hover:scale-110"
            title="Email Me"
          >
            <Mail size={24} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-400 transition-all hover:scale-110"
            title="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-slate-600 text-sm font-mono tracking-widest">
          &copy; {new Date().getFullYear()} NGUYEN XUAN DIEU. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
