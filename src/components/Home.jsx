import { useEffect, useState } from 'react';
import { AboutMe } from './Aboutme';
import { Contact } from './Contact';
import { Footer } from './Footer';
import Proyects from './Proyects';
import { Skills } from './Skills';
import StarBackground from './StarBackground';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    handelMobileWindow();

    return () => clearTimeout(timer);
  }, []);

  const handelMobileWindow = () => {
    const widthMobileStatus = 640;
    const windowActual = window.innerWidth;

    if (windowActual < widthMobileStatus) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleThem = () => {
    if (isDarkMode) {
      document.documentElement.classList.toggle('dark');
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.toggle('dark');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-transparent">
        <span className="load_word">Load&nbsp;ng</span>
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div className="min-h-screen relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-x-hidden">
      <ThemeToggle toggleThem={toggleThem} isDarkMode={isDarkMode} />
      {/* Fondo Estrellado */}
      <StarBackground />
      {/* Navbar Desktop and Mobile*/}
      <Navbar isDarkMode={isDarkMode} />
      {/* Main Content*/}
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Proyects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
