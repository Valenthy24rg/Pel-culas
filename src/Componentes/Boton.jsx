import React, { useState } from "react";

const Boton = () => {
  const [add, setAdd] = useState('Agregar al carrito');

  const cambiarEstado = () => {
    if (add === 'Agregar al carrito') {
      setAdd('Quitar del carrito')
    }else setAdd('Agregar al carrito')
  }

  return (
    <div> 
      <button onClick={cambiarEstado}>{add}</button>
    </div>
  )
}
export default Boton;
