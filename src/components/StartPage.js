import React from 'react';
import useThemeStore from '../store/useThemeStore';

const StartPage = () => {
  const { theme } = useThemeStore();    
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8" data-theme={theme}>
      <h1 className="text-3xl md:text-5xl font-extralight mb-4">Welcome to the Weather App</h1>
      <p className="text-base md:text-xl text-gray-400">Please search for a city to see the weather forecast.</p>
    </div>
  );
};

export default StartPage;