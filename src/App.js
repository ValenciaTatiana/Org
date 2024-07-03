import { useState } from "react"; // Función para manejar estados
import {v4 as uuid } from "uuid"; // Para generar un identificador unicos
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import MiOrg from './components/buttonMiOrg';
import Equipo from "./components/equipo";
import Footer from "./components/footer";

function App() {

  // Tenemos la [función mostrarOcultar y lo que se pase como parametro sera en valor de la variable mostrarFormulario], lo que tiene useState es el valor inicial
  const [mostrarFormulario, mostrarOcultar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/ValenciaTatiana.png",
    nombre: "Tatiana Cuadros",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    ])

  const cambiarEstadoFormulario = () => {
    mostrarOcultar(!mostrarFormulario);
  }

  // Registrar el Colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar Color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo;
    })
    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Form equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} /> : <div></div>}
      <MiOrg cambiarEstadoFormulario={cambiarEstadoFormulario} />
      {
        equipos.map( (equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor} /> // Cuando se usa map siempre se usa el key, nos sirve como refecrencia
        })
      }
      <Footer />
    </div>
  );
}

export default App;
