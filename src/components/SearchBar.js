import '../Style.css';
import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

export default function SearchBar({ onSearchChange, location }) {
    const [search, setSearch] = useState("");

    // Use useCallback with an empty dependency array so it remains stable
    const debouncedHandleChange = useCallback(
        debounce((value) => {
            setSearch(value);
            console.log(value);
            onSearchChange(value);
        }, 0), // 2000ms (2-second delay)
        [onSearchChange] // Only recreate when onSearchChange changes
    );

    // Cleanup function to cancel debounced calls on unmount
    React.useEffect(() => {
        return () => debouncedHandleChange.cancel();
    }, [debouncedHandleChange]);

    const handleOnChange = (event) => {
        debouncedHandleChange(event.target.value);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="/" title="Weather Home">
                    <img src="logo.png" alt="Weather Icon" className="weather-icon" />Weather
                </a>
            </div>

            <div className="navbar-location">
                <span id="current-location"></span>{location}
            </div>

            <div className="navbar-search">
                <input 
                    type="text"
                    id="search-bar"
                    placeholder="Search city or region..."
                    value={search}
                    onChange={handleOnChange} // Fix: Use onChange instead of onKeyDown
                />
            </div>

            <button id="mode-toggle" className="mode-toggle">🌙</button>
        </div>
    );
}
