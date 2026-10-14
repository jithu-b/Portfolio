import React, { useEffect } from 'react';
import { X, GraduationCap, Compass, Wrench, Sparkles, BookOpen, MapPin, Award } from 'lucide-react';
import { PORTFOLIO_CONFIG, EXPERIENCES } from '../data/portfolio';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const { profile } = PORTFOLIO_CONFIG;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="about-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-fade-in"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-6">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center space-x-2">
            <span className="font-bebas text-lg tracking-widest text-[#E50914]">JITHUVERSE</span>
            <span className="text-zinc-500">|</span>
            <span className="text-xs uppercase font-bold tracking-wider text-zinc-300">Origin Story</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close story dialog"
            className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[75vh] overflow-y-auto no-scrollbar">
          {/* Hero Story Banner */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Biography & Background</span>
            </div>
            <h2 id="about-modal-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              The Story Behind the Screen
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {profile.fullStory}
            </p>
          </div>

          {/* Education Box */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-red-950/80 text-red-400 border border-red-900/50">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Academic Foundation</h3>
                <p className="text-xs text-zinc-400">Formal engineering education</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-zinc-300">
              <div className="font-semibold text-white text-base">
                {profile.degree}
              </div>
              <div className="text-zinc-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{profile.college}</span>
              </div>
              <div className="text-xs text-zinc-400">
                Affiliated with {profile.university}
              </div>
              <div className="pt-3 mt-3 border-t border-zinc-800/80 flex flex-wrap gap-4 text-xs text-zinc-400 font-mono-code">
                <span>Graduation Status: <strong className="text-zinc-300">{profile.graduationYearPlaceholder}</strong></span>
                <span>CGPA / Grade: <strong className="text-zinc-300">{profile.cgpaPlaceholder}</strong></span>
              </div>
            </div>
          </div>

          {/* Two-Column: What I Enjoy Building vs How I Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What I Enjoy Building */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                What I Enjoy Building
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Interactive Websites:</strong> Cinematic, engaging digital journeys that make standard portfolios and apps feel tactile.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Full-Stack Web Applications:</strong> Dynamic platforms with structured schemas, APIs, and authentication flows like EventVerse.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Creative Digital Experiments:</strong> Whimsical interactions like PigeonPost exploring geographic spatial communication.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Community-Focused Technology:</strong> Tools that empower campus communities and make organizing hackathons seamless.</span>
                </li>
              </ul>
            </div>

            {/* How I Work */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                How I Work
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-bold">1.</span>
                  <span><strong>Learn by building:</strong> Deepening technical fluency through hands-on implementation and problem-solving.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-bold">2.</span>
                  <span><strong>Experiment with new tools:</strong> Staying current with modern libraries, frameworks, and developer workflows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-bold">3.</span>
                  <span><strong>Deconstruct complex problems:</strong> Breaking large features into modular, testable components.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-bold">4.</span>
                  <span><strong>Iterate relentlessly:</strong> Refining UI ergonomics, micro-interactions, and edge cases until rock solid.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-bold">5.</span>
                  <span><strong>Communicate transparently:</strong> Collaborating openly with team members and community organizers.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline of Key Milestones */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-red-500" />
              Journey Timeline
            </h3>

            <div className="space-y-4 border-l-2 border-zinc-800 pl-6 ml-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#E50914] border-2 border-zinc-950" />
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-base font-bold text-white">{exp.role}</h4>
                    <span className="text-xs font-mono-code text-zinc-500 shrink-0">{exp.dateRange}</span>
                  </div>
                  <p className="text-xs text-red-400 font-medium mb-1">{exp.organization}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
