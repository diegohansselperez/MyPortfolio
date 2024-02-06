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

        {/* <h2>Colocar imagenes de las tecnologias aprendidas</h2>
        <ul className={style.list_programs}>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>Github</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Vite</li>
        </ul> */}
      </div>
      <div className={style.contain_icons}>
        <ul>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-html5"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-css3"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-javascript"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-react"
            ></i>
          </li>
        </ul>
        <ul>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-nodejs"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-postgresql"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-typescript"
            ></i>
          </li>

          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-redux"
            ></i>
          </li>
        </ul>
        <ul>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-tailwind-css"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-mongodb"
            ></i>
          </li>
          <li>
            <i
              style={{ color: '#7611ed', fontSize: '9rem' }}
              className="bx bxl-git"
            ></i>
          </li>
          <li style={{ color: '#7611ed', fontSize: '2.1rem' }}>express</li>
        </ul>
      </div>
    </div>
  );
}
