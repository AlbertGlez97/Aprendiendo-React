import react from 'react';
import '../css/Boton.css';

function Boton(props)
{
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  }
   return(
     <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {/* En onClick => creamos una funcion anonima que retorne el resultado de llamar la
      funcion props.manejarClic(props.children) , es lo que se necesita para el eventlistener
      
      Todo lo que incluimos en entre la etiqueta Boton y el cierre
      se considera hijo */}
      {props.children}
     </div>
   ) 
}

export default Boton;