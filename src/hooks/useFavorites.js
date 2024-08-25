// src/hooks/useFavorites.js

import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (gif) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.some((fav) => fav.id === gif.id)
        ? prevFavorites.filter((fav) => fav.id !== gif.id)
        : [...prevFavorites, gif];

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  return [favorites, toggleFavorite];
};

export default useFavorites;
