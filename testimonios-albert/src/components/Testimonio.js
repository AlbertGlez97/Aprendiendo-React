import React from 'react';
import '../css/Testimonio.css';

//Exportancion Nombrada -> Exportar varios elementos de un archivo
//Tenemos que poner en el import unas llaves para indicar los elementos a importar
export function Testimonio(props) 
{
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}/>
      <div className='contendedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

//Exportacion defecto -> Un solo elemento
//export default Testimonio;