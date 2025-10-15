import {
  Facebook,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative  bg-[hsl(var(--secondary))/0.3]"
    >
      <div className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-[hsl(var(--primary))]">Me</span>
        </h2>
        <p className="text-center text-muted-[hsl(var(--foreground))] mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
      </div>
      {/* ------------------Container------------------  */}
      <div className="flex flex-col lg:w-7xl items-center lg:grid lg:grid-cols-3 ">
        {/* -------------Contact Information------------- */}
        <div className="space-y-4 p-5 ">
          <h3 className="text-2xl text-center font-semibold mb-6 ">
            Contact Information
          </h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-600/10">
                <Mail className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Email</h4>
                <a
                  href="mailto:diegohansselp24@gmail.com"
                  className="text-[hsl(var(--text-gray))] transition-all duration-200 hover:text-[hsl(var(--primary))] font-semibold"
                >
                  diegohansselp24@gmail.com{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-600/10">
                <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Phone</h4>
                <a
                  href="tel:+526131051135"
                  className="text-[hsl(var(--text-gray))] transition-all duration-200 hover:text-[hsl(var(--primary))] font-semibold"
                >
                  +52 (613) 105-1135
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-gray-600/10">
                <MapPinned className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Location</h4>
                <a className="text-[hsl(var(--text-gray))] transition-all duration-200 hover:text-[hsl(var(--primary))] font-semibold">
                  Cd.Constitucion, BCS, Mexico
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------Redes Sociales------------------ */}
        <div className="p-5 pb-8 text-center  ">
          <h3 className="text-2xl font-semibold mb-6">Conect with Me</h3>
          <div className="flex md:flex-col md:space-y-5 md:items-center space-x-4 justify-center ">
            <a
              href=""
              className="transition-all flex items-center text-[hsl(var(--foreground))]/70 duration-200 hover:text-[hsl(var(--primary))] font-semibold"
              target="_blank"
            >
              <Facebook size={27} />
              <span className="hidden md:block">/diegohansselperez</span>
            </a>
            <a
              href=""
              className="transition-all flex items-center gap-2 duration-200 text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] font-semibold md:mb-5"
              target="_blank"
            >
              <Linkedin size={27} />
              <span className="hidden md:block">/hansselperez/</span>
            </a>
            <a
              href=""
              className="transition-all flex items-center duration-200 text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--primary))] font-semibold"
              target="_blank"
            >
              <Twitter size={27} />
              <span className="hidden md:block">@HansselPerez24</span>
            </a>
          </div>
        </div>
        {/* ------------Formulario de Contacto---------------- */}
        <div className="w-full md:w-lg bg-[hsl(var(--card))]  rounded-lg shadow-xs p-5">
          <h3 className="text-2xl text-center font-semibold mb-6">
            Contact to my Email
          </h3>
          <form
            action="https://formsubmit.co/diegohansselp24@gmail.com"
            method="POST"
            className="space-y-8"
          >
            <article>
              <label htmlFor="name">
                <input
                  className="w-full text-[18px] placeholder:text-[hsl(var(--text-gray))] px-4 py-3 rounded-md border border-input bg-[hsl(var(--background))] focus:outline-hidden focus:ring-2 focus:ring-[hsl(var(--primary))] "
                  required
                  id="name"
                  name="name"
                  type="text"
                  maxLength={40}
                  placeholder="your name..."
                />
              </label>
            </article>
            <article>
              <label htmlFor="email">
                <input
                  id="email"
                  className="w-full placeholder:text-[hsl(var(--text-gray))] px-4 py-3 rounded-md border border-input bg-[hsl(var(--background))] focus:outline-hidden focus:ring-2 focus:ring-[hsl(var(--primary))] "
                  required
                  name="email"
                  maxLength={35}
                  type="email"
                  placeholder="example123@gmail.com"
                />
              </label>
            </article>
            <article>
              <label htmlFor="comment">
                <textarea
                  id="comment"
                  className="w-full placeholder:text-[hsl(var(--text-gray))] px-4 py-3 rounded-md border border-input bg-[hsl(var(--background))] focus:outline-hidden focus:ring-2 focus:ring-[hsl(var(--primary))] "
                  name="comment"
                  required
                  type="text"
                  placeholder="write your message..."
                  rows="10"
                  style={{
                    resize: 'none',
                    height: '150px',
                  }}
                ></textarea>
              </label>
            </article>

            <div>
              <button
                className="cosmic-button w-full flex justify-center items-center gap-2"
                type="submit"
              >
                Send Message <Send size={20} />
              </button>

              <input type="hidden" name="_subject" value="Mi Portfolio" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
