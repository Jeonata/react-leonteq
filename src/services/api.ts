import axios from 'axios';

const api = axios.create({
  baseURL: ' https://fakerestapi.azurewebsites.net/',
});

export default api;
