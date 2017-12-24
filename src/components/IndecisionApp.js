// Importaciones necesarias para la app e importacion de los componentes
import React from 'react';
import AniadeOpcion from './AniadeOpcion';
import Header from './Header';
import Accion from './Accion';
import Opciones from './Opciones';
import OpcionModal from './OpcionModal';


// Componente padre donde rendearemos todo
class IndecisionApp extends React.Component {
    // // Establecemos el estado de  la App para poder controlar las variables cambiantes
    // constructor(props){
    //     // Llamamos al constructor del padre React.Component
    //     super(props);
    //     // Bindeo del metodo para usar this correctamente
    //     this.metodoBorrarTodoOpciones     = this.metodoBorrarTodoOpciones.bind(this);
    //     this.metodoGeneraTareaAzar        = this.metodoGeneraTareaAzar.bind(this);
    //     this.metodoAniadeOpcion           = this.metodoAniadeOpcion.bind(this);
    //     this.metodoBorrarOpcionIndividual = this.metodoBorrarOpcionIndividual.bind(this);
    //     // Definimos los estados iniciales de las variables
    //     this.state = {
    //         opciones: props.opcionesDefault
    //     };
    // }
    
    // Nueva manera para indicar el estado del componente
    state = {
        opciones: [],
        opcionSeleccionada: undefined
    };

    // Metodo que se ejecuta al iniciar la aplicacion (Metodos de ciclo de vida)
    componentDidMount() {
        console.log('fetching data');

        try {
            // Leemos los datos de localStorage
            const json = localStorage.getItem('opcionesGuardadas');
            // Los convertimos en un objeto de JS porque son cadenas
            const opcionesACargar = JSON.parse(json);
            // Verifica si los datos obtenido de LocalStorage son validos
            if(opcionesACargar != null) {
                // Establece el estado de la app con las opciones cargadas del Local Storage
                this.setState( () => ({opciones: opcionesACargar}));
            }
        } catch(error) {
            // Hacer nada XD
        }
    }

    // Metodo que se ejecuta cuando algun componente se actualiza ej: valores de estado actualizados
    componentDidUpdate(propAnterior, estadoAnterior) {
        // Verifica si en estado anterior hubo un cambio en la longitud del arreglo de opciones para salvar los 
        // cambios a una LocalStorage
        if(estadoAnterior.opciones.length != this.state.opciones.length ) {
            // Obtenemos un objeto de strings de json del arreglo de opciones del estado de nuestra app
            const json = JSON.stringify(this.state.opciones);
            // Lo salvamos a LocalStorage para obtener una persistencia de datos
            localStorage.setItem('opcionesGuardadas', json);
            console.log('Si hay cambio en el arreglo opciones');
        }
        
    }

    // Metodo que se ejecuta cuando un componente desaparece de la pantalla
    componentWillUnmount () {
        console.log('componente se desmontara');
    }

    // Metodo que define borrado de una opcion
    metodoBorrarTodoOpciones = () => {
        // // Funcion que modifica el estado de la app
        // this.setState(() => {
        //     // Valor de regreso es el cambio del estado en este caso el arreglo de opciones en blanco
        //     return {
        //         opciones: []
        //     }
        // });

        // Nueva syntaxis para establecer las opciones en vacio
        this.setState( () => ({
            opciones: []
        }));
    };

    // Metodo que define la eleccion de una opcion al azar
    metodoGeneraTareaAzar = () => {
        // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
        const randomNum = Math.floor(Math.random() * this.state.opciones.length);
        alert(this.state.opciones[randomNum]);
    };

    // Metodo que se encarga de definir la opcion para aniadir que extrae del input de la form
    metodoAniadeOpcion = (opcionNueva) => {
        // Verificacion si la opcion nueva que se esta pasando esta en blanco
        if(!opcionNueva) {
            return 'Entre un valor valida para aniadir! >:('
        }   else if (this.state.opciones.indexOf(opcionNueva) > -1) {
            return 'No puede entrar valores repetidos!! >:(('
        }   else {

            // // Modificacion del estado de la app recuperando el estado anterior con el argumento estadoAnterior de la funcion
            // this.setState( (estadoAnterior) => {
            //     return {
            //         // Pusheamos la opcion nueva usando concat sin manipular los estados inicial o anterior
            //         opciones: estadoAnterior.opciones.concat([opcionNueva])
            //     };
            // });

            // Nueva sintaxis para regresar el estador
            this.setState( (estadoAnterior) => ({
                opciones: estadoAnterior.opciones.concat([opcionNueva])
            }));
        }
    };

    // Metodo que toma una opcion individual para eliminarla de los estados y del arreglo subsecuentemente
    metodoBorrarOpcionIndividual = (opcionAQuitar) => {
        this.setState( (estadoAnterior) => ({
            opciones: estadoAnterior.opciones.filter( (opcion) => {
                {/* Verifica si el elemento opcion a quitar esta en el arreglo y cuando lo encuentra devuelve false y lo quita */}
                return opcionAQuitar !== opcion;
            })
        }));
    };

    // Rendereo de JSX
    render() {
        // Para titulo dinamico
        const tituloProps = 'Indecision-App';
        const subTituloProps = 'Deja tu vida en las manos de una compu XD';

        return (
            <div>
                {/* Rendereo del Header definido usando la clase de Header de arriba se deben usar mayusculas para la primera letra
                y ademas usando props para el titulo y subtitulo*/}
                <Header subTitulo={subTituloProps}/>
                {/* Rendereamos el componente de Accion */}
                <Accion 
                    tieneOpciones = {this.state.opciones.length > 0}
                    opciones={this.state.opciones}
                    metodoGeneraTareaAzar = {this.metodoGeneraTareaAzar}
                />
                {/* Rendereamos el componente de opciones */}
                <Opciones
                    opciones={this.state.opciones}
                    metodoBorrarTodoOpciones = {this.metodoBorrarTodoOpciones}
                    metodoBorrarOpcionIndividual = {this.metodoBorrarOpcionIndividual}
                />
                {/* Rendereamos el componente de aniadir opciones */}
                <AniadeOpcion 
                    metodoAniadeOpcion = {this.metodoAniadeOpcion}
                />
                {/* Definimos e importamos el Componente third party Modal que es una Alert bonita*/}
                <OpcionModal 
                    opcionSeleccionada = {this.state.opcionSeleccionada}
                />
            </div>
        );
    }
}

// Establecemos props default para el componenete indecision-app
IndecisionApp.defaultProps = {
    // Establecemos opciones default como arreglo vacio
    opcionesDefault: []
};

// Exportaciones
export default IndecisionApp;