export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  genreTag: string; // e.g. "Full-Stack • Concept", "Frontend • Production"
  badgeText?: string; // e.g. "Featured", "Concept", "In Progress"
  status: 'Completed' | 'In Progress' | 'Concept';
  duration?: string;
  year: string;
  shortDescription: string;
  fullOverview: string;
  motivation: string;
  implementedFeatures: string[];
  plannedFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  challengesAndLearnings: string;
  accentColor: string;
  bgGradient: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend Development' | 'Backend Development' | 'Databases' | 'Programming Languages' | 'Developer Tools' | 'Design & Creative Technology';
  proficiencyLabel?: string; // e.g. "Familiar", "Working Knowledge", "Active Focus"
  associatedProjects: string[];
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  dateRange: string;
  status: 'Verified' | 'Editable Context';
  type: 'Internship' | 'Workshop' | 'Community' | 'Education';
  description: string;
  skillsGained: string[];
  evidenceNote?: string;
}

export interface ContentCardItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'project' | 'skill' | 'experience' | 'story' | 'approach' | 'interest' | 'learning';
  tags: string[];
  description: string;
  accentColor?: string;
  actionType: 'modal' | 'scroll' | 'link';
  targetId?: string;
  featuredOriginal?: boolean;
}

export interface ContentRowData {
  id: string;
  title: string;
  subtitle: string;
  items: ContentCardItem[];
}

export const PORTFOLIO_CONFIG = {
  profile: {
    name: 'Jithu Biju',
    wordmark: 'JITHUVERSE',
    tagline: 'A Jithu Biju Original',
    title: 'Computer Science Graduate & Software Developer',
    roleTag: 'Web Developer • Creative Technologist • Student Community Builder',
    location: 'Kerala, India',
    email: 'jithubiju0102@gmail.com',
    github: 'https://github.com/jithu-b',
    linkedin: '', // Set when LinkedIn profile is available
    resumeUrl: '', // Set when hosted resume PDF is available (defaults to graceful preview modal)
    college: 'Sree Buddha College of Engineering (SBCE), Pattoor',
    university: 'APJ Abdul Kalam Technological University (KTU)',
    degree: 'B.Tech in Computer Science & Engineering',
    graduationYearPlaceholder: 'Expected / Recent Graduate',
    cgpaPlaceholder: 'Available upon request',
    bioIntro: 'Computer Science graduate passionate about building interactive web experiences, exploring emerging technologies, and turning creative ideas into useful digital products.',
    fullStory: `I'm Jithu Biju, a Computer Science graduate from Kerala with a strong interest in web development, interactive experiences, and emerging technology. I enjoy exploring ideas, experimenting with tools, and building digital products that combine functionality with thoughtful design. From developing web applications to contributing to technology-community initiatives, I'm interested in continuously learning and creating things that people can actually use.`,
  },
  approachPoints: [
    {
      id: 'approach-responsive',
      title: 'Designing Responsive Interfaces',
      summary: 'Crafting pixel-sharp layouts with mobile-first ergonomics, fluid typography, and clean dark mode contrast.',
      details: 'Focusing on intuitive spacing, accessible interactive targets, zero-jank transitions, and layout resilience across every screen size from smartphones to 4K displays.'
    },
    {
      id: 'approach-fullstack',
      title: 'Connecting Frontend & Backend Systems',
      summary: 'Bridging responsive React client views with structured REST APIs, state flows, and secure data contracts.',
      details: 'Creating predictable API communication layers using modern async patterns, clean error boundaries, token handling, and clear schema typing.'
    },
    {
      id: 'approach-data',
      title: 'Working with Databases & Relational Models',
      summary: 'Designing organized data tables, relations, and persistence layers using PostgreSQL, Supabase, and Firebase.',
      details: 'Structuring data schemas for real-world scenarios—from user registration and event ticketing to relational query performance and security rules.'
    },
    {
      id: 'approach-exploration',
      title: 'Experimenting with Emerging Technologies',
      summary: 'Prototyping rapidly with cutting-edge developer tools, AI workflows, and novel browser capabilities.',
      details: 'Staying curious by testing new frameworks, open-source mapping libraries, automation scripts, and creative interactive tech concepts.'
    },
    {
      id: 'approach-ux',
      title: 'Debugging & Iterative User Experience',
      summary: 'Relentlessly refining edge cases, user micro-interactions, and visual feedback for maximum polish.',
      details: 'Believing that great software feels effortless. Continuously trimming friction, tuning responsive feedback, and fixing subtle bugs before users ever encounter them.'
    }
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'eventverse',
    title: 'EventVerse',
    category: 'Full-Stack Web Application',
    genreTag: 'Campus Platform • Full-Stack Concept',
    badgeText: 'Original Series',
    status: 'In Progress',
    year: '2025',
    duration: 'Ongoing Development',
    shortDescription: 'An event management platform concept for TinkerHub SBCE, bringing event discovery, registration, organizer tools, and community experiences together.',
    fullOverview: `EventVerse is conceived as a comprehensive, campus-tailored event platform built specifically to streamline technological events, workshops, and hackathons organized by the TinkerHub SBCE student community. Traditional event coordination often relies on scattered Google Forms, manual spreadsheets, and disconnected communication channels. EventVerse replaces that chaos with a centralized hub where attendees discover sessions, RSVP seamlessly, access real-time schedules, and receive verified digital credentials.`,
    motivation: 'To eliminate administrative friction for student tech organizers while giving campus attendees a modern, unified, conference-grade digital portal.',
    implementedFeatures: [
      'Modular client architecture built with React, Vite, and Tailwind CSS',
      'Event discovery feed with category sorting and event preview cards',
      'Event detail presentation and speaker agenda views',
      'Backend foundation using Python Flask and SQLAlchemy models',
      'Supabase and PostgreSQL database schema configuration',
      'JWT-ready authentication and role structure definitions'
    ],
    plannedFeatures: [
      'QR-code based live gate attendance scanning',
      'Automated digital certificate generation with verifiable UUIDs',
      'Integrated real-time timed quiz & leaderboard system for campus hackathons',
      'Organizer role-based dashboards with live attendee analytics',
      'Executive committee (Execom) community showcase and archive',
      'Personalized attendee schedules and calendar syncing'
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Python', 'Flask', 'SQLAlchemy', 'JWT', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/jithu-b/Eventverse',
    challengesAndLearnings: 'Structuring the data model to accommodate both single-day workshops and multi-stage hackathons with distinct quiz leaderboards, while keeping the client lightweight and mobile-first.',
    accentColor: '#E50914',
    bgGradient: 'from-red-950/60 via-zinc-950 to-black'
  },
  {
    id: 'pigeonpost',
    title: 'PigeonPost',
    category: 'Creative Web Experiment',
    genreTag: 'Interactive Map • Creative Tech',
    badgeText: 'Creative Original',
    status: 'Concept',
    year: '2025',
    duration: 'Experimental Prototype',
    shortDescription: 'A playful digital concept where a carrier pigeon delivers messages visually across an interactive map, exploring location-based communication.',
    fullOverview: `PigeonPost is an exploratory creative web application that reimagines digital messaging through the historical nostalgia of carrier pigeons. Rather than instant unceremonious chat bubbles, users compose messages tied to geographic coordinates. An animated carrier pigeon embarks on a visual flight path across an open-source vector map, simulating transit time, terrain traversal, and arrival notifications.`,
    motivation: 'To explore how spatial mapping, visual storytelling, and intentional latency can introduce emotional delight and curiosity into modern communication tools.',
    implementedFeatures: [
      'OpenStreetMap & Leaflet-based interactive visual mapping interface',
      'Custom coordinate selection and marker placement mechanisms',
      'Client-side trajectory calculation and stylized flight visualization',
      'Responsive dark map canvas styled for cinematic immersion',
      'Lightweight message composition modal and visual parcel packaging'
    ],
    plannedFeatures: [
      'Dynamic weather and wind vector influence on simulated flight speeds',
      'Ephemeral message unlocking upon verified recipient coordinate proximity',
      'Custom origami pigeon avatar skins and flight trails',
      'Offline-first message queue using local browser storage'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'OpenStreetMap', 'Leaflet', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jithu-b/PigeonPost',
    challengesAndLearnings: 'Implementing smooth map projections and custom SVG marker animations without heavy rendering pipelines, preserving 60 FPS scrolling on mobile devices.',
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-950/60 via-zinc-950 to-black'
  },
  {
    id: 'jithuverse',
    title: 'JithuVerse Portfolio',
    category: 'Frontend Development',
    genreTag: 'Streaming Interface • Production Architecture',
    badgeText: 'Top Pick',
    status: 'Completed',
    year: '2025',
    duration: 'Production Release',
    shortDescription: 'A cinematic, interactive portfolio that transforms a traditional developer profile into a streaming-style digital experience.',
    fullOverview: `JithuVerse is a production-grade personal portfolio engineered as a homage to modern cinematic streaming platforms like Netflix. It structures my professional background into interactive content rows, featured hero titles, curated recruiter paths, and live global search—enabling hiring managers and fellow developers to stream my story like an original series.`,
    motivation: 'To break away from standard resume-template portfolios by crafting a memorable, tactile web experience that proves frontend engineering craft directly through interaction.',
    implementedFeatures: [
      'Authentic streaming UI with horizontal scrolling carousels and smooth edge-fade scrims',
      'Global multi-attribute search filtering across projects, skills, and experiences',
      'Role-tailored browsing modes: Recruiter, Developer, and Explorer perspectives',
      'Cinematic intro sequence with user-accessible skip and reduced-motion support',
      'Zero-broken-image resilient SVG rendering architecture',
      'Centralized, single-file editable configuration and portfolio data model'
    ],
    plannedFeatures: [
      'Interactive terminal emulator drawer for command-line navigation',
      'Custom theme palette switcher with ambient cinema lighting accents'
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    githubUrl: 'https://github.com/jithu-b',
    challengesAndLearnings: 'Balancing rich cinematic aesthetics, dark contrast ratios, and touch carousel interactions while upholding strict WCAG accessibility and anti-slop frontend discipline.',
    accentColor: '#E50914',
    bgGradient: 'from-red-900/50 via-zinc-950 to-black'
  },
  {
    id: 'web-experiments',
    title: 'Interactive Web Experiments',
    category: 'Creative Technology',
    genreTag: 'Micro-Interactions • Ongoing R&D',
    badgeText: 'In Progress',
    status: 'In Progress',
    year: '2025',
    duration: 'Continuous Exploration',
    shortDescription: 'A growing collection exploring web interfaces, visual interactions, emerging AI tools, and creative problem solving.',
    fullOverview: `A sandbox repository of lightweight web prototypes, algorithmic animations, CSS shaders, and API mashups. Each experiment tests an isolated technical hypothesis—such as kinetic typography, physics-assisted dragging, or client-side vector manipulation.`,
    motivation: 'To maintain an active playground for testing new web specifications, micro-interaction models, and browser APIs outside the scope of production applications.',
    implementedFeatures: [
      'Interactive canvas particle simulation experiment',
      'Accessible dark mode fluid typography scaling calculations',
      'Glassmorphic light-refraction CSS experiments',
      'State-driven SVG path morphing interactions'
    ],
    plannedFeatures: [
      'Web Audio API interactive synthesizer keyboard',
      'Generative SVG geometric poster exporter',
      'WebGL shader lighting tests'
    ],
    technologies: ['HTML5 Canvas', 'JavaScript', 'CSS3', 'React', 'SVG'],
    githubUrl: 'https://github.com/jithu-b',
    challengesAndLearnings: 'Extracting reusable animation primitives and optimizing requestAnimationFrame loops to minimize CPU memory overhead.',
    accentColor: '#10B981',
    bgGradient: 'from-emerald-950/60 via-zinc-950 to-black'
  }
];

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    id: 'react',
    name: 'React & Vite',
    category: 'Frontend Development',
    proficiencyLabel: 'Core Stack',
    associatedProjects: ['EventVerse', 'JithuVerse Portfolio', 'PigeonPost'],
    description: 'Component architecture, state management hooks, virtual DOM rendering, and high-speed Vite tooling.',
    iconName: 'Code2'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend Development',
    proficiencyLabel: 'Core Stack',
    associatedProjects: ['EventVerse', 'JithuVerse Portfolio'],
    description: 'Utility-first responsive layouts, custom design systems, dark interfaces, and micro-animations.',
    iconName: 'Palette'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Frontend Development',
    proficiencyLabel: 'Core Stack',
    associatedProjects: ['EventVerse', 'PigeonPost', 'Interactive Experiments'],
    description: 'Asynchronous flows, Promises, DOM manipulation, functional patterns, and browser APIs.',
    iconName: 'Braces'
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'Frontend Development',
    proficiencyLabel: 'Core Stack',
    associatedProjects: ['All Projects'],
    description: 'Semantic markup, accessible forms, flexbox & grid systems, CSS transitions, and media queries.',
    iconName: 'Layout'
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'Frontend Development',
    proficiencyLabel: 'Standard Practice',
    associatedProjects: ['All Projects'],
    description: 'Mobile-first breakpoint planning, touch hit targets, fluid typography, and viewport scaling.',
    iconName: 'Smartphone'
  },

  // Backend
  {
    id: 'python-flask',
    name: 'Python & Flask',
    category: 'Backend Development',
    proficiencyLabel: 'Working Knowledge',
    associatedProjects: ['EventVerse'],
    description: 'RESTful endpoint design, route routing, request validation, and microservice blueprints.',
    iconName: 'Server'
  },
  {
    id: 'rest-apis',
    name: 'REST API Integration',
    category: 'Backend Development',
    proficiencyLabel: 'Core Stack',
    associatedProjects: ['EventVerse', 'PigeonPost'],
    description: 'Connecting client UIs to backend web services, handling status codes, tokens, and pagination.',
    iconName: 'Network'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming Languages',
    proficiencyLabel: 'Academic Foundation',
    associatedProjects: ['Academic Lab Work'],
    description: 'Object-oriented programming, data structures, algorithms, and core application logic.',
    iconName: 'FileCode'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    proficiencyLabel: 'Working Knowledge',
    associatedProjects: ['EventVerse', 'Scripting & Prototyping'],
    description: 'Scripting, backend logic, data processing, and automation utilities.',
    iconName: 'Terminal'
  },

  // Databases
  {
    id: 'sql-postgres',
    name: 'SQL & PostgreSQL',
    category: 'Databases',
    proficiencyLabel: 'Working Knowledge',
    associatedProjects: ['EventVerse'],
    description: 'Relational data modeling, table normalization, schema foreign keys, and basic indexing.',
    iconName: 'Database'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Databases',
    proficiencyLabel: 'Working Knowledge',
    associatedProjects: ['EventVerse'],
    description: 'Postgres cloud hosting, authentication setup, realtime subscriptions, and database policies.',
    iconName: 'Cloud'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Databases',
    proficiencyLabel: 'Familiar',
    associatedProjects: ['Prototyping'],
    description: 'Cloud Firestore document storage, real-time sync, and client authentication.',
    iconName: 'Flame'
  },

  // Developer Tools
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Developer Tools',
    proficiencyLabel: 'Core Tool',
    associatedProjects: ['All Projects'],
    description: 'Version control workflows, commit etiquette, branch management, and collaborative pull requests.',
    iconName: 'GitBranch'
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX & Prototyping',
    category: 'Design & Creative Technology',
    proficiencyLabel: 'Active Interest',
    associatedProjects: ['JithuVerse Portfolio', 'EventVerse'],
    description: 'Visual hierarchy, information architecture, streaming UI patterns, and accessibility considerations.',
    iconName: 'Figma'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tinkerhub-sbce',
    role: 'Student Community Organizer & Contributor',
    organization: 'TinkerHub SBCE (Sree Buddha College of Engineering)',
    dateRange: 'Campus Initiatives',
    status: 'Verified',
    type: 'Community',
    description: 'Actively contributed to campus technology community initiatives, brainstormed workshop formats, planned design activities and open mic sessions, and conceptualized the EventVerse platform to support campus events.',
    skillsGained: ['Event Coordination', 'Team Leadership', 'Community Building', 'Creative Ideation', 'Peer Mentoring'],
    evidenceNote: 'Core driver behind the EventVerse campus management platform concept.'
  },
  {
    id: 'qnayds-internship',
    role: 'Web Development Intern',
    organization: 'QNAYDS LLP',
    dateRange: '30 January 2025 – 05 February 2025',
    status: 'Verified',
    type: 'Internship',
    description: 'Intensive web development training program focusing on modern frontend fundamentals, responsive UI implementation, and developer tooling.',
    skillsGained: ['HTML5/CSS3', 'Modern JavaScript', 'Responsive Layouts', 'Project Deployment'],
    evidenceNote: 'Confirmed via official credential record.'
  },
  {
    id: 'qnayds-workshop',
    role: 'Web Development Workshop Attendee',
    organization: 'QNAYDS LLP',
    dateRange: '02 February 2025 – 03 February 2025',
    status: 'Verified',
    type: 'Workshop',
    description: 'Hands-on practical development workshop covering web architectures, component modularity, and contemporary styling workflows.',
    skillsGained: ['Frontend Tooling', 'Component Modularity', 'Practical Debugging'],
    evidenceNote: 'Certificate of completion on record.'
  },
  {
    id: 'qnayds-quiz',
    role: 'Web Development Technical Assessment',
    organization: 'QNAYDS LLP',
    dateRange: '05 February 2025',
    status: 'Verified',
    type: 'Workshop',
    description: 'Comprehensive technical evaluation assessing knowledge of frontend engineering standards, semantic markup, and JavaScript logic.',
    skillsGained: ['Technical Problem Solving', 'Core Web Standards', 'Logic Evaluation'],
    evidenceNote: 'Verified certificate credential.'
  },
  {
    id: 'stem-robotics-context',
    role: 'Cybersecurity & Systems Exploration (Context Record)',
    organization: 'STEM Robotics International / SRAI Smart Solutions Pvt Ltd',
    dateRange: 'Academic Training Context',
    status: 'Editable Context',
    type: 'Internship',
    description: 'Exploratory training context involving cybersecurity fundamentals, network principles, and system security practices.',
    skillsGained: ['Security Awareness', 'System Fundamentals', 'Network Principles'],
    evidenceNote: 'Retained as editable context pending submission of final certificate files.'
  }
];

export const PERSONAL_INTERESTS = [
  {
    id: 'football',
    title: 'Football',
    category: 'Sport & Strategy',
    icon: 'Trophy',
    description: 'Passionate about the tactical nuances, fast-paced team chemistry, and exhilarating drama of the beautiful game.',
    quote: 'Strategy, patience, and team synchronization.'
  },
  {
    id: 'music',
    title: 'Music',
    category: 'Creative Focus',
    icon: 'Music',
    description: 'Eclectic playlists powering late-night coding sessions, from ambient synthwave and cinematic scores to indie beats.',
    quote: 'The rhythmic background to every deep development sprint.'
  },
  {
    id: 'movies',
    title: 'Cinema & Streaming',
    category: 'Visual Storytelling',
    icon: 'Film',
    description: 'Appreciating cinematic framing, sound design, and character arcs—which directly inspired the streaming aesthetic of JithuVerse.',
    quote: 'Great visuals and sound design make stories unforgettable.'
  },
  {
    id: 'tech-exploration',
    title: 'Emerging Technology',
    category: 'Curiosity & R&D',
    icon: 'Compass',
    description: 'Eagerly testing new software releases, developer CLIs, open-source AI models, and browser engineering breakthroughs.',
    quote: 'Always eager to understand how the next big tool works under the hood.'
  },
  {
    id: 'creative-ideas',
    title: 'Creative Experimentation',
    category: 'Product Thinking',
    icon: 'Sparkles',
    description: 'Sketching offbeat digital interactions, interactive maps, and whimsical utility concepts that put smiles on users faces.',
    quote: 'The intersection of playful imagination and working code.'
  }
];

export const LEARNING_QUEUE = [
  {
    id: 'learn-fullstack',
    title: 'Advanced Full-Stack Architecture',
    area: 'Architecture',
    description: 'Deepening production patterns in distributed APIs, caching layers, and microservices.',
    status: 'Active Learning'
  },
  {
    id: 'learn-backend',
    title: 'Scalable Backend Systems',
    area: 'Systems',
    description: 'Studying concurrent connection handling, message queues, and database connection pooling.',
    status: 'Active Learning'
  },
  {
    id: 'learn-security',
    title: 'Practical Cybersecurity & Auth',
    area: 'Security',
    description: 'Exploring OAuth 2.0 PKCE, session hardening, OWASP Top 10 mitigations, and network penetration fundamentals.',
    status: 'Active Exploration'
  },
  {
    id: 'learn-ai-dev',
    title: 'AI-Assisted Development & Tools',
    area: 'Modern Tooling',
    description: 'Integrating LLM SDKs, embedding vector stores, and automated developer evaluation pipelines.',
    status: 'Continuous R&D'
  },
  {
    id: 'learn-ui-interactivity',
    title: 'Advanced UI/UX & Web Performance',
    area: 'Frontend Craft',
    description: 'Mastering 60fps animations, layout shift optimization, WebGL shaders, and high-retention streaming design.',
    status: 'Deep Practice'
  }
];
