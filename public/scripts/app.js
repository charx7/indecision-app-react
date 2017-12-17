"use strict";

console.log("App.js corre xD");

// JSX - Javascript XML
// Crear un objeto de app con titulo/subtitulo
var app = {
    titulo: "Indecision App",
    subtitulo: "SubtituloXD"
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
    React.createElement(
        "p",
        null,
        app.subtitulo
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

var nombreUsuario = "Carlos Huerta";
var edadUsuario = 27;
var ubicacionUsuario = "Puebla";

var usuario = {
    nombre: "Charx",
    edad: 25,
    ubicacion: "algunLugarXD"
};

// Crear un template variable2 de JSX
var templateDos = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        nombreUsuario.toUpperCase() + "!"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        usuario.edad
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        ubicacionUsuario
    )
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
var appRoot = document.getElementById('app');

// Render del template
ReactDOM.render(template, appRoot);
