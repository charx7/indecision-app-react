import React from 'react';

// Componente que renderea la forma con los input y el submit para aniadir opciones que hacer
export default class AniadeOpcion extends React.Component {
    // Constructor para poder usar this dentro del metodo onFormSubmit()
    constructor (props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // Introduccion de estado de los componente
        this.state = {
            error: undefined
        };
    }

    // Metodo que se encarga de ver la logica del submit de la Form 
    // IMPORTANTE la e hace referencia al evento de submit de la forma
    onFormSubmit (e) {
        // Hace que no se haga un rendereo completo de la pagina otra vez
        e.preventDefault();
        // Recuperar el valor que typeo el usuario en el input
        const opcionAniadir = e.target.elements.opcionNueva.value.trim();
        // Llama al metodo padre que aniade un opcion al arreglo del estado padre y guarda si hubo un error
        const error = this.props.metodoAniadeOpcion(opcionAniadir);
        console.log('Quisiste aniadir una opcion');
        // Codigo Viejo para modificar el estado con un error
        // this.setState( () => {
        //     return {
        //         error: error
        //     };
        // });

        // Modifica el estado del componente con una funcion de retorno implicito
        this.setState( () => ({
            error: error
        }));

        // Pone en blanco el valor del input para que no sea molesto si no hay error
        if (!error) {
            e.target.elements.opcionNueva.value = "";
        }
     }

    // Rendereo del JSX
    render() {
        return (
            <div>
                {/* Condicionalmente renderea un error si identifico que hubo un error al submitear la forma*/}
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="opcionNueva"/>
                    <button>Aniade Opcion</button>
                </form>
            </div>
        );
    }
}
