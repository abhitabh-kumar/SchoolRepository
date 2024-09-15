// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Base URL for your API

// Function to log in a user
export const loginUser = async (username, password, role) => {
    try {
      // Make the API request to log in
      const credentials = btoa(`${username}:${password}`);
      const response = await axios.get(`http://localhost:8080/sign-in`,{
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });
  
      // Return the response data if needed
      console.log(response);
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

export const getAllTeacher = async () => {
  // console.log(type);
  try{
    const response =await axios.get('http://localhost:8080/api/teacher/all');
    return response;
  }
  catch(error){
    throw new Error(error.response?.data?.message || 'Failed to serach teacher.');
  }
};

export const getTeacherById = async (id) => {
  const response = await axios.get(`${API_URL}/teacher/${id}`);
  return response;
};
// Function to get Teacher By Email No working
export const getTeacherByEmail = async (searchValue) => {
  try{
    console.log(searchValue);
    const response =await axios.get(`http://localhost:8080/api/teacher/email?email=${searchValue}`);
    return response;
  }
  catch(error){
    throw new Error(error.response?.data?.message || 'Failed to serach teacher.');
  }
};

// Function to update the data of teacher
export const updateTeacher = async (id, data) => {
  const response = await axios.put(`${API_URL}/teacher/update/${id}`, data);
  return response.data;
};

// Function to delete a teacher by ID
export const deleteTeacher = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/teacher/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting teacher:', error);
    throw new Error('Failed to delete teacher');
  }
};

// Function to create a student
export const createStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/student/createStudent`, studentData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create student.');
  }
};

export const getAllStudent = async () => {
  // console.log(type);
  try{
    const response =await axios.get('http://localhost:8080/api/student/all');
    return response;
  }
  catch(error){
    throw new Error(error.response?.data?.message || 'Failed to serach teacher.');
  }
};

// Function to get student by ID
export const getStudentById = async (studentId) => {
  console.log(studentId);
  try {
    const response = await axios.get(`${API_URL}/student/${studentId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw new Error('Failed to fetch student data.');
  }
};

// Function to update a student by ID
export const updateStudent = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/student/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating student:', error);
    throw new Error('Failed to update student');
  }
};

// Function to delete a student by ID
export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/student/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting teacher:', error);
    throw new Error('Failed to delete teacher');
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
