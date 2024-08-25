// src/components/Categories.js

import React from 'react';

const Categories = ({ category, handleCategoryChange }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <select
        value={category}
        onChange={handleCategoryChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Categories</option>
        <option value="funny">Funny</option>
        <option value="sports">Sports</option>
        <option value="animals">Animals</option>
        <option value="movies">Movies</option>
        <option value="music">Music</option>
        <option value="reactions">Reactions</option>
        {/* Add more categories as needed */}
      </select>
      <span className="ml-4 text-gray-500">
        {category ? `${category} category selected` : 'No category selected'}
      </span>
    </div>
  );
};

export default Categories;
