import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <a
          href="https://github.com/kirstenrc/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        <span> by Kirsten Cox</span>
      </div>
    </div>
  );
}
