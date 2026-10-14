import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FolderKanban, Wrench, GraduationCap, Building2, Sparkles } from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCES, ProjectItem } from '../data/portfolio';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  type: 'project' | 'skill' | 'experience' | 'education';
  description: string;
  targetId?: string;
  projectData?: ProjectItem;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onNavigateSection,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build searchable index
  const normalized = query.trim().toLowerCase();

  const results: SearchResult[] = [];

  if (normalized.length > 0) {
    // 1. Projects
    PROJECTS.forEach((p) => {
      const match =
        p.title.toLowerCase().includes(normalized) ||
        p.category.toLowerCase().includes(normalized) ||
        p.shortDescription.toLowerCase().includes(normalized) ||
        p.technologies.some((t) => t.toLowerCase().includes(normalized));

      if (match) {
        results.push({
          id: p.id,
          title: p.title,
          category: p.category,
          type: 'project',
          description: p.shortDescription,
          projectData: p,
        });
      }
    });

    // 2. Skills
    SKILLS.forEach((s) => {
      const match =
        s.name.toLowerCase().includes(normalized) ||
        s.category.toLowerCase().includes(normalized) ||
        s.description.toLowerCase().includes(normalized) ||
        s.associatedProjects.some((proj) => proj.toLowerCase().includes(normalized));

      if (match) {
        results.push({
          id: s.id,
          title: s.name,
          category: s.category,
          type: 'skill',
          description: s.description,
          targetId: 'skills',
        });
      }
    });

    // 3. Experiences
    EXPERIENCES.forEach((e) => {
      const match =
        e.role.toLowerCase().includes(normalized) ||
        e.organization.toLowerCase().includes(normalized) ||
        e.description.toLowerCase().includes(normalized) ||
        e.skillsGained.some((sk) => sk.toLowerCase().includes(normalized));

      if (match) {
        results.push({
          id: e.id,
          title: e.role,
          category: e.organization,
          type: 'experience',
          description: e.description,
          targetId: 'experience',
        });
      }
    });

    // 4. Education keywords
    if ('education'.includes(normalized) || 'b.tech'.includes(normalized) || 'sree buddha'.includes(normalized) || 'ktu'.includes(normalized)) {
      results.push({
        id: 'education-entry',
        title: 'B.Tech in Computer Science and Engineering',
        category: 'Sree Buddha College of Engineering (KTU)',
        type: 'education',
        description: 'Undergraduate degree program in Computer Science & Engineering in Kerala, India.',
        targetId: 'journey',
      });
    }
  }

  const handleResultClick = (res: SearchResult) => {
    onClose();
    if (res.type === 'project' && res.projectData) {
      onSelectProject(res.projectData);
    } else if (res.targetId) {
      onNavigateSection(res.targetId);
    }
  };

  const handleKeyDownInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < results.length ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      const target = results[selectedIndex] || results[0];
      handleResultClick(target);
    }
  };

  const quickChips = ['React', 'EventVerse', 'Python', 'Flask', 'TinkerHub', 'SQL', 'Leaflet', 'Education'];

  return (
    <div
      role="dialog"
      aria-labelledby="search-modal-label"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 bg-black/90 backdrop-blur-xl animate-fade-in"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-zinc-800 gap-3">
          <Search className="w-5 h-5 text-red-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDownInput}
            placeholder="Search projects, skills, tech, experience (e.g. React, EventVerse)..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none"
            aria-label="Search portfolio content"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-500 hover:text-white p-1 rounded"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-[10px] uppercase font-mono-code text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded hidden sm:inline">
              ESC
            </span>
          )}
        </div>

        {/* Quick Search Chips */}
        {query.length === 0 && (
          <div className="p-4 sm:p-6">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQuery(chip)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query.length > 0 && (
          <div className="max-h-[60vh] overflow-y-auto no-scrollbar p-2 sm:p-4 space-y-2">
            {results.length === 0 ? (
              <div className="py-12 text-center text-zinc-500">
                <p className="text-sm">No matches found for &ldquo;{query}&rdquo;</p>
                <p className="text-xs text-zinc-600 mt-1">
                  Try searching for technologies (e.g. React, Python), projects (EventVerse, PigeonPost), or education.
                </p>
              </div>
            ) : (
              results.map((res, idx) => {
                const isSelected = idx === selectedIndex;
                const getIcon = () => {
                  switch (res.type) {
                    case 'project':
                      return <FolderKanban className="w-4 h-4 text-red-500" />;
                    case 'skill':
                      return <Wrench className="w-4 h-4 text-blue-500" />;
                    case 'education':
                      return <GraduationCap className="w-4 h-4 text-amber-500" />;
                    case 'experience':
                      return <Building2 className="w-4 h-4 text-emerald-500" />;
                  }
                };

                return (
                  <button
                    key={`${res.type}-${res.id}`}
                    onClick={() => handleResultClick(res)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-colors flex items-center justify-between group ${
                      isSelected
                        ? 'bg-zinc-900 border-[#E50914] shadow-md ring-1 ring-[#E50914]/50'
                        : 'bg-zinc-900/50 hover:bg-zinc-900 border-transparent hover:border-zinc-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 shrink-0 mt-0.5">
                        {getIcon()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                            {res.title}
                          </span>
                          <span className="text-[10px] uppercase font-mono-code text-zinc-500">
                            {res.category}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                          {res.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors shrink-0 ml-2" />
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};
