import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API;
axios.defaults.timeout = 30000;
axios.interceptors.request.use();
axios.interceptors.response.use();