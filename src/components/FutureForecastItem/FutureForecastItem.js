import React from 'react'
import './FutureForecastItem.css'

function addDayToDate(intDays, timezone) {
  const today = new Date();
  const millis = today.getTime();
  const newTime = new Date(intDays * 24 * 60 * 60 * 1000 + millis);
  return {
    "day": newTime.toLocaleDateString('en', { timeZone: timezone, weekday: 'long' }),
    "date": newTime.toLocaleDateString('en', { timeZone: timezone, month: 'short', day: 'numeric'})
  }
}

export default function FutureForecastItem({timezone, Day, Temperature, Icon}) {
  const future_day = addDayToDate(Day, timezone)
  const day = Day === 1 ? "Tomorrow" : future_day.day
  const date = future_day.date
  const iconUrl = `//cdn.weatherapi.com/weather/64x64/day/${Icon}.png`
  return (
    <div className="future-forecast-item">
        <div className="day-date">
            <div className="day">{day}</div>
            <div className="date">{date}</div>
        </div>
        <div className="temperature">
            {Temperature}
        </div>
        <div className="weather-icon">
            <img src={iconUrl} alt="weather-icon" />
        </div>
    </div>
  )
}
