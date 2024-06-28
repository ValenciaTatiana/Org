import "./form.css";
import CampoForm from '../campoForm/campoForm';
import DropDow from '../dropDow';
import ButtonFrom from '../buttonFrom';

// El componente tambien se puede crear con un arrowfunction
const Form = () => {
    return <section className="container-form">
        <form>
            <h2>Diligencia el formulario para crear un nuevo colaborador.</h2>
            <CampoForm titulo="Nombre" placeholder="Ingresar el Nombre"/>
            <CampoForm titulo="Puesto" placeholder="Ingresar el Puesto"/>
            <CampoForm titulo="Foto" placeholder="Ingresar la Foto"/>
            <DropDow />
            <ButtonFrom texto="Crear Colaborador"/>
        </form>
    </section>
}

export default Form;