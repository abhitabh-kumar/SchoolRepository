// services/axios.js
import axios from 'axios';
import { isTokenExpired } from './auth';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:8080',
  });
  const navigate = useNavigate();
axios.interceptors.request.use((config) => {
  console.log("hfhhg");
  const token=sessionStorage.getItem('token');
  if (token && (!isTokenExpired)) {
    sessionStorage.clear(token);
    navigate('/login');
    window.location.reload();
  }
  return config;
});

// api.interceptors.response.use(
//     (response) => response, // If response is successful
//     (error) => {
//       if (error.response.status === 401) {
//         // Token expired, redirect to login or show a modal
//         window.location.reload(); // Or use custom logic to handle re-login
//       }
//       return Promise.reject(error);
//     }
//   );

export default api;
