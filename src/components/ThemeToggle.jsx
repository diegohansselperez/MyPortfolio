import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <button onClick={toggleThem}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
