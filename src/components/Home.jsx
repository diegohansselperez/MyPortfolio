import { useEffect } from 'react';
import { AboutMe } from './Aboutme';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Header } from './Header';
import Proyects from './Proyects';
import { Skills } from './Skills';
import StarBackground from './StarBackground';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

export function Home() {
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
  return (
    <div className="min-h-screen relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-x-hidden">
      <ThemeToggle />
      {/* Fondo Estrellado */}
      <StarBackground />
      {/* Navbar Desktop and Mobile*/}
      <Navbar />
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
