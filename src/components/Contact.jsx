import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
} from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact_section"
      className="py-24 px-4 relative bg-[hsl(var(--secondary))/0.3]"
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
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-6b ">Contact Information</h3>
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
        {/* Formulario de Contacto */}
        <div className="pt-8 text-center">
          <h3 className="font-medium mb-4">Conect with Me</h3>
          <div className="flex space-x-4 justify-center ">
            <a
              href=""
              className="transition-all duration-200 hover:text-[hsl(var(--primary))] font-semibold"
              target="_blank"
            >
              <Facebook />
            </a>
            <a href="">
              <Linkedin />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="bg-[hsl(var(--card))]">
          <h3>Send a Message</h3>
        </div>
      </div>
    </section>
  );
}
{
  /* <form
              action="https://formsubmit.co/diegohansselp24@gmail.com"
              method="POST"
              className=""
            >
              <label htmlFor="name">
                <input required name="name" type="text" placeholder="Nombre" />
              </label>
              <label htmlFor="email">
                <input required name="email" type="email" placeholder="Email" />
              </label>
              <label htmlFor="comment">
                <textarea
                  name="comment"
                  required
                  placeholder="Escribe un mensaje..."
                  rows="10"
                  style={{
                    resize: 'none',
                    height: '150px',
                    fontFamily: 'Helvetica',
                  }}
                ></textarea>
              </label>
              <div>
                <input className="" type="submit" />
                <input type="hidden" name="_subject" value="Mi Portfolio" />
              </div>
            </form> */
}
