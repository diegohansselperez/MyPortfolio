import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Esta función actualiza el estado de 'isDesktop'
  const handleResize = () => {
    // Si el ancho de la ventana es mayor que 767px, es un escritorio
    setIsDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    // Lógica para detectar el tamaño de la ventana
    handleResize(); // Llamamos una vez al cargar el componente
    window.addEventListener('resize', handleResize); // Añadimos el oyente para cambios de tamaño

    // Función de limpieza: elimina el oyente cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleThem = () => {
    if (isDarkMode) {
      document.documentElement.classList.toggle('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.toggle('dark');
      setIsDarkMode(true);
    }
  };

  return (
    isDesktop && (
      <button
        onClick={toggleThem}
        className="fixed max-sm:hidden cursor-pointer top-4 right-5 z-50  rounded-full transition-colors duration-600 focus:outline-hidden"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-blue-700" />
        )}
      </button>
    )
  );
};

export default ThemeToggle;
