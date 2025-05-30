import axios from 'axios';
import { getToken } from '../../utils/auth';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const API_BASE_URL = `${baseUrl}/api/requestAds`;


// Fetch influencer ad data by influencer ID
export const getInfluencerAds = async (influencerId) => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_BASE_URL}/influencer/${influencerId}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching influencer ads:', error);
    throw error;
  }
};

// Send request to influencer with selected ad or new campaign data
export const sendRequestToInfluencer = async ({ influencerId, adId, campaignData }) => {
  try {
    const token = getToken();
    const response = await axios.post(`${API_BASE_URL}/sendRequest`, {
      influencerId,
      adId,
      campaignData,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          }
    });
    return response.data;
  } catch (error) {
    console.error('Error sending request to influencer:', error);
    throw error;
  }
};
