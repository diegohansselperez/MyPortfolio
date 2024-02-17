import style from '../styles/Skills.module.css';

export function Skills() {
  return (
    <div id="habilidades" className={style.especialidades}>
      <div className={style.about_info}>
        <h2>Tech-Skills</h2>
        <div className={style.divider}></div>
        <p>
          Resumen de frameworks y lenguajes que he utilizado en proyectos
          reales.
        </p>
      </div>
      <div className={style.contain_icons}>
        <ul>
          <li>
            <i className="bx bxl-html5"></i>
          </li>
          <li>
            <i className="bx bxl-css3"></i>
          </li>
          <li>
            <i className="bx bxl-javascript"></i>
          </li>
          <li>
            <i className="bx bxl-react"></i>
          </li>
        </ul>
        <ul>
          <li>
            <i className="bx bxl-nodejs"></i>
          </li>
          <li>
            <i className="bx bxl-postgresql"></i>
          </li>

          <li>
            <i className="bx bxl-redux"></i>
          </li>
          <li>
            <i className="bx bxl-typescript"></i>
          </li>
        </ul>
        <ul>
          <li>
            <i className="bx bxl-tailwind-css"></i>
          </li>
          <li>
            <i className="bx bxl-mongodb"></i>
          </li>
          <li>
            <i className="bx bxl-git"></i>
          </li>
          <li className={style.express}>express</li>
        </ul>
      </div>
    </div>
  );
}
