import React, { useContext,useState ,useEffect } from 'react';


import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});

function FomularioOrdenTrabajo() {
  const { cliente } = useContext(ContextoCliente);

  const [futureDate, setFutureDate] = useState('');
  const [hora, setHora] = useState('');

  const calculateFutureDate = () => {
    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + 5));
    const year = futureDate.getFullYear();
    const month = futureDate.getMonth() + 1;
    const day = futureDate.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const hour = futureDate.getHours(); // Obtener la hora actual
    const minute = futureDate.getMinutes(); // Obtener los minutos actuale
    const hora = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    setHora(hora);
    setFutureDate(formattedDate);
  };
  useEffect(() => {
    calculateFutureDate();
    console.log("ejecuto");
  }, []);

  return (
    <div className="container " style={{ marginTop: '2rem' }}>          
          <div className="row justify-content-center">          
              <div className="col-lg-8">
              <div className="text-center" >
                <h2>ORDEN DE TRABAJO</h2>
                </div>
                <div className="row mt-4" >
                <div className="col-md-6">
                <div className="mb-3">
                    <strong>Fecha de Entrega:</strong> {futureDate}
                  </div>
                  </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <strong>Hora de Entrega:</strong> {hora}
                  </div>
                </div>
                </div>
                <div className="row mt-1" >
                  <div className="col-md-6">
                    <h4>Información del Cliente</h4>
                    <div className="mb-3">
                      <strong>Nombre:</strong> {cliente.nombreCliente}
                    </div>
                    <div className="mb-3">
                      <strong>Email:</strong> {cliente.email}
                    </div>
                    <div className="mb-3">
                      <strong>Teléfono:</strong> {cliente.telefono}
                    </div>
                    <div className="mb-3">
                      <strong>Identificación:</strong> {cliente.identificacion}
                    </div>
                    <div className="mb-3">
                      <strong>Tipo de Identificación:</strong> {cliente.tipoIdentificacion}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4>Información del Vehículo</h4>
                    <div className="mb-3">
                      <strong>Marca:</strong> {cliente.marca}
                    </div>
                    <div className="mb-3">
                      <strong>Modelo:</strong> {cliente.modelo}
                    </div>
                    <div className="mb-3">
                      <strong>Placa:</strong> {cliente.placa}
                    </div>
                    <div className="mb-3">
                      <strong>Nivel de Gasolina:</strong> {cliente.nivelGasolina}
                    </div>
                    <div className="mb-3">
                      <strong>Estado Exterior:</strong> {cliente.estadoExterior}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4>Servicios Seleccionados</h4>
                  <ul className="list-group">
                    {cliente.serviciosSeleccionados.map((servicio, index) => (
                      <li key={index} className="list-group-item list-group-item-success">
                        {servicio}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
              </div>
              

  );
}

export default FomularioOrdenTrabajo;
