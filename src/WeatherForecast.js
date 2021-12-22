import React from 'react';

import './WeatherForecast.css';

export default function WeatherForecast() {
  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='col'>
          <div className='weather-forecast-day'>Thu</div>
          <span className='weather-forecast-temperature-max'>19°</span>
          <span className='weather-forecast-temperature-min'>10°</span>
        </div>
      </div>
    </div>
  );
}
