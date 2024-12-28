import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080/api/admin';


export const retrieveAllMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



export const addMovie = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, data);
    
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};




export const removeMovie = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };


  export const login = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };