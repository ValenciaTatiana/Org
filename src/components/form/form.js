import { useState } from "react";
import "./form.css";
import CampoForm from '../campoForm/campoForm';
import DropDow from '../dropDow';
import ButtonFrom from '../buttonFrom';

// El componente tambien se puede crear con un ArrowFunction
const Form = () => {

    const [ nombre, actualizarNombre ] = useState("");
    const [ puesto, actualizarPuesto ] = useState("");
    const [ foto, actualizarFoto ] = useState("");
    const [ equipo, actualizarEquipo ] = useState("");

    // Escuhar el submit y evitar el comportamiento por defecto
    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        }
        console.log(datosAEnviar);
    }
    return <section className="container-form">
        <form onSubmit = {manejarEnvio}> {/* onSubmit es un controlador de eventos */}
            <h2>Diligencia el formulario para crear un nuevo colaborador.</h2>
            <CampoForm titulo="Nombre" placeholder="Ingresar el Nombre" required 
            valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoForm titulo="Puesto" placeholder="Ingresar el Puesto" required 
            valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoForm titulo="Foto" placeholder="Ingresar el enlace de la Foto" required 
            valor={foto} actualizarValor={actualizarFoto}/>
            <DropDow valor={equipo} actualizarEquipo={actualizarEquipo} />
            <ButtonFrom texto="Crear Colaborador"/>
        </form>
    </section>
}

export default Form;