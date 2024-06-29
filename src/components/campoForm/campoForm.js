import { useState } from "react";
import "./campoForm.css";

function CampoForm (props) {

    const [ valor, actualizarValor ] = useState("");

    const manejarCambio = (e) => {
        console.log(e.target.value);
        props.actualizarValor(e.target.value);
    }
    return <div className="campo-from">
        <label for="nombre">{props.titulo}</label>
            <input type="text" placeholder={props.placeholder} required={props.required} 
            id="nombre" value={props.valor} onChange={manejarCambio}></input>
    </div>
}

export default CampoForm;