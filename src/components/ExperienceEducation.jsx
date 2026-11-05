'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { work, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-zinc-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Experience & education
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Where I've applied design and engineering, and what I'm studying.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Work Experience */}
          <div>
            <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.14em] text-zinc-500">
              Experience
            </h3>
            
            <ul className="space-y-10">
              {work.map((item, idx) => (
                <li key={idx} className="border-t border-zinc-900 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-base font-semibold text-white tracking-tight">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      {item.end_year || 'Completed'}
                    </span>
                  </div>
                  
                  <div className="text-xs font-medium text-zinc-400 mt-0.5">
                    {item.company}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.14em] text-zinc-500">
              Education
            </h3>

            <ul className="space-y-10">
              {education.map((item, idx) => (
                <li key={idx} className="border-t border-zinc-900 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-base font-semibold text-white tracking-tight">
                      {item.school}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      {item.end_year}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-zinc-400 mt-0.5">
                    {item.degree}, {item.field} {item.location ? `• ${item.location}` : ''}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {item.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
