import axios from 'axios';

// Base API configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add Authorization header
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// --- Authentication Endpoints ---

export const signUp = async (userData) => {
    // userData format: { name, email, phone, user_type: "retailer" | "rider" }
    const response = await api.post('/auth/signup', userData);
    return response.data;
};

export const verifyOTP = async (otpData) => {
    // otpData format: { phone, code }
    const response = await api.post('/auth/verify-otp', otpData);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

// Note: Ensure your backend has a standard signin/login if needed, 
// or if verifyOTP doubles as login for existing users.
export const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};


// --- Delivery Endpoints ---

export const createDelivery = async (deliveryData) => {
    const response = await api.post('/deliveries', deliveryData);
    return response.data;
};

export const getUserDeliveries = async () => {
    const response = await api.get('/deliveries');
    return response.data;
};


// --- Batch Endpoints ---

export const getUserBatches = async () => {
    const response = await api.get('/batches');
    return response.data;
};

export const updateBatchStatus = async (id, status) => {
    // Valid status: 'created' -> 'in_transit' -> 'completed'
    const response = await api.put(`/batches/${id}`, { status });
    return response.data;
};


// --- Status Tracking ---

export const updateDeliveryStatus = async (id, status) => {
    // Valid status: 'pending' -> 'in_transit' -> 'delivered'
    const response = await api.put(`/status/delivery/${id}`, { status });
    return response.data;
};

// Redundant endpoint based on your contract, but implemented as requested
export const updateBatchStatusGeneric = async (id, status) => {
    const response = await api.put(`/status/batch/${id}`, { status });
    return response.data;
};


// --- Verification Codes ---

export const generateVerificationCode = async (deliveryId) => {
    const response = await api.post('/verification/generate', { deliveryId });
    return response.data; // Should return an 8-character string
};

export const verifyCode = async (deliveryId, code) => {
    // Verifies the code and marks delivery as completed
    const response = await api.post('/verification/verify', { deliveryId, code });
    return response.data;
};


// --- Ratings ---

export const rateDelivery = async (deliveryId, rating) => {
    // rating: 1-5 stars
    const response = await api.post('/ratings', { deliveryId, rating });
    return response.data;
};


export default api;
