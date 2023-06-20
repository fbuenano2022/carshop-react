
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ModalConfirmacion from './ModalConfirmacion'
//import { Modal, Button } from 'react-bootstrap';
import React, { useContext , useState  } from 'react';
//contexto
import { ContextoCliente } from './ContextoCliente';



function FormularioCliente({mostrarFormularioVehiculos}){
    const [nombreCliente, setNombreCliente] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [identificacion, setIdentificacion] = useState('');
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [clientes, setClientes] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    
    const { cliente, setCliente } = useContext(ContextoCliente);

    //console.log('prueba');
    //const clientesAnterioresRef = useRef([]);

   /*  useEffect(() => {
      console.log('Clientes actualizados:', clientes);
    }, [clientes]);
  
    useEffect(() => {
      console.log('Clientes anteriores:', clientesAnterioresRef.current);
      clientesAnterioresRef.current = clientes;
    }, [clientes]);
    
 */
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nombreCliente);
        console.log(tipoIdentificacion);
        // Validar los campos antes de enviar el formulario
        if (!nombreCliente || !email || !telefono || !identificacion || !tipoIdentificacion) {
            alert('Por favor, completa todos los campos');
            return;
          }
      // Mostrar el modal
      setMostrarModal(true);        
    }

    const handleConfirmacionSi = () => {
      const nuevoCliente = {
        nombreCliente,
        email,
        telefono,
        identificacion,
        tipoIdentificacion
      };

       setCliente((prevCliente) => ({
        ...prevCliente,
        ...nuevoCliente
        
      }));
      
       // Restablecer los valores de los campos después de enviar el formulario
      setNombreCliente('');
      setEmail('');
      setTelefono('');
      setIdentificacion('');
      setTipoIdentificacion('Seleccione uno por favor'); 

        // Mostrar el siguiente formulario de vehículos
      mostrarFormularioVehiculos();

        // Ocultar el modal
      setMostrarModal(false);
    }

    const handleConfirmacionNo = () => {
      // Ocultar la ventana de confirmación
      setMostrarModal(false);
    }

    return(
        <div className="container " style={{ marginTop: '4rem' }}>          
          <div className="row justify-content-center">
          
              <div className="col-lg-6">
              <div className="text-center" >
              <h1>Datos del Cliente</h1>
              </div>
            <form  className='border p-4 rounded-4' onSubmit={handleSubmit}>
                  {/* Agrega los campos de tu formulario */}
                  <div className="form-group ">
                    <label htmlFor='Nombre_Cliente' className="fw-bold" >Nombre del Cliente</label>
                    <input className="form-control" type="text" value={nombreCliente} onChange={(e) => setNombreCliente(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor='email' className="fw-bold" >Email</label>
                    <input className="form-control"id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor='telefono' className="fw-bold"  >Telefono</label>
                    <input className="form-control" id="telefono"  type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor='identificacion' className="fw-bold"                    
                    >Identificacion</label>
                    <input id ="identificacion" className="form-control" 
                    maxLength={10}
                    pattern="[0-9]*" type="number"  value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor='tipodeIdentificacion'  className="fw-bold">Tipo de Identificacion</label>
                    <select className="form-select"  aria-label="Default select example" value={tipoIdentificacion} onChange={(e) => setTipoIdentificacion(e.target.value)} required>
                      <option selected>Seleccione uno por favor</option>
                      <option value="CEDULA">CEDULA</option>
                      <option value="RUC">RUC</option>
                      <option value="PASAPORTE">PASAPORTE</option>
                    </select>
                  </div>
                  {/* Agrega más campos según tus campos de formulario */}
                  <div className="text-center mt-4" >
                    <button className="btn btn-primary" type="submit">Crear Cliente</button>
                </div>
                  
                </form>
              </div>
              
            </div>
           {/* Modal de confirmación */}
          <ModalConfirmacion
            mostrar={mostrarModal}
            onConfirmar={handleConfirmacionSi}
            onCancelar={handleConfirmacionNo}
          />

            {/* <div>
      <h2>Clientes:</h2>
      <pre>{JSON.stringify(clientes, null, 2)}</pre>
    </div> */}
    </div>

    
    );

};
export default  FormularioCliente;