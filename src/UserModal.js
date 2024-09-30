import React, { useState, useEffect } from "react";

const UserModal = ({ showModal, handleClose, editingUser, updateUser }) => {
  const [user, setUser] = useState({
    picture: { medium: "" },
    name: { first: "", last: "" },
    gender: "",
    location: { street: { name: "", number: "" }, nat: "" },
    cell: "",
    email: "",
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user);
    handleClose();
  };

  return (
    <div
      className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Usuario</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.name.first}
                  placeholder="Nombre"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: { ...user.name, first: e.target.value },
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.name.last}
                  placeholder="Apellido"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: { ...user.name, last: e.target.value },
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Género</label>
                <select
                  className="form-select"
                  value={user.gender}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                >
                  <option value="">Selecciona un género</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Número de Calle</label>
                <input
                  type="text"
                  className="form-control"
                  value={
                    user.location.street ? user.location.street.number : ""
                  }
                  placeholder="Número de Calle"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      location: {
                        ...user.location,
                        street: {
                          ...user.location.street,
                          number: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre de Calle</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.location.street ? user.location.street.name : ""}
                  placeholder="Nombre de Calle"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      location: {
                        ...user.location,
                        street: {
                          ...user.location.street,
                          name: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pais</label>
                <select
                  className="form-select"
                  value={user.location.country}
                  onChange={(e) => setUser({ ...user, location: { ...user.location, country: e.target.value }})}
                >
                  <option value="">Selecciona un Pais</option>
                  <option value="United States">Estados Unidos</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Celular</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.cell}
                  placeholder="Celular"
                  onChange={(e) => setUser({ ...user, cell: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  placeholder="Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
