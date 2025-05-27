import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // adjust if needed
});

export default api;