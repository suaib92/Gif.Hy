// giphyService.js

import axios from 'axios';

const API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
const BASE_URL = 'https://api.giphy.com/v1/gifs';

// Fetch GIFs based on a search query or category
export const fetchGifs = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: query,
        limit: 3,
        offset: (page - 1) * 3  // Calculate the offset for pagination
      }
    });
    return {
      data: response.data.data,
      total_count: response.data.pagination.total_count
    };
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    return { data: [], total_count: 0 };
  }
};

// Fetch trending GIFs
export const fetchTrendingGifs = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending`, {
      params: {
        api_key: API_KEY,
        limit: 3,
        offset: (page - 1) * 3  // Calculate the offset for pagination
      }
    });
    return {
      data: response.data.data,
      total_count: response.data.pagination.total_count
    };
  } catch (error) {
    console.error('Error fetching trending GIFs:', error);
    return { data: [], total_count: 0 };
  }
};
