import React, { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Proyecto - Prueba Practica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contacto
                </a>
              </li>
            </ul> */}
            {}
            <button
              className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} ms-auto`}
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
