import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  };

export const fetchInventory = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/inventory/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

