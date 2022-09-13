import React, {useContext} from 'react'
import './RainChance.css';
import WeatherContext from '../../weather-context';

export default function RainChance() {
  const weatherContext = useContext(WeatherContext);
  let percentage = weatherContext.data.forecast.forecastday[0].day.daily_chance_of_rain;
  let x = 90 + 3.6*percentage;
  let fillColor;
  if(percentage <= 50) {
    fillColor = "#C4E2FF"; // light
  }
  else if(percentage > 50) {
    fillColor = "#24609B"; // dark
    x = x - 180
  }

  let rainChanceLabel;
  if(percentage <= 30) rainChanceLabel = "Low";
  else if(percentage <= 60) rainChanceLabel = "Medium";
  else rainChanceLabel = "High";

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  async function createIncrementAnimation() {
    for(let i = 0; i < percentage; i++) {
      let x = 90 + 3.6*i;
      let fillColor;
      if(i <= 50) {
        fillColor = "#C4E2FF"; // light
      }
      else if(i > 50) {
        fillColor = "#24609B"; // dark
        x = x - 180
      }
      document.documentElement.style.setProperty('--x',  x + "deg");
      document.documentElement.style.setProperty('--fill-color',  fillColor);
      await sleep(5);
    }
  }
  createIncrementAnimation();

  document.documentElement.style.setProperty('--x',  x + "deg");
  document.documentElement.style.setProperty('--fill-color',  fillColor);

  return (
    <div className="rain-chance">
        <div className="label">
            {rainChanceLabel}
        </div>
    </div>
  )
}
