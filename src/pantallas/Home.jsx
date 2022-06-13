import alcance from '../alcance.png';
import mision from '../mision.png';

export default function Home() {
    return (
        <div>
            <div className="aboutus">
                Fast Support Café es un proyecto desarrollado por estudiantes del
                Politécnico Colombiano Jaime Isaza Cadavid con el fin de mejorar la
                vida útil de equipos tecnológicos ofreciendo opciones para facilitar
                el mantenimiento de estos.
            </div>
            <div className="imagenes">
                <div>
                    <h1 className="alcancetexto">Alcance<br /><br />
                        <h6>Realizar una plataforma web en la que las personas
                            adultas y aquellas que no tengan contacto frecuente con
                            las computadoras puedan familiarizarse con estas,
                            adquiriendo conocimiento sobre cómo realizar varias de
                            las funcionalidades básicas sin sentirse desorientados
                            por no tener una guía.</h6></h1>
                    <img src={alcance} className="alcancelogo" />
                </div>
                <div>
                    <h1 className="misiontexto">Misión<br /><br />
                        <h6>Se quiere ayudar a solucionar de una forma más
                            practica y dinámica diversas problemáticas de soporte,
                            para aquellos usuarios que no tengan grandes conocimientos
                            del tema y para ello se brindara de una página web con
                            todos los conocimientos recopilados para que los usuarios
                            puedan hacerle soporte a sus equipos sin temor alguno.</h6></h1>
                    <img src={mision} className="misionlogo" />
                </div>
            </div>
        </div>
    )
}