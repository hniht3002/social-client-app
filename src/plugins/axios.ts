import axios from 'axios';

const base_API_URL =  process.env.REACT_APP_API_URL

console.log(base_API_URL);

const axiosInstance = axios.create({
  baseURL: base_API_URL,
  headers: {
    authorization: "null"
  },
});

export default axiosInstance;