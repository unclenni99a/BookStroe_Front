import axios from 'axios'
import { getCookie } from 'react-use-cookie';

axios.defaults.baseURL = 'http://localhost:8080/'

axios.interceptors.request.use((config) => {
    config.headers.authorization = getCookie('token') !== undefined ? getCookie('token'): undefined
    return config;
})

export default axios