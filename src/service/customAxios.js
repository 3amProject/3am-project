import axios from 'axios';

export const customAxios = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Accept" : "application/json",
    "Content-Type" : "application/json"
  },
  withCredentials: true
});