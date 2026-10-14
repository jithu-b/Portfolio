import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, Check, Copy, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_CONFIG;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusNotice('Please fill in your name, email, and message.');
      return;
    }

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(subject.trim() || `Portfolio Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    const mailtoUrl = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client honestly
    window.location.href = mailtoUrl;
    setStatusNotice('Opening your default mail client with the formatted message...');
  };

  const handleCopyFormattedDraft = () => {
    if (!name.trim() || !message.trim()) {
      setStatusNotice('Please fill in your details first to copy the drafted message.');
      return;
    }
    const formatted = `To: ${profile.email}\nSubject: ${subject || `Inquiry from ${name}`}\nFrom: ${name} (${email})\n\n${message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setStatusNotice('Drafted message copied to clipboard!');
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* End-credits style header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center space-x-1.5 mb-3">
          <span className="font-bebas text-lg tracking-widest text-[#E50914]">JITHUVERSE</span>
          <span className="text-zinc-500 font-bebas text-lg">CREDITS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Your Next Favorite Collaboration Starts Here.
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Interested in my work or have an opportunity to discuss? Let&apos;s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Direct Channels
            </h3>

            {/* Email Box */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
              <span className="text-xs uppercase font-mono-code text-zinc-400 block">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-red-400 transition-colors break-all"
                >
                  {profile.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[11px] text-emerald-400 font-medium">Copied to clipboard!</span>
              )}
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 hover:text-white transition-colors text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              {/* Resume Button */}
              <button
                onClick={() => {
                  if (profile.resumeUrl) {
                    window.open(profile.resumeUrl, '_blank');
                  } else {
                    setShowResumeNotice(true);
                  }
                }}
                className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-red-900 text-zinc-200 hover:text-white transition-colors text-xs font-semibold"
              >
                <FileText className="w-4 h-4 text-[#E50914]" />
                <span>Download Resume</span>
              </button>

              {/* LinkedIn (only if provided) */}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 hover:text-white transition-colors text-xs font-semibold sm:col-span-2"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              )}
            </div>

            {/* Resume Notice Modal / Popover */}
            {showResumeNotice && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 text-xs text-zinc-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    Resume Available Upon Request
                  </span>
                  <button
                    onClick={() => setShowResumeNotice(false)}
                    className="text-zinc-500 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <p>
                  To request the most recent verified resume PDF for academic campus placements or developer roles, drop an email to{' '}
                  <a href={`mailto:${profile.email}`} className="text-white underline">
                    {profile.email}
                  </a>.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Honest Functional Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a Message
              </h3>
              <span className="text-[11px] text-zinc-400 font-mono-code">
                Direct Mail Dispatch
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#E50914] focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#E50914] focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Opportunity at tech company / Project Inquiry"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#E50914] focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note, feedback, or collaboration idea here..."
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-[#E50914] focus:outline-none text-white text-sm"
              />
            </div>

            {/* Honest Feedback Status Notice */}
            {statusNotice && (
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
                <span>{statusNotice}</span>
                <button
                  type="button"
                  onClick={() => setStatusNotice(null)}
                  className="text-zinc-500 hover:text-white text-xs ml-2"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#E50914] hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-lg active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Send via Mail Client</span>
              </button>

              <button
                type="button"
                onClick={handleCopyFormattedDraft}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition-colors"
                title="Copy formatted message to paste anywhere"
              >
                {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy Draft</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
