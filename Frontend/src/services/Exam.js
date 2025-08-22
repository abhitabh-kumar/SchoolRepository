import axios from "axios";

const API_URL = 'http://localhost:8080'
// Create Question From DashBoard
export const createQuestion = async (formData,token) => {
    try {
      if (!token) {
        throw new Error('Authorization token is missing');
      }
      const response = await axios.post(`${API_URL}/question/createQuestion`, formData, { 
        headers: {
          Authorization: token,
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Failed to create Question.');
    }
}

// Getting all questions for the DashBoard
export const getAllQuestions = async (token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.get(`${API_URL}/question/all`, { 
      headers: {
        Authorization: token,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message || 'Failed to get questions.');
  }
}

// Function to create an exam
export const createExam = async (examData, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.post(`${API_URL}/exam/createExam`, examData, {
      headers: {
        Authorization: token,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message || 'Failed to create exam.');
  }
};

export const getExamByClass = async (username, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.post(`${API_URL}/exam/getExamByClass`, username, {
      headers: {
        Authorization: token,
        'Content-Type': 'text/plain'
      }
    });
    if(response.data.code != '200'){
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Something went wrong please try after sometimes');
  }
};
export const getExamByAuthorName = async (username, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.post(`${API_URL}/exam/get/author`, username, {
      headers: {
        Authorization: token,
        'Content-Type': 'text/plain'
      }
    });
    if(response.data.code != '200'){
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Something went wrong please try after sometimes');
  }
};

export const getExamById = async (id, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.get(`${API_URL}/exam/get/${id}`,{
      headers: {
        Authorization: token,
      }
    });
    if(response.data.code != '200'){
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Something went wrong please try after sometimes');
  }
};

  