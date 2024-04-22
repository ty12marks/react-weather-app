import React, { useState } from 'react';
import Search from './Search';
import Weather from './Weather';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    const apiKey = 'bc8fb97d94392f297ff65ef0c892aa0e'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Failed to retrieve weather data', error);
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <Search getWeather={getWeather} />
      {weather ? (
        <Weather data={weather} />
      ) : (
        <p>No weather data available. Please search for a city.</p>
      )}
    </div>
  );
};

console.log("API Key:", process.env.REACT_APP_OPENWEATHER_API_KEY);

export default App;
