import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rdstation-signup-psel.herokuapp.com',
});

export default api;