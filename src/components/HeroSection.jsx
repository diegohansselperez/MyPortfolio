import React from 'react';

import { ChevronsDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center space-y-8"
    >
      <div className="container mx-auto text-center z-10">
        <div className="flex flex-col justify-center">
          <p className="font-normal  opacity-95 text-2xl md:text-3xl text-primary animate-fade-in-delay-1">
            Developer Engineer
          </p>
          <p className="text-[5rem] md:text-[9rem] font-bold bg-gradient-to-r from-[rgb(94,23,235)] via-[#b400a7] to-[#c10000] text-transparent bg-clip-text">
            FullStack
          </p>
        </div>
      </div>
      <div className="container-app flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Diego Hanssel Perez</h2>
        <span className="opacity-80">Desarrollador Full-Stack</span>
      </div>
      <div className=" w-full flex justify-center ">
        <div className=" flex flex-wrap justify-between gap-3 items-center">
          <a
            className="flex justify-between items-center px-2 py-1  social-button"
            href="https://www.linkedin.com/in/hansselperez/"
            target="_blank"
          >
            <Linkedin size={24} />
            <span className="ml-2 font-bold">Linkedin</span>
          </a>

          <a
            className="flex justify-between items-center px-2 py-1  social-button"
            href="#contact"
            target="_blank"
          >
            <Mail size={24} />
            <span className="ml-2 font-bold">Email</span>
          </a>
          <a
            className="flex justify-between items-center px-2 py-1  social-button"
            href="https://github.com/diegohansselperez"
            target="_blank"
          >
            <Github size={24} />
            <span className="ml-2 font-bold ">GitHub</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center absolute bottom-4 left-1/2 -translate-x-1/2 ">
        <a href="" className="flex flex-col justify-center items-center">
          <span className="text-lg font-sm mb-1">View My Work</span>
          <ChevronsDown
            size={24}
            color="rgb(94,23,235, 70%)"
            className="animate-float"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
