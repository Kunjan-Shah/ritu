import React, {useContext} from 'react'
import './UVmeter.css'
import WeatherContext from '../../weather-context';

export default function UVmeter() {
    const weatherContext = useContext(WeatherContext);
    let UVIndex = Math.round(weatherContext.data.current.uv);
    let degree = UVIndex * 20 - 40;

    let indexTitle;
    if(UVIndex <= 4) indexTitle = "Low";
    else if(UVIndex <= 8) indexTitle = "Medium";
    else UVIndex = "High";
  
    document.documentElement.style.setProperty('--uv-needle-angle',  degree + "deg");

    return (
    <div className="uv-meter">
        <div className="uv-index-title">
            {indexTitle}
        </div>
        <svg className="meter-svg">
            <circle cx="50" cy="50" r="50"></circle>
            <path d="M50,50 L15,86 A50,50 1 0,0 86,86 z"></path>
        </svg>
        <div className="uv-needle" >
            <div className="ball">

            </div>
        </div>
    </div>
  )
}
