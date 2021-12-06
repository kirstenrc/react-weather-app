import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li>Monday 08:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          46°F
        </div>
        <div className="col">
          <ul>
            <li>Humidity: 72%</li>
            <li>Wind: 1 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
