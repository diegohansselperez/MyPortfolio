import { Link } from 'react-router-dom'
import style from '../styles/Submodule.module.css'

export function Botton(props) {
    return (
        <Link onClick target="_blank" to={props.to} className={style.btn} >
            {props.text}
        </Link>
    )
}

export function SocialItems() {
    return (
        <div className={style.social_network}>
            <a href="https://www.linkedin.com/in/hansselperez/" target="_blank"><i className="fa-brands fa-linkedin 
            fa-2x"></i></a>
            <a href="https://www.instagram.com/diegohanssel_perez/" target="_blank"><i className="fa-brands fa-instagram-square fa-2x"></i></a>
            <a href="https://twitter.com/HansselPerez4?t=4CC3Nm_ANvTOdng0d1DLTg&s=03" target="_blank"><i className="fa-brands fa-twitter-square fa-2x"></i></a>   
        </div>
    )
}