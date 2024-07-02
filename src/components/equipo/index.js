import "./equipo.css";
import Colaborador from "../colaborador";

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores } = props;

    return <> { colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: colorSecundario }}>
            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}
                        colorPrimario={colorPrimario}/>)
                    }
                </div>
        </section>
    } </>
}

export default Equipo;