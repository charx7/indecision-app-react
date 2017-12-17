console.log("App.js corre xD");

// JSX - Javascript XML
var template = (
                <div>
                    <h1>Indecision App</h1>
                    <p>This is some info</p>
                    <ol>
                        <li>Item one</li>
                        <li>Item two</li>
                    </ol>
                </div>
            );

// Crear un template variable2 de JSX
var templateDos = (
    <div>
        <h1>Carlos Huerta</h1>
        <p>Age: 25</p>
        <p>Location: Puebla</p>
    </div>
);

var appRoot = document.getElementById('app');

// Render del primer template
//ReactDOM.render(template, appRoot);
ReactDOM.render(templateDos, appRoot);