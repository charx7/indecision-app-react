"use strict";

// Importaciones para me salgan los metodos de react con intelij
//import React from 'react';
//import ReactDOM from 'react-dom';

console.log("App.js corre xD");

// JSX - Javascript XML
// Crear un objeto de app con titulo/subtitulo
// Solo renderear el subtitulo y la tag de p si el subtitulo existe - usando &&
// Renderear una tag de p - si hay items en el array entonces mostrar el tag o "No opciones" usando el terniario con ? con lenght
var app = {
    titulo: "Indecision App",
    subtitulo: "SubtituloXD",
    opciones: ['Uno', 'Dos']
};

// Usar titulo/subtitulo en el template
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.titulo
    ),
    app.subtitulo && React.createElement(
        "p",
        null,
        app.subtitulo
    ),
    app.opciones.length > 0 ? React.createElement(
        "p",
        null,
        "Sus opciones son"
    ) : React.createElement(
        "p",
        null,
        "No tiene opciones"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

// Ejercicio del contador
var contador = 0;
// Funcion que llama el template2 para sumar
var sumaUno = function sumaUno() {
    return console.log("suma 1");
};
// Otra forma de hacer una funcion arrow
var restaUno = function restaUno() {
    console.log("resta1");
};
var reset = function reset() {
    return console.log("reset");
};

var templateDos = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Contador: ",
        contador
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "boton", onClick: sumaUno },
        "+1"
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "boton", onClick: restaUno },
        "-1"
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "boton", onClick: reset },
        "Reset"
    )
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
var appRoot = document.getElementById('app');

// Render del template
ReactDOM.render(templateDos, appRoot);

// ==============EJERCICIO==================================================================
// const nombreUsuario = "Carlos Huerta";
// const edadUsuario = 27;
// const ubicacionUsuario = "Puebla";

// const usuario = {
//     nombre: "Charx",
//     edad: 25,
//     ubicacion: "Algun Lugar XD"
// };

// // Funcion que se utiliza para renderear un objeto en el template de JSX condicionalmente
// function obtenerLocacion() {
//     if(usuario.ubicacion != null){
//         return <p>Ubicacion: {usuario.ubicacion}</p>;
//     } else {
//         return undefined;
//     }
// }

// // Crear un template variable2 de JSX
// const templateDos = (
//     <div>
//         <h1>{usuario.nombre ? usuario.nombre : 'Anonimo'}</h1>
//         {(usuario.edad && usuario.edad >= 18) && <p>Edad: {usuario.edad}</p>}
//         {obtenerLocacion()}
//     </div>
// );
