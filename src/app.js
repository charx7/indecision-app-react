// Importaciones para me salgan los metodos de react con intelij
import React from 'react';
import ReactDOM from 'react-dom';

console.log("App.js corre xD");

// JSX - Javascript XML
// Crear un objeto de app con titulo/subtitulo
// Solo renderear el subtitulo y la tag de p si el subtitulo existe - usando &&
// Renderear una tag de p - si hay items en el array entonces mostrar el tag o "No opciones" usando el terniario con ? con lenght
var app = {
    titulo: "Indecision App",
    subtitulo: "SubtituloXD",
    opciones: [
        'Uno',
        'Dos'
    ]
};

// Usar titulo/subtitulo en el template
var template = (
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


var nombreUsuario = "Carlos Huerta";
var edadUsuario = 27;
var ubicacionUsuario = "Puebla";

var usuario = {
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
var templateDos = (
    <div>
        <h1>{usuario.nombre ? usuario.nombre : 'Anonimo'}</h1>
        {(usuario.edad && usuario.edad >= 18) && <p>Edad: {usuario.edad}</p>}
        {obtenerLocacion()}
    </div>
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
var appRoot = document.getElementById('app');

// Render del template
ReactDOM.render(template, appRoot);
