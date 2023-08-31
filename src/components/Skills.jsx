import style from "../styles/Skills.module.css";

export function Skills() {
  return (
    <div id="habilidades" className={style.especialidades}><div className={style.about_info}>
        <h2>Skills</h2>
        <div className={style.divider}></div>
        <p>Resumen de Skill Tech que he utilizado en proyectos hasta el dia de hoy.</p>
      {/*   <p>
          Basicamente hablando sobre mis especialidades/skills son basicas pero
          muy esenciales en cuanto a Desarrollo Web se refiere, me enfoque en
          estas tecnologias por su alta demanda y uso en el mercado del
          desarrollo Front-end. Ademas, de otros programas que no mensiono, ya
          que los use con muy poca frecuencia. Cada dia utilizo estos programas
          en diferentes proyectos sean propios o no, pero siempre desarrollando
          mi logica al momento de tratar de encontrar y solucionar un error en
          el codigo al igual que mejorar el ya existente.
        </p>
        <p>
          Mi inicio en el Desarrollo Web empezo en el 2021, desde este entonces
          me eh enfocado en seguir la escalera que me llevara a ser
          desarrollador Full-Stack en Javascript, al igual que aprender otras
          tecnologias. Empeze en la escuela de Desarrollo Web de Platzi, en
          donde me eh mantenido durante 1 año entero, junto a la documentacion
          oficial de cada programa que uso. Simpre con el temple de aprender lo
          que no entiendo en el momento y no parar de aprender.
        </p> */}
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
      <div className={style.monster}>
        <ul>
          <li>
            <i
              style={{ color: "#e44d26", fontSize: "9rem" }}
              className="bx bxl-html5"
            ></i>
          </li>
          <li>
            <i
              style={{ color: "#1b73ba", fontSize: "9rem" }}
              className="bx bxl-css3"
            ></i>
          </li>
          <li>
            <i
              style={{ color: "#e9ca32", fontSize: "9rem" }}
              className="bx bxl-javascript"
            ></i>
          </li>
          <li>
            <i
              style={{ color: "#00d8ff", fontSize: "9rem" }}
              className="bx bxl-react"
            ></i>
          </li>
          <li>
            <i
              style={{ color: "#de4c36", fontSize: "9rem" }}
              className="bx bxl-git"
            ></i>
          </li>
          <li>
            <i
              style={{ color: "#7611ed", fontSize: "9rem" }}
              className="bx bxl-bootstrap"
            ></i>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
