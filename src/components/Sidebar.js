import React from 'react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import logo from '../logo.png';

function Sidebar({ onSearch }) {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between p-4 md:relative md:w-80 md:flex-col md:justify-start md:space-y-4 md:p-6 sidebar-bg shadow-xl md:min-h-screen">
      <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-4 w-full md:w-auto md:flex-grow">
        <div className='flex justify-center md:mb-4'>
          <img src={logo} alt="Logo" className="h-8 mb mx-auto" />
          <h1 className="text-xl font-bold md:text-3xl ml-2">Weather</h1>
        </div>

        <div className="flex-1 md:w-full md:mt-4">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
      <div className="ml-4 md:ml-0 md:w-full md:mt-auto flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Sidebar;