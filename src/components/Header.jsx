import { Link, NavLink } from 'react-router-dom';
import { SocialItems } from './Submodules';
import style from '../styles/Header.module.css';
import Curriculum from '../pdf/CV Diego Hanssel Perez M2.pdf';

export function Header() {
  return (
    <div className={style.wrapper} id="home_nav">
      <nav className={style.navbar}>
        <div className={style.brand}>
          <h2>
            D<span>HP</span>
          </h2>
        </div>
        <ul className={style.menu}>
          <li>
            <NavLink className={style.activo} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navbar_li} to="/#aboutme" onClick>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navbar_li} to="/#habilidades" onClick>
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navbar_li} to="/#portafolio" onClick>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink className={style.navbar_li} to="/#contact_section" onClick>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className={style.main}>
        <div className={style.info_content}>
          <p>Hola, mi nombre es</p>
          <h1>
            <span>Diego</span> Hanssel Perez
          </h1>
          <p>
            ¡Bienvenido a mi portafolio! Aquí podrás explorar todo lo
            relacionado con mi trayecto profesional como{' '}
            <span>Desarrollador Web Full-Stack</span>. Encontrarás diversos
            proyectos en los que he participado junto a otros desarrolladores.
            Además, adjunto otros proyectos creados en base a mis conocimientos
            previos. ¡No dudes en visitar la sección de contacto para ponerte en
            contacto conmigo{' '}
            <Link
              to="/#contact_section"
              onClick
              className={style.apartado_contact}
            >
              aqui
            </Link>
            !
          </p>
          {/* <Botton  download="Diego_Hanssel_Perez" to="../pdf/Curriculum Developer1-1.pdf" text="Descarga CV"/> */}
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
