import React, { useState } from "react";
//import "./style/WeatherCard.css";//

export default function WeatherCardPage() {
  const [weatherUpdate, setWeatherUpdate] = useState(null);
  const [city, setCity] = useState("Abeokuta");

  const getWeather = async (e) => {
    e.preventDefault();

    const apiKey = "J5UHR833K55BJ9TCEA6QUA8NR";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherUpdate(data);
    } catch (error) {
      console.error(error);
      setWeatherUpdate(null);
    }
  };

  const current = weatherUpdate?.currentConditions;

  return (<>
  <link href="./style/WeatherCard.css" rel="stylesheet"/>
    <div className="weather-app">
    
      </div>

      <div className="card">
      <h1 className="header">Weather Forecast</h1>

        <form className="search" onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            spellCheck="true"
          />
          <button type="submit" id="search-button">
            <img src="./image/search.png" alt="Search" />
          </button>
        </form>

        {current && (
          <div className="weather-details">
            <div className="city">{weatherUpdate.resolvedAddress}</div>
            <div className="weather">
              <h1 className="temp">{current.temp ?? "--"}°C</h1>
              <h2 className="description">{current.conditions}</h2>
            </div>
            <img
              className="weather-icon"
            src="./image/weather-icon.png"
              alt="Weather icon"
            />
            <div className="details">
              <div className="col">
                <p>Humidity</p>
                <img src="./image/humidity.jpg" alt="Humidity icon" />
                <span className="humidity">{current.humidity ?? "--"}%</span>
              </div>


              <div className="col" style={{paddingLeft:"30px"}}>
                <p>Wind</p>
                <img src="./image/wind.jpg" alt="Wind icon" />
                <span className="wind">{current.windspeed ?? "--"} km/h</span>
              </div>
            </div>
          </div>
        )}
        </div>
        
        </>
  )
}
      
//https://www.visualcrossing.com/weather-query-builder/