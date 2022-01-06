import axios from 'axios';

export const customAxios = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  withCredentials: true
});