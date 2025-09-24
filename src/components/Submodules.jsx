import { Github, InboxIcon, Linkedin, Mail } from 'lucide-react';

export function Botton(props) {
  return (
    <a onClick target="_blank" href={props.link}>
      {props.text}
    </a>
  );
}

export function SocialItems() {
  return (
    <div className=" flex flex-wrap justify-between gap-3 items-center">
      <a
        className="flex justify-between items-center px-2 py-1 gradient-border-social"
        href="https://www.linkedin.com/in/hansselperez/"
        target="_blank"
      >
        <Linkedin size={24} />
        <span className="ml-2 font-bold">Linkedin</span>
      </a>

      <a
        className="flex justify-between items-center px-2 py-1 gradient-border-social"
        href="#contact"
        target="_blank"
      >
        <Mail size={24} />
        <span className="ml-2 font-bold">Email</span>
      </a>
      <a
        className="flex justify-between items-center px-2 py-1 gradient-border-social dark:text-glow"
        href="https://github.com/diegohansselperez"
        target="_blank"
      >
        <Github size={24} />
        <span className="ml-2 font-bold ">GitHub</span>
      </a>
    </div>
  );
}

export function CardProyectsLinks({ github, project }) {
  return (
    <>
      <div className="">
        <a href="https://github.com/diegohansselperez" target="_blank">
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <a href={github} target="_blank">
          <i className="fa-solid fa-code fa-lg"></i>
        </a>
      </div>
      <div className="">
        <Botton text="proyect details" link={project} />
      </div>{' '}
    </>
  );
}
