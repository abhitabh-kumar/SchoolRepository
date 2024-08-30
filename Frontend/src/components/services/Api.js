// src/services/api.js
import axios from 'axios';

const API_URL = 'https://your-api-endpoint'; // Base URL for your API

// Function to log in a user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};

// Function to send a forgot password request
export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Request failed');
  }
};

// Function to reset the password
export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, { token, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Reset failed');
  }
};
