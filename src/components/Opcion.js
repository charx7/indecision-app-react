import React from 'react';

// Componente funcional de una sola opcion
const Opcion = (props) => {
    return (
        <div>
            {props.currentOpcion}
            <button
                className='botones botones--link' 
                onClick={(e) => {
                    {/* Hace que se pase el argumento de props a la funcion que borra la opcion*/}
                    props.metodoBorrarOpcionIndividual(props.currentOpcion);
                }}
            >
                Eliminar
            </button>
        </div>
    );
};

// Exportaciones
export default Opcion;

// // Componente de una sola opcion que sera rendereado dentro de la clase de Opciones
// class Opcion extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.currentOpcion}
//             </div>
//         );
//     }
// }

