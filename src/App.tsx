import React, { useState, useEffect } from 'react';
import { StreamingIntro } from './components/StreamingIntro';
import { ProfileSelectorModal, ProfileType } from './components/ProfileSelectorModal';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ContentRow } from './components/ContentRow';
import { CardItemData } from './components/ContentCard';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { AboutModal } from './components/AboutModal';
import { QuickProfileModal } from './components/QuickProfileModal';
import { InfoModal, InfoModalData } from './components/InfoModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SearchOverlay } from './components/SearchOverlay';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  PORTFOLIO_CONFIG,
  PROJECTS,
  ProjectItem,
  PERSONAL_INTERESTS,
  LEARNING_QUEUE,
  EXPERIENCES
} from './data/portfolio';

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const [showInitialProfileSelect, setShowInitialProfileSelect] = useState<boolean>(false);
  const [currentProfile, setCurrentProfile] = useState<ProfileType>('recruiter');
  const [showProfileSwitcher, setShowProfileSwitcher] = useState<boolean>(false);
  const [profileToast, setProfileToast] = useState<string | null>(null);
  
  // Modals
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);
  const [showQuickProfileModal, setShowQuickProfileModal] = useState<boolean>(false);
  const [infoModalData, setInfoModalData] = useState<InfoModalData | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [activeNavSection, setActiveNavSection] = useState<string>('home');

  // Handle intro completion
  const handleIntroComplete = () => {
    setIntroFinished(true);
    // Optionally show profile choice on first visit
    setShowInitialProfileSelect(true);
  };

  const handleSelectProfile = (p: ProfileType) => {
    setCurrentProfile(p);
    setShowInitialProfileSelect(false);
    setShowProfileSwitcher(false);
    
    // Feedback toast
    const label = p === 'recruiter' ? 'Recruiter Lens' : p === 'developer' ? 'Developer Lens' : 'Explorer Lens';
    setProfileToast(`Switched to ${label}`);
    setTimeout(() => setProfileToast(null), 3000);
  };

  // Keyboard shortcut: Press "/" to open search
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchOpen && !selectedProject && !showAboutModal) {
        const activeTag = document.activeElement?.tagName;
        if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
          e.preventDefault();
          setSearchOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [searchOpen, selectedProject, showAboutModal]);

  // Track active section for navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'journey', 'projects', 'skills', 'experience', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveNavSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Map Projects to ContentCard Items ---
  const projectCards: CardItemData[] = PROJECTS.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    description: p.shortDescription,
    status: p.status,
    year: p.year,
    tags: p.technologies,
    visualType: p.id,
    githubUrl: p.githubUrl,
    onClick: () => setSelectedProject(p)
  }));

  // --- Row A: Continue Exploring Cards ---
  const exploreCards: CardItemData[] = [
    {
      id: 'explore-story',
      title: 'The Story Behind The Screen',
      category: 'Origin Journey',
      description: 'Computer Science education, foundational values, and the spark that started my development journey.',
      year: 'Chapter 01',
      visualType: 'hero',
      tags: ['Education', 'Engineering', 'Kerala'],
      onClick: () => setShowAboutModal(true)
    },
    {
      id: 'explore-eventverse',
      title: 'EventVerse Platform',
      category: 'Full-Stack Concept',
      description: 'Campus event discovery, attendee registration, quizzes, and organizer management tools for TinkerHub SBCE.',
      year: 'Featured',
      visualType: 'eventverse',
      tags: ['React', 'Flask', 'Supabase'],
      onClick: () => setSelectedProject(PROJECTS[0])
    },
    {
      id: 'explore-skills',
      title: 'Technical Arsenal',
      category: 'Core Capabilities',
      description: 'Explore my working knowledge across frontend, backend, databases, and developer tooling.',
      year: 'Tools',
      visualType: 'jithuverse',
      tags: ['React', 'Tailwind', 'PostgreSQL'],
      onClick: () => navigateToSection('skills')
    },
    {
      id: 'explore-community',
      title: 'TinkerHub SBCE Involvement',
      category: 'Community Leadership',
      description: 'Campus technology community organizing, workshops, hackathon planning, and student peer mentoring.',
      year: 'Community',
      visualType: 'community',
      tags: ['Leadership', 'Event Planning', 'Mentorship'],
      onClick: () => {
        setInfoModalData({
          title: 'TinkerHub SBCE Community Leadership',
          category: 'Campus Technology Community',
          subtitle: 'Sree Buddha College of Engineering, Pattoor',
          description: 'Being an active contributor in TinkerHub SBCE has shaped my philosophy that technology is best learned in collaborative, enthusiastic communities. I have helped brainstorm workshop structures, design activities, open mic tech discussions, and initiated the EventVerse platform concept.',
          details: 'Student tech communities bridge academic theory and real-world implementation. Through TinkerHub SBCE, we encourage students to experiment fearlessly with code, collaborate on open-source repositories, and build creative projects together.',
          bulletPoints: [
            'Event & Workshop Ideation: Brainstorming formats for hands-on web development & design sessions.',
            'EventVerse Platform Initiative: Creating a unified digital system for campus events and quizzes.',
            'Peer Encouragement: Inspiring junior students to learn Git, web fundamentals, and modern frameworks.'
          ],
          quote: 'Exploring technology as a community, bringing people together through creative events and continuous learning.'
        });
      }
    },
    {
      id: 'explore-beyond',
      title: 'Beyond the Screen',
      category: 'Passions & Life',
      description: 'Football strategy, late-night music playlists, cinema aesthetics, and creative experiments outside code.',
      year: 'Life',
      visualType: 'web-experiments',
      tags: ['Football', 'Music', 'Cinema'],
      onClick: () => {
        setInfoModalData({
          title: 'Beyond The Screen: Life & Creative Curiosity',
          category: 'Personal Interests',
          subtitle: 'The disciplines that recharge my development sprints',
          description: 'Software engineering is powered by what inspires us outside the editor. From the team synchronization of football to the atmospheric sound design of film soundtracks, these hobbies inspire the polish of JithuVerse.',
          bulletPoints: [
            'Football: Appreciating rapid tactical transitions, discipline, and synchronized teamwork.',
            'Music & Sound: Deep ambient synthwave, cinematic movie scores, and melodic beats for coding flow.',
            'Cinema & Streaming: Observing shot composition and pacing that inspired this Netflix-style platform.',
            'Creative Curiosity: Sketching offbeat digital experiments and whimsical web interactions.'
          ]
        });
      }
    }
  ];

  // --- Row C: Behind the Build (Approach) Cards ---
  const approachCards: CardItemData[] = PORTFOLIO_CONFIG.approachPoints.map((pt) => ({
    id: pt.id,
    title: pt.title,
    category: 'Engineering Philosophy',
    description: pt.summary,
    tags: ['Best Practice', 'Iteration'],
    visualType: 'jithuverse',
    onClick: () => {
      setInfoModalData({
        title: pt.title,
        category: 'Development Approach',
        description: pt.summary,
        details: pt.details,
        quote: 'Clean software feels effortless because thoughtful engineering was applied to every detail.'
      });
    }
  }));

  // --- Row E: Learning Queue Cards ---
  const learningCards: CardItemData[] = LEARNING_QUEUE.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.area,
    description: item.description,
    status: item.status,
    tags: ['Continuous R&D'],
    visualType: 'web-experiments',
    onClick: () => {
      setInfoModalData({
        title: item.title,
        category: `Learning Queue • ${item.area}`,
        subtitle: `Status: ${item.status}`,
        description: item.description,
        details: 'Part of my ongoing journey as an aspiring developer is maintaining a proactive learning queue. Rather than claiming immediate mastery, I actively research, prototype, and build side experiments in these topics.',
        bulletPoints: [
          'Studying documentation, architecture whitepapers, and industry case studies.',
          'Building isolated sandbox repositories to test performance and edge cases.',
          'Integrating lessons into upcoming milestones of EventVerse and web experiments.'
        ]
      });
    }
  }));

  // --- Row F: Beyond the Screen Cards ---
  const interestCards: CardItemData[] = PERSONAL_INTERESTS.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    tags: ['Personal Passion'],
    visualType: 'pigeonpost',
    onClick: () => {
      setInfoModalData({
        title: item.title,
        category: item.category,
        description: item.description,
        quote: item.quote
      });
    }
  }));

  // --- Row: Recommended for Recruiters ---
  const recruiterCards: CardItemData[] = [
    {
      id: 'rec-about',
      title: 'Candidate Profile & Bio',
      category: 'Education & Overview',
      description: 'B.Tech in Computer Science from SBCE, Kerala. Aspiring software engineer ready for technical roles.',
      year: 'Verified',
      visualType: 'hero',
      tags: ['B.Tech CSE', 'Kerala', 'SBCE'],
      onClick: () => setShowAboutModal(true)
    },
    {
      id: 'rec-eventverse',
      title: 'EventVerse Architecture',
      category: 'Full-Stack Web App',
      description: 'Full-stack event management platform using React, Flask, SQLAlchemy, Supabase, and PostgreSQL.',
      status: 'In Progress',
      year: '2025',
      visualType: 'eventverse',
      tags: ['Flask', 'Supabase', 'React', 'SQL'],
      onClick: () => setSelectedProject(PROJECTS[0])
    },
    {
      id: 'rec-internship',
      title: 'Web Dev Internship & Training',
      category: 'Professional Experience',
      description: 'Verified web development internship & workshop records with QNAYDS LLP (Jan–Feb 2025).',
      status: 'Completed',
      year: '2025',
      visualType: 'community',
      tags: ['Verified Credential', 'Frontend Tooling'],
      onClick: () => navigateToSection('experience')
    },
    {
      id: 'rec-skills',
      title: 'Technical Arsenal & Stack',
      category: 'Core Competencies',
      description: 'Hands-on familiarity with React, Vite, Tailwind CSS, Python, PostgreSQL, and Git workflows.',
      year: 'Review',
      visualType: 'jithuverse',
      tags: ['Full-Stack', 'Frontend', 'Databases'],
      onClick: () => navigateToSection('skills')
    },
    {
      id: 'rec-contact',
      title: 'Interview & Contact Dispatch',
      category: 'Direct Communication',
      description: 'Connect directly via email or GitHub for placements, developer interviews, or technical discussions.',
      year: 'Available',
      visualType: 'pigeonpost',
      tags: ['Email', 'GitHub', 'Placements'],
      onClick: () => navigateToSection('contact')
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-[#E50914] selection:text-white">
      {/* 1. Streaming Opening Intro (Shows on entry, can be skipped) */}
      {!introFinished && (
        <StreamingIntro onComplete={handleIntroComplete} />
      )}

      {/* 2. Initial Profile Selector ("Who's watching?") */}
      {showInitialProfileSelect && (
        <ProfileSelectorModal
          currentProfile={currentProfile}
          onSelectProfile={handleSelectProfile}
          isInitialSelection={true}
        />
      )}

      {/* 3. On-demand Profile Switcher Modal */}
      {showProfileSwitcher && (
        <ProfileSelectorModal
          currentProfile={currentProfile}
          onSelectProfile={handleSelectProfile}
          onClose={() => setShowProfileSwitcher(false)}
        />
      )}

      {/* 4. Top Navigation Bar */}
      <Navbar
        currentProfile={currentProfile}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenProfileSwitcher={() => setShowProfileSwitcher(true)}
        activeSection={activeNavSection}
      />

      {/* 5. Main Hero Section */}
      <main className="flex-grow">
        <HeroBanner
          onPlayStory={() => setShowAboutModal(true)}
          onMoreInfo={() => setShowQuickProfileModal(true)}
        />

        {/* Profile Change Toast Indicator */}
        {profileToast && (
          <div className="fixed top-20 right-6 z-50 px-4 py-2 rounded-xl bg-zinc-900/95 border border-[#E50914] text-white text-xs font-semibold shadow-2xl flex items-center space-x-2 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span>{profileToast}</span>
          </div>
        )}

        {/* Dynamic Profile-Tailored Rows Order */}
        {currentProfile === 'recruiter' && (
          <div className="relative z-20 -mt-8 sm:-mt-12 space-y-2">
            <ContentRow
              id="journey"
              title="Recommended for Recruiters"
              subtitle="Curated overview of education, verified internships, and production projects"
              badge="PRIORITY QUEUE"
              items={recruiterCards}
            />

            <ContentRow
              id="projects"
              title="JithuVerse Originals"
              subtitle="Flagship projects engineered with modern web stacks"
              badge="FEATURED SERIES"
              items={projectCards}
            />

            <ContentRow
              title="Continue Exploring"
              subtitle="Deep dives into journey chapters, community leadership, and mindset"
              items={exploreCards}
            />
          </div>
        )}

        {currentProfile === 'developer' && (
          <div className="relative z-20 -mt-8 sm:-mt-12 space-y-2">
            <ContentRow
              id="projects"
              title="JithuVerse Originals"
              subtitle="Codebases, full-stack architectures, and web prototypes"
              badge="CODE STACK"
              items={projectCards}
            />

            <ContentRow
              title="Behind the Build"
              subtitle="Engineering workflows, API contracts, and database considerations"
              badge="METHODOLOGY"
              items={approachCards}
            />

            <ContentRow
              id="journey"
              title="The Learning Queue"
              subtitle="Active explorations in backend scaling, cybersecurity, and modern web APIs"
              badge="R&D QUEUE"
              items={learningCards}
            />

            <ContentRow
              title="Continue Exploring"
              subtitle="Chapters of the developer journey"
              items={exploreCards}
            />
          </div>
        )}

        {currentProfile === 'explorer' && (
          <div className="relative z-20 -mt-8 sm:-mt-12 space-y-2">
            <ContentRow
              id="journey"
              title="Continue Exploring"
              subtitle="Chapters of the journey from campus community to creative code"
              badge="CURATED STREAM"
              items={exploreCards}
            />

            <ContentRow
              id="projects"
              title="JithuVerse Originals"
              subtitle="Creative web experiments and full-stack applications"
              badge="ORIGINALS"
              items={projectCards}
            />

            <ContentRow
              title="Beyond the Screen"
              subtitle="Football, music, cinema, and outside creative pursuits"
              badge="LIFESTYLE"
              items={interestCards}
            />

            <ContentRow
              title="The Learning Queue"
              subtitle="Continuous technological curiosities"
              items={learningCards}
            />
          </div>
        )}

        {/* 6. Technical Arsenal / Skills Section */}
        <div className="mt-8 border-t border-zinc-900/80">
          <SkillsSection />
        </div>

        {/* 7. Experience, Internships & Community Section */}
        <div className="border-t border-zinc-900/80">
          <ExperienceTimeline />
        </div>

        {/* 8. Professional Contact & Credits Section */}
        <div className="border-t border-zinc-900/80 bg-gradient-to-b from-[#080808] to-[#050505]">
          <ContactSection />
        </div>
      </main>

      {/* 9. Cinematic End-Credits Footer */}
      <Footer />

      {/* --- Modals & Overlays --- */}
      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* About Me Story Modal */}
      <AboutModal
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />

      {/* Quick Profile Overview Modal */}
      <QuickProfileModal
        isOpen={showQuickProfileModal}
        onClose={() => setShowQuickProfileModal(false)}
        onNavigateSection={navigateToSection}
      />

      {/* Generic Info Modal for approach & interests */}
      <InfoModal
        data={infoModalData}
        onClose={() => setInfoModalData(null)}
      />

      {/* Global Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
        onNavigateSection={navigateToSection}
      />
    </div>
  );
};

export default App;
