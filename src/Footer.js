import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer;
