'use client';

import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

export default function ProjectsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'engine') return project.category.includes('Engine');
    if (selectedFilter === 'gameplay') return project.category.includes('Gameplay');
    if (selectedFilter === 'tools') return project.category.includes('Tools');
    return true;
  });

  return (
    <section id="projects" className="py-20 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              Work
            </div>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">
              Overview of custom engine development, gameplay programming, and tooling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-white text-black font-medium'
                  : 'text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-850'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter('engine')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedFilter === 'engine'
                  ? 'bg-white text-black font-medium'
                  : 'text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-850'
              }`}
            >
              Engine
            </button>
            <button
              onClick={() => setSelectedFilter('gameplay')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedFilter === 'gameplay'
                  ? 'bg-white text-black font-medium'
                  : 'text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-850'
              }`}
            >
              Gameplay
            </button>
            <button
              onClick={() => setSelectedFilter('tools')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                selectedFilter === 'tools'
                  ? 'bg-white text-black font-medium'
                  : 'text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-850'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl border border-zinc-850 bg-zinc-950 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                  <span>{project.category}</span>
                  <span className="text-zinc-400">{project.role}</span>
                </div>

                <h3 className="text-base font-semibold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-black border border-zinc-850 text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer link / status */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1 font-medium"
                  >
                    View on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-zinc-500 font-mono text-[11px]">
                    Detailed documentation pending
                  </span>
                )}
                <span className="text-zinc-600 font-mono text-[11px]">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note indicating user documentation will be populated */}
        <div className="mt-8 p-4 rounded-lg border border-dashed border-zinc-850 bg-zinc-950/40 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            Project case studies, technical breakdowns, and architecture documentation will be added directly.
          </p>
        </div>

      </div>
    </section>
  );
}
