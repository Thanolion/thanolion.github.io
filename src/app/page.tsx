import About from '@/components/About';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <CV />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
