import React from "react";
import Boton from "./Boton";


const Contenido = () => {

  return (
    <div className="contenido">
      <h2 className="titulo">PERFUME</h2>

      <h3>Gabrielle Essence Eau De Parfum</h3>

      <p className="desc">A floral, solar and voluptous interpretation composed by Olvier Polge, Perfumer-Creator for the House of CHANEL.</p>

      <div className="precio">
        <h2>$149.99</h2>
        <p>$169.99</p>
      </div>
      <Boton/>

    </div>
  )
}


export default Contenido;