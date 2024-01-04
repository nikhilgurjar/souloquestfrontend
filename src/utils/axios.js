import axios from 'axios';
// config
// import { HOST_API_KEY } from '../config-global';
const HOST_API_KEY = '';
// ----------------------------------------------------------------------
const axiosInstance = axios.create({ baseURL: 'http://localhost:4000', withCredentials: true });
axiosInstance.interceptors.response.use((response) => response, (error) => {
    console.log(error);
    if(error.response?.status === 403){
        window.location = '/login'
    }
    return Promise.reject((error.response && error.response.data) || 'Something went wrong')
});
export default axiosInstance;
