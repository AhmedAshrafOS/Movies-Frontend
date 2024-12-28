import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080/api';


export const registration = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user`, data);
    return response; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const login = async (data) => {

  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }

};



export const giveRating = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/rating`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

export const getRating = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/rating/get`, data);
    return response.data;

  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};



export const updateRating = async (data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/rating`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };



export const removeRating = async (data) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/rating`, {
        data: data  
      });
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };