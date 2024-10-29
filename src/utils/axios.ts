// src/utils/axios.ts
import axios from 'axios';
import { toast } from 'react-toastify';
import {AUTH_URL} from "./constants";

// Create an axios instance with a base URL
const apiClient = axios.create({
    baseURL: AUTH_URL,
    timeout: 5000, // Set a timeout to handle delayed responses
});

// Add a response interceptor to handle global errors
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
         // Check if the response exists and is a 302 redirect
        if (error.response && error.response.status >= 300) {
            // Resolve the promise to treat it as a successful response
            return Promise.resolve(error.response);
        }
        // Then here we handle network error
        if (!error.response) {
            // Handle network errors (no response received)
            console.error('Network error. Please check your connection.');
        } else if (error.response.status >= 500) {
            // Handle server errors (5xx status codes)
            console.error('Server error. Please try again later.');
        } else if (error.response.status >= 400) {
            // Handle client errors (4xx status codes)
            console.error(error.response.data.error || 'An error occurred.');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
