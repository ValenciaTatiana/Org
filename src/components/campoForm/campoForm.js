import "./campoForm.css";

function CampoForm (props) {
    return <div className="campo-from">
        <label for="nombre">{props.titulo}</label>
            <input type="text" placeholder={props.placeholder} name="nombre" id="nombre"></input>
    </div>
}

export default CampoForm;