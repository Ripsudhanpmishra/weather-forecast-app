import '../Style.css';

import React, { useEffect, useState } from 'react';

// Your API key from the weather service you use
const API_KEY = "0e15999fe3033f1c043ecf402d7219ed";

export default function ForecastPanel (props) {

  const [weatherData, setWeatherData] = useState(null);
  const formatDate = () => { 
    const months = [ 
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const days = [ 
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]; 
    const currentDate = new Date();
    const day = days[currentDate.getDay()]; 
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()]; 
    const year = currentDate.getFullYear(); 

    return `${day}, ${date} ${month} ${year}`; 
  };


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, [props.location]);

  return (
    <div className="weather-panel">
      {weatherData ? (
        <div className='inner-data'>
          <h2>Weather in {weatherData.name}</h2>
          <p>{formatDate()}</p>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Max Temperature: {Math.round(weatherData.main.temp_max - 273.15)}°C</p> 
          <p>Min Temperature: {Math.round(weatherData.main.temp_min - 273.15)}°C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

// export default ForecastPanel;
