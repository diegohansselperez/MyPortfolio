import style from '../styles/Proyecto.module.css';
import imagen from '../Imagenes.js';
import { CardProyectsLinks } from './Submodules';

export function Proyectos() {
  return (
    <div id="portafolio" className={style.portafolio}>
      <div className={style.portafolio_headings}>
        <h2>Proyectos</h2>
        <div className={style.divider}></div>
      </div>
      <div className={style.cards_container}>
        <div className={style.card}>
          <div className={style.card_img}>
            <img
              className={style.original}
              src={imagen[0].img1}
              alt={imagen[0].alt}
            />
          </div>
          <div className={style.card_title}>
            <h2>The Literary Corner</h2>
          </div>
          <CardProyectsLinks
            github={'https://github.com/diegohansselperez/PF-Henry-Bookstore/'}
            project={'https://pf-henry-bookstore.vercel.app/'}
          />
        </div>
        <div className={style.card}>
          <div className={style.card_img}>
            <img
              className={style.original}
              src={imagen[1].img2}
              alt={imagen[1].alt}
            />
          </div>
          <div className={style.card_title}>
            <h2>YeardSale</h2>
          </div>
          <CardProyectsLinks
            github={'https://github.com/diegohansselperez/yearsale.github.io'}
            project={'https://diegohansselperez.github.io/yearsale.github.io/'}
          />
        </div>
        <div className={style.card}>
          <div className={style.card_img}>
            <img
              className={style.original}
              src={imagen[3].img4}
              alt={imagen[3].alt}
            />
          </div>
          <div className={style.card_title}>
            <h2>BearBad Studio</h2>
          </div>
          <CardProyectsLinks
            github={
              'https://github.com/diegohansselperez/bearbadstudio.github.io'
            }
            project={
              'https://diegohansselperez.github.io/bearbadstudio.github.io/'
            }
          />
        </div>
        <div className={style.card}>
          <div className={style.card_img}>
            <img
              className={style.original}
              src={imagen[2].img3}
              alt={imagen[2].alt}
            />
          </div>
          <div className={style.card_title}>
            <h2>Homework List</h2>
          </div>
          <CardProyectsLinks
            github={
              'https://github.com/diegohansselperez/homework_list.github.io'
            }
            project={
              'https://diegohansselperez.github.io/homework_list.github.io/'
            }
          />
        </div>
        <div className={style.card}>
          <div className={style.card_img}>
            <img
              className={style.original}
              src={imagen[5].img6}
              alt={imagen[5].alt}
            />
          </div>
          <div className={style.card_title}>
            <h2>Videogames Henry</h2>
          </div>
          <CardProyectsLinks
            github={'https://github.com/diegohansselperez/PI_Henry'}
            project={''}
          />
        </div>
      </div>
    </div>
  );
  );
}

