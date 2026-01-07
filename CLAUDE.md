# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Cullen Heubner (Unity Developer & Game Programmer) built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The site is configured for static export and deployment to GitHub Pages.

## Common Commands

- **Development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build` (creates static export)
- **Export static site**: `npm run export` (alias for build)
- **Linting**: `npm run lint`
- **Start production server**: `npm run start`

## Architecture

### Static Site Generation
- Configured for static export (`output: 'export'`) in `next.config.ts`
- GitHub Pages deployment setup with base path `/thanolion.github.io` in production
- Images are unoptimized for static hosting compatibility
- Trailing slashes enabled for better static hosting support

### Component Structure
- **Single-page application** with smooth scrolling navigation
- **Component-based architecture** with reusable UI components in `src/components/`
- **Section components**: Hero, About, CV, Projects, Contact, Navigation
- All components use TypeScript and Tailwind CSS for styling

### Styling
- **Tailwind CSS** for utility-first styling
- **Dark theme** with gradient backgrounds (slate-900 to purple-900)
- **Responsive design** with mobile-first approach
- **Geist font family** (sans and mono variants) from Google Fonts

### Key Technical Details
- **Client-side components** use `'use client'` directive
- **Smooth scrolling navigation** implemented with `scrollIntoView()`
- **Path aliases** configured: `@/*` maps to `./src/*`
- **TypeScript strict mode** enabled with modern ES2017+ target
- **Mobile-responsive navigation** with hamburger menu

### Development Notes
- The site is a single-page portfolio showcasing game development work
- Navigation scrolls to sections rather than routing to different pages
- All interactive elements (buttons, navigation) use smooth animations
- The project follows Next.js App Router conventions with `src/app/` structure