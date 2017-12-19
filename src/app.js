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
    </div>
);


const nombreUsuario = "Carlos Huerta";
const edadUsuario = 27;
const ubicacionUsuario = "Puebla";

const usuario = {
    nombre: "Charx",
    edad: 25,
    ubicacion: "Algun Lugar XD"
};

// Funcion que se utiliza para renderear un objeto en el template de JSX condicionalmente
function obtenerLocacion() {
    if(usuario.ubicacion != null){
        return <p>Ubicacion: {usuario.ubicacion}</p>;
    } else {
        return undefined;
    }
}

// Crear un template variable2 de JSX
const templateDos = (
    <div>
        <h1>{usuario.nombre ? usuario.nombre : 'Anonimo'}</h1>
        {(usuario.edad && usuario.edad >= 18) && <p>Edad: {usuario.edad}</p>}
        {obtenerLocacion()}
    </div>
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
const appRoot = document.getElementById('app');

// Render del template
ReactDOM.render(template, appRoot);
