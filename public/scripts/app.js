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

// Funcion que se encarga de cargar los eventos de submit de la forma
var onFormSubmit = function onFormSubmit(e) {
    // Hace que no se haga un rendereo completo de la pagina otra vez
    e.preventDefault();
    console.log("forma submited");
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
    ),
    React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "opcion" }),
        React.createElement(
            "button",
            null,
            "Aniade Opcion"
        )
    )
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
var appRoot = document.getElementById('app');

// Rendereo de la app
ReactDOM.render(template, appRoot);
