import axios from 'axios';

const api = axios.create({
  baseURL: 'https://challenge-eplus-caio.herokuapp.com/',
});

export default api;