import { useState } from "react"; // Función para manejar estados
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import MiOrg from './components/buttonMiOrg';
import Equipo from "./components/equipo";

function App() {

  // Tenemos la [función mostrarOcultar y lo que se pase como parametro sera en valor de la variable mostrarFormulario], lo que tiene useState es el valor inicial
  const [mostrarFormulario, mostrarOcultar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([]);

  const cambiarEstadoFormulario = () => {
    mostrarOcultar(!mostrarFormulario);
  }

  // Registrar el Colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);

  }

  // Listado de Equipos
  const equiposDeTrabajo = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    ];

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Form equipos={equiposDeTrabajo.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} /> : <div></div>}
      <MiOrg cambiarEstadoFormulario={cambiarEstadoFormulario} />
      {
        equiposDeTrabajo.map( (equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} /> // Cuando se usa map siempre se usa el key, nos sirve como refecrencia
        })
      }
    </div>
  );
}

export default App;
