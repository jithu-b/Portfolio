import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentCard, CardItemData } from './ContentCard';

interface ContentRowProps {
  id?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  items: CardItemData[];
}

export const ContentRow: React.FC<ContentRowProps> = ({
  id,
  title,
  subtitle,
  badge,
  items
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id={id} className="relative py-5 md:py-7 group/row scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <div className="flex items-baseline justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              {title}
            </h2>
            {badge && (
              <span className="text-[10px] uppercase font-bold tracking-wider text-red-500 font-bebas text-sm">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="hidden sm:block text-xs text-zinc-400 font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Row Wrapper with Carousel Controls */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label={`Scroll ${title} left`}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-black/85 text-white border border-zinc-700 shadow-2xl hover:bg-[#E50914] transition-all opacity-0 group-hover/row:opacity-100 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Horizontal Scroll Area */}
        <div
          ref={rowRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-5 px-1.5"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item) => (
            <div key={item.id} style={{ scrollSnapAlign: 'start' }}>
              <ContentCard item={item} />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label={`Scroll ${title} right`}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-black/85 text-white border border-zinc-700 shadow-2xl hover:bg-[#E50914] transition-all opacity-0 group-hover/row:opacity-100 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
};
