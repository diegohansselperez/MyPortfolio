import { MenuIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo_white from '../images/dhperez_logo_white.svg';
import logo_black from '../images/dhperez_logo_black-cropped.svg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: 'aboutme' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = ({ isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    // 1. Cierra el menú (si está abierto)
    setIsMenuOpen(false);

    // 2. Encuentra el elemento por ID
    const element = document.getElementById(id);

    if (element) {
      // 3. Usa scrollIntoView para desplazar la ventana suavemente
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * useEffect para manejar el cambio de estilo del Navbar al hacer scroll.
   * Añade un event listener para el scroll y una función de limpieza.
   */

  useEffect(() => {
    const handleSroll = () => {
      // El estado cambia a true si el scroll vertical es mayor a 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleSroll);

    // Función de limpieza: Remueve el listener cuando el componente se desmonta
    return () => window.removeEventListener('scroll', handleSroll);
  }, []);

  /**
   * useEffect para bloquear el scroll del cuerpo (body) cuando el menú móvil está abierto.
   * Esto previene que el contenido de la página se mueva detrás del menú fijo.
   */
  useEffect(() => {
    if (isMenuOpen) {
      // Desactiva el scroll en el body
      document.body.style.overflow = 'hidden';
    } else {
      // Reactiva el scroll
      document.body.style.overflow = 'auto';
    }

    // Función de limpieza: Asegura que el scroll se reactive si el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full  z-30 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[hsl(var(--background))]/95 backdrop-blur-md shadow-xs' // Usamos /95 para un fondo casi sólido
          : 'py-[15px]' // No usamos opacity-100, ya que es el valor por defecto
      }`}
    >
      <div className="container-app flex items-center justify-between md:justify-around">
        <a className="flex items-center" href="/">
          {/* Cambio de Logo, si cambia el theme */}
          {window.innerWidth < 768 ? (
            <img
              className="w-25 transition-all duration-500 hover:scale-115 h-auto md:w-50 relative z-10"
              src={logo_white}
              alt="dhperez_logo"
            />
          ) : (
            <img
              className="w-25 transition-all duration-500 hover:scale-115 h-auto md:w-50 relative z-10"
              src={isDarkMode ? logo_white : logo_black}
              alt="dhperez_logo"
            />
          )}
        </a>

        {/* desktop nav - Correcto */}
        <div className="hidden md:flex space-x-8 mr-13">
          {navItems.map((item, key) => (
            <a
              key={key}
              onClick={() => handleScrollToSection(item.href)}
              className="text-foreground/80 text-[1rem] cursor-pointer font-normal hover:text-[#5d17e8] transition-colors duration-300 hover:animation-float"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav - Botón de Toggle */}
        <button
          className="md:hidden p-2 text-foreground z-60"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Contenedor del Menú Desplegable - LÓGICA DE Z-INDEX MÁS ALTA */}
        <div
          className={`
                        fixed inset-0 
                        bg-[hsl(var(--background))]/95 backdrop-blur-md z-50 
                        flex flex-col items-center justify-center 
                        transition-all duration-500 md:hidden 
                        ${
                          isMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }
                    `}
        >
          <div className="flex flex-col space-y-7 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                // Agregamos un onClick para cerrar el menú al hacer click en el enlace
                onClick={() => setIsMenuOpen(false)}
                className="text-[hsl(var(--foreground))]/80 text-center font-normal hover:text-[hsl(var(--primary))] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
