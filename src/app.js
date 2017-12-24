// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import AniadeOpcion from './components/AniadeOpcion';

// Componente padre donde rendearemos todo
class IndecisionApp extends React.Component {
    // Establecemos el estado de  la App para poder controlar las variables cambiantes
    constructor(props){
        // Llamamos al constructor del padre React.Component
        super(props);
        // Bindeo del metodo para usar this correctamente
        this.metodoBorrarTodoOpciones     = this.metodoBorrarTodoOpciones.bind(this);
        this.metodoGeneraTareaAzar        = this.metodoGeneraTareaAzar.bind(this);
        this.metodoAniadeOpcion           = this.metodoAniadeOpcion.bind(this);
        this.metodoBorrarOpcionIndividual = this.metodoBorrarOpcionIndividual.bind(this);
        // Definimos los estados iniciales de las variables
        this.state = {
            opciones: props.opcionesDefault
        };
    }
    
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
    metodoBorrarTodoOpciones () {
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
    }

    // Metodo que define la eleccion de una opcion al azar
    metodoGeneraTareaAzar () {
        // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
        const randomNum = Math.floor(Math.random() * this.state.opciones.length);
        alert(this.state.opciones[randomNum]);
    }

    // Metodo que se encarga de definir la opcion para aniadir que extrae del input de la form
    metodoAniadeOpcion (opcionNueva) {
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
    }

    // Metodo que toma una opcion individual para eliminarla de los estados y del arreglo subsecuentemente
    metodoBorrarOpcionIndividual (opcionAQuitar) {
        this.setState( (estadoAnterior) => ({
            opciones: estadoAnterior.opciones.filter( (opcion) => {
                {/* Verifica si el elemento opcion a quitar esta en el arreglo y cuando lo encuentra devuelve false y lo quita */}
                return opcionAQuitar !== opcion;
            })
        }));
    }

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
            </div>
        );
    }
}

// Establecemos props default para el componenete indecision-app
IndecisionApp.defaultProps = {
    // Establecemos opciones default como arreglo vacio
    opcionesDefault: []
};

// // Hacemos un componente de Hader extendiendo de la clase componente de react
// class Header extends React.Component {
//     // Metodo para definir obligatorio
//     render() {
//         return (
//             <div>
//                 {/* Usando props para mandar una variable de JS al rendereo del componente*/}
//                 <h1>{this.props.titulo}</h1>
//                 <h2>{this.props.subTitulo}</h2>
//             </div>
//         );
//     }
// }

// Componente de Header como componente funcional sin estado
const Header = (props) =>{
    // Rendereo del HTML (JSX) en este tipo de componentes se obtiene acceso a los props de manera directa 
    // sin hacer referencia a this.props => props
    return (
        <div>
            {/* Usando props para mandar una variable de JS al rendereo del componente*/}
            <h1>{props.titulo}</h1>
            {/* Renderio del subtitulo solo si existe*/}
            {props.subTitulo && <h2>{props.subTitulo}</h2>}
        </div>
    );
};

// Props de Default para el componente de Header
Header.defaultProps = {
    titulo: 'Indecision'
};


// Compenente de Accion como stateless-funcional en lugar de clase
const Accion = (props) => {
    // Codigo que renderea el HTML como returno del componente funcional
    return (
        <div>
            {/* Usamos el metodo .bind() para que se pueda pasar el contexto al metodo de la clase*/}
            <button
                onClick={props.metodoGeneraTareaAzar}
                disabled = {!props.tieneOpciones}
                >
                Que deberia Hacer?
            </button>
        </div>
    );
};

// // Ahora creamos una clase (componente de react) para procesar un accion
// class Accion extends React.Component {
//     // CODIGO VIEJO QUE EJEMPLIFICA COMO HACER UNA SELECCION AL AZAR DE UN ELEMENTO DEL ARREGLO PROP OPCIONES
//     // // Metodo de la clase/componente que genera una tarea aleatoria a realizar
//     // generaTareaAzar()  {
//     //     // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
//     //     const randomNum = Math.floor(Math.random() * this.props.opciones.length);
//     //     console.log(randomNum);
//     // }

//     // Metodo Obligatorio
//     render(){
//         return (
//          <div>
//             {/* Usamos el metodo .bind() para que se pueda pasar el contexto al metodo de la clase*/}
//             <button
//                  onClick={this.props.metodoGeneraTareaAzar}
//                  disabled = {!this.props.tieneOpciones}
//             >
//                 Que deberia Hacer?
//             </button>
//          </div>   
//         );
//     }
// }

// Componente funcional sin estado de Opciones
const Opciones = (props) => {
    return (
        <div>
            {/* Buton que remueve las opciones*/}
            <button onClick={props.metodoBorrarTodoOpciones} > Borrar todas la opciones</button>
            {/* Parrafo que se renderea cuando las opciones estan vacias*/}
            {props.opciones.length == 0 && <p>Aniada una opcion de cosas que hacer!</p>}
            {/* Usando Pops con arreglos y funcion de map para desplegar elementos de un arreglo en el componente
            Rendereo del subcomente opcion */}
            {
                props.opciones.map((elemento) => {
                    return <Opcion 
                        key={elemento} 
                        currentOpcion = {elemento}
                        metodoBorrarOpcionIndividual = {props.metodoBorrarOpcionIndividual} 
                        />
                })
            }
        </div>
    );
};

// // Componente que renderea las opciones
// class Opciones extends React.Component {
//     // CODIGO VIEJO QUE EJEMPLIFICA COMO BINDEAR LOS METODOS PARA USAR THIS
//     // // Hacemos un Overrride al Constructor de la clase
//     // constructor(props) {
//     //     // Llama al constructor de la super clase para que herede los metodos del constructor padre
//     //     super(props);
//     //     // Corregir el contexto para llamar al objeto this en los metodos de la clase/componente
//     //     this.borrarTodo = this.borrarTodo.bind(this);
//     // } 
    
//     // // Metodo de la clase/componente que remueve las opciones
//     // borrarTodo() {
//     //     alert('Borrars Auch');
//     //     console.log(this.props.opciones);
//     // }


//     // Metodo Obligatorio del JSX que escupe el componente
//     render(){
//         return (
//             <div>
//                 {/* Buton que remueve las opciones*/}
//                 <button onClick={this.props.metodoBorrarTodoOpciones} > Borrar todas la opciones</button>
//                 {/* Usando Pops con arreglos y funcion de map para desplegar elementos de un arreglo en el componente
//                 Rendereo del subcomente opcion */}
//                 {
//                     this.props.opciones.map((elemento) => {
//                         return <Opcion key={elemento} currentOpcion = {elemento} />
//                     })
//                 }
//             </div>
//         );
//     }
// }

// Componente funcional de una sola opcion
const Opcion = (props) => {
    return (
        <div>
            {props.currentOpcion}
            <button 
                onClick={(e) => {
                    {/* Hace que se pase el argumento de props a la funcion que borra la opcion*/}
                    props.metodoBorrarOpcionIndividual(props.currentOpcion);
                }}
            >
                Eliminar
            </button>
        </div>
    );
};

// // Componente de una sola opcion que sera rendereado dentro de la clase de Opciones
// class Opcion extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.currentOpcion}
//             </div>
//         );
//     }
// }


// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));