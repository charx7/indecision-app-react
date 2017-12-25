import React from 'react';

// Componente que renderea la forma con los input y el submit para aniadir opciones que hacer
export default class AniadeOpcion extends React.Component {
    // Nueva manera de inicializar el estado sin hacer uso del constructor del componente usando un plugin de BABEL
    state = {
        errror: undefined
    };

    // // Constructor para poder usar this dentro del metodo onFormSubmit()
    // constructor (props) {
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    //     // // Introduccion de estado de los componente
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }

    // Metodo que se encarga de ver la logica del submit de la Form 
    // IMPORTANTE la e hace referencia al evento de submit de la forma
    // IMPORTANTE conversion a arrow function para no romper el this binding gracias al nuevo plugin de babel
    onFormSubmit = (e) => {
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
                {this.state.error && <p className='aniade-opcion-error'>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit} className='aniade-opcion'>
                    <input type="text" name="opcionNueva" className='aniade-opcion-input'/>
                    <button className='botones'>Aniade Opcion</button>
                </form>
            </div>
        );
    }
}
