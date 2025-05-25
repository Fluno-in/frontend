import axios from 'axios';
import { getToken } from '../utils/auth';

const API_BASE = 'http://localhost:5000/api/linkSocials/status';

export const fetchLinkedSocials = async () => {
  const token = getToken();
  try {
    const response = await axios.get(API_BASE, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching linked socials:', error);
    return {};
  }
};
