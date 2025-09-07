import React, { useState } from 'react';
import searchIcon from '../search.png';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={handleInputChange}
        className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        <img src={searchIcon} alt="Search" className="h-5 w-5" />
      </button>
    </form>
  );
}

export default SearchBar;