import React, { useState } from 'react';
import UserModal from './UserModal';

const UserList = ({ users, updateUser, deleteUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleOpenModal = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Listado de Usuarios</h2>
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
          {users.map(user => (
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
                <button className="btn btn-warning btn-sm me-2"onClick={() => handleOpenModal(user)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.login.uuid)}>Eliminar</button>
              </td>
            </tr>
          ))}
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
