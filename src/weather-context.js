import {createContext} from 'react';
  
const WeatherContext = createContext({data: {}, location: {}, setLocation: {}});
  
export default WeatherContext;
