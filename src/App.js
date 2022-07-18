import logo from './logofsc.svg';
import chatbot from './fastsc-chatbot.svg'
import RoutesApp from './RoutesApp';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import Home from './pantallas/Home';
import Desfrag from './pantallas/Desfrag'
import PageNotFound from './pantallas/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" >
          <div><img src={logo} className="App-logo" alt="logo" /></div>
          <div class="box2"><Link to="/">Inicio</Link></div>
          <nav>
            <ul id="menu">
              <li><a>Ayudas de optimización</a>
                <ul>
                  <li><Link to="/desfragmentaciondisco">Desfragmentación de disco</Link></li>
                  <li><Link to="/limpiezadearchivos">Limpieza de archivos temporales</Link></li>
                  <li><Link to="/deshabilitarappsdeinicio">Deshabilitar inicio automático de apps</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="box3">Fast Support Café</div>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/desfragmentaciondisco">
            <Desfrag />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        <footer className="footeraspects">
          <div className="footer">
            <div className="txtbox">
              <label className="textboxtitle">Dejanos recomendaciones para mejorar!</label><p />
              <textarea className="textbox" rows="10" cols="40"></textarea>
            </div>
            <div className="footer2">
              <label for="email">Ingresa tu email:</label><br />
              <input type="email" className="email"
                pattern=".+@\.com" size="30" required></input><p />
              <input type="submit" className="enviar"></input>
            </div>
            <div className="footer3">
              O escribenos!<br />
              fastsc.sugerencias@gmail.com<br /><br />
              Quejas o reportes<br />
              fastsc.sugerencias@gmail.com
            </div>
            <div className="footer4"><img src={chatbot} className="chatbot" alt="chatbot" /><p />
              Chatbot de ayuda<p /> y sugerencias
            </div>
          </div>
        </footer>
      </div>
    </Router>
<!-- Comentario de Commit para Git Pages -->
  );
}

export default App;
