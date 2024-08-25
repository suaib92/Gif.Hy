// src/pages/Home.js

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Categories from '../components/Gif/Categories';
import SearchBar from '../components/Gif/SearchBar';
import GifCard from '../components/Gif/GifCard';
import Loading from '../components/Gif/Loading';
import Pagination from '../components/Gif/Pagination';
import useFavorites from '../hooks/useFavorites';
import useGifFetch from '../hooks/useGifFetch';

const Home = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searched, setSearched] = useState(false);
  const [favorites, toggleFavorite] = useFavorites();
  const { gifs, loading, error, totalPages, totalGifs } = useGifFetch(query, currentPage, category);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
    setSearched(!!e.target.value); // Mark as searched if there is a query
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1); // Reset to the first page on category change
    setSearched(!!e.target.value); // Mark as searched if there is a category
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const loadMoreResults = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-4">
        {/* Search Bar */}
        <SearchBar query={query} onSearch={handleSearch} />

        {/* Category Filter */}
        <Categories category={category} handleCategoryChange={handleCategoryChange} />

        {loading && <Loading />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && gifs.length === 0 && (
          <p className="text-gray-500 text-center">No GIFs found. Try a different search term or category.</p>
        )}
        {!loading && !error && gifs.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gifs.map((gif) => (
                <GifCard key={gif.id} gif={gif} onFavorite={toggleFavorite} />
              ))}
            </div>

            {/* Show More Results or Pagination based on search state */}
            {!searched ? (
              <div className="md:mt-6 flex justify-between items-center mt-60">
                <p className="text-gray-500">{gifs.length} of {totalGifs} results</p>
                <button 
                  onClick={loadMoreResults}
                  disabled={currentPage === totalPages}
                  className="text-blue-500"
                >
                  Show me more results &rarr;
                </button>
              </div>
            ) : (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
