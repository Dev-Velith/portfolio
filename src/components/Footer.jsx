'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="bg-black py-12 text-xs text-zinc-500 font-mono">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold">{profile.name}</span>
            <span className="text-zinc-700">•</span>
            <span>{profile.role}</span>
          </div>

          <div className="flex items-center gap-4">
            {profile.links.map(l => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              >
                {l.label} <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
