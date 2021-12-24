import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WeatherForecastDay from './WeatherForecastDay';

import './WeatherForecast.css';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='WeatherForecast mt-4'>
        <div className='row'>
          <div className='col'>
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className='col'>
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = 'd28ecb39c95ebfccb60209e31e5c22de';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
