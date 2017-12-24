// Importaciones necesarias para el componente third-party
import React from 'react';
import Modal from 'react-modal';

const OpcionModal = (props) => {
    
    /* Hacemos uso del componente modal*/
    /* Caracteristicas/props necesarias para que sirva*/
    return (
       <Modal
            isOpen= {!!props.opcionSeleccionada}
            contentLabel = "Opcion Seleccionada"
       >
            <h3>Opcion Seleccionada</h3>
       </Modal>
    )
};

// Exporaciones del componente
export default OpcionModal;