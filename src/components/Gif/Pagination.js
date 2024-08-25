// src/components/Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPages = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (totalPages > 3) {
      if (currentPage <= 2) {
        endPage = Math.min(3, totalPages);
      } else if (currentPage >= totalPages - 1) {
        startPage = Math.max(totalPages - 2, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-4 py-2 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'} border border-gray-300 rounded-md`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center gap-2 md:mt-6  mt-60">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className="text-blue-500">
          &larr; Previous
        </button>
      )}
      {renderPages()}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)} className="text-blue-500">
          Next &rarr;
        </button>
      )}
    </div>
  );
};

export default Pagination;
