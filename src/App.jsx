import React from "react";
import Contenido from "./Componentes/Contenido";
import './App.css'

const App = () => {

  return(
    <div className="container">
      <img src="img/image-product-desktop.jpg" width={320}/>

      <div className="info">
        <Contenido/>
      </div>
    </div>

  )
}

export default App;