
import axios from 'axios';

const baseURL = process.env.BASE_URL
console.log(baseURL);

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
  },
});

export default axiosInstance;