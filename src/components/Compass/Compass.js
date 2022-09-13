import React, {useContext} from 'react'
import './Compass.css';
import WeatherContext from '../../weather-context'

export default function Compass() {
  let rotateAngles = [];
  for (let i = 0; i <= 360; i += 10) {
    rotateAngles.push(i);
  }
  const weatherContext = useContext(WeatherContext);
  const data = weatherContext.data;
  let needleAngle = 0;
  switch(data.current.wind_dir) {
    case "W" : needleAngle = 0;
               break;
    case "NW": needleAngle = 45;
               break;
    case "N":  needleAngle = 90;
               break;
    case "NE": needleAngle = 135;
               break;
    case "E":  needleAngle = 180;
               break;
    case "SE": needleAngle = 225;
               break;
    case "S":  needleAngle = 270;
               break;
    case "SW": needleAngle = 315;
               break;
    default:   needleAngle = 135;
               break;
  }
  document.documentElement.style.setProperty('--needle-rotate-angle',  needleAngle + "deg");
  const backAngle = needleAngle - 15;
  const frontAngle = needleAngle + 15;
  document.documentElement.style.setProperty('--needle-back-angle',  backAngle + "deg");
  document.documentElement.style.setProperty('--needle-front-angle',  frontAngle + "deg");

  return (
    <div className="compass">
        {
            rotateAngles.map((rotateAngle, key) => 
                <div className="stroke-line" 
                     style={{"transform": `translateY(50px) rotate(${rotateAngle}deg)`}}>
                </div>  
            )
        }
        <div className="legend">
            <div className="N-S">
                <div className="N">N</div>
                <div className="S">S</div>
            </div>
            <div className="W-E">
                <div className="W">W</div>
                <div className="E">E</div>
            </div>
        </div>
        <div className="needle" key={needleAngle}>
            <div className="pointer">

            </div>
        </div>
    </div>
  )
}
