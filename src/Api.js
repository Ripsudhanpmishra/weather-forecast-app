const API_KEY = '0e15999fe3033f1c043ecf402d7219ed';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async (city) => {
  try {
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please try again.');
      }
      throw new Error('An error occurred while fetching the weather data.');
    }

    const data = await response.json();
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      details: [
        { label: 'Feels Like', value: `${Math.round(data.main.feels_like)}°C` },
        { label: 'Humidity', value: `${data.main.humidity}%` },
        { label: 'Wind Speed', value: `${data.wind.speed} m/s` },
        { label: 'Pressure', value: `${data.main.pressure} hPa` },
      ],
    };
  } catch (error) {
    throw error;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const url = `${forecastApiUrl}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please try again.');
      }
      throw new Error('An error occurred while fetching the forecast data.');
    }

    const data = await response.json();
    
    const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 5);
    
    const formattedForecast = dailyForecasts.map(item => ({
      date: new Date(item.dt * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
      temperature: Math.round(item.main.temp),
      icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      description: item.weather[0].description,
    }));
    
    return formattedForecast;

  } catch (error) {
    throw error;
  }
};