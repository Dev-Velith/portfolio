'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Mail, CheckCircle2, Send, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const { profile } = portfolioData;
  const targetEmail = profile.contactEmail || profile.email || "lukejcarter15@gmail.com";
  const accessKey = profile.web3FormsAccessKey || "";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | mailto
  const [responseMsg, setResponseMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const buildMailtoUrl = (name = formData.name, email = formData.email, message = formData.message) => {
    const subject = encodeURIComponent(
      name ? `[Portfolio Inquiry] from ${name}` : 'Gameplay Programming Inquiry'
    );
    const body = encodeURIComponent(
      `${message ? `${message}\n\n` : ''}${
        name || email
          ? `--------------------------\nFrom: ${name || 'Visitor'} <${email || 'not provided'}>`
          : ''
      }`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    // Strategy 1: If Web3Forms Access Key is provided, submit cleanly via Web3Forms API
    if (accessKey && accessKey.trim().length > 0) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `[Portfolio Contact] Message from ${formData.name}`,
            from_name: formData.name,
          }),
        });

        const data = await res.json();

        if (res.ok && data.success) {
          setStatus('success');
          setResponseMsg('Your message has been sent directly to Luke’s inbox. Thank you for reaching out!');
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      } catch (err) {
        // Fall back to mailto handoff below if network fails
      }
    }

    // Strategy 2: Pre-filled mailto launch with clean handoff (always guaranteed delivery)
    const mailtoUrl = buildMailtoUrl();
    setStatus('mailto');
    setResponseMsg(`Launching your email app to send directly to ${targetEmail}...`);

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  const defaultMailto = buildMailtoUrl('', '', '');

  return (
    <section id="contact" className="py-20 border-b border-zinc-900 bg-black scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Banner Card */}
        <div className="rounded-2xl border border-zinc-850 bg-zinc-950 p-6 sm:p-12">
          
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
              I'm looking for a gameplay programming role after I graduate in May 2026.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              If you're building a game and need someone who cares about how it feels and how it's put together, I'd like to hear about it.
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={defaultMailto}
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email me directly</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-5 py-2.5 rounded-full border border-zinc-800 bg-black hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Copied {targetEmail}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Copy email address</span>
                </>
              )}
            </button>

            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-zinc-850 bg-black hover:border-zinc-700 text-xs font-medium text-white transition-colors flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            ))}
          </div>

          {/* Functional Contact Form */}
          <div className="mt-12 pt-8 border-t border-zinc-900">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center justify-between">
              <span>Send a Message</span>
              <span className="text-[11px] text-zinc-400">{targetEmail}</span>
            </div>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Message Delivered</div>
                  <div className="text-zinc-400 mt-0.5">{responseMsg}</div>
                </div>
              </div>
            )}

            {status === 'mailto' && (
              <div className="mb-6 p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-white">Opening Email Client</div>
                  <div className="text-zinc-400 mt-0.5">
                    Your message has been pre-formatted for <strong className="text-white">{targetEmail}</strong>.
                  </div>
                  <a
                    href={buildMailtoUrl()}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-white underline hover:no-underline font-medium"
                  >
                    <span>Click here if your mail app didn't open automatically →</span>
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-mono mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-3 py-2 rounded-md bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 font-mono mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded-md bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team or project..."
                  className="w-full px-3 py-2 rounded-md bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs tracking-wide transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Location & Status Stamp */}
          <div className="mt-10 pt-6 border-t border-zinc-900 text-xs text-zinc-500 font-mono">
            {profile.location} • Available from May 2026
          </div>

        </div>

      </div>
    </section>
  );
}
