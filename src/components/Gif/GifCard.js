import { useState } from "react";

const GifCard = ({ gif, onFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(gif);
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Flex container for layout */}
      <div className="flex sm:flex-col flex-row">
        {/* Image */}
        <img
          src={gif.images.fixed_height.url}
          alt={gif.title}
          className="sm:w-full w-1/2 h-20 sm:h-80 object-cover"
        />
        {/* Info Overlay */}
        <div className="p-4 flex flex-col justify-between md:w-1/2 bg-gray-100 md:bg-white">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {gif.title}
              </h3>
              <p className="text-sm text-gray-500">@{gif.username}</p>
            </div>
          </div>
          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-transform duration-300 ${
              isFavorite ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default GifCard;
