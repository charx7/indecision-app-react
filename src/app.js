// Componente padre donde rendearemos todo
class IndecisionApp extends React.Component {
    // Rendereo de JSX
    render() {
        // Para titulo dinamico
        const tituloProps = 'Indecision-App';
        const subTituloProps = 'Deja tu vida en las manos de una compu XD';
        const opcionesProps = ["opcion1", "opcion2"];

        return (
            <div>
                {/* Rendereo del Header definido usando la clase de Header de arriba se deben usar mayusculas para la primera letra
                y ademas usando props para el titulo y subtitulo*/}
                <Header titulo={tituloProps} subTitulo={subTituloProps}/>
                {/* Rendereamos el componente de Accion */}
                <Accion />
                {/* Rendereamos el componente de opciones */}
                <Opciones opciones={opcionesProps} />
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
    // Metodo Obligatorio
    render(){
        return (
         <div>
            <button>Que deberia Hacer?</button>
         </div>   
        );
    }
}

// Componente que renderea las opciones
class Opciones extends React.Component {
    // Metodo Obligatorio del JSX que escupe el componente
    render(){
        return (
            <div>
                {this.props.opciones.length}
                <p>La lista de opciones va aca</p>
                {/* Rendereo del subcomente opcion*/}
                <Opcion />
            </div>
        );
    }
}

// Componente de una sola opcion que sera rendereado dentro de la clase de Opciones
class Opcion extends React.Component {
    render() {
        return (
            <div>
                <p>Hola k ase una opcion o k ase</p>
            </div>
        );
    }
}

// Componente que renderea la forma con los input y el submit para aniadir opciones que hacer
class AniadeOpcion extends React.Component {
    // Rendereo del JSX
    render() {
        return (
            <div>
                <p>Aqui va a ir la forma de aniadir opciones</p>
            </div>
        );
    }
}


// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));