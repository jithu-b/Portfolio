# JITHUVERSE — A Netflix-Inspired Personal Portfolio

> **“My professional journey, streamed like a Netflix original.”**

**JITHUVERSE** is a production-grade personal portfolio website for **Jithu Biju**, crafted with the visual aesthetic and interaction patterns of a modern dark streaming platform. Every card represents a project, capability, experience, or chapter of Jithu's journey as an aspiring software engineer.

---

## 🌟 Key Features

1. **Cinematic Streaming Intro**:
   - Original `JITHUVERSE` wordmark reveal with subtle red scanner illumination and optional audio chime.
   - Fully accessible with **Skip button** and instant compliance with `prefers-reduced-motion`.

2. **"Who's Watching?" Profile Selector**:
   - **Recruiter Profile**: Highlights verified credentials, academic qualifications, and production-ready code.
   - **Developer Profile**: Prioritizes code architecture, GitHub repositories, and backend system designs.
   - **Explorer Profile**: Takes visitors through creative experiments, TinkerHub SBCE community leadership, and personal passions.
   - Easily switch between profiles anytime from the navigation bar.

3. **Featured Original Hero Banner**:
   - Immersive 85vh viewport banner showcasing Jithu's identity, tagline, unboxed metadata, and direct CTA actions (`▶ Play My Story`, `ⓘ More Info`, `View GitHub`).

4. **Netflix-Inspired Content Browsing Rows**:
   - Smooth horizontal scrolling carousels with edge-fade scrims and mouse/touch navigation.
   - Rows:
     - **Recommended for Recruiters** (Curated priority queue)
     - **JithuVerse Originals** (`EventVerse`, `PigeonPost`, `JithuVerse Portfolio`, `Interactive Web Experiments`)
     - **Behind the Build** (Engineering methodology and architecture philosophy)
     - **Community & Leadership** (TinkerHub SBCE events and hackathons)
     - **The Learning Queue** (Active technological exploration and R&D)
     - **Beyond the Screen** (Football, music, cinema, and creative curiosity)

5. **Full Project Title Detail Pages**:
   - Streaming title modal with backdrop banner, verified GitHub links, implemented features vs. roadmap, tech stack, and a "More Like This" recommendation row.

6. **Global Search Experience**:
   - Multi-attribute search across all projects, skills, education, and experiences.
   - Instant keyboard activation with the `/` key or search button.

7. **Zero-Broken-Image Resilient Visual Architecture**:
   - Handcrafted SVGs and gradients ensure zero broken images or failed third-party network requests.

8. **Honest End-Credits Contact Section**:
   - Direct mail dispatch, one-click email copy with toast confirmation, and transparent client-side draft formatting.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Functional Components & Hooks)
- **Language**: TypeScript
- **Tooling**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Bebas Neue (streaming wordmark) & Manrope (clean body text)

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/jithu-b/jithuverse.git
cd jithuverse

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

The compiled static assets will be output to the `dist` directory, ready to deploy to Vercel, Netlify, GitHub Pages, or Firebase Hosting.

---

## 📝 Customization Guide: Updating Your Portfolio Content

All personal information, links, projects, and skills are centralized in a single file:
👉 **`src/data/portfolio.ts`**

### 1. Updating Contact & Social Links
Open `src/data/portfolio.ts` and locate `PORTFOLIO_CONFIG.profile`:
```typescript
export const PORTFOLIO_CONFIG = {
  profile: {
    name: 'Jithu Biju',
    email: 'jithubiju0102@gmail.com', // Update with your preferred email
    github: 'https://github.com/jithu-b', // Your GitHub URL
    linkedin: 'https://linkedin.com/in/your-handle', // Add your LinkedIn profile URL
    resumeUrl: 'https://your-domain.com/resume.pdf', // Hosted PDF URL
    graduationYearPlaceholder: '2025', // Update your verified graduation year
    cgpaPlaceholder: '8.5 / 10', // Update verified CGPA
    // ...
  }
};
```

### 2. Adding Custom Project Screenshots
To replace the default generative vector artwork with real screenshots of your applications:
1. Place your image file in `public/images/eventverse.png` (or any public path).
2. In `src/components/VisualThumbnails.tsx`, you can render an `<img>` tag with `src="/images/eventverse.png"` and `alt="EventVerse Screenshot"`. The fallback vector graphics are already provided to ensure zero broken image states.

### 3. Adding or Adjusting Skills
In `src/data/portfolio.ts`, scroll to `SKILLS` and adjust any entry or proficiency label:
```typescript
{
  id: 'react',
  name: 'React & Vite',
  category: 'Frontend Development',
  proficiencyLabel: 'Core Stack', // e.g., "Core Stack", "Working Knowledge", "Active Focus"
  associatedProjects: ['EventVerse', 'JithuVerse Portfolio'],
  description: 'Your notes here...',
  iconName: 'Code2'
}
```

### 4. Updating Experience & Certificates
In `src/data/portfolio.ts`, update `EXPERIENCES`:
- When certificate files become available, change `status: 'Editable Context'` to `status: 'Verified'` and add links or descriptions.

---

## ♿ Accessibility & Anti-Slop Design Discipline

- Adheres to **Zero-Pill Discipline**: Metadata is presented with clean typographic dots (`·` / `/`) rather than cluttered capsule badges.
- **Top Bar Contract**: Clean 3-zone header without cluttered mode pills or watermarks.
- **Keyboard Navigation**: Press `/` to search, `Esc` to close any modal or search overlay.
- High-contrast dark palette (`#080808` canvas, `#E50914` streaming accent).
