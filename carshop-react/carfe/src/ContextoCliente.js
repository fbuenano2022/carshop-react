import React, { createContext, useState } from 'react';
import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});
// Crea el contexto
export const ContextoCliente = createContext();

// Crea el proveedor del contexto
export const ClienteProvider = ({ children }) => {
  const [cliente, setCliente] = useState({
    nombreCliente: '',
    email: '',
    telefono: '',
    identificacion: '',
    tipoIdentificacion: '',
    // Agrega los campos del formulario de vehículo
    marca: '',
    modelo: '',
    placa: '',
    nivelGasolina: '',
    estadoExterior: '',
    //servicios
    serviciosSeleccionados: []
  });

  return (
    <ContextoCliente.Provider value={{ cliente, setCliente }}>
      {children}
    </ContextoCliente.Provider>
  );
};
