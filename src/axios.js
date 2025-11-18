import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/", // Your backend URL
  // baseURL: "https://hospital-management-system-backend-2-3d51.onrender.com/", // Your backend URL
  // baseURL: "https://seminocturnal-excrescently-archimedes.ngrok-free.dev/", // Your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});
// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    let temptoken = localStorage.getItem("token") || null;
    let token = JSON.parse(temptoken);
    // console.log("Attaching token to request:", token.tok);
    if (token) {
      config.headers["token"] = token.tok; // must match middleware
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
