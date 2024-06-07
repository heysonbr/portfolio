import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export default function Layout({ children }) {
  const refs = {
    proyectos: useRef(null),
    descripcion: useRef(null),
    stack: useRef(null),
    // Agrega aquí las referencias para las demás secciones
  };

  const executeScroll = (section) => refs[section].current.scrollIntoView({ behavior: 'smooth' });

  return (
    <ScrollContext.Provider value={executeScroll}>
      {children}
    </ScrollContext.Provider>
  );
}