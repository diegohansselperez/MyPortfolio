import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SocialItems } from './Submodules';
import style from '../styles/Header.module.css';
import Curriculum from '../pdf/CV Diego Hanssel Perez M2.pdf';
import DroppToggle from '../hooks/DroppToggle';
import MenuBar from '../hooks/MenuBar';

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      const width = window.innerWidth;
      if (width < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <div className={style.wrapper} id="home_nav">
      <nav className={style.navbar}>
        <div className={style.brand}>
          <h2>
            D<span>HP</span>
          </h2>
        </div>

        {isMobile ? <DroppToggle /> : <MenuBar />}
      </nav>

      <main className={style.main}>
        <div className={style.info_content}>
          <p>Hola, mi nombre es</p>
          <h1>
            <span>Diego</span> Hanssel Perez
          </h1>
          <p>
            ¡Bienvenido a mi portafolio! Explora mi trayecto como{' '}
            <span>Desarrollador Web Full-Stack</span>. Descubre proyectos en los
            que colaboré y otros basados en mis conocimientos previos.{' '}
            <Link
              to="/#contact_section"
              onClick
              className={style.apartado_contact}
            >
              Contactame
            </Link>
            .
          </p>

          <div className={style.divCv}>
            <a className={style.boton_download} href={Curriculum} download>
              Descargar CV
            </a>
          </div>
          <SocialItems />
        </div>
        <div className={style.fotoperfil}></div>
      </main>
    </div>
  );
}
