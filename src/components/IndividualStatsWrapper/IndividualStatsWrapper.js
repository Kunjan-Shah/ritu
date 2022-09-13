import React from 'react'
import './IndividualStatsWrapper.css';

export default function IndividualStatsWrapper({Title, Subtitle, Value, Dial}) {
  return (
    <div className="individual-stats-wrapper">
        <div className="left">
            <div className="title">
                {Title}
            </div>
            <div className="sub-title">
                {Subtitle}
            </div>
            <div className="value">
                {Value}
            </div>
        </div>
        <div className="right">
            <Dial />
        </div>
    </div>
  )
}
