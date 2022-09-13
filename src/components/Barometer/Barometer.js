import React from 'react'
import BarometerImg from '../../images/barometer.png';
import './Barometer.css';

export default function 
() {
  return (
    <div>
        <img className="barometer" alt="barometer" src={BarometerImg} />
        {/* <div className="barometer-needle">
          <div className="right-arrow"></div>
          <div className="stick"></div>
          <div className="left-arrow"></div>
        </div> */}
    </div>
  )
}
