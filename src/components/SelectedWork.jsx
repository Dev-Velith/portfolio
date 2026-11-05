'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Play, CheckCircle2 } from 'lucide-react';

export default function SelectedWork() {
  const { projects } = portfolioData;
  const [expandedProjectId, setExpandedProjectId] = useState('sovereign'); // expand sovereign by default for comprehensive review

  const toggleExpand = (id) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  return (
    <section id="work" className="py-20 border-b border-zinc-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Selected work
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Projects I've designed, built and shipped — with the reasoning behind the systems.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {projects.length} Case Studies
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className="border border-zinc-850 rounded-2xl bg-zinc-950 overflow-hidden"
              >
                {/* Primary Video Showcase */}
                {project.video_url && (
                  <div className="w-full bg-black border-b border-zinc-900 overflow-hidden aspect-video">
                    <video
                      src={project.video_url}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Content Header & Highlights */}
                <div className="p-6 sm:p-8">
                  {/* Meta strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500 mb-3">
                    <div className="flex items-center gap-2">
                      <span>{project.role}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-[11px]">
                        Featured System
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                    {project.tagline}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-850 text-[11px] font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="mt-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-zinc-900">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                        Key Engineering Highlights
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {project.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Toggle Deep-Dive Writeup */}
                  <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-xs font-medium text-white transition-colors flex items-center gap-2"
                    >
                      <span>{isExpanded ? 'Hide architectural writeup' : 'Read full architectural writeup'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-xs font-mono text-zinc-500">
                      {project.sections ? `${project.sections.length} Technical Sections` : ''}
                    </span>
                  </div>

                  {/* Expandable Case Study Body */}
                  {isExpanded && project.sections && (
                    <div className="mt-8 pt-6 border-t border-zinc-900 space-y-8 animate-fadeIn">
                      
                      {project.sections.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                            <span className="text-zinc-600 font-mono text-xs">#{idx + 1}</span>
                            <span>{section.heading}</span>
                          </h4>
                          
                          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal whitespace-pre-line">
                            {section.body}
                          </p>

                          {/* Secondary Video Embed if section is Blueprint Insight */}
                          {section.heading.includes('Blueprint Insight') && project.secondary_video_url && (
                            <div className="my-4 rounded-xl overflow-hidden border border-zinc-900 bg-black aspect-video">
                              <video
                                src={project.secondary_video_url}
                                controls
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}

                          {/* Section bullets if available */}
                          {section.bullets && (
                            <ul className="space-y-2 mt-3 pl-2">
                              {section.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                                  <span className="w-1 h-1 rounded-full bg-zinc-500 mt-2 shrink-0" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
