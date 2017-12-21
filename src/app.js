// Componente padre donde rendearemos todo
class IndecisionApp extends React.Component {
    // Rendereo de JSX
    render() {
        return (
            <div>
                {/* Rendereo del Header definido usando la clase de Header de arriba se deben usar mayusculas para la primera letra*/}
                <Header/>
                {/* Rendereamos el componente de Accion */}
                <Accion />
                {/* Rendereamos el componente de opciones */}
                <Opciones />
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
                <h1>IndecisionApp</h1>
                <h2>Deja tu vida en las manos de una compu XD</h2>
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