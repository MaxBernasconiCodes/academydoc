import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import List from "./components/List";
import { useState } from "react";
import Module from "./components/Module";

function App() {
  let ending = ["Comenzamos dentro de poco, estén atentos ;)"];
  const [selected, setSelected] = useState(-1);
  const [modules, setModules] = useState([
    {
      name:'html',
      title:'HTML',
      imgPath:'html.svg',
    },
    {
      name:'css',
      title:'CSS',
      imgPath:'css.svg',
    },
    {
      name:'js',
      title:'Javascript',
      imgPath:'js.svg',
    }
  ]);


  return (
    <div className="App">
      <div>
          <FontAwesomeIcon icon={faCode} className="logo" />
          <FontAwesomeIcon icon={faLaptopCode} className="logo" /> 
      </div>
      <h1>Programacion Web: Esentials</h1>
      <div className="cards-container">

      {modules.map((module)=>{return  <Module name={module.name} title={module.title} imgPath={module.imgPath}></Module>})}

      </div>
      <p className="read-the-docs">{ending}</p>
      <List items={['Introduccion al desarrollo Web','Pagina estatica de texto', 'Lista de tareas y Tabla de rendimiento', 'Periodico online basico', 'Formulario de contacto']}></List>
      <List items={['Introduccion a CSS', 'Selectores y Reglas', 'Dando estilo a nuestro CV', 'Orden y posicion de elmentos ', 'Pseudo Clases y elementos','Filtros y Transformaciones ', 'FlexBox', 'Grid', 'Diseño Responsivo', 'Introduccion a Bootstrap', 'Introduccion a Javascript']}></List>
    </div>
  );
}

export default App;
