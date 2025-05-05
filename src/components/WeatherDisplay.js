import '../Style.css';
import React, { useState, useEffect } from "react";

export default function WeatherDisplay({location}) {
  const [forecast, setForecast] = useState([]);
  // const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const API_KEY = "0e15999fe3033f1c043ecf402d7219ed";

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=7&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log("Fetched Data:", data);

      if (data.list) {
        setForecast(data.list);  // Update state with weather data
      } else {
        setForecast([]);  // Handle errors (e.g., wrong city)
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setForecast([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  // const iconCode = forecast.weather[0].icon;
  // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className='container'>
      <hr/>
      <h1>7-Day Weather Forecast</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {forecast.length > 0 ? (
              forecast.map((day, index) => {
                const date = new Date(day.dt * 1000).toLocaleDateString();
                return (
                  <li key={index} className='box'>
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather Icon" />
                    <p>{date}</p>
                    <p>Temp: {day.main.temp}°C</p>
                    <p>{day.weather[0].description}</p>
                  </li>
                );
              })
            ) : (
              <p>No data available</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};


