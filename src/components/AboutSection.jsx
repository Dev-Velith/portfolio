'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { about } = portfolioData.profile;

  return (
    <section id="about" className="py-20 border-b border-zinc-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              About
            </h2>
            <div className="mt-3 text-xs font-mono text-zinc-500">
              Background & Direction
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-8 space-y-6">
            {about.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base leading-[1.8] text-zinc-300 font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
