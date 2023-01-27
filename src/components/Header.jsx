import { Link, NavLink } from "react-router-dom";
import { Botton, SocialItems } from "./Submodules";
import style from "../styles/header.module.css";
// import { Skills } from "./Skills";
import Curriculum from "../pdf/Diego_Hanssel_Perez.pdf"

export function Header() {
  return (
      <div id={style.wrapper}>
        <header id="home_nav">
          <nav className={style.navbar}>
            <div className={style.brand}>
              <h2>
                D<span>CP</span>
              </h2>
            </div>
            <ul className={style.menu}>
              <li>
                <NavLink exact className={style.activo} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact className={style.navbar_li} to="/aboutme">
                  About me
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
        </header>
        <main className={style.main}>
        <div className={style.info_content}>
          <p>Hola, mi nombre es</p>
          <h1>
            <span>Diego</span> Cabrales Perez
          </h1>
          <p>
            Bienvenido a mi Portfolio, aqui podras encontrar todo lo relacionado
            a mi trayacto Profesional como <span>Desarrollador Web</span> y{" "}
            <span>Front-end Developer</span>, diferentes proyectos en los que he
            participado con otros desarrolladores ,adjunto otros proyectos creados en base a mis
            conocimientos previos. Tambien tienes el apartado para contactarme{" "}
            <Link to="/#contact_section" onClick className={style.apartado_contact}>
              aqui.
            </Link>
          </p>
          {/* <Botton  download="Diego_Hanssel_Perez" to="../pdf/Curriculum Developer1-1.pdf" text="Descarga CV"/> */}
          <div className={style.divCv} >
            <a className={style.boton_download} href={Curriculum} download>Descargar CV</a>
          </div>
          <SocialItems />
        </div>
        <div class={style.guitarra}></div>
      </main>
      </div>
  );
}
