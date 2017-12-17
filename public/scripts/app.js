"use strict";

console.log("App.js corre xD");

// JSX - Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
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

// Crear un template variable2 de JSX
var templateDos = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Carlos Huerta"
    ),
    React.createElement(
        "p",
        null,
        "Age: 25"
    ),
    React.createElement(
        "p",
        null,
        "Location: Puebla"
    )
);

var appRoot = document.getElementById('app');

// Render del primer template
//ReactDOM.render(template, appRoot);
ReactDOM.render(templateDos, appRoot);
