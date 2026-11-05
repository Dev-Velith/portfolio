'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile, education } = portfolioData;
  const edu = education[0];
  const linkedin = profile.links.find(l => /linkedin/i.test(l.label));

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Availability pill */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-850 text-xs text-zinc-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span>{profile.availability}</span>
          <span className="text-zinc-600">—</span>
          <span className="text-zinc-400">{profile.location}</span>
        </div>

        {/* Name & Headline */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-400 font-medium">
            {profile.role}
          </p>
          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {profile.headline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5"
          >
            <span>View selected work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 text-zinc-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Structured Info Columns */}
        <div className="mt-16 pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-xs">
          <div>
            <div className="font-mono uppercase tracking-wider text-zinc-500 text-[11px] mb-2">
              Studying
            </div>
            <div className="text-zinc-300 leading-relaxed">
              {edu ? `${edu.degree}, ${edu.field}, ${edu.school} — ${edu.end_year}` : 'B.S. Computer Science'}
            </div>
          </div>

          <div>
            <div className="font-mono uppercase tracking-wider text-zinc-500 text-[11px] mb-2">
              Focus
            </div>
            <div className="text-zinc-300 leading-relaxed">
              Gameplay systems, Unreal Engine 5, tools and networked software
            </div>
          </div>

          <div>
            <div className="font-mono uppercase tracking-wider text-zinc-500 text-[11px] mb-2">
              Based in
            </div>
            <div className="text-zinc-300 leading-relaxed">
              {profile.location}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
