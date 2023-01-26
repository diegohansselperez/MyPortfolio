import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header } from './components/Header';
// import { Proyectos } from './components/Proyectos';
//import { Skills } from "./components/Skills";
// import { Contact } from './components/Contact';
// import { Footer } from './components/footer';
import { Home } from "./components/home";
import { AboutMe } from "./pages/aboutMe";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* <body>
          <div id="wrapper">
              
              <main class="main">
                  <div class="info_content">
                      <p>Hola, mi nombre es</p>
                      <h1><span>Diego</span> Cabrales Perez</h1>
                      <p>Bienvenido a mi Portfolio, aqui podras encontrar todo lo relacionado a mi trayacto Profesional como <span>Desarrollador Web</span> y <span>Front-end Developer</span>, diferentes proyectos en los que he participado con otros desarrolladores y creados en base a mis conocimientos previos.Tambien tienes el apartado para contactarme <a href="#contact-section" class="apartado-contact">aqui</a>.</p>
                      <div id="main-network" class="social-network">
                          <a href="#" target="_blank"><i class="fa-brands fa-linkedin 
                          fa-2x"></i></a>
                          <a href="#" target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
                          <a href="#" target="_blank"><i class="fa-brands fa-instagram-square fa-2x"></i></a>
                      </div>
                      <!-- <a download="" href="#">
                          <button class="download-cv">Download CV</button>
                      </a> --> 
                  </div>
                  <div class="guitarra"></div>
              </main>
          </div>
          <div class="especialidades">
              <div class="monster">
                  <ul>
                      <li><i class='bx bxl-html5'></i></li>
                      <li><i class='bx bxl-css3'></i></li>
                      <li><i class='bx bxl-javascript'></i></li>
                      <li><i class='bx bxl-react'></i></li>
                      <li><i class='bx bxl-git'></i></li>
                      <li><i class='bx bxl-bootstrap'></i></li>
                  </ul>
              </div>
              <div class="about-info">
                  <h2>Especialidades</h2>
                  <div class="divider"></div>
                      <p>Basicamente hablando sobre mis especialidades/skills son basicas pero muy esenciales en cuanto a Desarrollo Web se refiere, me enfoque en estas tecnologias por su alta demanda y uso en el mercado del desarrollo Front-end. Ademas, de otros programas no que coloque en los cuales eh tocado poco pero con cautela. Cada dia las utilizo en diferentes proyectos sean propios o no, pero siempre desarrollando mi logica al momento de tratar de encontrar y solucionar un error en el codigo al igual que mejorar el ya existente.</p>
                      <p>Condimentum habitant sed sapien parturient habitasse fermentum consequat venenatis auctor, laoreet non sem faucibus mus class integer suscipit, felis velit posuere neque orci commodo porta et. Habitasse torquent molestie augue leo at feugiat quam eleifend eget suspendisse,a lacinia curabitur mattis himenaeos nibh nascetur porttitor tellus dui vel, platea volutpat potenti netus hac curae interdum tempus fames. Pulvinar aliquam neque sed vitae parturient sollicitudin aenean natoque turpis, felis suspendisse tortor arcu tincidunt diam eros litora faucibus, ante mus mauris sagittis vestibulum aliquet quam sociosqu.</p>
                  <button class="download-rm">Read more</button>
              </div> 
          </div>
          <div class="portafolio">
              <div class="portafolio-headings">
                  <h2>My Portafolio</h2>
                  <div class="divider"></div>
              </div>
              <div class="cards-container">
                  <div class="card">
                      <div class="card_img">
                          <img class="original" src="./img/coffee.png">
                      </div>
                      <div class="card_title">
                          <h2>Project Discription</h2>
                      </div>
                      <div class="card_projects-links">
                          <a href="https://github.com/Hansselp24" target="_blank">
                              <i class="fa-brands fa-github fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-code fa-lg"></i>
                          </a>
                      </div>
                      <div class="project-details-content">
                          <button class="project-details">
                              <a href="#">Project details</a>
                          </button>
                      </div>    
                  </div>
                  <div class="card">
                      <div class="card_img">
                          <img class="original" src="./img/coffee.png">
                      </div>
                      <div class="card_title">
                          <h2>Project Discription</h2>
                      </div>
                      <div class="card_projects-links">
                          <a href="https://github.com/Hansselp24" target="_blank">
                              <i class="fa-brands fa-github fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-code fa-lg"></i>
                          </a>
                      </div>
                      <div class="project-details-content">
                          <button class="project-details">
                              <a href="#">Project details</a>
                          </button>
                      </div>    
                  </div>
                  <div class="card">
                      <div class="card_img">
                          <img class="original" src="./img/coffee.png">
                      </div>
                      <div class="card_title">
                          <h2>Project Discription</h2>
                      </div>
                      <div class="card_projects-links">
                          <a href="https://github.com/Hansselp24" target="_blank">
                              <i class="fa-brands fa-github fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-code fa-lg"></i>
                          </a>
                      </div>
                      <div class="project-details-content">
                          <button class="project-details">
                              <a href="#">Project details</a>
                          </button>
                      </div>    
                  </div>
                  <div class="card">
                      <div class="card_img">
                          <img className='original' src="./img/coffee.png">
                      </div>
                      <div class="card_title">
                          <h2>Project Discription</h2>
                      </div>
                      <div class="card_projects-links">
                          <a href="https://github.com/Hansselp24" target="_blank">
                              <i class="fa-brands fa-github fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-code fa-lg"></i>
                          </a>
                      </div>
                      <div class="project-details-content">
                          <button class="project-details">
                              <a href="#">Project details</a>
                          </button>
                      </div>    
                  </div>
                  <div class="card">
                      <div class="card_img">
                          <img class="original" src="./img/coffee.png">
                      </div>
                      <div class="card_title">
                          <h2>Project Discription</h2>
                      </div>
                      <div class="card_projects-links">
                          <a href="https://github.com/Hansselp24" target="_blank">
                              <i class="fa-brands fa-github fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-code fa-lg"></i>
                          </a>
                      </div>
                      <div class="project-details-content">
                          <button class="project-details">
                              <a href="#">Project details</a>
                          </button>
                      </div>    
                  </div>
                  <div class="card">
                      <div class="card_img">
                          <img class="original" src="./img/coffee.png">
                      </div>
                      <div class="card_title">
                          <h2>Project Discription</h2>
                      </div>
                      <div class="card_projects-links">
                          <a href="https://github.com/Hansselp24" target="_blank">
                              <i class="fa-brands fa-github fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-earth-europe fa-lg"></i>
                          </a>
                          <a href="#">
                              <i class="fa-solid fa-code fa-lg"></i>
                          </a>
                      </div>
                      <div class="project-details-content">
                          <button class="project-details">
                              <a href="#">Project details</a>
                          </button>
                      </div>    
                  </div>
              </div>
          </div>
          <div className='contact-section'>
              <div class="contact-headings">
                  <h2>Contacto</h2>
                  <div class="divider"></div>
              </div>
              <div className='contact-form'>
                  <h4>Enviame un mensage...</h4>
                  <form className='form'>
                      <input type="text" placeholder="Nombre">
                      <input type="email" placeholder="Email"> 
                      <textarea placeholder="Place your message here..." cols="30" rows="10"></textarea>     
                      <button type="submit" class="btn-submit">Enviar Mensaje</button>
                  </form>
              </div>
          </div>
          <footer class="footer">
              <div class="footer-content">
                  <h5>Diego Hanssel Cabrales Perez</h5>
                  <h5>Web Developer|Desarrollador Web</h5>
              </div>
              <div class="social-network">
                  <a href="#"><i class="fa-brands fa-linkedin 
                  fa-2x"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram-square fa-2x"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter-square fa-2x"></i></a>   
              </div>
              <div>
                  <a class="hacia_arriba" href="#wrapper">Ir a el Comienzo</a>  
              </div> 
          </footer>
      </body> */
