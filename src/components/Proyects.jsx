import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { meProyects } from '../proyects.js';

function Proyects() {
  return (
    <section id="projects" className="py-24 px-4 h-auto relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyects <span className="text-[hsl(var(--primary))]">Finished</span>{' '}
        </h2>

        <p className="text-muted-[hsl(var(--foreground))] text-center mb-12 max-w-2xl mx-auto ">
          This section features projects where I have actively contributed, both
          individually and collaboratively.
        </p>
        {/* Cards Proyects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {meProyects &&
            meProyects.map((project, key) => (
              <article
                key={key}
                className="group flex flex-col pb-2 justify-between bg-[hsla(var(--card))] rounded-lg overflow-hidden shadow-2xl text-center"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-6 px-6 pb-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((proyect, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs font-medium border rounded-2xl bg-[hsl(var(--primary))]/20 text-[hsl(var(--social-foreground))] "
                      >
                        {proyect}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl text-[hsl(var(--primary))] font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-[hsl(var(--foreground))] text-sm mb-4 px-4">
                  {project.describe}
                </p>
                <div className="flex justify-start items-end">
                  <div className="flex items-end ">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className={`text-sm ${
                        project.demoUrl === '/'
                          ? 'pointer-events-none cursor-default text-[hsl(var(--foreground))]/70'
                          : ''
                      }  text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition duration-300 flex items-center gap-1 mb-2 ml-2`}
                    >
                      <ExternalLink size={24} />
                      <span>Web Site</span>
                    </a>
                    <a
                      target="_blank"
                      className="text-sm  text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition duration-300 flex items-center gap-1 mb-2 ml-2"
                      href={project.githubUrl}
                    >
                      <Github size={24} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/diegohansselperez"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2  "
          >
            Check My Github <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
