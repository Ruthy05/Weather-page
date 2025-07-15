import { useState } from "react";
//import "./style/weather.css"; // 

export default function WeatherPage() {
  const [weatherUpdate, setWeatherUpdate] = useState(null);
  const [city, setCity] = useState("abeokuta");

  const getWeather = async (e) => {
    e.preventDefault(); 
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ffc3da0689454851911123435250105&q=${city}`
    );
    if (response.ok) {
      const data = await response.json();
      setWeatherUpdate(data);
    }
  };
  return (<>
    <link href="./style/weather.css" rel="stylesheet"/>
    
      <div className="container">
        <div className="weather__header">
          <form className="weather__search" onSubmit={getWeather}>
            <div className="search">
              {" "}
              
              <input
                type="search"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                spellCheck="true"
                value={city}
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>

          <div className="weather__units">
            <span className="weather_unit_celsius">°C</span>
            <span className="weather_unit_farenheit">°F</span>
          </div>
        </div>

        <div className="weather__body">
          <h1 className="weather__city">
            {weatherUpdate?.location?.name || "City"}
          </h1>
          <div className="weather__datetime"></div>
          <div className="weather__forecast"></div>
          <div className="weather__icon"></div>

          <p className="weather__temperature">
            {weatherUpdate?.current?.temp_c ?? "--"}°C
          </p>

          <div className="weather__minmax">
            <p>Min: -- °C</p>
            <p>Max: -- °C</p>
          </div>
        </div>

        <div className="weather__info">
          <div className="weather__card">
            <i className="fa-solid fa-temperature-full"></i>
            <div>
              <p>Real Feel</p>
              <p className="weather__realfeel">
                {weatherUpdate?.current?.feelslike_c ?? "--"}°C
              </p>
            </div>
          </div>

          <div className="weather__card">
            <i className="fa-solid fa-droplet" />
            <div>
              <p>Humidity</p>
              <p className="weather__humidity">
                {weatherUpdate?.current?.humidity ?? "--"}%
              </p>
            </div>
          </div>

          <div className="weather__card">
            <i className="fas fa-wind" />
            <div>
              <p>Wind</p>
              <p className="weather__wind">
                {weatherUpdate?.current?.wind_kph ?? "--"} kph
              </p>
            </div>
          </div>

          <div className="weather__card">
            <i className="fa-solid fa-gauge-high" />
            <div>
              <p>Pressure</p>
              <p className="weather__pressure">
                {weatherUpdate?.current?.pressure_mb ?? "--"} mb
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//https://codepen.io/gbopola/pen/gOdKqqr//
//fa-solid fa-wind//