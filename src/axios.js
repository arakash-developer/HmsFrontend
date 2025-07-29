import axios from 'axios';

// Create an Axios instance with base configurations
const api = axios.create({
  baseURL: 'https://hospital-management-system-backend-1-yh7i.onrender.com', // Replace with your actual API base URL
  // baseURL: 'http://localhost:5000', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json', // Set default content type
  },
  withCredentials: true, // Allow cookies to be sent with requests (important for cross-origin requests)
});

// Optional: If you want to handle responses and errors globally, you can add interceptors
api.interceptors.response.use(
  (response) => {
    return response; // Handle successful responses
  },
  (error) => {
    // Handle errors globally if necessary (e.g., logging or specific error messages)
    console.error('API Error:', error);
    return Promise.reject(error); // Reject the error so it can be handled locally
  }
);

export default api;
