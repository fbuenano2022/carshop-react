import React from 'react';
import { Modal, Button } from 'react-bootstrap';


import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});
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