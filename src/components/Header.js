import React from 'react';

// // Hacemos un componente de Hader extendiendo de la clase componente de react
// class Header extends React.Component {
//     // Metodo para definir obligatorio
//     render() {
//         return (
//             <div>
//                 {/* Usando props para mandar una variable de JS al rendereo del componente*/}
//                 <h1>{this.props.titulo}</h1>
//                 <h2>{this.props.subTitulo}</h2>
//             </div>
//         );
//     }
// }

// Componente de Header como componente funcional sin estado
const Header = (props) =>{
    // Rendereo del HTML (JSX) en este tipo de componentes se obtiene acceso a los props de manera directa 
    // sin hacer referencia a this.props => props
    return (
        <div className= "header">
            {/* Usando props para mandar una variable de JS al rendereo del componente*/}
            <h1>{props.titulo}</h1>
            {/* Renderio del subtitulo solo si existe*/}
            {props.subTitulo && <h2>{props.subTitulo}</h2>}
        </div>
    );
};

// Props de Default para el componente de Header
Header.defaultProps = {
    titulo: 'Indecision'
};

// Exportaciones
export default Header;
