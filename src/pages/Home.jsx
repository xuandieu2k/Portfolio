import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineItem from '../components/TimelineItem';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const skills = [
    { category: "Android Development", items: ["Kotlin", "Java", "Jetpack Compose", "XML", "Jetpack Libraries", "KMM"] },
    { category: "Architecture", items: ["Clean Architecture", "MVVM", "MVI", "MVC"] },
    { category: "Data & Networking", items: ["Room Database", "DataStore", "Coroutines", "Flow", "LiveData", "RESTful APIs", "WebSocket"] },
    { category: "Integration", items: ["Firebase", "Google Maps", "Location Services", "AdMob", "Play Billing"] },
    { category: "Publishing", items: ["Google Play Store", "Apple App Store"] }
  ];

  const experiences = [
    {
      year: "2024 - PRESENT",
      role: "Android Developer",
      company: "COOLDEV",
      description: "Developed mobile applications based on project requirements. Maintained, improved, and refactored code in both new and existing projects.",
      isConcurrent: false
    },
    {
      year: "2023 - PRESENT",
      role: "Freelance Mobile Developer & UI/UX Designer",
      company: "Self-Employed",
      description: "Specialized in Android application development and crafting intuitive UI/UX designs. Delivered streamlined, user-centric mobile experiences.",
      isConcurrent: true
    },
    {
      year: "2023 - OCT 2024",
      role: "Mobile Developer",
      company: "TECHRES",
      description: "Developed F&B industry projects and outsource projects.",
      isConcurrent: false
    },
    {
      year: "2022 - 2023",
      role: "Internship Mobile/Web Developer",
      company: "COSIS",
      description: "Developed websites and apps to compile business data.",
      isConcurrent: false
    }
  ];

  const projects = [
    {
      title: "CaroKings",
      description: "A cross-platform Gomoku (Caro) game available on Android and iOS. Implemented game features, AI gameplay, and online services.",
      tags: ["Android", "iOS", "AI", "Gaming"],
      image: "https://play-lh.googleusercontent.com/QYzHQUCHPEdEz5qHuTGU2ZL_Qq1zowsmk-By_5QzoENxQJ_CY81s2xQhTlkqCz7DuVhVkT_NQLyjvqZLaSRNnQ=s256-rw",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.diuhug95.caro",
        appStore: "https://apps.apple.com/us/app/caro-kings/id6770986025"
      }
    },
    {
      title: "Fly Go 4",
      description: "An application that enhances the flying experience for DJI drones by offering advanced remote control features and customizable settings.",
      tags: ["DJI SDK", "Android", "Remote Control"],
      image: "https://play-lh.googleusercontent.com/p52aGBsHgekw1F6JqDgBF_r9DJC6f6WBg8JjFREXawiWvM-brfjXzokh8HYMy59lI2hM_N8X3-zjESqMXPi0hQ=s256-rw",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.smartremote.djiflydrone"
      }
    },
    {
      title: "Voice AI Assistant for Seri",
      description: "An AI-powered productivity application that enables voice interactions, smart automation, and personalized assistant features.",
      tags: ["AI", "Voice Processing", "Productivity"],
      image: "https://play-lh.googleusercontent.com/RnZogFo87WbDg9-6RRmfF8rZhCt4-OaRQCzMR8ZdMMykRGpNotfzPrA-sBSy4kqDfQ6SUxQLFg1ZywhelPQA=s256-rw",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.smartremote.homepodsiri"
      }
    },
    {
      title: "Aloline",
      description: "Application for booking, ordering, accumulating points, reviewing food, group chat, and video calling.",
      tags: ["F&B", "Chat", "Video Call", "Real-time"],
      image: "https://play-lh.googleusercontent.com/4aj26fQSwTh0dbetwUdLI88o85ApTkJjYkZr-1kOIYrhgo3ZVvE21bzvcBcPkt0xw_YSUaALQYY3rnjwmXls=s256-rw",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=vn.techres.line"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="about" className="relative pt-48 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="mb-10 relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl opacity-50" />
            <div className="w-40 h-40 rounded-3xl bg-zinc-900 flex items-center justify-center overflow-hidden border border-white/10 relative z-10 p-1">
               <div className="w-full h-full rounded-[22px] bg-zinc-950 flex items-center justify-center border border-white/5">
                <span className="text-5xl font-black text-gradient-emerald tracking-tighter">NXD</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tighter leading-tight text-gradient">
              NGUYEN <span className="text-gradient-emerald">XUAN DIEU</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-lg sm:text-xl font-mono font-medium text-slate-500 mb-10 tracking-[0.3em] uppercase">
              // Android Developer & UI Designer
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-slate-400 max-w-3xl text-lg sm:text-xl leading-relaxed mb-12"
          >
            "As a progressive individual, I always try to learn and absorb the good things around me every day. From there, I can improve myself and become a better version of me now in the future."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="#projects" className="btn-primary group">
              Explore Projects
              <ArrowUpRight className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
            <a href="#contact" className="px-8 py-3 glass-panel rounded-full text-white font-semibold hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="section-subheading">History</span>
              <h2 className="section-heading">Work <span className="text-gradient-emerald">Experience</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">A focused timeline of my journey in mobile development and design.</p>
              <div className="p-6 glass-panel rounded-3xl border-emerald-500/10">
                <div className="flex items-center gap-4 text-emerald-400">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-none">Android Native</p>
                    <p className="text-xs text-emerald-500/50 font-mono mt-1 uppercase tracking-widest">Specialization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} {...exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="section-subheading">Portfolio</span>
            <h2 className="section-heading">Key <span className="text-gradient-emerald">Projects</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl">Crafting high-performance mobile solutions with clean architecture and intuitive design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="glass-panel rounded-[40px] p-12 sm:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
            
            <div className="mb-20 text-center">
              <span className="section-subheading">Expertise</span>
              <h2 className="section-heading">Technical <span className="text-gradient-emerald">Arsenal</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="space-y-6 group">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors duration-500 rounded-full" />
                    <h3 className="text-sm font-black text-slate-300 uppercase tracking-[0.2em]">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-zinc-900/50 border border-white/5 text-slate-400 text-sm font-medium hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-16 rounded-[40px] text-center relative overflow-hidden border-emerald-500/20 shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter">
                Let's build the <span className="text-gradient-emerald italic">future</span>.
              </h2>
              <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:hello@example.com" className="btn-primary group text-lg px-12">
                  Send Message
                  <Mail size={20} className="inline-block ml-3 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
