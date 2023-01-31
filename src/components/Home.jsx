import { Routes, Route } from "react-router-dom";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Proyectos } from "./Proyectos";
import { Skills } from "./Skills";

export function Home() {
    return (
       <>   <Routes>
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
            <Header />
            <Skills />
            <Proyectos />
            <Contact />
            <Footer/>
       </>
    )
}

export default Home