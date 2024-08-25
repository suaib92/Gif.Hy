// src/components/Gif/SearchBar.js

import React from 'react';

const SearchBar = ({ query, onSearch }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={onSearch}
        placeholder="Search for GIFs..."
        className="w-full p-4 border border-gray-300 rounded-l-md focus:outline-none"
      />
      <button className="bg-black text-white px-6 py-4 rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
