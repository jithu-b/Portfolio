import React, { useState } from 'react';
import { ArrowUp, Github, Mail, Linkedin, Sparkles, Film } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { profile } = PORTFOLIO_CONFIG;
  const [showCreditsRoll, setShowCreditsRoll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060606] border-t border-zinc-900 pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Ambient Red glow backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#E50914]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand & Summary (Col 1 & 2) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-1 text-2xl font-bebas tracking-widest text-white">
              <span className="text-[#E50914]">JITHU</span>
              <span className="text-white">VERSE</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              A Netflix-inspired personal portfolio streaming the engineering journey, full-stack projects, and community initiatives of Jithu Biju.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-850"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-850"
              >
                <Mail className="w-4 h-4" />
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-850"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Channels
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home Stream</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">Journey & Story</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Original Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Arsenal</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience & Timeline</a>
              </li>
            </ul>
          </div>

          {/* Platform Meta & Interactive Easter Egg (Col 4) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Production Details
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Designed with curiosity. Built with code.
            </p>
            <p className="text-xs text-zinc-500">
              Tech Stack: React 19 · TypeScript · Vite · Tailwind CSS
            </p>

            <button
              onClick={() => setShowCreditsRoll(!showCreditsRoll)}
              className="mt-3 flex items-center space-x-1.5 text-xs text-red-500 hover:text-red-400 transition-colors font-semibold"
            >
              <Film className="w-3.5 h-3.5" />
              <span>{showCreditsRoll ? 'Hide End Credits' : 'Roll Cinematic Credits'}</span>
            </button>
          </div>
        </div>

        {/* Cinematic Credits Roll Animation if active */}
        {showCreditsRoll && (
          <div className="my-8 p-6 rounded-2xl bg-black border border-zinc-900 text-center space-y-4 animate-fade-in font-mono-code text-xs">
            <div className="text-red-500 font-bold uppercase tracking-widest text-sm">
              — JITHUVERSE PRODUCTION CREDITS —
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-zinc-400 py-3">
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Creator & Developer</span>
                <span className="text-white font-bold">Jithu Biju</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Campus Community</span>
                <span className="text-white font-bold">TinkerHub SBCE</span>
              </div>
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase">Alma Mater</span>
                <span className="text-white font-bold">Sree Buddha College of Eng.</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500">
              Streaming real passion, honest learning, and continuous code improvement.
            </p>
          </div>
        )}

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} Jithu Biju. All rights reserved. JITHUVERSE is an original personal portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
