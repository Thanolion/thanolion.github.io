# Cullen Heubner - Portfolio

Personal portfolio website showcasing my work as a Unity Developer and Game Programmer.

🌐 **Live Site:** [thanolion.github.io](https://thanolion.github.io)

## About

This is my professional portfolio featuring game development projects, technical achievements, and work experience. The site highlights my expertise in Unity development, VR/multiplayer systems, procedural generation, and game architecture.

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Project Showcase** - Detailed case studies with videos, images, and technical breakdowns
- **Local Video Support** - MP4 videos hosted directly for faster loading
- **External Video Embeds** - Support for YouTube and Google Drive videos
- **Smooth Navigation** - Single-page application with scroll-to-section navigation
- **Dark Theme** - Professional dark gradient design with purple accents

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **Build:** Static Site Generation (SSG)

## Local Development

### Prerequisites
- Node.js 20+
- npm

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Thanolion/thanolion.github.io.git
cd thanolion.github.io
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `/out`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This site is deployed to GitHub Pages using the `/docs` folder method:

1. **Build the site:**
```bash
npm run build
```

2. **Copy to docs folder:**
```bash
xcopy /E /I /Y out docs
```

3. **Commit and push:**
```bash
git add docs
git commit -m "Deploy site"
git push origin main
```

The site will automatically deploy to [thanolion.github.io](https://thanolion.github.io)

## Project Structure

```
├── public/              # Static assets (images, videos, resume)
├── src/
│   ├── app/            # Next.js app directory (layout, page)
│   └── components/     # React components
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── CV.tsx
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       └── Projects.tsx
├── docs/               # Built site for GitHub Pages deployment
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── CLAUDE.md          # Project instructions for Claude Code

```

## Adding Content

### Adding Projects

Edit `src/components/Projects.tsx` and add a new project object to the `projects` array:

```typescript
{
  id: "project-id",
  title: "Project Title",
  role: "Your Role",
  description: "Project description...",
  tech: ["Unity", "C#", "Multiplayer"],
  status: "Live", // or "In Development", "Released", etc.
  videoUrls: ["/video.mp4"], // Local videos or YouTube/Drive URLs
  links: {
    playStore: "https://...",
    store: "https://..."
  },
  challenges: ["Challenge 1", "Challenge 2"],
  solutions: ["Solution 1", "Solution 2"],
  images: ["/image1.png", "/image2.png"]
}
```

### Adding Local Videos

1. Place MP4 files in the `public/` folder
2. Reference them in `videoUrls` with a leading slash: `"/video-name.mp4"`
3. Supported formats: `.mp4`, `.webm`, `.ogg`, `.mov`

## Contact

- **Email:** Available in site contact section
- **GitHub:** [Thanolion](https://github.com/Thanolion)

---

Built with Next.js and deployed on GitHub Pages
