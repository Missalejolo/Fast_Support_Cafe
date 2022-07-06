import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pagenotfound">
      <p><h3>Uy, llegaste a un mundo desconocido. Mejor regresa al <Link to="/">inicio.</Link></h3></p>
      <img className="pnfimg" src="https://cdn-icons-png.flaticon.com/512/177/177841.png"/>
    </div>
  )
}