import axios from 'axios';
import { configureStore } from "@reduxjs/toolkit";

import store from '@/redux/store';

const state = store.getState()

const base_API_URL =  process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: base_API_URL,
  headers: {
    authorization: state.counter.value.data.token
  },
});

export default axiosInstance;