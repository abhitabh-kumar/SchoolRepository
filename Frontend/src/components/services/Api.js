// src/services/api.js
import axios from 'axios';

const API_URL = 'https://your-api-endpoint'; // Base URL for your API

// Function to log in a user
export const loginUser = async (username, password, role) => {
    try {
      // Make the API request to log in
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
        role
      });
  
      // Return the response data if needed
      return response.data;
    } catch (error) {
      // Throw an error with a message if the request fails
      throw new Error(error.response?.data?.message || 'Error logging in');
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

// Function to verify OTP
export const verifyOtp = async (token, otp) => {
    try {
      // Make the API request to verify the OTP
      const response = await axios.post(`${API_URL}/verify-otp`, {
        token,
        otp
      });
  
      // Return the response data if needed
      return response.data;
    } catch (error) {
      // Throw an error with a message if the request fails
      throw new Error(error.response?.data?.message || 'Error verifying OTP');
    }
  };
