import React from 'react';
import { EXPERIENCES } from '../data/portfolio';
import { CheckCircle2, Clock, Calendar, Building, Sparkles } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 mb-1">
          <span>Track Record</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Experience, Internships & Community
        </h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Practical software internships, hands-on workshops, and community leadership at TinkerHub SBCE.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
        {EXPERIENCES.map((exp) => {
          const isVerified = exp.status === 'Verified';

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Pin Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-zinc-950 ${
                  isVerified ? 'bg-[#E50914]' : 'bg-zinc-600'
                } group-hover:scale-125 transition-transform`}
              />

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded ${
                        isVerified
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                          : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono-code text-zinc-400 shrink-0">
                    {exp.dateRange}
                  </span>
                </div>

                {/* Organization */}
                <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-3">
                  <Building className="w-3.5 h-3.5" />
                  <span>{exp.organization}</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-400 uppercase tracking-wider text-[10px]">{exp.type}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Gained Tags (Zero-Pill: clean unboxed with dot separators) */}
                <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300 mr-1">Skills:</span>
                  {exp.skillsGained.map((skill, idx) => (
                    <React.Fragment key={skill}>
                      {idx > 0 && <span className="text-zinc-600">·</span>}
                      <span>{skill}</span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Evidence Note */}
                {exp.evidenceNote && (
                  <div className="mt-2 text-[11px] text-zinc-500 italic">
                    Note: {exp.evidenceNote}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
