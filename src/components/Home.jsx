import { AboutMe } from './Aboutme';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Header } from './Header';
import { Proyectos } from './Proyectos';
import { Skills } from './Skills';
import StarBackground from './StarBackground';
import ThemeToggle from './ThemeToggle';

export function Home() {
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
