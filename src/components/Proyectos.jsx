import style from '../styles/Proyecto.module.css'
import imagen from '../Imegenes.js'
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
                    <h2>Batata-Bit</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://diegohansselperez.github.io/batatabit.mobile/">
                        <i class="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
                <div className={style.project_details_content}>
                    <Botton text='proyect details' to="https://www.google.com/"/>
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
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/yearsale.github.io">
                        <i class="fa-solid fa-code fa-lg"></i>
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
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/batatabit.mobile">
                        <i class="fa-solid fa-code fa-lg"></i>
                    </a>    
                </div>
                <div className={style.project_details_content}>
                        <Botton text='proyect details' />
                </div>  
            </div>
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[2].img3} alt={imagen[2].alt} />
                </div>
                <div className={style.card_title}>
                    <h2>HomeWork-List.io</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://github.com/diegohansselperez/homework_list.github.io">
                        <i class="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
                <div className={style.project_details_content}>
                    <Botton text='proyect details' />
                </div>    
            </div>
            <div className={style.card}>
                <div className={style.card_img}>
                    <img className={style.original} src={imagen[4].img5} alt={imagen[4].alt} />
                </div>
                <div className={style.card_title}>
                    <h2>My Porfolio</h2>
                </div>
                <div className={style.card_projects_links}>
                    <a href="https://github.com/diegohansselperez" target="_blank">
                        <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="#">
                        <i class="fa-solid fa-code fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}