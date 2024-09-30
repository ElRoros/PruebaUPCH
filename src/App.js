import React, { useState, useEffect } from 'react';
import { getUsers } from './services/userService';
import UserList from './UserList';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = () => {
      getUsers().subscribe({
        next: (data) => setUsers(data),
        error: (err) => setError(err.message)
      });
    };

    fetchUsers();
  }, []);


  const updateUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.login.uuid === updatedUser.login.uuid ? updatedUser : user
    ));
  };

  const deleteUser = (uuid) => {
    setUsers(users.filter(user => user.login.uuid !== uuid));
  };

  return (
    <div>
      <Header />
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="container mt-5">
        <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
