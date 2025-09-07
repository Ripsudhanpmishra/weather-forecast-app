import React from 'react';

const ForecastPanal = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) {
    return null;
  }

  return (
    <div className="card shadow-xl p-8 mt-8">
      <h3 className="text-2xl font-bold mb-4 text-center text-primary">5-Day Forecast</h3>
      <div className="flex flex-wrap justify-around space-y-4 md:space-y-4">
        {forecastData.map((day, index) => (
          <div key={index} className="card-secondary p-4 text-center w-full md:w-1/5 m-2 rounded-lg">
            <p className="text-sm text-primary/70">{day.day}</p>
            <p className="text-lg font-semibold text-primary">{day.date}</p>
            <img src={day.icon} alt={day.description} className="w-16 h-16 mx-auto" />
            <p className="font-bold text-primary">{day.temperature}°C</p>
            <p className="text-sm capitalize text-primary/70">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastPanal;