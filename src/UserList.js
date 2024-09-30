import React, { useState } from 'react';
import UserModal from './UserModal';

const UserList = ({ users, updateUser, deleteUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleOpenModal = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  const uniqueCountries = [...new Set(users.map(user => user.location.country))];

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const email = user.email.toLowerCase();
    const matchesSearch = fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === '' || user.gender === genderFilter;
    const matchesCountry = countryFilter === '' || user.location.country === countryFilter;
    return matchesSearch && matchesGender && matchesCountry;
  });

  return (
    <div>
      <h2 className="text-center mb-4">Listado de Usuarios</h2>

      <div className="mb-3 text-center">
        <button
          className="btn btn-primary"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>
      </div>

      {showFilters && (
        <div className="mb-3">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="">Todos los géneros</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            >
              <option value="">Todos los países</option>
              {uniqueCountries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Perfil</th>
            <th>Nombre</th>
            <th>Genero</th>
            <th>Direccion</th>
            <th>Pais</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.login.uuid}>
                <td>
                  {user.picture && user.picture.thumbnail ? (
                    <img
                      src={user.picture.thumbnail}
                      alt="Perfil"
                      className="rounded-circle"
                      style={{ width: '40px', height: '40px' }}
                    />
                  ) : (
                    <i className="bi bi-person-circle" style={{ fontSize: '2rem' }}></i>
                  )}
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.location.street.name} {user.location.street.number}</td>
                <td>{user.location.country}</td>
                <td>{user.cell}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleOpenModal(user)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.login.uuid)}>Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No se encontraron usuarios</td>
            </tr>
          )}
        </tbody>
      </table>

      {editingUser && (
        <UserModal
          showModal={showModal}
          handleClose={handleCloseModal}
          editingUser={editingUser}
          updateUser={updateUser}
        />
      )}
    </div>
  );
};

export default UserList;
