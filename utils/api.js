import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_ENDPOINT,
});

if (process.browser) {
  const token = window.localStorage.getItem('token');

  if (token) {
    API.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export default API;
