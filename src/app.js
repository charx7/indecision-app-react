console.log("App.js corre xD");

// JSX - Javascript XML
// Crear un objeto de app con titulo/subtitulo
var app = {
    titulo: "Indecision App",
    subtitulo: "SubtituloXD"
};
// Usar titulo/subtitulo en el template
var template = (
    <div>
        <h1>{app.titulo}</h1>
            <p>{app.subtitulo}</p>
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
    ubicacion: "algunLugarXD"
};

// Crear un template variable2 de JSX
var templateDos = (
    <div>
        <h1>{nombreUsuario.toUpperCase() + "!"}</h1>
        <p>Age: {usuario.edad}</p>
        <p>Location: {ubicacionUsuario}</p>
    </div>
);

// Identifica el documento del DOM del HTML donde se aplciaran los cambios
var appRoot = document.getElementById('app');

// Render del template
ReactDOM.render(template, appRoot);