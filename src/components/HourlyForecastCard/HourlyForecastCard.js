import React from 'react'
import './HourlyForecastCard.css'

function addHoursToDate(intHours, timezone) {
  const today = new Date();
  const millis = today.getTime();
  const newTime = new Date(intHours * 60 * 60 * 1000 + millis);
  const time = newTime.toLocaleTimeString('en', { timeZone: timezone, hour: 'numeric', hour12: true});
  return time
}

export default function HourlyForecastCard({timezone, Title, Icon, Temperature, Background}) {
  const time = Title === 0 ? "Now" : addHoursToDate(Title, timezone);
  return (
    <div className="hourly-forecast-card" style={{"background-color": Background}}>
        <div className="header">
            {time}
        </div>
        <div className="weather-icon">
            <img src={Icon} alt="weather-icon"></img>
        </div>
        <div className="temperature">
            {Temperature}
        </div>
    </div>
  )
}
