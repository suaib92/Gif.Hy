// src/hooks/useGifFetch.js

import { useState, useEffect } from 'react';
import { fetchGifs, fetchTrendingGifs } from '../components/Gif/services/giphyService';

const useGifFetch = (query, currentPage, category) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalGifs, setTotalGifs] = useState(0);

  useEffect(() => {
    const loadGifs = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;
        if (query) {
          response = await fetchGifs(query, currentPage);
        } else if (category) {
          response = await fetchGifs(category, currentPage);
        } else {
          response = await fetchTrendingGifs(currentPage);
        }

        setGifs(response.data);
        setTotalGifs(response.total_count);
        setTotalPages(Math.ceil(response.total_count / 10)); // Assuming 10 GIFs per page
      } catch (err) {
        setError('Failed to fetch GIFs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadGifs();
  }, [query, currentPage, category]);

  return { gifs, loading, error, totalPages, totalGifs };
};

export default useGifFetch;
