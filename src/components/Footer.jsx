import { Link } from 'react-router-dom';

import { SocialItems } from './Submodules';
import { FileUser, Hammer, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="p-8 w-full  grid grid-cols-2  items-center bg-[hsl(var(--card))] bg-conic-60 ">
      <div className="flex flex-wrap justify-center ">
        <p className="text-sm text-[hsl(var(--foreground))] ">
          <span className="text-[hsl(var(--primary))]">
            &copy; {new Date().getFullYear()}
          </span>{' '}
          Disign & Develope for{' '}
          <span className="text-[hsl(var(--primary))] underline">
            Diego Hanssel Perez.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center  text-start pt-4">
        <div className="text-start">
          <a
            href="#projects"
            className="flex gap-2 items-center text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] text-center text-md"
          >
            <Terminal size={20} className="text-[hsl(var(--primary))]" />
            Projects
          </a>
          <a
            href="#aboutme"
            className="flex gap-2 items-center text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] text-center text-md"
          >
            <FileUser size={20} className="text-[hsl(var(--primary))]" /> About
            Me
          </a>
          <a
            href="#skills"
            className="flex gap-2 items-center text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))] text-center text-md"
          >
            {' '}
            <Hammer size={20} className="text-[hsl(var(--primary))]" />
            Skills
          </a>
        </div>
      </div>
    </footer>
  );
}
