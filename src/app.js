// Componente padre donde rendearemos todo
class IndecisionApp extends React.Component {
    // Establecemos el estado de  la App para poder controlar las variables cambiantes
    constructor(props){
        // Llamamos al constructor del padre React.Component
        super(props);
        // Definimos los estados iniciales de las variables
        this.state = {
            opciones: ['opcion1', 'opcion2','opcion3']
        };
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
                <Header titulo={tituloProps} subTitulo={subTituloProps}/>
                {/* Rendereamos el componente de Accion */}
                <Accion opciones={this.state.opciones} />
                {/* Rendereamos el componente de opciones */}
                <Opciones opciones={this.state.opciones} />
                {/* Rendereamos el componente de aniadir opciones */}
                <AniadeOpcion />
            </div>
        );
    }
}

// Hacemos un componente de Hader extendiendo de la clase componente de react
class Header extends React.Component {
    // Metodo para definir obligatorio
    render() {
        return (
            <div>
                {/* Usando props para mandar una variable de JS al rendereo del componente*/}
                <h1>{this.props.titulo}</h1>
                <h2>{this.props.subTitulo}</h2>
            </div>
        );
    }
}

// Ahora creamos una clase (componente de react) para procesar un accino
class Accion extends React.Component {
    // Metodo de la clase/componente que genera una tarea aleatoria a realizar
    generaTareaAzar()  {
        // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
        const randomNum = Math.floor(Math.random() * this.props.opciones.length);
        console.log(randomNum);
    }

    // Metodo Obligatorio
    render(){
        return (
         <div>
            {/* Usamos el metodo .bind() para que se pueda pasar el contexto al metodo de la clase*/}
            <button onClick={this.generaTareaAzar.bind(this)}>Que deberia Hacer?</button>
         </div>   
        );
    }
}

// Componente que renderea las opciones
class Opciones extends React.Component {
    // Hacemos un Overrride al Constructor de la clase
    constructor(props) {
        // Llama al constructor de la super clase para que herede los metodos del constructor padre
        super(props);
        // Corregir el contexto para llamar al objeto this en los metodos de la clase/componente
        this.borrarTodo = this.borrarTodo.bind(this);
    } 
    
    // Metodo de la clase/componente que remueve las opciones
    borrarTodo() {
        alert('Borrars Auch');
        console.log(this.props.opciones);
    }

    // Metodo Obligatorio del JSX que escupe el componente
    render(){
        return (
            <div>
                {/* Buton que remueve las opciones*/}
                <button onClick={this.borrarTodo} > Borrar todas la opciones</button>
                {/* Usando Pops con arreglos y funcion de map para desplegar elementos de un arreglo en el componente
                Rendereo del subcomente opcion */}
                {
                    this.props.opciones.map((elemento) => {
                        return <Opcion key={elemento} currentOpcion = {elemento} />
                    })
                }
            </div>
        );
    }
}

// Componente de una sola opcion que sera rendereado dentro de la clase de Opciones
class Opcion extends React.Component {
    render() {
        return (
            <div>
                {this.props.currentOpcion}
            </div>
        );
    }
}

// Componente que renderea la forma con los input y el submit para aniadir opciones que hacer
class AniadeOpcion extends React.Component {
    // Metodo que se encarga de ver la logica del submit de la Form 
    // IMPORTANTE la e hace referencia al evento de submit de la forma
    onFormSubmit (e) {
        // Hace que no se haga un rendereo completo de la pagina otra vez
        e.preventDefault();
        // Recuperar el valor que typeo el usuario en el input
        const opcionAniadir = e.target.elements.opcionNueva.value.trim();
        if(opcionAniadir){
            alert('Quisiste aniadir una opcion');
        }
    }

    // Rendereo del JSX
    render() {
        return (
            <div>
                <form onSubmit={ this.onFormSubmit }>
                    <input type="text" name="opcionNueva"/>
                    <button>Aniade Opcion</button>
                </form>
            </div>
        );
    }
}


// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));