import React, { useContext,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import { Modal, Button } from 'react-bootstrap';
import ModalConfirmacion from './ModalConfirmacion'
import {ContextoCliente} from './ContextoCliente';



function FormularioServicio({mostrarOrdenTrabajo}) {
  const [servicios, setServicios] = useState([]); // Estado para almacenar los servicios seleccionados
  const [mostrarModal, setMostrarModal] = useState(false);

  const { cliente, setCliente } = useContext(ContextoCliente);

  const listaServicios = [
    'Cambio de aceite',
    'Cambio de frenos',
    'Alineación y balanceo',
    'Diagnóstico general',
    'Revisión sistema eléctrico',
    'Revisión de suspensión',
   
  ]; // Lista de servicios disponibles

  // Función para manejar el cambio de selección de un servicio
  const handleServicioChange = (event) => {
    const servicioSeleccionado = event.target.value;
    if (event.target.checked) {
      // Agregar el servicio a la lista de servicios seleccionados
      setServicios([...servicios, servicioSeleccionado]);
    } else {
      // Remover el servicio de la lista de servicios seleccionados
      setServicios(servicios.filter((servicio) => servicio !== servicioSeleccionado));
    }
  };
  const handleSubmit = (event) => {

    event.preventDefault();
    // Lógica para enviar los datos del formulario
    
    // Mostrar el modal
    setMostrarModal(true);  



  };
  const handleConfirmacionSi =()=>{
    // Lógica para capturar los servicios seleccionados
    //const serviciosSeleccionados = listaServicios.filter(servicio => servicios.includes(servicio));

     setCliente((prevCliente) => ({
      ...prevCliente,
      serviciosSeleccionados:servicios
    }));
    console.log('ss',servicios)
    console.log('conte ser ', cliente); 

    /* setCliente((prevCliente) => {
      const nuevoCliente = {
        ...prevCliente,
        serviciosSeleccionados: servicios
      };
    
      console.log('ss', servicios);
      console.log('conte ser ', nuevoCliente);
    
      // Restablecer el estado de los servicios
      //setServicios([]);
    
      return nuevoCliente;
    }); */
        // Restablecer el estado o realizar cualquier otra acción necesaria
    
    setServicios([]);

mostrarOrdenTrabajo();

    setMostrarModal(false);
  }
  const handleConfirmacionNo =()=>{
// Ocultar la ventana de confirmación
      setMostrarModal(false);
  }
  /*
  return (
    <div className="container " style={{ marginTop: '3rem' }}>          
        <div className="row justify-content-center ">
            <div className="col-lg-6">
              <div className="text-center" >
                <h2>Seleccione los servicios</h2>
              </div>
              <div className="list-group">
                  {listaServicios.map((servicio, index) => (
                    <div key={servicio} className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={servicio}
                        checked={servicios.includes(servicio)}
                        onChange={handleServicioChange}
                        id={`servicio-${index}`}
                      />
                      <label className={`form-check-label ${servicios.includes(servicio) ? 'text-primary' : 'text-secondary'}`} htmlFor={`servicio-${index}`}>
                        {servicio}
                      </label>
                    </div>
                  ))}
                  </div>
                  <div className="text-center mt-2" >
                    <h3>Servicios seleccionados</h3>
                  </div>                  
                  <div className="mt-2">
                    <ul className="list-group ">
                      {servicios.map((servicio, index) => (
                        <li key={index} className="list-group-item list-group-item-success">
                          {servicio}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
               </div>
        </div>
      
  );*/
  return (
    <form  onSubmit={handleSubmit} >
        <div className="container" style={{ marginTop: '1rem' }}>
          <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h2>Servicios Disponibles</h2>
              </div>
            </div>
        <div className="row justify-content-center text-center">
          
          {listaServicios.map((servicio, index) => (
            <div key={servicio} className="col-lg-3 col-md-4 col-sm-6">
              
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={servicio}
                  checked={servicios.includes(servicio)}
                  onChange={handleServicioChange}
                  id={`servicio-${index}`}
                />
                <label className={`form-check-label ${servicios.includes(servicio) ? 'text-primary' : 'text-secondary'}`} htmlFor={`servicio-${index}`}>
                  {servicio}
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-2">
          <h3>Servicios seleccionados</h3>
        </div>
        <div className="mt-2">
          <ul className="list-group">
            {servicios.map((servicio, index) => (
              <li key={index} className="list-group-item list-group-item-success">
                {servicio}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-4" >
                    <button className="btn btn-primary" type="submit">Crear Servicios</button>
                </div>

                <ModalConfirmacion
            mostrar={mostrarModal}
            onConfirmar={handleConfirmacionSi}
            onCancelar={handleConfirmacionNo}
          />
      </div>

  </form>
  );
  
}

export default FormularioServicio;
