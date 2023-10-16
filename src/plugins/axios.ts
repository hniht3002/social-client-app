import axios from 'axios';
import { getToken } from '@/services/handleToken';

const base_API_URL =  process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: base_API_URL,
  headers: {
    authorization: getToken()
  },
});


export default axiosInstance;