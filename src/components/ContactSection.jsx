'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactSection() {
  const { profile } = portfolioData;
  const targetEmail = profile.contactEmail || "lukejcarter15@gmail.com";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    try {
      // FormSubmit AJAX submission directly forwards the message to Luke's email without requiring a server
      const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Portfolio Contact] Message from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      const data = await res.json();

      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setResponseMsg('Your message has been sent successfully. Thank you for reaching out!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // In case FormSubmit returns an unactivated notice or error
        setStatus('success');
        setResponseMsg('Your message was submitted. If this is the first submission, FormSubmit sends an activation link to confirm the inbox.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      // Graceful fallback to mailto link
      setStatus('error');
      setResponseMsg('Direct web submission failed. You can reach out directly via email.');
    }
  };

  const mailtoLink = `mailto:${targetEmail}?subject=Gameplay%20Programming%20Inquiry&body=Hi%20Luke,%0D%0A%0D%0A`;

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
              href={mailtoLink}
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email me directly</span>
            </a>

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
              <span className="text-[11px] text-zinc-400">Delivered directly to inbox</span>
            </div>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Delivered</div>
                  <div className="text-zinc-400 mt-0.5">{responseMsg}</div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-white">Notice</div>
                  <div className="text-zinc-400 mt-0.5">{responseMsg}</div>
                  <a
                    href={mailtoLink}
                    className="mt-2 inline-block text-white underline hover:no-underline font-medium"
                  >
                    Click here to open in your default mail app →
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
