// src/authApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your actual API endpoint

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    const { user, token } = response.data;
    return { user, token };
  } catch (error) {
    throw new Error('Invalid username or password');
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { username, password });
    const { user, token, message } = response.data;
    return { user, token, message };
  } catch (error) {
    throw new Error('Registration failed');
  }
};
