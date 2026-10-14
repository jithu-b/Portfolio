import React, { useEffect } from 'react';
import { X, Sparkles, Compass, Lightbulb, HeartHandshake } from 'lucide-react';

export interface InfoModalData {
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  details?: string;
  bulletPoints?: string[];
  quote?: string;
  iconType?: string;
}

interface InfoModalProps {
  data: InfoModalData | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (data) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="info-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs font-semibold text-red-500 uppercase tracking-widest mb-2">
          <Sparkles className="w-4 h-4" />
          <span>{data.category}</span>
        </div>

        <h3 id="info-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {data.title}
        </h3>

        {data.subtitle && (
          <p className="text-sm font-medium text-zinc-400 mb-4">{data.subtitle}</p>
        )}

        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-sm text-zinc-300 leading-relaxed mb-6">
          {data.description}
        </div>

        {data.details && (
          <div className="text-sm text-zinc-400 leading-relaxed mb-6 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Behind The Strategy</h4>
            <p>{data.details}</p>
          </div>
        )}

        {data.bulletPoints && data.bulletPoints.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Key Highlights</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {data.bulletPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {data.quote && (
          <blockquote className="p-4 rounded-xl bg-zinc-900/40 border-l-2 border-red-500 text-xs italic text-zinc-300">
            &ldquo;{data.quote}&rdquo;
          </blockquote>
        )}

        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
