import axios from 'axios';
import { getToken } from '../utils/auth';

// Base URL for onboarding API
const BASE_URL =  'http://localhost:5000/api/onboarding';

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = getToken();
  return {
    Authorization: token ? 'Bearer ' + token : '',
  };
};

// Business Onboarding APIs
export const getBusinessOnboarding = async () => {
  const response = await axios.get(BASE_URL + '/business', {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const upsertBusinessOnboarding = async (data) => {
  const response = await axios.post(BASE_URL + '/business', data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Influencer Onboarding APIs
export const getInfluencerOnboarding = async () => {
  const response = await axios.get(BASE_URL + '/influencer', {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const upsertInfluencerOnboarding = async (data) => {
  const response = await axios.post(BASE_URL + '/influencer', data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};
