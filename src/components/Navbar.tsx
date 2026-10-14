import React, { useState, useEffect } from 'react';
import { Search, Github, Menu, X, User } from 'lucide-react';
import { ProfileType } from './ProfileSelectorModal';

interface NavbarProps {
  currentProfile: ProfileType;
  onOpenSearch: () => void;
  onOpenProfileSwitcher: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  onOpenSearch,
  onOpenProfileSwitcher,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProfileBadgeColor = () => {
    switch (currentProfile) {
      case 'recruiter':
        return 'bg-red-600 text-white';
      case 'developer':
        return 'bg-blue-600 text-white';
      case 'explorer':
        return 'bg-amber-600 text-white';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-zinc-900/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-0.5 text-2xl font-bebas tracking-widest text-white whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          aria-label="JITHUVERSE Home"
        >
          <span className="text-[#E50914]">JITHU</span>
          <span className="text-white">VERSE</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-300"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E50914] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Functional Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search portfolio"
            className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/60 focus-visible:ring-2 focus-visible:ring-red-500"
            title="Search projects, skills & journey (Press /)"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* GitHub Quick Link */}
          <a
            href="https://github.com/jithu-b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/60 hidden sm:flex items-center focus-visible:ring-2 focus-visible:ring-red-500"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* Profile Switcher Trigger */}
          <button
            onClick={onOpenProfileSwitcher}
            aria-label={`Current viewing profile: ${currentProfile}. Click to switch.`}
            className="flex items-center gap-2 pl-2 pr-2.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-red-500"
            title="Switch viewing lens (Recruiter / Developer / Explorer)"
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${getProfileBadgeColor()}`}>
              {currentProfile[0].toUpperCase()}
            </div>
            <span className="text-xs font-semibold text-zinc-300 capitalize hidden sm:inline whitespace-nowrap">
              {currentProfile}
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/98 border-b border-zinc-800 px-4 pt-3 pb-6 mt-3 space-y-3 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfileSwitcher();
              }}
              className="flex items-center space-x-2 text-xs text-zinc-300 hover:text-white"
            >
              <User className="w-4 h-4 text-[#E50914]" />
              <span>Switch Profile ({currentProfile})</span>
            </button>
            <a
              href="https://github.com/jithu-b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-white flex items-center space-x-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
