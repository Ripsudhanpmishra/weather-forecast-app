import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastPanal from './components/ForecastPanal';
import { fetchWeatherData, fetchForecastData } from './Api';
import StartPage from './components/StartPage';
import useThemeStore from './store/useThemeStore';

function App() {
  const { theme } = useThemeStore();

   useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weather = await fetchWeatherData(city);
      const forecast = await fetchForecastData(city);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <Sidebar onSearch={handleSearch} />
      <div className="flex-1 p-8 overflow-y-auto pt-20 md:pt-8">
        {!weatherData && !loading && !error && <StartPage />}
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && <p className="text-center text-lg text-error">{error}</p>}
        {weatherData && (
          <>
            <WeatherDisplay weatherData={weatherData} />
            {forecastData && <ForecastPanal forecastData={forecastData} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;