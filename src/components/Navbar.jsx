import { MenuIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleSroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleSroll);
  }, []);
  return (
    <nav
      className={`fixed w-full  z-40 transition-all duration-300  ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
          : 'py-[15px] opacity-100'
      }`}
    >
      <div className="container-app  flex items-center justify-between md:justify-around">
        <a className=" flex items-center " href="#hero">
          {/* vamos a crear un svg para la parte blanca */}
          <img
            className="w-25 transition-all duration-500 hover:scale-115 h-auto md:w-50 relative z-10"
            /*  src="/src/assets/img/dhperez_logo.png" */
            src="/src/assets/DHPEREZ (1)-cropped.svg"
            alt="dhperez_logo"
          />
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex  space-x-8 mr-13">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 text-[1rem] font-normal hover:text-[#5d17e8]  transition-colors  duration-300 hover:animation-float"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          className="md:hidden p-2 text-foreground z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        <div
          className={`fixed inset-0 bg-backgraound/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-7 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80  text-center font-normal hover:text-[#5d17e8] transition-colors  duration-300"
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
