import { useEffect } from 'react';
import { AboutMe } from './Aboutme';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Header } from './Header';
import { Proyectos } from './Proyectos';
import { Skills } from './Skills';
import StarBackground from './StarBackground';
import ThemeToggle from './ThemeToggle';

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      {/* Fondo Estrellado */}
      <StarBackground />
    </div>
  );
}

export default Home;
{
  /*  <Header />
            <AboutMe />
            <Skills />
            <Proyectos />
            <Contact />
            <Footer/> */
}
