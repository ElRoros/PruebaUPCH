import axios from 'axios';
import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = 'https://randomuser.me/api/?results=5&gender=female&nat=US';

export const getUsers = () => {
  return from(
    axios.get(API_URL)
      .then(response => response.data.results)
      .catch(error => {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users');
      })
  ).pipe(
    map(data => data),
    catchError(error => {
      console.error('Error en el observable:', error);
      return [];
    })
  );
};

export const addUser = async (user) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return user;
  } catch (error) {
    console.error('Error adding user:', error);
    throw new Error('Error adding user');
  }
};

export const updateUser = async (user) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Error updating user');
  }
};

export const deleteUser = async (userId) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return userId;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Error deleting user');
  }
};
