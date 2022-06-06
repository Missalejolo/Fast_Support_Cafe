import logo from './logofsc.svg';
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
              <li><a href="">Example</a></li>
              <li><a href="">Example</a></li>
            </ul>  
          </li>
          </ul>
        </nav>
        <div class="box3">Fast Support Café</div>
      </header>
    </div>
    </BrowserRouter>

  );
}

export default App;
