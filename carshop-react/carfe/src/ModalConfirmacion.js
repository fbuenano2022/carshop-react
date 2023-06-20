import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalConfirmacion({ mostrar, onConfirmar, onCancelar }){

return(
         ///* Modal */}
            // Modal de confirmación */
            <Modal show={mostrar} onHide={onCancelar}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmar</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>¿Seguro que todos los datos están correctos?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={onCancelar}>
                  No
                </Button>
                <Button variant="primary" onClick={onConfirmar}>
                  Sí
                </Button>
              </Modal.Footer>
            </Modal>  
);
};

export default  ModalConfirmacion;