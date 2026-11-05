'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkedin = portfolioData.profile.links.find(l => /linkedin/i.test(l.label));
  const github = portfolioData.profile.links.find(l => /github/i.test(l.label));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-semibold text-white tracking-tight text-sm">
              {portfolioData.profile.name}
            </span>
            <span className="text-zinc-600 text-xs">/</span>
            <span className="text-xs text-zinc-400 font-mono">
              Unreal & C++
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Links */}
          <div className="hidden sm:flex items-center space-x-4">
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-md bg-white text-black hover:bg-zinc-200 text-xs font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-zinc-900 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-900 flex flex-col gap-2">
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-400 hover:text-white"
              >
                LinkedIn
              </a>
            )}
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-400 hover:text-white"
              >
                GitHub
              </a>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-md bg-white text-black text-xs font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
