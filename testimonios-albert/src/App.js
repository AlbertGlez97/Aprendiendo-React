import './App.css';
//Exportancion Nombrada -> Exportar varios elementos de un archivo
import {Testimonio} from './components/Testimonio.js';
//Exportacion defecto -> Un solo elemento
//import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <di className="contenedor-principal">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sarah'
        cargo='Software Engineer'
        empresa='ChatDesk'
        testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'/>

      <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'/>
      </di>
    </div>
  );
}

export default App;
