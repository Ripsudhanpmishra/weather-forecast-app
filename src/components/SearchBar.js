import '../Style.css';
import React, {useState} from 'react';

export default function SearchBar({onSearchChange}) {

    const[search, setSearch] = useState("");

    const handleOnChange = (event) => {
        // let searchData = event.terget.value
        setSearch(event.target.value);
        let serlocation = search;
        onSearchChange(serlocation);

    }

  return (
    <div className="navbar">
    <div className="navbar-logo">
        <a href="/" title="Weather Home">
        <img src="logo.png" alt="Weather Icon" className="weather-icon"/>Weather
        </a>
    </div>

    <div className="navbar-location">
        <span id="current-location">Current location</span>
    </div>
    
    <div className="navbar-search">
        <input type="text" 
        id="search-bar" 
        placeholder="Search city or region..." 
        debouncetimeout={600}
        value={search}
        onChange={handleOnChange}

        />
    </div>
    <button id="mode-toggle" className="mode-toggle">🌙</button>
</div>
  );
}
