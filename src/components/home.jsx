import { Contact } from "./Contact";
import { Footer } from "./footer";
import { Header } from "./Header";
import { Proyectos } from "./Proyectos";
import { Skills } from "./Skills";

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