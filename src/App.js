import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seattle" />
        <footer>
          <a
            href="https://github.com/kirstenrc/react-weather-app"
            target="_blank"
            rel="noreferrer noopener">
            Open-source
          </a>
          <span> code by </span>
          <a
            href="https://vibrant-galileo-0d7b3f.netlify.app/"
            target="_blank"
            rel="noreferrer noopener">
            Kirsten Cox
          </a>
        </footer>
      </div>
    </div>
  );
}
