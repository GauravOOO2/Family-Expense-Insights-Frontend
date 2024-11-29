import axios from 'axios';

const API_URL = 'http://localhost:5000/api/analysis'; // Replace with your backend URL

export const getMemberContribution = async (transactions) => {
  try {
    const response = await axios.post(`${API_URL}/member-contribution`, { transactions });
    return response.data;
  } catch (error) {
    console.error('Error fetching member contribution:', error);
  }
};

export const getSavingsOptimization = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/savings-optimization`, data);
    return response.data;
  } catch (error) {
    console.error('Error fetching savings optimization:', error);
  }
};

export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/add-transaction`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
};
