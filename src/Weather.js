import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-secondary">
                Search
              </button>
            </div>
          </div>
        </form>
        <h1 className="mt-2">{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-2">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className=""
            />
          </div>

          <div className="col-6">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°F</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b0f53c0693e9322889a32ea02b229166";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
