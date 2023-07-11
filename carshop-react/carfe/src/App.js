
import Header from './Header';
import Footer  from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormularioCliente from './FormularioCliente';
import FormularioVehiculo from './FormularioVehiculo';
import FormularioServicio from './FormularioServicio';
import FomularioOrdenTrabajo from './FomularioOrdenTrabajo';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ClienteProvider } from './ContextoCliente';
import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});

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
          
        <CSSTransition in={mostrarFormularioCliente} timeout={500} classNames="fade">
             <div>
             {<FormularioCliente mostrarFormularioVehiculos={toggleMostrarFormularioVehiculos}/>} 
             </div>
             
         </CSSTransition>
         <CSSTransition in={mostrarFormularioVehiculo} timeout={500} classNames="fade">
            <div>
            {<FormularioVehiculo mostrarFormularioServicios={toggleMostrarFormularioServicios} />}
            </div>
         </CSSTransition>
         <CSSTransition in={mostrarFormularioServicios} timeout={500} classNames="fade">
            <div>
            {<FormularioServicio mostrarOrdenTrabajo = {toggleMostrarOrdenTrabajo} />}    
            </div>
            </CSSTransition>
          <CSSTransition in={mostrarOrdenTrabajo} timeout={500} classNames="fade">
          <FomularioOrdenTrabajo />
            <div>
            {<FomularioOrdenTrabajo  />}   
            </div>
            </CSSTransition> 
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


