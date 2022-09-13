import React from 'react'
import './WeatherBoxFooterItem.css'

export default function WeatherBoxFooterItem({iconClassName, statValue}) {
  return (
    <div className="weather-box-footer-item">
        <span class="material-symbols-outlined">{iconClassName}</span>
        <div className="item">{statValue}</div>
    </div>
  )
}
