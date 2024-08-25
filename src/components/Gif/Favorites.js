const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <div className="flex flex-wrap gap-4">
        {favorites.map((gif) => (
          <div key={gif.id} className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img src={gif.images.fixed_height.url} alt={gif.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
