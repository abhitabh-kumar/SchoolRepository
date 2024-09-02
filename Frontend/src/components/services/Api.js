// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Base URL for your API

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

// Function to create a teacher

export const createTeacher = async (teacherData) => {
  try {
    const response = await axios.post(`${API_URL}/teacher/create`, teacherData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create teacher.');
  }
};

export const getTeacher = async (type, criteria, value) => {
  console.log(type);
  try{
    const response =await axios.get('http://localhost:8080/api/teacher/all',criteria);
    return response;
  }
  catch(error){
    throw new Error(error.response?.data?.message || 'Failed to serach teacher.');
  }
};

// Function to create a student
export const createStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/student/create`, studentData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create student.');
  }
};

// Function to create an exam
export const createExam = async (examData) => {
  try {
    const response = await axios.post(`${API_URL}/exams`, examData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create exam.');
  }
};
