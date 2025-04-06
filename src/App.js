import './App.css';
import ForecastPanel from './components/ForecastPanal';
import SearchBar from './components/SearchBar';
import React, {useState} from 'react';
import WeatherDisplay from './components/WeatherDisplay';

const API_KEY = "0e15999fe3033f1c043ecf402d7219ed";

function App() {
  const[SearchData, setSearchData] = useState("Durgapur")
  
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    if(searchData){
      setSearchData(searchData);
    }
    else setSearchData("Durgapur")
    
    // const [lat, lon] = searchData.value.split(" ");

    // const currentWeatherFetch = fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    // const forecastFatch = fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

    // Promise.all([currentWeatherFetch], [forecastFatch])
    //   .then(async (response) => {
    //     const weatherResponse = await response[0].json();
    //     const forecastResponse = await response[0].json();

    //     setCurrentWeatherData({ city: searchData.label, ...weatherResponse });
    //     setforecast({ city: searchData.label, ...forecastResponse});
    //   })
  }


  return (
   <div className='App'>
   <SearchBar onSearchChange={handleOnSearchChange} location ={SearchData}/>
   <ForecastPanel location = {SearchData}/>
   {/* {forecast && <WeatherDisplay data = {forecast} />} */}
   <WeatherDisplay location = {SearchData}/>
   </div>
  );
}

export default App;
