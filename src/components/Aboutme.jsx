import style from "../styles/Aboutme.module.css";


export function AboutMe() {
  return (
    <>
      <div id="aboutme" className={style.containerAbout}>
        
      
          <section className={style.container_section}>
            {/* <div className={style.section_img}></div> */}
            <section className={style.section_text}>
              <div className={style.title_container}>
                <p className={style.title}>
                  <span>About Me</span>
                </p>
              </div>
              <div className={style.divider}></div>
              <div className={style.text_container}>
                <p>
                  ¡Hola! Soy Diego, un Desarrollador Full-Stack apasionado por
                  la tecnología. Mi experiencia abarca una variedad de
                  frameworks y herramientas, como HTML, CSS, JavaScript, React,
                  Redux, Bootstrap, Node, MongoDB y PostgreSQL. He estado
                  aprendiendo programación en Platzi durante más de un año, una
                  destacada escuela de programación en LATAM.
                </p>

                <p>
                  Adquiri mas experiencia durante mis estudios en el bootcamp de
                  SoyHenry💛, donde durante 4 meses tuve la oportunidad de
                  compartir conocimientos con muchos estudiantes y profesores.
                  La enseñanza fue constante y exigente, lo cual me permitió
                  adquirir sólidos fundamentos en Javascript Avanzado, React,
                  Express, PostgresSQL, Sequelize y Git en mi proyecto final.
                </p>
                <p>
                  Mi enfoque en el trabajo es constante y pulcro, me encanta
                  colaborar y compartir ideas con otros para un aprendizaje en
                  equipo exitoso. Además, tengo habilidades en comunicación
                  efectiva, liderazgo, trabajo en equipo y motivación.
                
                  Soy perfeccionista por naturaleza, lo que me lleva a dedicar
                  tiempo a resolver errores y mejorar constantemente. Me
                  apasiona aprender nuevas tecnologías y formas de crear
                  productos web, así como mantener y revisar el código
                  existente.
                </p>
              </div>
              <article>
                <div className={style.barra}></div>
                <div className={style.frase}>
                  <p className={style.pStyle1}>
                    <em>
                      Construye algo que le encante a 100 personas, no solo algo
                      que solo le guste a 1000 personas.
                    </em>
                  </p>
                  <p className={style.pStyle2}>-Brian Chesky</p>
                </div>
              </article>
            </section>
          </section>
        
      </div>
    </>
  );
}
