# Doge Agency — Creative Studio Showcase

A modern, responsive digital agency portfolio showcasing interactive animations, case studies carousel, showreel player, curated animal photography gallery, verified client testimonials, and studio inquiries.

---

## 🌟 Overview

**Doge Agency** is a full-featured creative agency web application. It combines distinctive character branding with modern frontend engineering principles:

- **Single Sticky Header Navigation**: Sleek, blur-backed top navigation with active section detection, smooth scrolling, and mobile drawer.
- **Interactive Hero Showcase**: Parallax visual layers featuring Doge character art, motion accents, and primary studio call-to-actions.
- **Studio Showreel & Video Player**: Embedded interactive video player with custom controls, full-screen playback, and caption toggle.
- **Selected Works & Case Studies**: Multi-slide project carousel with live tags, metrics, and case details.
- **Capabilities & Services**: Service breakdown across creative direction, frontend engineering, 3D/character design, and interactive media.
- **Animal & Pet Photography Gallery**: Categorized image gallery (All, Dogs, Cats, Wildlife, Birds) with high-resolution lightbox modal and local asset fallbacks.
- **Verified Client Testimonials**: Client reviews from leading brands and design publications.
- **Studio Inquiries & Contact Form**: Form validation, service type selector, budget range picker, and instant submission feedback.
- **Dedicated About Page**: Origin timeline, team member cards, and design system philosophy.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript / JSX
- **Routing**: React Router v6 (`BrowserRouter`, `Routes`, `Route`)
- **Styling**: Modular SCSS with mixins, CSS variables, and fluid typography
- **Icons**: [Lucide React](https://lucide.dev)
- **Tooling**: Node.js, Webpack / CRA build pipeline, ESLint

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/              # Logos, character illustrations, and vector icons
│   └── index.html           # Root HTML entry point & extension error guards
├── src/
│   ├── components/
│   │   ├── clients/         # Testimonials and client review cards
│   │   ├── contact/         # Studio contact form with state validation
│   │   ├── featured/        # Case study carousel & project slider
│   │   ├── footer/          # Site footer with social links & copyright
│   │   ├── gallery/         # Animal photography gallery with modal lightbox
│   │   ├── intro/           # Hero section with parallax mascot art
│   │   ├── introduction/    # Studio showreel player & overview
│   │   ├── services/        # Capability cards and service tiers
│   │   └── topbar/          # Unified sticky navigation & mobile drawer
│   ├── pages/
│   │   ├── Home.jsx         # Main landing view
│   │   └── About.jsx        # Studio story, timeline, and team view
│   ├── App.jsx              # Router configuration
│   ├── index.js             # Root rendering & React ErrorBoundary
│   └── globall.scss         # Global SCSS variables, resets, and mixins
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or open the project workspace:
   ```bash
   git clone <repository-url>
   cd doge-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Launches the development server on port 3000 |
| `npm run build` | Compiles and optimizes static assets for production deployment into `build/` |
| `npm run lint` | Runs ESLint across all source components and styles |
| `npm test` | Executes test suites in watch mode |

---

## 🎨 Design System & Palette

- **Primary Accent**: `#ba723d` / `#a25c2b` (Warm Ochre / Terracotta)
- **Background Canvas**: `#fdebdd` / `#fff9f4` (Warm Neutral Peach / Off-White)
- **Dark Text & Headings**: `#0d1a20` / `#2b1f1a` (Deep Slate Charcoal)
- **Body & Muted Text**: `#55443b` / `#8c7b72` (Earthy Taupe)
- **Typography**: `Manrope` / `Plus Jakarta Sans` sans-serif hierarchy

---

## 📄 License

This project is licensed under the MIT License.
