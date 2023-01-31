import style from "../styles/Aboutme.module.css"
import { Link } from "react-router-dom";

export function AboutMe() {

  return (
    <> 
    <body>
        <aside className={style.aside_contain}>
          <ul class={style.menu}>
            <div class={style.brand}>
              <h2>
                D<span>CP</span>
              </h2>
            </div>
            <Link className={style.link} to="/">
                <li><i class='bx bx-left-arrow-alt bx-sm'></i>Home</li>
            </Link>
          </ul>
        </aside>
        <main>
        <section className={style.container_section}>
             <div className={style.section_img}>
            </div>
             <section className={style.section_text}>
               <div className={style.title_container}>
                 <p className={style.title}>
                   <span>About Me</span>
                 </p>
               </div>
               <div className={style.divider}></div>
               <div className={style.text_container}>
                 <p>
                   Hola mi nombre es Diego tengo 22 años, soy de Mexico y me
                   encanta la tecnologia, basicamente estoy cumpliendo mi sueño de
                   ser Desarrollador Front-end con JavaScript y sus
                   derivamos en frameworks. Me inspira lo que se
                   puede hacer con estas tecnologias. Tambien soy aficionado al
                   Futbol, me encanta la Musica y practico el Atletismo para
                   despejar la mente.
                 </p>
                 <br />
                 <p>
                   Llegue al desarrollo web atravez de Platzi, fue por primera
                   vez que pude crear mi primera pagina con HTML y CSS, despues
                   me salte a JavaScript que fue una odisea enorme para entender
                   y manipular el DOM, se logro con un primer proyecto. Fue
                   creciendo mis ganas de sobre salir y crecer profesionalmente
                   en esta industria que me decide por ReactJS para ser mi primer
                   framework y Bootstrapt para los estilos.
                 </p>
                 <br />
                 <p>
                   Me considero una persona muy perfecionista al querer llegar a
                   un trabajo bien hecho y me puedo quedar horas frente a un
                   computador a tratar de resolver pequeños errores que se
                   cometen y cambiarlos lo antes posible, me pongo un limite para
                   cumplir con un trabajo nuevo, al igual que corregir errores.
                   Me gusta aprender nuevas tecnologias y foermas de crear
                   productos en la web, asi como darles mantenimiento si es
                   necesario siempre rebisar su codigo.
                 </p>
               </div>
               <article>
                 <div className={style.barra}></div>
                 <div className={style.frase}>
                   <p className={style.pStyle1}>
                    <em>
                     Construye algo que le encante a 100 personas, no solo algo
                     que solo le guste a 1000 personas.</em>
                   </p>
                   <p className={style.pStyle2}>-Brian Chesky</p>
                 </div>
               </article>
             </section>
           </section>
         </main>
    </body>
    </>
  );
};