import React from 'react';
import { Play, Info, Github, ChevronDown, Sparkles } from 'lucide-react';
import { VisualThumbnail } from './VisualThumbnails';
import { PORTFOLIO_CONFIG } from '../data/portfolio';

interface HeroBannerProps {
  onPlayStory: () => void;
  onMoreInfo: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onPlayStory,
  onMoreInfo
}) => {
  const { profile } = PORTFOLIO_CONFIG;

  const scrollToNext = () => {
    const nextElem = document.querySelector('#journey');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Featured Portfolio Introduction"
      className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-start overflow-hidden pt-20 pb-16"
    >
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <VisualThumbnail type="hero" className="w-full h-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="font-bebas text-sm sm:text-base tracking-widest text-[#E50914] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              JITHUVERSE ORIGINAL
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">
              SERIES 2025
            </span>
          </div>

          {/* Name & Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 text-balance leading-[1.08]">
            <span className="block font-bebas text-2xl sm:text-3xl lg:text-4xl tracking-widest text-zinc-300 font-normal">
              {profile.name}
            </span>
            Building Ideas Into Experiences.
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-5">
            {profile.bioIntro}
          </p>

          {/* Zero-Pill Clean Metadata Row with Typographic Separators */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-zinc-400 font-medium mb-8">
            <span>Computer Science</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Web Development</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Creative Technology</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Based in Kerala, India</span>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary Action */}
            <button
              onClick={onPlayStory}
              className="flex items-center justify-center space-x-2.5 px-6 sm:px-8 py-3 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all font-bold text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-black" />
              <span>Play My Story</span>
            </button>

            {/* Secondary Action */}
            <button
              onClick={onMoreInfo}
              className="flex items-center justify-center space-x-2.5 px-5 sm:px-6 py-3 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/90 text-white transition-all font-semibold text-sm sm:text-base border border-zinc-700/60 backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>More Info</span>
            </button>

            {/* Third Action: GitHub */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all font-medium text-sm border border-zinc-800/80"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">View GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll to portfolio content rows"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-zinc-500 hover:text-zinc-300 transition-colors group focus:outline-none"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase mb-1 opacity-70 group-hover:opacity-100">
          Explore Stream
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
