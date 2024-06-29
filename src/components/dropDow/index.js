import "./dropDow.css";

function DropDow (props) {

    const equiposDeTrabajo = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión"];
    
    const manejarCambioSelect = (e) => {
        props.actualizarEquipo(e.target.value)
    }
    
    return <div className="drop-down">
        <label>Equipos</label>
            <select value={props.valor} onChange={ manejarCambioSelect }>
                <option value="" disabled defaultValue="" >Seleccionar Equipo</option>
                {equiposDeTrabajo.map((equipo, index) => {
                    return <option key={index}>{equipo}</option>
                })}
            </select>
        </div>
}

export default DropDow;