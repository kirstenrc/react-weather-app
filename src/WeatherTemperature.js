import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function celsius() {
    return (props.fahrenheit - 32) / 1.8;
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={displayCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
          | °C
        </span>
      </span>
    );
  }
}
