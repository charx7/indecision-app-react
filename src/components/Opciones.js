import React from 'react';
import Opcion from './Opcion';

// Componente funcional sin estado de Opciones
const Opciones = (props) => {
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header-titulo'>Tus Opciones</h3>
                {/* Buton que remueve las opciones*/}
                <button onClick={props.metodoBorrarTodoOpciones} className='botones botones--link' > Borrar todas la opciones</button>
            </div>
            {/* Parrafo que se renderea cuando las opciones estan vacias*/}
            {props.opciones.length == 0 &&
                <div className='widget-header-mensaje'> 
                    <p>
                        Aniada una opcion de cosas que hacer!
                    </p>
                </div>
            }
            {/* Usando Pops con arreglos y funcion de map para desplegar elementos de un arreglo en el componente
            Rendereo del subcomente opcion */}
            {
                props.opciones.map((elemento, index) => {
                    return <Opcion 
                        key={elemento} 
                        currentOpcion = {elemento}
                        contador = {index + 1}
                        metodoBorrarOpcionIndividual = {props.metodoBorrarOpcionIndividual} 
                        />
                })
            }
        </div>
    );
};

// Exportaciones
export default Opciones;

// // Componente que renderea las opciones
// class Opciones extends React.Component {
//     // CODIGO VIEJO QUE EJEMPLIFICA COMO BINDEAR LOS METODOS PARA USAR THIS
//     // // Hacemos un Overrride al Constructor de la clase
//     // constructor(props) {
//     //     // Llama al constructor de la super clase para que herede los metodos del constructor padre
//     //     super(props);
//     //     // Corregir el contexto para llamar al objeto this en los metodos de la clase/componente
//     //     this.borrarTodo = this.borrarTodo.bind(this);
//     // } 
    
//     // // Metodo de la clase/componente que remueve las opciones
//     // borrarTodo() {
//     //     alert('Borrars Auch');
//     //     console.log(this.props.opciones);
//     // }


//     // Metodo Obligatorio del JSX que escupe el componente
//     render(){
//         return (
//             <div>
//                 {/* Buton que remueve las opciones*/}
//                 <button onClick={this.props.metodoBorrarTodoOpciones} > Borrar todas la opciones</button>
//                 {/* Usando Pops con arreglos y funcion de map para desplegar elementos de un arreglo en el componente
//                 Rendereo del subcomente opcion */}
//                 {
//                     this.props.opciones.map((elemento) => {
//                         return <Opcion key={elemento} currentOpcion = {elemento} />
//                     })
//                 }
//             </div>
//         );
//     }
// }
