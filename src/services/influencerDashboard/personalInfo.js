import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const API_URL = `${baseUrl}/api/personal-info`;


export const getPersonalInfo = async () => {
  const response = await axios.get(API_URL, { withCredentials: true });
  return response.data;
};

export const upsertPersonalInfo = async (personalInfoData) => {
  const response = await axios.post(API_URL, personalInfoData, { withCredentials: true });
  return response.data;
};
