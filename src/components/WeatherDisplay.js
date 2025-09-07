import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { city, country, temperature, description, icon, details } = weatherData;

  return (
    <div className="card shadow-xl p-8 text-center max-w-lg mx-auto mb-8">
      <h2 className="text-3xl font-bold mb-2 text-primary">{city}</h2>
      <p className="text-primary/70 text-lg mb-6">{country}</p>
      <img src={icon} alt={description} className="mx-auto w-32 h-32 mb-4" />
      <h3 className="text-6xl font-extralight text-primary">{temperature}°C</h3>
      <p className="text-xl capitalize text-primary/70">{description}</p>
      
      <div className="mt-8 grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={index} className="card-secondary p-4 rounded-lg">
            <p className="text-sm text-primary/70">{detail.label}</p>
            <p className="text-lg font-semibold text-primary">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;