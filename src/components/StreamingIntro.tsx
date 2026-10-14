import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, FastForward } from 'lucide-react';

interface StreamingIntroProps {
  onComplete: () => void;
}

export const StreamingIntro: React.FC<StreamingIntroProps> = ({ onComplete }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [animStep, setAnimStep] = useState<number>(0);

  // Play subtle synth chime if sound enabled
  const playChime = () => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(130.81, ctx.currentTime); // C3
      osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.8); // C5

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.5);
    } catch {
      // Audio context might be restricted before interaction; safe fallback
    }
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    const timer1 = setTimeout(() => setAnimStep(1), 100);
    const timer2 = setTimeout(() => setAnimStep(2), 700);
    const timer3 = setTimeout(() => {
      onComplete();
    }, 2000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) playChime();
  };

  return (
    <div
      role="dialog"
      aria-label="Streaming intro animation"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-white transition-opacity duration-700 select-none overflow-hidden"
    >
      {/* Background Cinematic Flare */}
      <div 
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,#E50914_0%,transparent_60%)] transition-opacity duration-1000 pointer-events-none ${
          animStep >= 1 ? 'opacity-25 scale-110' : 'opacity-0 scale-90'
        }`}
      />

      {/* Center Cinematic Wordmark */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <div 
          className={`transform transition-all duration-700 ease-out ${
            animStep >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center space-x-1">
            <span className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-wider text-[#E50914] drop-shadow-[0_0_35px_rgba(229,9,20,0.6)]">
              JITHU
            </span>
            <span className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-wider text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              VERSE
            </span>
          </div>
        </div>

        {/* Tagline Reveal */}
        <p
          className={`mt-3 text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-zinc-400 font-semibold transition-all duration-500 delay-200 ${
            animStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          A Jithu Biju Original
        </p>

        {/* Cinematic Red Scanner Beam Line */}
        <div 
          className={`mt-6 h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent transition-all duration-700 ${
            animStep >= 1 ? 'w-48 sm:w-80 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>

      {/* Top Controls: Sound & Skip */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
        <button
          onClick={toggleSound}
          aria-label={soundEnabled ? 'Mute intro chime' : 'Enable intro chime'}
          className="p-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-[#E50914]" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          onClick={onComplete}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white hover:border-[#E50914] transition-colors"
        >
          <span>Skip</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
