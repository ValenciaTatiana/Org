import { useState } from "react"; // Función para manejar estados
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import MiOrg from './components/buttonMiOrg';

function App() {

  // Tenemos la [función mostrarOcultar y lo que se pase como parametro sera en valor de la variable mostrarFormulario], lo que tiene useState es el valor inicial
  const [mostrarFormulario, mostrarOcultar] = useState(true);
  const cambiarEstadoFormulario = () => {
    mostrarOcultar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Form /> : <div></div>}
      <MiOrg cambiarEstadoFormulario={cambiarEstadoFormulario} />
    </div>
  );
}

export default App;
