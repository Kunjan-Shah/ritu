import './App.css';
import React, {useState, useEffect} from 'react';
import Dashboard from './pages/Dashboard';
import axios from 'axios'
import WeatherContext from './weather-context';

const API_KEY = "e7997edcdde6433ea7b162241221606"

function App() {
  const [location, setLocation] = useState("Hyderabad")
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
      const fetchWeatherData = async () => {
          const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=10&aqi=yes&alerts=yes`);
          setWeatherData(res.data);
      }

      fetchWeatherData();
  }, [location]);
  
  return (
    <React.Fragment>
    <WeatherContext.Provider value={{data: weatherData, location: location, setLocation: setLocation}} >
      <div className="App">
        <Dashboard />
      </div>
    </WeatherContext.Provider>
  </React.Fragment>
  );
}

export default App;
