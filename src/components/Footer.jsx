import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tienda Ropa. Todos los derechos reservados.</p>
        <p>
          <a href="/terms">Términos y condiciones</a> 
          <a href="/privacy">Política de privacidad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
