import style from '../styles/Submodule.module.css';
import styleP from '../styles/Proyecto.module.css';

export function Botton(props) {
  return (
    <a onClick target="_blank" href={props.link} className={style.btn}>
      {props.text}
    </a>
  );
}

export function SocialItems() {
  return (
    <div className={style.social_network}>
      <a href="https://www.linkedin.com/in/hansselperez/" target="_blank">
        <i
          className="fa-brands fa-linkedin 
            fa-2x"
        ></i>
      </a>
      <a href="https://www.instagram.com/diegohanssel_perez/" target="_blank">
        <i className="fa-brands fa-instagram-square fa-2x"></i>
      </a>
      <a href="https://github.com/diegohansselperez" target="_blank">
        <i className="fa-brands fa-github-square fa-2x"></i>
      </a>
    </div>
  );
}

export function CardProyectsLinks({ github, project }) {
  return (
    <>
      <div className={styleP.card_projects_links}>
        <a href="https://github.com/diegohansselperez" target="_blank">
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <a href={github} target="_blank">
          <i className="fa-solid fa-code fa-lg"></i>
        </a>
      </div>
      <div className={styleP.project_details_content}>
        <Botton text="proyect details" link={project} />
      </div>{' '}
    </>
  );
}

// exports = {
//   CardProyectsLinks,
//   SocialItems,
//   Botton,
// };
