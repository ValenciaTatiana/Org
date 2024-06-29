import "./buttonMiOrg.css";

const MiOrg = (props) => {

    return <section className="container-miOrg">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarEstadoFormulario}></img>
    </section>
}

export default MiOrg;