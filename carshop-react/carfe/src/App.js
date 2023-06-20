
import Header from './Header';
import Footer  from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormularioCliente from './FormularioCliente';
import FormularioVehiculo from './FormularioVehiculo';
import FormularioServicio from './FormularioServicio';
import FomularioOrdenTrabajo from './FomularioOrdenTrabajo';
import React, { useState } from 'react';

import { ClienteProvider } from './ContextoCliente';


//import React, { useState } from 'react';

function App() {
  const [mostrarFormularioCliente, setMostrarFormulario] = useState(false);
  const [mostrarFormularioVehiculo, setMostrarFormularioVehiculo] = useState(false); 

  //const [formularioActual, setFormularioActual] = useState('cliente');
  const [mostrarFormularioServicios , setMostrarFormularioServicios] = useState(false);
  const [mostrarOrdenTrabajo , setMostrarOrdenTrabajo] = useState(false);

/*   const handlerMostrarFormularioCliente = () => {
    setFormularioActual('cliente');
  };

  const handlerMostrarFormularioVehiculos = () => {
    setFormularioActual('vehiculo');
  };
 */
 // console.log("fa ",formularioActual)
/*   useEffect(() => {
    console.log('FV', mostrarFormularioVehiculo);
  }, [mostrarFormularioVehiculo]);
 */
  const toggleMostrarFormulario  = () =>{
    setMostrarFormulario(!mostrarFormularioCliente);
    setMostrarFormularioVehiculo(false);
    setMostrarFormularioServicios(false);
    setMostrarOrdenTrabajo(false);
    console.log("form" + mostrarFormularioCliente);
  }

  const toggleMostrarFormularioVehiculos  = () =>{
    setMostrarFormulario(false);
    setMostrarFormularioVehiculo(!mostrarFormularioVehiculo);
    setMostrarFormularioServicios(false);
    console.log("formV" + mostrarFormularioVehiculo);
  } 

   const toggleMostrarFormularioServicios  = () =>{
    setMostrarFormulario(false);
    setMostrarFormularioVehiculo(false);
    setMostrarFormularioServicios(!mostrarFormularioServicios)
    console.log("formS" + mostrarFormularioVehiculo);
  } 
  const toggleMostrarOrdenTrabajo  = () =>{
    setMostrarFormulario(false);
    setMostrarFormularioVehiculo(false);
    setMostrarFormularioServicios(false);
    setMostrarOrdenTrabajo(!mostrarOrdenTrabajo)

    console.log("formS" + mostrarFormularioVehiculo);
  } 

  return (

    <ClienteProvider>
    <div className="d-flex flex-column min-vh-100"> 
      
        <Header  estadoCliente={mostrarFormularioCliente} mostrarFormularioCliente={toggleMostrarFormulario} />
          
             {mostrarFormularioCliente && <FormularioCliente mostrarFormularioVehiculos={toggleMostrarFormularioVehiculos}/>} 
          
            {mostrarFormularioVehiculo && <FormularioVehiculo mostrarFormularioServicios={toggleMostrarFormularioServicios} />}

            {mostrarFormularioServicios && <FormularioServicio mostrarOrdenTrabajo = {toggleMostrarOrdenTrabajo} />}    

            {mostrarOrdenTrabajo && <FomularioOrdenTrabajo  />}    
           {/*  {formularioActual === 'cliente' && (
              <FormularioCliente mostrarFormularioVehiculos={handlerMostrarFormularioVehiculos} />
                )}

            {formularioActual === 'vehiculo' && <FormularioVehiculo />}    */}
          
        <div className="flex-grow-1"></div>
        <Footer className="mt-auto" />
    
    </div>

    </ClienteProvider>
  );
};

export default App;


