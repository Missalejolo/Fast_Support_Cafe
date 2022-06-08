import logo from './logofsc.svg';
import alcance from './alcance.png';
import mision from './mision.png';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <header className="App-header" >
        <div><img src={logo} className="App-logo" alt="logo"/></div>
        <div class="box2"><Link to="/">Inicio</Link></div>
        <nav>
          <ul id="menu">
          <li><a>Ayudas de optimización</a> 
            <ul>
              <li><Link to="desfragmentaciondisco">Desfragmentación de disco</Link></li>
              <li><a href="">Texto de Ejemplo</a></li>
              <li><a href="">Texto de Ejemplo</a></li>
            </ul>  
          </li>
          </ul>
        </nav>
        <div class="box3">Fast Support Café</div>
      </header>
      <body>
        <div className="aboutus">
        Fast Support Café es un proyecto desarrollado por estudiantes del 
        Politécnico Colombiano Jaime Isaza Cadavid con el fin de mejorar la 
        vida útil de equipos tecnológicos ofreciendo opciones para facilitar 
        el mantenimiento de estos.
        </div>
        <div className="imagenes">
          <div>
            <h1 className="alcancetexto">Alcance<br/><br/>
          <h6>Realizar una plataforma web en la que las personas 
            adultas y aquellas que no tengan contacto frecuente con 
            las computadoras puedan familiarizarse con estas, 
            adquiriendo conocimiento sobre cómo realizar varias de 
            las funcionalidades básicas sin sentirse desorientados 
            por no tener una guía.</h6></h1>
          <img src={alcance} className="alcancelogo"/>
          </div>
          <div>
          <h1 className="misiontexto">Misión<br/><br/>
          <h6>Se quiere ayudar a solucionar de una forma más 
            practica y dinámica diversas problemáticas de soporte, 
            para aquellos usuarios que no tengan grandes conocimientos 
            del tema y para ello se brindara de una página web con 
            todos los conocimientos recopilados para que los usuarios 
            puedan hacerle soporte a sus equipos sin temor alguno.</h6></h1>
          <img src={mision} className="misionlogo"/>
          </div>
        </div>
      </body>
      <footer className="footeraspects">
      <div className="footer">
      <div className="txtbox">
      <label className="textboxtitle">Dejanos recomendaciones para mejorar!</label><p/>
      <textarea className="textbox" rows="10" cols="40"></textarea>
      </div>
      <div className="footer2">
      <label for="email">Ingresa tu email:</label><br/>
      <input type="email" className="email"
       pattern=".+@\.com" size="30" required></input><p/>
       <input type="submit"></input>
      </div>
        
      </div>
      </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
