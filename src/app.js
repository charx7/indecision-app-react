// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// Codigo de ejemplo para las nuevas propiedades de clase
class OldSyntax {
    constructor () {
        this.name = 'Charx';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `hola me llamo: ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreet = oldSyntax.getGreeting;
console.log(getGreet() + ' XD');

// Nueva manera de syntaxis de clases
 class NewSyntax {
    name = "Charx2";
    getGreeting = () =>{
        return `hola me llamo: ${this.name}`;
    }
 }

 const newSyntax = new NewSyntax;
 const newGreet = newSyntax.getGreeting;
 console.log(newGreet());

// Codigo para configurar el linter .eslintrc
//"extends": "eslint:recommended",
