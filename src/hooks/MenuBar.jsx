import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/MenuBar.module.css';

const MenuBar = () => {
  return (
    <>
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
    </>
  );
};

export default MenuBar;
