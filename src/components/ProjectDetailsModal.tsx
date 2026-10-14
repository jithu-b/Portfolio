import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, CheckCircle2, Clock, Code2, Layers, AlertCircle } from 'lucide-react';
import { ProjectItem, PROJECTS } from '../data/portfolio';
import { VisualThumbnail } from './VisualThumbnails';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id);

  return (
    <div
      role="dialog"
      aria-labelledby="modal-project-title"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6 flex items-center justify-center animate-fade-in"
    >
      {/* Background backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-6">
        {/* Top Dismiss Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 text-zinc-300 hover:text-white hover:bg-[#E50914] transition-colors border border-zinc-700 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cinematic Backdrop Banner (16:9) */}
        <div className="relative aspect-video max-h-[380px] w-full overflow-hidden bg-zinc-900">
          <VisualThumbnail type={project.id} className="w-full h-full object-cover" />
          
          {/* Gradient Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />

          {/* Banner Floating Title and Metadata */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#E50914] uppercase">
                {project.genreTag}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs font-semibold text-zinc-400">
                {project.year}
              </span>
              {project.duration && (
                <>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs text-zinc-400">{project.duration}</span>
                </>
              )}
            </div>

            <h2 id="modal-project-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {project.title}
            </h2>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  <Github className="w-4 h-4 fill-black" />
                  <span>View Repository</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-800 text-white font-semibold text-sm hover:bg-zinc-700 transition-colors border border-zinc-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto no-scrollbar">
          {/* Overview Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#E50914]" />
              Project Overview
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Motivation Section */}
          {project.motivation && (
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                Core Motivation
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {project.motivation}
              </p>
            </div>
          )}

          {/* Implemented vs Planned Features (Truth in Claims) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Implemented Features */}
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-emerald-900/30">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Implemented Features
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                {project.implementedFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planned Features */}
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-amber-900/30">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Planned Roadmap
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-zinc-400">
                {project.plannedFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">○</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#E50914]" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Learnings */}
          {project.challengesAndLearnings && (
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-zinc-400" />
                Engineering Challenges & Takeaways
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.challengesAndLearnings}
              </p>
            </div>
          )}

          {/* "More Like This" Recommendations Row */}
          <div className="pt-6 border-t border-zinc-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-4">
              More Like This
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProjects.map((rel) => (
                <button
                  key={rel.id}
                  onClick={() => onSelectProject(rel)}
                  className="group flex flex-col text-left rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 p-3 transition-colors"
                >
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-950 mb-2">
                    <VisualThumbnail type={rel.id} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {rel.title}
                  </span>
                  <span className="text-[11px] text-zinc-500 line-clamp-1">
                    {rel.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
