import React from 'react';

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  function icon() {
    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return <img src={iconUrl} alt={props.data.weather[0].description} />;
  }

  return (
    <div>
      <div className='forecast-day'>{day()}</div>
      <div>{icon()}</div>
      <div className='forecast-temperatures'>
        <span className='max-temperature'>{maxTemperature()}</span>
        <span className='min-temperature'>{minTemperature()}</span>
      </div>
    </div>
  );
}
