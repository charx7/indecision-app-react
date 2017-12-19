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
    opciones: [
        'Uno',
        'Dos'
    ]
};

// Funcion que se encarga de cargar los eventos de submit de la forma
const onFormSubmit = (e) => {
    // Hace que no se haga un rendereo completo de la pagina otra vez
    e.preventDefault();
    console.log("forma submited");

};

// Usar titulo/subtitulo en el template
const template = (
    <div>
        <h1>{app.titulo}</h1>
            {app.subtitulo && <p>{app.subtitulo}</p>}
            {app.opciones.length > 0 ? <p>Sus opciones son</p>: <p>No tiene opciones</p> }
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>

            <form onSubmit={ onFormSubmit }>
                <input type="text" name="opcion"/>
                <button>Aniade Opcion</button>
            </form>
    </div>
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
const appRoot = document.getElementById('app');

// Rendereo de la app
ReactDOM.render(template, appRoot);