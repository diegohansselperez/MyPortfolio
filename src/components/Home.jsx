import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Proyectos } from "./Proyectos";
import { Skills } from "./Skills";

export function Home() {
    return (
       <>   
            <Header />
            <AboutMe />
            <Skills />
            <Proyectos />
            <Contact />
            <Footer/>
       </>
    )
}

export default Home