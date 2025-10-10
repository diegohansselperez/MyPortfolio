import { Briefcase, Code, FileUser, User } from 'lucide-react';
import imageMe from '../images/picture_me_profolio.jpg';
import { NavLink } from 'react-router-dom';

export function AboutMe() {
  return (
    <>
      <section id="aboutme" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-purple-600">Me</span>
          </h2>{' '}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center">
              <div className=" w-1/2 h-auto flex justify-center items-center  mx-auto rounded-full">
                <img
                  className="w-full h-auto rounded-full transition-transform border-2 border-[hsl(var(--primary))] duration-500 hover:scale-105"
                  src={imageMe}
                  alt="photograpy_me"
                />
              </div>
              <h3 className="text-2xl font-semibold ">
                Full Stack Developer & Sofware Enginner
              </h3>
              <p className="text-muted-foreground">
                I'm Full-Stack Developer 💻🚀. Currently, I have proven
                experience with frameworks and tools such as HTML, CSS,
                Javascript, Typescript, React, Redux,TailwindCSS, Bootstrap,
                Node.js, MongoDB, and PostgreSQL.
              </p>
              <p className="text-muted-foreground">
                I'm a professional who is passionate about maintaining a clean
                and consistent workflow on projects. I enjoy collaborating with
                the team🫂, sharing ideas, and discussing how I can contribute
                to ensure we all stay on an optimal learning path. I have
                experience in effective communication, leadership, teamwork, and
                stress tolerance. I also have the right attitude and skills to
                motivate my colleagues💪.
              </p>{' '}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center">
                <a
                  href="#contact"
                  className="flex items-center justify-center cosmic-button"
                >
                  <span>Get In Touch</span>
                </a>
                <NavLink
                  to={'/professional_pdf'}
                  className="
       
        flex items-center justify-center gap-x-2 px-6 py-2 
        rounded-[10px] border-2 border-[hsl(var(--primary))]/80 
        text-[hsl(var(--primary))]/80 font-semibold shadow-md

        
        transition-all duration-300 ease-in-out

       
        
        hover:shadow-lg 
        hover:-translate-y-1
    "
                >
                  <FileUser size={24} />
                  <span>Watch CV</span>
                </NavLink>
              </div>
            </div>
            {/* Skills en Tecnlololgia */}
            <div className="grid grid-col-1 gap-6">
              <article className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gray-600/10 ">
                    <Code size={24} className="text-[hsl(var(--primary))] " />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-lg">Web Develoment</h4>
                    <p className="text-muted-foreground">
                      Responsive web and mobile application development using
                      the latest methodologies.
                    </p>
                  </div>
                </div>
              </article>
              <article className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gray-600/10 ">
                    <User size={24} className="text-[hsl(var(--primary))] " />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-lg">UX/UI Desingn</h4>
                    <p className="text-muted-foreground">
                      Transforming ideas into seamless, user-centric interfaces
                      and fluid web experiences.
                    </p>
                  </div>
                </div>
              </article>
              <article className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gray-600/10 ">
                    <Briefcase
                      size={24}
                      className="text-[hsl(var(--primary))] "
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-lg">Project Management</h4>
                    <p className="text-muted-foreground">
                      Aligning the project vision with user needs to deliver
                      exceptional digital products.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
