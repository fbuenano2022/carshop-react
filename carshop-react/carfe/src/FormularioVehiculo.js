import React, { useContext,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import { Modal, Button } from 'react-bootstrap';
import ModalConfirmacion from './ModalConfirmacion'
import {ContextoCliente} from './ContextoCliente';
import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});

function FormularioVehiculo({mostrarFormularioServicios}) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [nivelGasolina, setNivelGasolina] = useState('');
  const [estadoExterior, setEstadoExterior] = useState('');
  const [opcionesSecundarias, setOpcionesSecundarias] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  //const [vehiculos, setVehiculos] = useState([]);
  const marcas = ['CHEVROLET', 'FORD', 'TESLA','HYUNDAI','HONDA','KIA']; // Lista de marcas definida en React

  const { cliente, setCliente } = useContext(ContextoCliente);

  //console.log('vehi ciente',cliente)

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    
    // Mostrar el modal
    setMostrarModal(true);  
  };

  const handleMarca = (e) => {
    setMarca(e.target.value);

    // Actualizar las opciones del segundo select según la selección del primero
    if (e.target.value === 'CHEVROLET') {
      setOpcionesSecundarias(['VITARA', 'BEAT', 'CORSA']);
    } else if (e.target.value === 'FORD') {
      setOpcionesSecundarias(['FIESTA', 'MUSTANG', 'FORD 150']);
    } else if (e.target.value === 'TESLA') {
      setOpcionesSecundarias(['CYBERTRUCK', 'MODEL X', 'MODEL S']);
     } else if (e.target.value === 'HYUNDAI') {
        setOpcionesSecundarias(['TUCSON', 'H1', 'VERNA']);
     }else if (e.target.value === 'HONDA') {
          setOpcionesSecundarias(['CIVIC', 'CR-V', 'CONCERTO']);
      }else if (e.target.value === 'KIA') {
          setOpcionesSecundarias(['RIO', 'STYLUS', 'PICANTO']);
    } else {
      setOpcionesSecundarias([]);
    }
  };

  const handleConfirmacionSi = () => {
    const nuevoVehiculo ={
      marca,modelo,placa,nivelGasolina,estadoExterior
    } 
    //setVehiculos((prevClientes) => ({ ...prevClientes, [identificacion]: nuevoVehiculo }))
    //anado al contexto
    //setCliente([...cliente, nuevoVehiculo]);
    setCliente((prevCliente) => ({
      ...prevCliente,
      ...nuevoVehiculo
      
    }));
    
    // Mostrar el siguiente formulario de vehículos
    mostrarFormularioServicios();

      // Ocultar el modal
    setMostrarModal(false);
  }

  const handleConfirmacionNo = () => {
    // Ocultar la ventana de confirmación
    setMostrarModal(false);
  }
  return (

    <div className="container " style={{ marginTop: '3rem' }}>          
          <div className="row justify-content-center">
          
              <div className="col-lg-6">
              <div className="text-center" >
              <h1>Datos del Vehiculo</h1>
              </div>
            <form  className='border p-4 rounded-4' onSubmit={handleSubmit}>
                  {/* Agrega los campos de tu formulario */}
                 
                  <div className="form-group">
                    <label htmlFor='marca'  className="fw-bold">Marca</label>
                    <select id="marca" className="form-select"  aria-label="Default select example" value={marca} 
                     onChange={handleMarca} required>
                      <option value="">Seleccione uno por favor</option>
                        {marcas.map((marca, index) => (
                          <option key={index} value={marca}>
                            {marca}
                          </option>
                        ))}
                    </select>
                  </div>
                 
                  <div className="form-group mt-2">
                    <label htmlFor='modelo'  className="fw-bold">Modelo</label>
                    <select id="modelo" className="form-select"  aria-label="Default select example" value={modelo} onChange={(e) => setModelo(e.target.value)} required>
                      {/* Mostrar las opciones según la selección del primer select */}
                      {opcionesSecundarias.map((opcion, index) => (
                        <option key={index} value={opcion}>
                      {opcion}
                      </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor='placa' className="fw-bold"  >Placa</label>
                    <input id="placa" className="form-control"  type="text"  value={placa} onChange={(e) => setPlaca(e.target.value)} required/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor='nivelGasolina'  className="fw-bold">Nivel de Combustible</label>
                    <select id="nivelGasolina" className="form-select"  aria-label="Default select example" value={nivelGasolina} onChange={(e) => setNivelGasolina(e.target.value)} required>
                      <option selected>Seleccione uno por favor</option>
                      <option value="BAJO">BAJO</option>
                      <option value="MEDIO">MEDIO</option>
                      <option value="ALTO">ALTO</option>
                    </select>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor='exterior' className="fw-bold"  >Estado Exterior</label>
                  <textarea
                      id="exterior"
                      className="form-control"
                      value={estadoExterior}
                      onChange={(e) => setEstadoExterior(e.target.value)}
                    ></textarea>
                   </div>
                  
                  <div className="text-center mt-4" >
                    <button className="btn btn-primary" type="submit">Crear Vehiculo</button>
                </div>
                  
                </form>
              </div>
              
            </div>
            
            <ModalConfirmacion
            mostrar={mostrarModal}
            onConfirmar={handleConfirmacionSi}
            onCancelar={handleConfirmacionNo}
          />

            
    </div>

    
  );
}

export default FormularioVehiculo;
