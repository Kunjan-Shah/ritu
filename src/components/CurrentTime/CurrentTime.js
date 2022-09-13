import React, {useEffect, useState} from 'react'

export default function CurrentTime({timezone}) {
    const locale = 'en';
    // const [today, setDate] = useState(new Date(Date.parse(currentTime)));
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => { 
                setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const day = today.toLocaleDateString(locale, { timeZone: timezone, weekday: 'long' });
    const time = today.toLocaleTimeString(locale, { timeZone: timezone, hour: 'numeric', hour12: true, minute: 'numeric' });
    const dayTime = day + " " + time;

    return (
    <div className="current-time-wrapper">
        <div className="day-time">
            {dayTime}
        </div>
    </div>
  )
}
