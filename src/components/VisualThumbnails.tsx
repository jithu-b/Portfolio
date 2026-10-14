import React from 'react';

interface ThumbnailProps {
  type: string;
  className?: string;
  title?: string;
}

export const VisualThumbnail: React.FC<ThumbnailProps> = ({ type, className = '', title }) => {
  switch (type) {
    case 'hero':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-zinc-950 via-[#0d090a] to-[#1a0507] ${className}`}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          
          {/* Glow spots */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E50914]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-red-800/15 rounded-full blur-3xl pointer-events-none" />

          {/* Cinematic vector setup */}
          <svg className="absolute inset-0 w-full h-full object-cover opacity-80" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e1e24" />
                <stop offset="100%" stopColor="#0a0a0c" />
              </linearGradient>
              <linearGradient id="redAccent" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E50914" />
                <stop offset="100%" stopColor="#B20710" />
              </linearGradient>
            </defs>

            {/* Desk Surface */}
            <path d="M100 560 L1100 560 L1180 675 L20 675 Z" fill="#121214" stroke="#252528" strokeWidth="1" />
            <path d="M250 562 L950 562 L980 650 L220 650 Z" fill="#0d0d0f" opacity="0.6" />

            {/* Keyboard & Ambient Desk Pad */}
            <rect x="420" y="580" width="360" height="70" rx="6" fill="#1a1a1f" stroke="#33333a" strokeWidth="1" />
            <rect x="450" y="595" width="220" height="40" rx="3" fill="#25252c" />
            <rect x="700" y="595" width="50" height="40" rx="3" fill="#25252c" />

            {/* Main Center Curved Monitor */}
            <rect x="340" y="160" width="520" height="320" rx="12" fill="url(#screenGrad)" stroke="#383842" strokeWidth="2" />
            <rect x="352" y="172" width="496" height="296" rx="6" fill="#08080a" />
            
            {/* Main Monitor Stand */}
            <path d="M570 480 L630 480 L645 570 L555 570 Z" fill="#202026" />
            <ellipse cx="600" cy="570" rx="70" ry="12" fill="#18181e" stroke="#303038" strokeWidth="1" />

            {/* Code lines on Center Monitor */}
            <rect x="375" y="195" width="80" height="6" rx="3" fill="#E50914" />
            <rect x="465" y="195" width="120" height="6" rx="3" fill="#4B5563" />
            <rect x="375" y="215" width="200" height="5" rx="2.5" fill="#3B82F6" opacity="0.8" />
            <rect x="395" y="230" width="240" height="5" rx="2.5" fill="#6B7280" />
            <rect x="395" y="245" width="180" height="5" rx="2.5" fill="#10B981" opacity="0.7" />
            <rect x="415" y="260" width="210" height="5" rx="2.5" fill="#F59E0B" opacity="0.8" />
            <rect x="415" y="275" width="160" height="5" rx="2.5" fill="#E50914" opacity="0.7" />
            <rect x="395" y="290" width="230" height="5" rx="2.5" fill="#6B7280" />
            <rect x="375" y="305" width="90" height="5" rx="2.5" fill="#3B82F6" opacity="0.8" />

            {/* Live Visual Preview Panel on Right side of Center Screen */}
            <rect x="650" y="215" width="180" height="235" rx="6" fill="#111116" stroke="#2a2a35" strokeWidth="1" />
            <rect x="665" y="235" width="150" height="70" rx="4" fill="#E50914" opacity="0.15" />
            <circle cx="740" cy="270" r="18" fill="#E50914" opacity="0.8" />
            <polygon points="735,262 750,270 735,278" fill="#FFFFFF" />
            <rect x="665" y="320" width="110" height="6" rx="3" fill="#FFFFFF" opacity="0.8" />
            <rect x="665" y="335" width="150" height="4" rx="2" fill="#6B7280" />
            <rect x="665" y="345" width="130" height="4" rx="2" fill="#6B7280" />
            <rect x="665" y="370" width="60" height="18" rx="4" fill="#E50914" />
            <rect x="735" y="370" width="60" height="18" rx="4" fill="#27272a" />

            {/* Left Vertical Monitor (Documentation / Terminal) */}
            <g transform="rotate(6 180 340)">
              <rect x="90" y="170" width="210" height="340" rx="10" fill="url(#screenGrad)" stroke="#383842" strokeWidth="2" />
              <rect x="100" y="180" width="190" height="320" rx="5" fill="#09090c" />
              {/* Terminal header */}
              <circle cx="115" cy="195" r="3.5" fill="#EF4444" />
              <circle cx="127" cy="195" r="3.5" fill="#F59E0B" />
              <circle cx="139" cy="195" r="3.5" fill="#10B981" />
              <text x="155" y="198" fill="#6B7280" fontSize="8" fontFamily="monospace">zsh ~/jithuverse</text>
              <line x1="100" y1="208" x2="290" y2="208" stroke="#222228" />
              {/* Terminal lines */}
              <text x="112" y="230" fill="#10B981" fontSize="9" fontFamily="monospace">$ git status</text>
              <text x="112" y="248" fill="#9CA3AF" fontSize="8" fontFamily="monospace">On branch main</text>
              <text x="112" y="264" fill="#3B82F6" fontSize="8" fontFamily="monospace">Your branch is up to date</text>
              <text x="112" y="286" fill="#10B981" fontSize="9" fontFamily="monospace">$ npm run dev</text>
              <text x="112" y="304" fill="#F59E0B" fontSize="8" fontFamily="monospace">  VITE v8.3.0  ready in 142 ms</text>
              <text x="112" y="322" fill="#E50914" fontSize="8" fontFamily="monospace">➜  Local: http://localhost:3000</text>
              <text x="112" y="340" fill="#9CA3AF" fontSize="8" fontFamily="monospace">➜  Network: use --host to expose</text>
              <text x="112" y="370" fill="#6B7280" fontSize="8" fontFamily="monospace">[EventVerse] supbase initialized</text>
              <text x="112" y="388" fill="#6B7280" fontSize="8" fontFamily="monospace">[EventVerse] schema verified</text>
              <text x="112" y="415" fill="#10B981" fontSize="9" fontFamily="monospace">█</text>
            </g>

            {/* Right Angled Monitor (Metrics & Architecture) */}
            <g transform="rotate(-6 1020 340)">
              <rect x="900" y="170" width="220" height="340" rx="10" fill="url(#screenGrad)" stroke="#383842" strokeWidth="2" />
              <rect x="910" y="180" width="200" height="320" rx="5" fill="#09090c" />
              <text x="925" y="202" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SYSTEM ARCHITECTURE</text>
              {/* Flowchart nodes */}
              <rect x="925" y="220" width="80" height="32" rx="4" fill="#1a1a24" stroke="#E50914" strokeWidth="1" />
              <text x="935" y="240" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif">React Client</text>
              <line x1="965" y1="252" x2="965" y2="280" stroke="#E50914" strokeDasharray="3 3" />
              <rect x="925" y="280" width="80" height="32" rx="4" fill="#1a1a24" stroke="#3B82F6" strokeWidth="1" />
              <text x="935" y="300" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif">Flask API</text>
              <line x1="965" y1="312" x2="965" y2="340" stroke="#3B82F6" strokeDasharray="3 3" />
              <rect x="925" y="340" width="80" height="32" rx="4" fill="#1a1a24" stroke="#10B981" strokeWidth="1" />
              <text x="935" y="360" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif">PostgreSQL</text>
            </g>

            {/* Ambient Red Glow on desk reflection */}
            <ellipse cx="600" cy="520" rx="300" ry="25" fill="#E50914" opacity="0.12" filter="blur(20px)" />
          </svg>

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent w-full md:w-3/4 pointer-events-none" />
        </div>
      );

    case 'eventverse':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1c0809] via-[#0d0708] to-[#120a0b] ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
          
          <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 600 340" fill="none">
            {/* Background Event Grid */}
            <rect x="40" y="30" width="520" height="280" rx="12" fill="#141418" stroke="#2f2224" strokeWidth="1.5" />
            
            {/* Top Event Header */}
            <rect x="60" y="50" width="140" height="18" rx="4" fill="#E50914" />
            <text x="70" y="63" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TINKERHUB SBCE</text>
            <rect x="210" y="52" width="80" height="14" rx="3" fill="#2d1518" stroke="#E50914" strokeWidth="0.5" />
            <text x="220" y="62" fill="#E50914" fontSize="8" fontFamily="sans-serif">LIVE EVENT HUB</text>
            
            {/* Ticket Card Component */}
            <g transform="translate(60, 90)">
              <rect width="280" height="180" rx="8" fill="#1b1b22" stroke="#333340" />
              {/* Ticket header */}
              <rect x="15" y="15" width="250" height="40" rx="5" fill="#251014" stroke="#E50914" strokeWidth="0.8" />
              <text x="25" y="32" fill="#FFFFFF" fontSize="12" fontWeight="bold">TECH SUMMIT 2025</text>
              <text x="25" y="47" fill="#E50914" fontSize="9">HACKATHON • WORKSHOPS • TALKS</text>
              
              {/* Event Details */}
              <text x="15" y="80" fill="#9CA3AF" fontSize="9">Campus: SBCE, Pattoor, Kerala</text>
              <text x="15" y="98" fill="#9CA3AF" fontSize="9">Architecture: React + Flask + Supabase</text>
              <text x="15" y="116" fill="#9CA3AF" fontSize="9">Status: Full-Stack Platform Concept</text>
              
              {/* Barcode & QR Code simulation */}
              <rect x="15" y="130" width="40" height="40" fill="#FFFFFF" rx="2" />
              <rect x="20" y="135" width="12" height="12" fill="#000000" />
              <rect x="38" y="135" width="12" height="12" fill="#000000" />
              <rect x="20" y="153" width="12" height="12" fill="#000000" />
              <rect x="29" y="144" width="5" height="5" fill="#E50914" />
              
              <text x="65" y="148" fill="#E50914" fontSize="10" fontWeight="bold">PASS GENERATION</text>
              <text x="65" y="162" fill="#6B7280" fontSize="8">SPEC: EVENTVERSE-GATE-AUTH</text>
            </g>

            {/* Leaderboard preview on right */}
            <g transform="translate(360, 90)">
              <rect width="180" height="180" rx="8" fill="#181820" stroke="#2e2e38" />
              <text x="15" y="24" fill="#FFFFFF" fontSize="10" fontWeight="bold">QUIZ MODULE PREVIEW</text>
              <line x1="15" y1="32" x2="165" y2="32" stroke="#2e2e38" />
              
              {/* Quiz Module entries */}
              <rect x="15" y="42" width="150" height="26" rx="4" fill="#2d1518" stroke="#E50914" strokeWidth="0.5" />
              <text x="25" y="58" fill="#E50914" fontSize="9" fontWeight="bold">01. Web Standards</text>
              <text x="135" y="58" fill="#FFFFFF" fontSize="9">Active</text>
              
              <rect x="15" y="74" width="150" height="26" rx="4" fill="#1c1c24" />
              <text x="25" y="90" fill="#9CA3AF" fontSize="9">02. RESTful APIs</text>
              <text x="135" y="90" fill="#9CA3AF" fontSize="9">Ready</text>

              <rect x="15" y="106" width="150" height="26" rx="4" fill="#1c1c24" />
              <text x="25" y="122" fill="#9CA3AF" fontSize="9">03. UI / Ergonomics</text>
              <text x="135" y="122" fill="#9CA3AF" fontSize="9">Ready</text>
              
              <rect x="15" y="142" width="150" height="24" rx="4" fill="#E50914" />
              <text x="35" y="157" fill="#FFFFFF" fontSize="9" fontWeight="bold">Realtime Sync Prototype</text>
            </g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-bold text-white tracking-wide uppercase">EVENTVERSE ORIGINAL</span>
            <span className="text-[10px] text-red-400 font-mono">Flask • Supabase • React</span>
          </div>
        </div>
      );

    case 'pigeonpost':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#071324] via-[#091522] to-[#040811] ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

          <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 600 340" fill="none">
            {/* Stylized Vector Map Grid */}
            <path d="M0 80 Q200 120 400 90 T600 130" stroke="#1E293B" strokeWidth="12" fill="none" opacity="0.6" />
            <path d="M120 0 Q180 180 220 340" stroke="#1E293B" strokeWidth="8" fill="none" opacity="0.6" />
            <path d="M450 0 Q400 150 480 340" stroke="#1E293B" strokeWidth="10" fill="none" opacity="0.6" />
            <path d="M0 260 Q300 220 600 270" stroke="#1E293B" strokeWidth="14" fill="none" opacity="0.5" />

            {/* Flight Path Arc */}
            <path d="M120 220 C220 60, 380 70, 480 160" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
            
            {/* Origin Pin */}
            <circle cx="120" cy="220" r="10" fill="#3B82F6" opacity="0.3" />
            <circle cx="120" cy="220" r="5" fill="#3B82F6" />
            <text x="90" y="246" fill="#93C5FD" fontSize="9" fontWeight="bold">Kerala (Origin)</text>

            {/* Destination Pin */}
            <circle cx="480" cy="160" r="14" fill="#10B981" opacity="0.25" />
            <circle cx="480" cy="160" r="6" fill="#10B981" />
            <text x="445" y="190" fill="#6EE7B7" fontSize="9" fontWeight="bold">Destination Coordinate</text>

            {/* Stylized Origami Carrier Pigeon in flight */}
            <g transform="translate(290, 85) rotate(-8)">
              {/* Shadow */}
              <ellipse cx="0" cy="45" rx="30" ry="8" fill="#000000" opacity="0.35" filter="blur(4px)" />
              {/* Origami Pigeon Polygons */}
              <polygon points="0,0 28,-18 12,12" fill="#60A5FA" />
              <polygon points="0,0 -24,-22 -10,10" fill="#3B82F6" />
              <polygon points="0,0 12,12 -12,24" fill="#2563EB" />
              <polygon points="0,0 35,4 12,12" fill="#93C5FD" />
              <polygon points="35,4 45,2 38,8" fill="#F59E0B" /> {/* Beak */}
              {/* Sealed Letter in beak */}
              <rect x="36" y="8" width="16" height="10" rx="1.5" fill="#FFFFFF" />
              <polygon points="36,8 44,13 52,8" fill="#E50914" />
            </g>

            {/* Coordinate HUD */}
            <rect x="20" y="20" width="170" height="34" rx="6" fill="#0b1728" stroke="#1d3557" strokeWidth="1" />
            <text x="30" y="34" fill="#93C5FD" fontSize="8" fontFamily="monospace">LAT: 9.2081° N  LON: 76.6534° E</text>
            <text x="30" y="47" fill="#60A5FA" fontSize="8" fontFamily="monospace">STATUS: In Transit (OpenStreetMap)</text>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-bold text-white tracking-wide uppercase">PIGEONPOST EXPERIMENT</span>
            <span className="text-[10px] text-blue-400 font-mono">Leaflet • Spatial Mapping</span>
          </div>
        </div>
      );

    case 'jithuverse':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1d0607] via-[#0e0708] to-[#120809] ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 600 340" fill="none">
            {/* Cinematic Red Curved Ribbon Ribbon */}
            <path d="M120 40 C 220 180, 380 20, 480 300" stroke="#E50914" strokeWidth="24" strokeLinecap="round" opacity="0.3" filter="blur(8px)" />
            <path d="M140 280 C 240 100, 360 260, 460 60" stroke="#B20710" strokeWidth="18" strokeLinecap="round" opacity="0.35" filter="blur(6px)" />
            
            {/* Center "JV" Streaming Monogram */}
            <g transform="translate(300, 160)">
              {/* Ribbon J */}
              <path d="M-50 -70 L-20 -70 L-20 30 Q-20 65 -55 65 L-70 65 L-70 38 L-55 38 Q-38 38 -38 25 L-38 -70 Z" fill="#E50914" />
              {/* Ribbon V */}
              <polygon points="10,-70 30,-70 65,40 100,-70 120,-70 75,65 55,65" fill="#FFFFFF" />
            </g>

            {/* Glowing UI viewport frame */}
            <rect x="50" y="30" width="500" height="280" rx="10" fill="none" stroke="#E50914" strokeWidth="1" opacity="0.3" />
            
            <text x="300" y="275" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold" letterSpacing="4" fontFamily="sans-serif">JITHUVERSE</text>
            <text x="300" y="295" textAnchor="middle" fill="#E50914" fontSize="10" letterSpacing="2" fontFamily="sans-serif">A JITHU BIJU ORIGINAL</text>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-bold text-white tracking-wide uppercase">JITHUVERSE PLATFORM</span>
            <span className="text-[10px] text-red-400 font-mono">React 19 • TypeScript • Vite</span>
          </div>
        </div>
      );

    case 'web-experiments':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#061811] via-[#06120e] to-[#030907] ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          
          <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 600 340" fill="none">
            {/* Particle Nodes & Laser Grid */}
            <circle cx="150" cy="120" r="6" fill="#10B981" />
            <circle cx="280" cy="90" r="8" fill="#34D399" />
            <circle cx="420" cy="140" r="5" fill="#10B981" />
            <circle cx="220" cy="220" r="7" fill="#6EE7B7" />
            <circle cx="360" cy="240" r="9" fill="#10B981" />
            <circle cx="480" cy="210" r="6" fill="#059669" />

            <line x1="150" y1="120" x2="280" y2="90" stroke="#10B981" strokeWidth="1.5" opacity="0.6" />
            <line x1="280" y1="90" x2="420" y2="140" stroke="#10B981" strokeWidth="1.5" opacity="0.6" />
            <line x1="280" y1="90" x2="220" y2="220" stroke="#10B981" strokeWidth="1.5" opacity="0.5" />
            <line x1="220" y1="220" x2="360" y2="240" stroke="#10B981" strokeWidth="1.5" opacity="0.6" />
            <line x1="360" y1="240" x2="480" y2="210" stroke="#10B981" strokeWidth="1.5" opacity="0.5" />
            <line x1="420" y1="140" x2="480" y2="210" stroke="#10B981" strokeWidth="1.5" opacity="0.6" />

            {/* Oscilloscope Waveform */}
            <path d="M60 170 Q140 100 220 170 T380 170 T540 170" stroke="#34D399" strokeWidth="2.5" fill="none" opacity="0.8" />
            <path d="M60 170 Q140 230 220 170 T380 170 T540 170" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-bold text-white tracking-wide uppercase">LAB EXPERIMENTS</span>
            <span className="text-[10px] text-emerald-400 font-mono">Micro-Interactions • Canvas</span>
          </div>
        </div>
      );

    case 'community':
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1c1204] via-[#0d0903] to-[#0d0702] ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
          
          <svg className="absolute inset-0 w-full h-full object-cover" viewBox="0 0 600 340" fill="none">
            {/* Tech Auditorium / Stage Visual */}
            <ellipse cx="300" cy="300" rx="260" ry="80" fill="#20150a" stroke="#45270c" strokeWidth="1" />
            {/* Spotlight cones */}
            <polygon points="120,0 200,320 280,320" fill="#F59E0B" opacity="0.08" />
            <polygon points="480,0 400,320 320,320" fill="#F59E0B" opacity="0.08" />
            {/* Collaboration Screens */}
            <rect x="220" y="90" width="160" height="100" rx="8" fill="#241407" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="300" y="140" textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="bold">TinkerHub SBCE</text>
            <text x="300" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="10">STUDENT TECH COMMUNITY</text>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-bold text-white tracking-wide uppercase">COMMUNITY & LEADERSHIP</span>
            <span className="text-[10px] text-amber-400 font-mono">SBCE Campus Events</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <span className="text-sm font-semibold text-zinc-300">{title || 'JithuVerse'}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      );
  }
};
