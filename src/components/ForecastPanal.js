import '../Style.css';
import React, { useEffect, useState } from 'react';

const API_KEY = "0e15999fe3033f1c043ecf402d7219ed"; 

export default function ForecastPanel({ location }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("!!Please Enter Location!!");

  const formatDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const currentDate = new Date();
    return `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  useEffect(() => {
    if (!location) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          setError(data.message); // Store error message if location is not found
          setWeatherData(null);
        } else {
          setWeatherData(data);
          setError(null); // Clear any previous errors
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError('Network error. Please try again.');
        setWeatherData(null);
      });
  }, [location]);

  return (
    <div className="weather-panel">
      {error ? (
        <p className="error-message">{error}</p>
      ) : weatherData ? (
        <div className='inner-data'>
          <h2>Weather in {weatherData.name}</h2>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
          <p>{formatDate()}</p>
          <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Max Temperature: {Math.round(weatherData.main.temp_max)}°C</p>
          <p>Min Temperature: {Math.round(weatherData.main.temp_min)}°C</p>
          <p>Description: {weatherData.weather[0].main}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
