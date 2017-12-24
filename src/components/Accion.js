import React from 'react';


// Compenente de Accion como stateless-funcional en lugar de clase
const Accion = (props) => {
    // Codigo que renderea el HTML como returno del componente funcional
    return (
        <div>
            {/* Usamos el metodo .bind() para que se pueda pasar el contexto al metodo de la clase*/}
            <button
                onClick={props.metodoGeneraTareaAzar}
                disabled = {!props.tieneOpciones}
                >
                Que deberia Hacer?
            </button>
        </div>
    );
};

// // Ahora creamos una clase (componente de react) para procesar un accion
// class Accion extends React.Component {
//     // CODIGO VIEJO QUE EJEMPLIFICA COMO HACER UNA SELECCION AL AZAR DE UN ELEMENTO DEL ARREGLO PROP OPCIONES
//     // // Metodo de la clase/componente que genera una tarea aleatoria a realizar
//     // generaTareaAzar()  {
//     //     // Genera numero aleatorio entre 0 y n - 1 del lenght del arreglo de opciones 
//     //     const randomNum = Math.floor(Math.random() * this.props.opciones.length);
//     //     console.log(randomNum);
//     // }

//     // Metodo Obligatorio
//     render(){
//         return (
//          <div>
//             {/* Usamos el metodo .bind() para que se pueda pasar el contexto al metodo de la clase*/}
//             <button
//                  onClick={this.props.metodoGeneraTareaAzar}
//                  disabled = {!this.props.tieneOpciones}
//             >
//                 Que deberia Hacer?
//             </button>
//          </div>   
//         );
//     }
// }

// Exportaciones
export default Accion;
