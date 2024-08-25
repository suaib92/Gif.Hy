import { useState, useEffect } from 'react';
import GifCard from '../components/Gif/GifCard';
import NavBar from '@/components/NavBar';

// Mock function to simulate fetching favorites from local storage or a backend
const fetchFavorites = () => {
  // Replace with actual logic to fetch favorites
  return JSON.parse(localStorage.getItem('favorites')) || [];
};

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(fetchFavorites());
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.length > 0 ? (
            favorites.map((gif) => (
              <GifCard key={gif.id} gif={gif} />
            ))
          ) : (
            <p>No favorites yet!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
