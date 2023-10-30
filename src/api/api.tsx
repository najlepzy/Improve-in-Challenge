import axios from "axios";

// Read environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

// Create an axios instance
/**
 * @type {axios} api - An instance of axios for making API requests
 */
const api = axios.create({
  baseURL: `${API_BASE_URL}:${API_PORT}`,
});

export default api;
