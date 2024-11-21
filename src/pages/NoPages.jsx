import React from 'react';
import { Link } from 'react-router-dom';
import './NoPages.css';  

const NoPage = () => {
  return (
    <div className="no-page">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};


export default NoPage;
