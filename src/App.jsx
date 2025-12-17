import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Smartphone, ExternalLink, Gamepad2 } from 'lucide-react';

import ThreeScene from './components/ThreeBackground';
import SpiderGame from './components/SpiderGame';
import AIChat from './components/AIChat';

// Project Data
const projects = [
  { title: 'Sup Tools', desc: 'React & AI Utilities', link: 'https://lighthearted-tartufo-05b0ad.netlify.app/' },
  { title: 'Portfolio V1', desc: 'Previous personal site', link: '#' },
  { title: 'Generative Art', desc: 'Python & Processing', link: '#' },
];

function App() {
  const [themeActive, setThemeActive] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-neonPink selection:text-white">
      {/* 3D Background */}
      <ThreeScene toggleTheme={() => setThemeActive(!themeActive)} />

      {/* Lighting Overlay for Bulb Effect */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 z-0 
        ${themeActive ? 'opacity-20 bg-yellow-500 mix-blend-overlay' : 'opacity-0'}`}></div>

      <nav className="fixed w-full p-6 flex justify-between items-center z-30 mix-blend-difference">
        <h1 className="text-2xl font-cyber tracking-widest font-bold">SUDEEP<span className="text-neonPurple">SR</span></h1>
        <button 
            onClick={() => setGameOpen(true)}
            className="flex items-center gap-2 border border-neonRed px-4 py-1 rounded-full text-neonRed hover:bg-neonRed hover:text-white transition group"
        >
            <Gamepad2 size={18} className="group-hover:rotate-12 transition-transform"/>
            <span className="text-xs font-mono hidden md:block">TIME PASS</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-32 space-y-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="h-[80vh] flex flex-col justify-center relative">
           {/* Profile Image */}
           <div className="absolute top-0 right-0 md:right-20 md:top-20 -z-10 opacity-50 md:opacity-100">
               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-neonPurple overflow-hidden shadow-[0_0_30px_#bc13fe]">
                   <img src="https://via.placeholder.com/300" alt="Sudeep SR" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"/>
               </div>
           </div>

           <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className="text-neonBlue font-mono text-lg"
              >
                HELLO WORLD, I AM
              </motion.h2>
              <h1 className="text-6xl md:text-8xl font-black glitch-wrapper" data-text="SUDEEP SR">
                <span className="glitch" data-text="SUDEEP SR">SUDEEP SR</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
                 <span className="text-neonPurple">Vibe Coder</span> • Engineering Student (MITK) • Full Stack • Artist
              </div>
              <p className="font-cyber text-neonRed text-sm tracking-[0.5em] pt-4">"KEEP LEARNING"</p>
              
              <div className="flex gap-4 pt-6">
                 <a href="#contact" className="px-8 py-3 bg-white text-black font-bold hover:bg-neonBlue transition-colors">Contact Me</a>
                 <a href="https://linkedin.com" target="_blank" className="px-8 py-3 border border-white hover:border-neonPurple hover:text-neonPurple transition-colors">LinkedIn</a>
              </div>
           </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-4xl font-cyber mb-6 border-l-4 border-neonBlue pl-4">ABOUT ME</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                    Based in Chikmagalur/Sringeri, I'm an 18-year-old AIML student at 
                    <span className="text-neonBlue"> MITK Udupi</span>. 
                    I don't just write code; I craft digital experiences. My world revolves around AI, Creative Coding, and capturing moments through my lens.
                </p>
                <div className="flex gap-2 flex-wrap font-mono text-xs">
                    {["Artist", "Video Editor", "Creative Thinker"].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-neonPurple border border-neonPurple/20">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="bg-cardBg p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-neonBlue">Stats</h3>
                <ul className="space-y-2 text-sm font-mono">
                    <li className="flex justify-between"><span>Age</span><span>18</span></li>
                    <li className="flex justify-between"><span>Location</span><span>India</span></li>
                    <li className="flex justify-between"><span>Major</span><span>B.E. AIML</span></li>
                    <li className="flex justify-between"><span>Editor</span><span>DaVinci / CapCut</span></li>
                </ul>
            </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
            <h2 className="text-4xl font-cyber mb-10 text-center">TECH ARSENAL</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Python', 'C++', 'React', 'Three.js', 'Generative AI', 'Video Editing', 'Tailwind', 'Next.js'].map((skill, i) => (
                    <motion.div 
                        whileHover={{ y: -5, borderColor: '#bc13fe' }}
                        key={i} 
                        className="p-4 border border-gray-800 bg-cardBg rounded text-center hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] transition-all"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section>
             <h2 className="text-4xl font-cyber mb-10 text-right border-r-4 border-neonRed pr-4">PROJECTS</h2>
             <div className="grid md:grid-cols-3 gap-6">
                 {projects.map((proj, i) => (
                     <div key={i} className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
                         <div className="h-40 bg-gradient-to-br from-gray-800 to-black group-hover:from-neonBlue/20 group-hover:to-purple-900/20 transition-all duration-500"></div>
                         <div className="p-6">
                             <h3 className="text-xl font-bold text-white group-hover:text-neonBlue">{proj.title}</h3>
                             <p className="text-gray-400 text-sm my-2">{proj.desc}</p>
                             <a href={proj.link} className="inline-flex items-center gap-2 text-xs font-mono text-neonRed mt-2">
                                VIEW PROJECT <ExternalLink size={12}/>
                             </a>
                         </div>
                     </div>
                 ))}
             </div>
        </section>

        {/* SOCIALS & FOOTER */}
        <footer id="contact" className="border-t border-gray-800 pt-10 pb-20 relative">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-cyber">CONNECT</h2>
                <div className="flex gap-6">
                    <a href="https://www.instagram.com/sype.ix?igsh=MW9jeXAzd2RsNjZvcw==" target="_blank" className="hover:text-neonPurple"><Instagram /></a>
                    <a href="https://www.linkedin.com/in/sudeep-sr-56808435a" target="_blank" className="hover:text-neonBlue"><Linkedin /></a>
                    <a href="mailto:sudeepsr52@gmail.com" className="hover:text-neonRed"><Mail /></a>
                </div>
                
                <div className="text-center font-mono text-gray-500 text-sm space-y-1">
                    <p>Phone: 9353927350</p>
                    <p>Instagram (Priv): @sudeepsr_ | Threads: @sudeepsr_</p>
                </div>

                {/* Spiderman Footer Elements */}
                <div className="mt-10 p-4 border border-neonRed/30 rounded bg-neonRed/5">
                    <p className="font-cyber text-neonRed text-center text-sm">
                        "WITH GREAT POWER COMES GREAT RESPONSIBILITY."
                    </p>
                </div>
            </div>
            
            {/* Decorative Webs */}
            <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-20 text-gray-500" viewBox="0 0 100 100">
               <path d="M0 100 Q 50 50 100 0" stroke="currentColor" fill="none" />
               <path d="M0 50 Q 50 50 50 0" stroke="currentColor" fill="none" />
               <path d="M50 100 Q 50 50 100 50" stroke="currentColor" fill="none" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-20 text-gray-500 transform scale-x-[-1]" viewBox="0 0 100 100">
               <path d="M0 100 Q 50 50 100 0" stroke="currentColor" fill="none" />
               <path d="M0 50 Q 50 50 50 0" stroke="currentColor" fill="none" />
            </svg>
        </footer>

      </main>

      {/* Widgets */}
      <AIChat />
      <SpiderGame isOpen={gameOpen} onClose={() => setGameOpen(false)} />
    </div>
  );
}

export default App;