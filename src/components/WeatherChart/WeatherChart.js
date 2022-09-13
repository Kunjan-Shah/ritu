import React from 'react'
import {
    LineChart,
    XAxis,
    Line,
} from 'recharts';
import './WeatherChart.css';

export default function WeatherChart({weatherChartData}) {
  return (
    <div className="weather-chart">
        <LineChart width={300} height={100} data={weatherChartData}>
            <Line type="monotone" dataKey="Temperature" stroke="#326BA3" strokeWidth={2}/>
            <XAxis dataKey="name" interval={'preserveStartEnd'} axisLine={false} tickLine={false}/>
        </LineChart>
    </div>
  )
}
