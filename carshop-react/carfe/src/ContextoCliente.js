import React, { createContext, useState } from 'react';

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
    serviciosSeleccionados: [] 
  });

  return (
    <ContextoCliente.Provider value={{ cliente, setCliente }}>
      {children}
    </ContextoCliente.Provider>
  );
};
