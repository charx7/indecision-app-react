// Importaciones necesarias para el componente third-party
import React from 'react';
import Modal from 'react-modal';

// Establecer para saber cual es el elemento APP en el HTML
Modal.setAppElement('#app');

const OpcionModal = (props) => {
    
    /* Hacemos uso del componente modal*/
    /* Caracteristicas/props necesarias para que sirva*/
    return (
       <Modal
            isOpen= {!!props.opcionSeleccionada}
            contentLabel = "Opcion Seleccionada"
       >
            <h3>Opcion Seleccionada</h3>
            {/* Renderea un parrafo con la opcion seleccionada si existe*/}
            {props.opcionSeleccionada && <p>{props.opcionSeleccionada}</p>}
            {/* Buton para cerrar el Modal*/}
            <button
                onClick = {props.metodoCerrarModal}
            >
                OK
            </button>
       </Modal>
    )
};

// Exporaciones del componente
export default OpcionModal;