import React from "react";
import appsinicio from "./style/appsinicio.png"
import "./style/style.css"

export default function Appsinic() {
  return (
    <div className="general">
      <h1>Deshabilitar apps de arranque</h1><br />
      <body>
      Estas aplicaciones son aquellas que se ejecutan al momento de iniciar Windows. 
      El tener muchas de estas aplicaciones ejecutandose a la vez puede relentizar de 
      manera significativa el inicio del sistema<p />
        <br />
        <h2>Cómo deshabilitarlas de forma manual</h2><br />
        Pulse clic derecho en la barra de herramientas e ingrese a la opción 
        "Administrador de tareas", pulsaremos "Más detalles" y nos iremos a la 
        sección de "Inicio" ahí tendremos la opción de deshabilitar aquellas 
        aplicaciones que inician en segundo plano para optimizar el arranque de 
        nuestro equipo.<p /><br />
        <div className="scriptdiv">
          <a href="https://download1323.mediafire.com/dmdn8owkgarg/i54voepld0dao5s/admindearchivos.bat" target="_blank" className="scriptbutton">
            Descargar Script
          </a><br />
        </div>
        <img src={appsinicio} className="appsinicio" />
      </body>
    </div>
  )
}
