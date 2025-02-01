import './App.css';
import ForecastPanel from './components/ForecastPanal';
import SearchBar from './components/SearchBar';
import React, {useState} from 'react';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const[SearchData, setSearchData] = useState("New Delhi")
  

  const handleOnSearchChange = (searchData) => {
    setSearchData(searchData)
    console.log(searchData);
  }

  return (
   <div className='App'>
   <SearchBar onSearchChange={handleOnSearchChange}/>
   <ForecastPanel location = {SearchData}/>
   <WeatherDisplay />
   </div>
  );
}

export default App;
