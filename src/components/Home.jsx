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
  useEffect(() => {
    handelMobileWindow();
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
{
  /*  <Header />
            
            <Skills />
            <Proyectos />
            
             */
}
