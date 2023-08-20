import { Routes, Route } from "react-router-dom";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Proyectos } from "./Proyectos";
import { Skills } from "./Skills";
import { AboutMe } from "../pages/Aboutme.jsx";

export function Home() {
    return (
       <>   
            <Header />
            <Skills />
            <Proyectos />
            <Contact />
            <Footer/>
       </>
    )
}

export default Home