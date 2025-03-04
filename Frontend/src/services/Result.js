import axios from "axios";

const API_URL = 'http://localhost:8080'

export const computeResult = async (resultData, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.post(`${API_URL}/result/compute`,resultData, {
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

export const fecthResultByUserName = async (username, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.get(`${API_URL}/result/userName=${username}`, {
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

export const fecthResultByExamId = async (examId, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.get(`${API_URL}/result/examId=${examId}`, {
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

export const fetchQuestionResponseByResultId = async (resultId, token) => {
  try {
    if (!token) {
      throw new Error('Authorization token is missing');
    }
    const response = await axios.get(`${API_URL}/questionResponse/fetchByResultId=${resultId}`, {
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

  