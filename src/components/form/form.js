import { useState } from "react";
import "./form.css";
import CampoForm from '../campoForm/campoForm';
import DropDow from '../dropDow';
import ButtonFrom from '../buttonFrom';

// El componente tambien se puede crear con un ArrowFunction
const Form = (props) => {

    // Form Colaborador
    const [ nombre, actualizarNombre ] = useState("");
    const [ puesto, actualizarPuesto ] = useState("");
    const [ foto, actualizarFoto ] = useState("");
    const [ equipo, actualizarEquipo ] = useState("");

    // Form Equipo
    const [ titulo, actualizarTitulo ] = useState("");
    const [ color, actualizarColor ] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    // Escuhar el submit y evitar el comportamiento por defecto
    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarEnvioEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
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
            <DropDow valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
            <ButtonFrom texto="Crear Colaborador"/>
        </form>
        <form onSubmit = {manejarEnvioEquipo}> {/* onSubmit es un controlador de eventos */}
            <h2>Diligencia el formulario para crear un nuevo equipo.</h2>
            <CampoForm titulo="Titulo" placeholder="Ingresar el Titulo" required 
            valor={titulo} actualizarValor={actualizarTitulo}/>
            <CampoForm titulo="Color" placeholder="Ingresar el Color en Hexadecimal" required 
            valor={color} actualizarValor={actualizarColor} type="color"/>
            <ButtonFrom texto="Crear Equipo"/>
        </form>
    </section>
}

export default Form;