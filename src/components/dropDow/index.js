import "./dropDow.css";

function DropDow () {

    const equiposDeTrabajo = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión"];
    return <div className="drop-down">
        <label>Equipos</label>
            <select>
                {/* <option disabled selected>Seleccionar Equipo</option> */}
                {equiposDeTrabajo.map((equipo, index) => {
                    return <option key={index}>{equipo}</option>
                })}
            </select>
        </div>
}

export default DropDow;