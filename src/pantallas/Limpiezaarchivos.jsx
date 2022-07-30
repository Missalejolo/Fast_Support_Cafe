import React from "react";
import temparch from "./style/temparch.png"
import "./style/style.css"

export default function Limparch() {
  return (
    <div className="general">
      <h1>Limpieza de archivos temporales</h1><br />
      <body>
      Un archivo temporal es un archivo que puede ser creado por un programa 
      cuando no puede asignar memoria suficiente para sus tareas o bien el sistema 
      operativo en algunos casos son copias de seguridad<p />
        <br />
        <h2>Cómo hacer la limpieza de forma manual</h2><br />
        Vamos a pulsar la tecla de Windows y a la vez la tecla R, se nos abrirá un
        recuadro en el cual buscaremos "%temp%" se nos abrirá una carpeta en la cual
        tendremos todos nuestros archivos temporales, los elegiremos todos y haremos clic
        derecho, luego de eso pulsaremos "Eliminar". Aquellos elementos que no se nos permita
        eliminar, los omitiremos.<p /><br />
        <div className="scriptdiv">
          <a href="https://download1346.mediafire.com/coes0yw9vptg/wladcq6xph9vfrq/limpieza_archivos_temporales.bat" target="_blank" className="scriptbutton">
            Descargar Script
          </a><br />
        </div>
        <img src={temparch} className="archtemp" />
      </body>
    </div>
  )
}
