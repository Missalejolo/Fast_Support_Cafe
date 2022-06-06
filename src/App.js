import logo from './logofsc.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <div><img src={logo} className="App-logo" alt="logo"/></div>
        <div class="box2"><a href="">Inicio</a></div>
        <nav>
          <ul id="menu">
          <li><a href="">Ayudas de optimización</a>
            <ul>
              <li><a href="">Desfragmentación de disco</a></li>
              <li><a href="">Example</a></li>
              <li><a href="">Example</a></li>
            </ul>  
          </li>
          </ul>
        </nav>
        <div class="box3">Fast Support Café</div>
      </header>
    </div>
  );
}

export default App;
