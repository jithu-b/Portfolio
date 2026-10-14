import React from 'react';
import { Briefcase, Code, Compass, Check, X } from 'lucide-react';

export type ProfileType = 'recruiter' | 'developer' | 'explorer';

interface ProfileOption {
  id: ProfileType;
  title: string;
  tagline: string;
  focus: string;
  avatarBg: string;
  borderColor: string;
  glowColor: string;
  icon: React.ElementType;
}

const PROFILES: ProfileOption[] = [
  {
    id: 'recruiter',
    title: 'Recruiter',
    tagline: 'Career & Production Focus',
    focus: 'Curates verified skills, education, internships, and structured projects.',
    avatarBg: 'bg-gradient-to-br from-red-600 to-red-950',
    borderColor: 'border-red-600/60 hover:border-red-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(229,9,20,0.4)]',
    icon: Briefcase
  },
  {
    id: 'developer',
    title: 'Developer',
    tagline: 'Code & Architecture Focus',
    focus: 'Curates codebases, backend systems, APIs, GitHub repositories, and tech stacks.',
    avatarBg: 'bg-gradient-to-br from-blue-600 to-slate-950',
    borderColor: 'border-blue-600/60 hover:border-blue-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
    icon: Code
  },
  {
    id: 'explorer',
    title: 'Explorer',
    tagline: 'Creative Journey & Story',
    focus: 'Curates the origin story, campus community at TinkerHub, and outside passions.',
    avatarBg: 'bg-gradient-to-br from-amber-600 to-zinc-950',
    borderColor: 'border-amber-600/60 hover:border-amber-500',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]',
    icon: Compass
  }
];

interface ProfileSelectorModalProps {
  currentProfile: ProfileType;
  onSelectProfile: (profile: ProfileType) => void;
  onClose?: () => void;
  isInitialSelection?: boolean;
}

export const ProfileSelectorModal: React.FC<ProfileSelectorModalProps> = ({
  currentProfile,
  onSelectProfile,
  onClose,
  isInitialSelection = false
}) => {
  return (
    <div 
      role="dialog"
      aria-labelledby="profile-heading"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center text-center">
        {/* Dismiss if opened from top bar */}
        {!isInitialSelection && onClose && (
          <button
            onClick={onClose}
            aria-label="Close profile switcher"
            className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Streaming Logo / Eyebrow */}
        <div className="flex items-center space-x-1.5 mb-2">
          <span className="font-bebas text-2xl tracking-widest text-[#E50914]">JITHU</span>
          <span className="font-bebas text-2xl tracking-widest text-white">VERSE</span>
        </div>

        <h1 id="profile-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          Who&apos;s watching?
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mb-8 sm:mb-12">
          Select a profile lens to tailor the featured sections, project hierarchy, and browsing order.
        </p>

        {/* 3 Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl">
          {PROFILES.map((p) => {
            const Icon = p.icon;
            const isSelected = currentProfile === p.id;

            return (
              <button
                key={p.id}
                onClick={() => onSelectProfile(p.id)}
                className={`group flex flex-col items-center text-center p-5 rounded-2xl bg-zinc-900/60 border ${
                  isSelected ? 'border-[#E50914] bg-zinc-900/90' : 'border-zinc-800 hover:border-zinc-700'
                } transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Avatar Box */}
                <div
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${p.avatarBg} p-1 mb-4 flex items-center justify-center border-2 ${p.borderColor} ${p.glowColor} transition-all duration-300`}
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md" />
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 bg-[#E50914] text-white p-1 rounded-full shadow-lg">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Profile Name */}
                <span className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {p.title}
                </span>

                <span className="text-xs font-semibold text-zinc-400 mt-0.5">
                  {p.tagline}
                </span>

                <p className="text-xs text-zinc-500 mt-2.5 line-clamp-3 leading-relaxed">
                  {p.focus}
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 w-full flex items-center justify-center">
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                    {isSelected ? 'Currently Active' : 'Select Stream →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skip / Continue directly */}
        <div className="mt-10 flex items-center space-x-4">
          <button
            onClick={() => {
              if (onClose) onClose();
              else onSelectProfile(currentProfile);
            }}
            className="px-6 py-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            {isInitialSelection ? 'Browse All Content Directly' : 'Keep Current Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};
