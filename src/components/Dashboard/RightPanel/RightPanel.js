import React,{useContext, useState, useEffect} from 'react'
import './RightPanel.css';
import HourlyForecastCard from '../../HourlyForecastCard/HourlyForecastCard'
import FutureForecastItem from '../../FutureForecastItem/FutureForecastItem'
import WeatherContext from '../../../weather-context'
import axios from 'axios'
import convertedIcon from '../../../code-to-icon.json';

export default function RightPanel() {
  const weatherContext = useContext(WeatherContext)
  const data = weatherContext.data;
  const today = new Date();
  const locale = 'en';
  let num_hr;
  if(data) {
  // const day = today.toLocaleDateString(locale, { timeZone: data.location.tz_id, weekday: 'long' });
    const hr = today.toLocaleTimeString(locale, { timeZone: data.location.tz_id, hour: 'numeric', hour12: false});
  // const time = today.toLocaleTimeString(locale, { timeZone: data.location.tz_id, hour: 'numeric', hour12: true });
    num_hr = parseInt(hr);
  }

  const OPEN_WEATHER_API_KEY = "4514adfefff4bc2cdf8e6bf22396a733";
  const [openWeatherData, setOpenWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
        if(data) {
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.location.lat}&lon=${data.location.lon}&appid=${OPEN_WEATHER_API_KEY}`);
          setOpenWeatherData(res.data);
        }
    }

    fetchWeatherData();
}, [data]);

  return (
    <div className="dashboard-right-panel">
      { data && openWeatherData?
        <>
        <div className="forecast-timeline-wrapper">
          <span class="material-symbols-outlined" style={{"color": "#A6B6BF"}}>arrow_back_ios</span>
          <div className="forecast-timeline-header">This Week</div>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </div>

        <div className="today-forecast-wrapper">
          <div className="today-header">
            Today
          </div>
          <div className="hourly-forecast-container">
            <HourlyForecastCard timezone={data.location.tz_id} Title={0} Icon={data.current.condition.icon} Temperature={Math.round(data.current.temp_c) + "°"} Background="#C4E2FF"/>
            <HourlyForecastCard timezone={data.location.tz_id} Title={1} Icon={data.forecast.forecastday[0].hour[(num_hr+1)%24].condition.icon} Temperature={Math.round(data.forecast.forecastday[0].hour[(num_hr+1)%24].temp_c) + "°"} Background="white"/>
            <HourlyForecastCard timezone={data.location.tz_id} Title={2} Icon={data.forecast.forecastday[0].hour[(num_hr+2)%24].condition.icon} Temperature={Math.round(data.forecast.forecastday[0].hour[(num_hr+2)%24].temp_c) + "°"} Background="white"/>
            <HourlyForecastCard timezone={data.location.tz_id} Title={3} Icon={data.forecast.forecastday[0].hour[(num_hr+3)%24].condition.icon} Temperature={Math.round(data.forecast.forecastday[0].hour[(num_hr+3)%24].temp_c) + "°"} Background="white"/>
          </div>
        </div>

        <div className="future-forecast-wrapper">
          {/* <FutureForecastItem Day={1} Temperature={Math.round(data.forecast.forecastday[1].day.avgtemp_c)+"°"} Icon={data.forecast.forecastday[1].day.condition.icon}/> */}
          <FutureForecastItem timezone={data.location.tz_id} Day={1} Temperature={Math.round((openWeatherData.daily[1].temp.max + openWeatherData.daily[1].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[1].weather[0].id]} />
          <FutureForecastItem timezone={data.location.tz_id} Day={2} Temperature={Math.round((openWeatherData.daily[2].temp.max + openWeatherData.daily[2].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[2].weather[0].id]} />
          <FutureForecastItem timezone={data.location.tz_id} Day={3} Temperature={Math.round((openWeatherData.daily[3].temp.max + openWeatherData.daily[3].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[3].weather[0].id]} />
          <FutureForecastItem timezone={data.location.tz_id} Day={4} Temperature={Math.round((openWeatherData.daily[4].temp.max + openWeatherData.daily[4].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[4].weather[0].id]} />
          <FutureForecastItem timezone={data.location.tz_id} Day={5} Temperature={Math.round((openWeatherData.daily[5].temp.max + openWeatherData.daily[5].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[5].weather[0].id]} />
          <FutureForecastItem timezone={data.location.tz_id} Day={6} Temperature={Math.round((openWeatherData.daily[6].temp.max + openWeatherData.daily[6].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[6].weather[0].id]} />
          <FutureForecastItem timezone={data.location.tz_id} Day={7} Temperature={Math.round((openWeatherData.daily[7].temp.max + openWeatherData.daily[7].temp.min)/2-273)+"°"} Icon={convertedIcon[openWeatherData.daily[7].weather[0].id]} />
        </div>
        </>
        : null
      }
    </div>
  )
}