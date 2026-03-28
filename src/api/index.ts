import axios from 'axios';

// Get backend URL from environment variables, fallback for local dev
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const API = axios.create({
  baseURL: API_URL,
});

// Request interceptor to attach JWT token to every protected request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Global response interceptor for universal error tracking
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 Unauthorized handling (token expired/invalid)
    if (error.response?.status === 401) {
      console.warn("Unauthorized API call explicitly caught by interceptor.");
      // Optional: automatically log out the user on 401
      // localStorage.removeItem('token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;
