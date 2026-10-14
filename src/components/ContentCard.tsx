import React from 'react';
import { Play, Info, ArrowUpRight, Github } from 'lucide-react';
import { VisualThumbnail } from './VisualThumbnails';

export interface CardItemData {
  id: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  status?: string;
  year?: string;
  tags?: string[];
  visualType?: string;
  accentColor?: string;
  githubUrl?: string;
  onClick: () => void;
}

interface ContentCardProps {
  item: CardItemData;
}

export const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  return (
    <div
      onClick={item.onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.onClick();
        }
      }}
      className="group relative flex-none w-[260px] sm:w-[300px] md:w-[320px] rounded-xl overflow-hidden bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 hover:scale-[1.03] hover:z-20 cursor-pointer shadow-lg hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    >
      {/* Thumbnail Aspect Ratio: 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
        <VisualThumbnail
          type={item.visualType || item.id}
          title={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Status / Category Ribbon */}
        {item.status && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                item.status === 'Completed'
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/80'
                  : item.status === 'In Progress'
                  ? 'bg-amber-950/80 text-amber-400 border border-amber-800/80'
                  : 'bg-blue-950/80 text-blue-400 border border-blue-800/80'
              }`}
            >
              {item.status}
            </span>
          </div>
        )}

        {/* Quick Play/Inspect Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-black ml-0.5" />
          </div>
        </div>

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
      </div>

      {/* Card Info Content */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata (Section 1.A zero-pill discipline) */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-1 font-medium">
            <span className="text-red-400 truncate max-w-[140px]">{item.category}</span>
            {item.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{item.year}</span>
              </>
            )}
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 mb-1">
            {item.title}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
            {item.description}
          </p>
        </div>

        {/* Tags Row */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400 font-mono-code pt-2 border-t border-zinc-800/60">
            {item.tags.slice(0, 3).map((tag, idx) => (
              <React.Fragment key={tag}>
                {idx > 0 && <span className="text-zinc-600">/</span>}
                <span className="hover:text-zinc-200 transition-colors">{tag}</span>
              </React.Fragment>
            ))}
            {item.tags.length > 3 && (
              <span className="text-zinc-500 text-[10px]">+{item.tags.length - 3}</span>
            )}
          </div>
        )}

        {/* Action affordance footer */}
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white pt-2 border-t border-zinc-800/40">
          <span className="flex items-center gap-1 font-semibold text-[11px] uppercase tracking-wider text-red-500">
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
          {item.githubUrl && (
            <span className="text-zinc-500 hover:text-white" title="Repository Available">
              <Github className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
