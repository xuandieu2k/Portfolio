import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-8">
          {/* Social links placeholder - can be updated with real URLs */}
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">Email</a>
        </div>
        <p className="text-slate-600 text-sm font-mono tracking-wider">
          &copy; {new Date().getFullYear()} NGUYEN XUAN DIEU. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
