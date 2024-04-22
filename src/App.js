import React, { useState } from 'react';
import Search from './Search';
import Weather from './Weather';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
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
      {weather && <Weather data={weather} />}
    </div>
  );
};

export default App;
