import style from '../styles/Proyecto.module.css'
import imagen from '../Imagenes.js'
import { Botton } from './Submodules';

export function Proyectos(){
    return (
        <div id='portafolio' className={style.portafolio}>
        <div className={style.portafolio_headings}>
            <h2>Proyectos</h2>
            <div className={style.divider}></div>
        </div>
        <div className={style.cards_container}>
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[0].img1} alt={imagen[0].alt} />
                </div>
                <div className={style.card_title}>
                    <h2>The Literary Corner</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://diegohansselperez.github.io/batatabit.mobile/" target="_blank">
                        <i className="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
                <div className={style.project_details_content}>
                    <Botton text='proyect details' link="https://pf-henry-bookstore.vercel.app/"/>
                </div>    
            </div>
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[1].img2} alt={imagen[1].alt}/>
                </div>
                <div className={style.card_title}>
                    <h2>YeardSale</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/yearsale.github.io" target="_blank">
                        <i className="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
                <div className={style.project_details_content}>
                    <Botton text='proyect details' />
                </div>    
            </div> 
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[3].img4} alt={imagen[3].alt} />
                </div>
                <div className={style.card_title}>
                    <h2>BearBad Studio</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/batatabit.mobile" target="_blank">
                        <i className="fa-solid fa-code fa-lg"></i>
                    </a>    
                </div>
                <div className={style.project_details_content}>
                        <Botton text='proyect details' link='https://diegohansselperez.github.io/bearbadstudio.github.io/' />
                </div>  
            </div>
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[2].img3} alt={imagen[2].alt} />
                </div>
                <div className={style.card_title}>
                    <h2>Homework List</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/homework_list.github.io" target="_blank">
                        <i className="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
                <div className={style.project_details_content}>
                    <Botton text='proyect details' link='https://diegohansselperez.github.io/homework_list.github.io/' />
                </div>    
            </div>
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[5].img6} alt={imagen[5].alt} />
                </div>
                <div className={style.card_title}>
                    <h2>Videogames Henry</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/PI_Henry" target="_blank">
                        <i className="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
                <div className={style.project_details_content}>
                    {/* <Botton text='proyect details' link='https://diegohansselperez.github.io/homework_list.github.io/' /> */}
                </div>    
            </div>
           
      
        </div>
    </div>
    );
}