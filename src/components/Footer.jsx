import { Link } from 'react-router-dom';
import style from '../styles/Footer.module.css';
import { SocialItems } from './Submodules';

export function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer_content}>
          <h5>Diego Hanssel Cabrales Perez</h5>
          <h5>Desarrollador Web Full-Stack</h5>
        </div>
        <SocialItems />
        <div>
          <Link className={style.hacia_arriba} to="/#home_nav" onClick>
            Ir al Comienzo
          </Link>
        </div>
      </footer>
    </>
  );
}
