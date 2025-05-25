import axios from 'axios';
import { getToken } from '../utils/auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const getCurrentUser = async () => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('Authentication token is missing');
    }

    const response = await axios.get(`${API_BASE_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch current user:', error?.response?.data || error.message);
    throw new Error(
      error?.response?.data?.message || 'Unable to fetch current user'
    );
  }
};
