// Ejercicio del contador
let contador = 0;
// Funcion que llama el template2 para sumar
const sumaUno = () => {
    contador++;
    // Llamado a renderear ya que le sumamos uno al contador
    renderearContador();
};

// Otra forma de hacer una funcion arrow
const restaUno = () => {
    contador--;
    console.log("resta1");
    renderearContador();
};

// Reseteo del contador a 0
const reset = () => {
    contador = 0;
    renderearContador();
    console.log("reset");
};


// Renderear el contador
const renderearContador = () => {
    
    const templateDos = (
        <div>
            <h1>Contador: {contador}</h1>
            <button id="my-id" className="boton" onClick={sumaUno}>+1</button>
            <button id="my-id" className="boton" onClick={restaUno}>-1</button>
            <button id="my-id" className="boton" onClick={reset}>Reset</button>
        </div>
    );
    
    // Render del template
    ReactDOM.render(templateDos, appRoot);
};

// Llamado a la funcion para que se rendere la pagina
renderearContador();

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
