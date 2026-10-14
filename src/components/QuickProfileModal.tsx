import React, { useEffect } from 'react';
import { X, GraduationCap, Code2, MapPin, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_CONFIG, SKILLS, PROJECTS } from '../data/portfolio';

interface QuickProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickProfileModal: React.FC<QuickProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
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

  const coreSkills = SKILLS.slice(0, 8);

  const handleJump = (sectionId: string) => {
    onClose();
    onNavigateSection(sectionId);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="quick-profile-title"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center animate-fade-in"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-6">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center space-x-2">
            <span className="font-bebas text-lg tracking-widest text-[#E50914]">JITHUVERSE</span>
            <span className="text-zinc-600">|</span>
            <span className="text-xs uppercase font-bold tracking-wider text-zinc-300">Profile Overview</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close profile overview dialog"
            className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto no-scrollbar">
          {/* Header Name & Title */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Candidate Specification</span>
            </div>
            <h2 id="quick-profile-title" className="text-3xl font-extrabold text-white tracking-tight">
              {profile.name}
            </h2>
            <p className="text-sm font-medium text-zinc-400 mt-1">
              {profile.roleTag}
            </p>
            <p className="text-xs text-zinc-500 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{profile.location}</span>
            </p>
          </div>

          {/* Quick Summary Bio */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
            {profile.bioIntro}
          </div>

          {/* Education Breakdown */}
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
              <GraduationCap className="w-4 h-4 text-red-500" />
              <span>Education & University</span>
            </div>
            <div className="space-y-1 text-xs text-zinc-300">
              <p className="font-semibold text-white text-sm">{profile.degree}</p>
              <p className="text-zinc-400">{profile.college}</p>
              <p className="text-zinc-500">Affiliated with {profile.university}</p>
              <div className="pt-2 flex flex-wrap gap-4 text-zinc-400 font-mono-code text-[11px]">
                <span>Status: <strong className="text-zinc-200">{profile.graduationYearPlaceholder}</strong></span>
                <span>CGPA: <strong className="text-zinc-200">{profile.cgpaPlaceholder}</strong></span>
              </div>
            </div>
          </div>

          {/* Core Technologies */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-red-500" />
                Key Technologies
              </span>
              <button
                onClick={() => handleJump('skills')}
                className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1 font-semibold"
              >
                <span>View All Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((sk) => (
                <span
                  key={sk.id}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  {sk.name}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Originals Quick Links */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-red-500" />
                Featured Projects
              </span>
              <button
                onClick={() => handleJump('projects')}
                className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1 font-semibold"
              >
                <span>View Projects Row</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-xs">
                  <div className="font-bold text-white mb-0.5">{proj.title}</div>
                  <div className="text-zinc-400 text-[11px] line-clamp-1">{proj.shortDescription}</div>
                  <div className="text-red-400 text-[10px] mt-1 font-mono-code">{proj.genreTag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => handleJump('contact')}
              className="px-5 py-2.5 rounded-lg bg-[#E50914] hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-lg"
            >
              Contact / Inquire
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
