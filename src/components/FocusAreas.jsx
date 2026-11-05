'use client';

import React from 'react';
import { focusAreas } from '../data/projects';

export default function FocusAreas() {
  return (
    <section id="focus" className="py-20 border-b border-zinc-900 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Competencies
          </div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Focus Areas
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            Balancing lower-level technical architecture with responsive player experience and designer iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-zinc-850 bg-black flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
