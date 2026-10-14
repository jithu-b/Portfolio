import React, { useState } from 'react';
import { SKILLS, SkillItem } from '../data/portfolio';
import { Code2, Server, Database, Terminal, GitBranch, Figma, Layers } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Frontend Development',
  'Backend Development',
  'Databases',
  'Programming Languages',
  'Developer Tools',
  'Design & Creative Technology'
] as const;

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillModal, setActiveSkillModal] = useState<SkillItem | null>(null);

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return Code2;
      case 'Backend Development':
        return Server;
      case 'Databases':
        return Database;
      case 'Programming Languages':
        return Terminal;
      case 'Developer Tools':
        return GitBranch;
      case 'Design & Creative Technology':
        return Figma;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 mb-1">
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Tools, Frameworks & Core Capabilities
        </h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Technologies and tools from real project experience and active software development.
        </p>
      </div>

      {/* Category Filter Tabs (Interactive filter controls allowed per frontend-design skill) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#E50914] text-white shadow-md'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Skill Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => {
          const Icon = getCategoryIcon(skill.category);
          return (
            <div
              key={skill.id}
              onClick={() => setActiveSkillModal(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSkillModal(skill);
                }
              }}
              className="group p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-zinc-950 text-red-500 border border-zinc-800 group-hover:border-red-900 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  {skill.proficiencyLabel && (
                    <span className="text-[11px] font-mono-code text-zinc-400">
                      {skill.proficiencyLabel}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                  {skill.name}
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                  {skill.description}
                </p>
              </div>

              {/* Associated Projects Footer */}
              {skill.associatedProjects.length > 0 && (
                <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="truncate max-w-[200px]">
                    Project: {skill.associatedProjects.join(', ')}
                  </span>
                  <span className="text-red-500 text-xs group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Skill Detail Modal */}
      {activeSkillModal && (
        <div
          role="dialog"
          aria-labelledby="skill-detail-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
        >
          <div className="fixed inset-0" onClick={() => setActiveSkillModal(null)} />
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono-code text-red-500 uppercase">
                {activeSkillModal.category}
              </span>
              <button
                onClick={() => setActiveSkillModal(null)}
                className="text-zinc-400 hover:text-white text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-800"
              >
                Close
              </button>
            </div>

            <h3 id="skill-detail-title" className="text-2xl font-bold text-white mb-2">
              {activeSkillModal.name}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {activeSkillModal.description}
            </p>

            {activeSkillModal.associatedProjects.length > 0 && (
              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs">
                <span className="font-semibold text-zinc-400 block mb-1">Applied In Projects:</span>
                <div className="flex flex-wrap gap-1.5 text-white font-medium">
                  {activeSkillModal.associatedProjects.map((p) => (
                    <span key={p} className="bg-zinc-800 px-2 py-0.5 rounded text-[11px]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
