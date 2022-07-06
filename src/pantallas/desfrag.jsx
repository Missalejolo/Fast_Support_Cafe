import React from "react";
import ejemplodesfrag from "./style/ejemplo_desfrag.png"
import { Link } from "react-router-dom";
import "./style/style.css"

export default function Desfrag() {
  return (
    <div className="general">
      <h1>Desfragmentación de Disco</h1><br/>
      <body>
      La desfragmentación del disco es una operación que a veces es necesaria 
      para poner orden en los discos duros en 
      los que sueles escribir y reescribir con regularidad, 
      ya que sistemas operativos como Windows tienden a ir 
      dejando fragmentos en ellos que con el paso del tiempo 
      pueden ralentizar tu equipo.<p/>
      <br />
      Los archivos dentro de tu ordenador no son piezas completas 
      en sí, ya que un vídeo, una foto o cualquier otro archivo está 
      compuesto de pequeños fragmentos que son guardados en tu disco duro. 
      Windows sabe dónde están y como localizarlos, pero según vas utilizando 
      el disco duro escribiendo y borrando archivos, es posible que no siempre 
      consiga ordenarlos todos correctamente en zonas próximas del disco.
      Este desorden hace que el sistema tenga que trabajar más para encontrar 
      los fragmentos de archivos que puedan haber quedado esparcidos por el disco, 
      haciendo que poco a poco y con el paso del tiempo la velocidad de todo el ordenador 
      pueda resentirse.<p/><br/>
      <div className="scriptdiv">
      <a href="../scripts/limpieza_archivos_temporales.bat" download="LimpiarArchivosTemporales.bat" className="scriptbutton">
        Descargar Script
      </a><br/>
      </div>
      <img src={ejemplodesfrag} className="ejemplodesfrag"/>
      </body>
    </div>
  )
}
