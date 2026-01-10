import client from './api';

export const authService = {
  login: (username, password) => client.post('/auth/login', { username, password }),
  logout: () => client.post('/auth/logout'),
  checkSession: () => client.get('/auth/session'),
};
