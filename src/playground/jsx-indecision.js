// Importaciones para me salgan los metodos de react con intelij
//import React from 'react';
//import ReactDOM from 'react-dom';

console.log("App.js corre xD");

// JSX - Javascript XML
// Crear un objeto de app con titulo/subtitulo
// Solo renderear el subtitulo y la tag de p si el subtitulo existe - usando &&
// Renderear una tag de p - si hay items en el array entonces mostrar el tag o "No opciones" usando el terniario con ? con lenght
const app = {
    titulo: "Indecision App",
    subtitulo: "SubtituloXD",
    opciones: []
};

// Funcion que se encarga de cargar los eventos de submit de la forma
const onFormSubmit = (e) => {
    // Hace que no se haga un rendereo completo de la pagina otra vez
    e.preventDefault();
    // Recuperar el valor que typeo el usuario en el input
    const opcion = e.target.elements.opcion.value;
    // Verificamos si hay contenido dentro de la forma
    if(opcion){
        // Aniadimos el elemento que se recupero de la forma a las opciones
        app.opciones.push(opcion);
        // Hacemos que el elemento que tomamos de la forma sea "" vacio
        e.target.elements.opcion.value = '';
        // Hacemos un llamado a la funcion para re-rendereo
        renderearPaginaJSX();
    } 

};

// Logica del boton que limpia el arreglo de opciones
const reset = () => {
    // Hace que el arreglo de opciones se vuelva vacio
    app.opciones = [];
    // Re-Renderea la pagina
    renderearPaginaJSX();
};

// Funcion que genera un numero aleatorio para tomar un elemento de un arreglo de opciones y despliega
const tomarDecision = () => {
    // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
    const randomNum = Math.floor(Math.random() * app.opciones.length);
    // Lo selecciona del arreglo de opciones
    const opcionSeleccionada = app.opciones[randomNum];
    alert(opcionSeleccionada);
};

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
const appRoot = document.getElementById('app');

// Funcion que renderea la pagina
const renderearPaginaJSX= () => {

    // Usar titulo/subtitulo en el template
    const template = (
        <div>
            <h1>{app.titulo}</h1>
                {app.subtitulo && <p>{app.subtitulo}</p>}
                {app.opciones.length > 0 ? <p>Sus opciones son</p>: <p>No tiene opciones</p> }
                <button disabled={app.opciones.length === 0} onClick={tomarDecision}>Que deberia hacer?</button>
                <button id="my-id" className="boton" onClick={reset}>Remover Todo</button>
                <ol>
                    {/* Utiliza los elementos del arreglo y la funcion map para renderear una serie de list*/}
                    {
                        app.opciones.map((elemento) =>{
                            return <li key={elemento}>El elemento es: {elemento}</li> ;
                        })
                    }
                </ol>
                <form onSubmit={ onFormSubmit }>
                    <input type="text" name="opcion"/>
                    <button>Aniade Opcion</button>
                </form>
        </div>
    );

    // Rendereo de la app
    ReactDOM.render(template, appRoot);

};

// Llamado a la funcion para que se rendere la pagina
renderearPaginaJSX();