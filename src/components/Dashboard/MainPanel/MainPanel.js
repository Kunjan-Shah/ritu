import React, {useContext} from 'react'
import './MainPanel.css';
import SearchBar from '../../SearchBar/SearchBar'
import WeatherChart from '../../WeatherChart/WeatherChart';
import CurrentTime from '../../CurrentTime/CurrentTime'
import WeatherBoxFooterItem from '../../WeatherBoxFooterItem/WeatherBoxFooterItem';
import Compass from '../../Compass/Compass';
import RainChance from '../../RainChance/RainChance';
import UVmeter from '../../UVmeter/UVmeter';
import Barometer from '../../Barometer/Barometer';
import IndividualStatsWrapper from '../../IndividualStatsWrapper/IndividualStatsWrapper';
import WeatherContext from '../../../weather-context';

export default function MainPanel() {
  let isMobile = window.innerWidth > 600 ? false : true;
  const weatherContext = useContext(WeatherContext);
  const data = weatherContext.data;
  let weatherChartData = [];
  if(data) {
    weatherChartData = [
      {
          name: 'Morning',
          Temperature: Math.round(data.forecast.forecastday[0].hour[8].temp_c),
      },
      {
          name: 'Afternoon',
          Temperature: Math.round(data.forecast.forecastday[0].hour[14].temp_c),
      },
      {
          name: 'Evening',
          Temperature: Math.round(data.forecast.forecastday[0].hour[18].temp_c),
      },
      {
          name: 'Night',
          Temperature: Math.round(data.forecast.forecastday[0].hour[21].temp_c),
      },
    ];
  }
  return (
      <div className="dashboard-main-panel">
        {!isMobile ? 
          <div className="task-bar">
            <SearchBar />
            <div className="right">
              <div className="notifications-container">
              <span class="material-symbols-outlined">notifications</span>
              </div>
              <div className="user-profile-container">
                <span class="material-symbols-outlined">account_circle</span>
              </div>
            </div>
          </div>
        : null}
        {data ? 
          <>
          <div className="weather-panel">
            <div className="weather-box">
              <div className="left">
                <div className="time-location-container">
                  <div className="location">
                    <span class="material-symbols-outlined">pin_drop</span>
                    <div className="location-title">{data.location.name}</div>
                  </div>
                  <CurrentTime timezone={data.location.tz_id}/>
                </div>
                <div className="temperature-container">
                  <div className="temperature">{Math.round(data.current.temp_c)}°</div>
                  <div className="temperature-description">{data.current.condition.text}</div>
                </div>
                <div className="other-stats-container">
                  <WeatherBoxFooterItem statValue={data.forecast.forecastday[0].day.maxtemp_c} iconClassName="thermostat"/>
                  <WeatherBoxFooterItem statValue={data.forecast.forecastday[0].day.mintemp_c} iconClassName="thermometer"/>
                  <WeatherBoxFooterItem statValue={data.current.humidity + "%"} iconClassName="water_drop"/>
                  <WeatherBoxFooterItem statValue={Math.round(data.current.air_quality.pm2_5 * 100)/100 + " µg/m³(PM2.5)"} iconClassName="masks"/>
                </div>
              </div>
              <div className="right">
                <div className="weather-chart-container">
                  <div className="temperature-heading">
                    Temperature
                  </div>
                  <div className="weather-chart-graph" id="weather-chart-graph">
                    <WeatherChart weatherChartData={weatherChartData}/>
                    <div className="temperature-footer">
                      <div>
                      {weatherChartData[0].Temperature}°
                      </div>
                      <div>
                      {weatherChartData[1].Temperature}°
                      </div>
                      <div>
                      {weatherChartData[2].Temperature}°
                      </div>
                      <div>
                      {weatherChartData[3].Temperature}°
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="weather-stats-container">
            <IndividualStatsWrapper Title="Wind" Subtitle="Today wind speed" Value={data.current.wind_kph + " km/h"} Dial={Compass} />
            <IndividualStatsWrapper Title="Rain Chance" Subtitle="Today rain chance" Value={data.forecast.forecastday[0].day.daily_chance_of_rain + "%"} Dial={RainChance}/>
            <IndividualStatsWrapper Title="Pressure" Subtitle="Today pressure" Value={Math.round(data.current.pressure_mb) + " hpa"} Dial={Barometer}/>
            <IndividualStatsWrapper Title="UV Index" Subtitle="Today UV Index" Value={Math.round(data.current.uv)} Dial={UVmeter}/>
          </div>
          </>
          : null
        }
      </div>
  )
}