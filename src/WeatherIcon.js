import React from "react";

import clearDay from "./images/clear-day.svg";
import clearNight from "./images/clear-night.svg";
import cloudyDay from "./images/cloudy-day.svg";
import cloudyNight from "./images/cloudy-night.svg";
import cloudy from "./images/cloudy.svg";
import rain from "./images/rain.svg";
import rainyDay from "./images/rain-day.svg";
import rainyNight from "./images/rain-night.svg";
import thunderstorm from "./images/thunderstorm.svg";
import snow from "./images/snow.svg";
import mist from "./images/mist.svg";

export default function WeatherIcon() {
  return (
    <div>
      <img src={clearNight} alt="clear" />
      <img src={clearDay} alt="clear" />
      <img src={cloudyDay} alt="cloudy" />
      <img src={cloudyNight} alt="cloudy" />
      <img src={cloudy} alt="cloudy" />
      <img src={rain} alt="rain" />
      <img src={rainyDay} alt="rain" />
      <img src={rainyNight} alt="rain" />
      <img src={thunderstorm} alt="thunderstorm" />
      <img src={snow} alt="snow" />
      <img src={mist} alt="mist" />
    </div>
  );
}
