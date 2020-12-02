import React, { useState } from "react";
import GetForecast from "../utils/getForecast";
import GetWeather from "../utils/getWeather";
import WeatherCard from "./weatherCard";
import WeatherCardDesktop from './weatherCardDesktop';
import Landing from "./landing";

const Content = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    GetWeather(location, setWeather, setHasError);
    GetForecast(location, setForecast);
  };

  return (
    <>
    {/* <img class='bg' src='https://source.unsplash.com/collection/28675699'/> */}
    <div className='content'>
      <div class="landing" >
        <Landing
          location={location}
          setLocation={setLocation}
          hasError={hasError}
          handleSubmit={handleSubmit}
        />
      </div>
        {hasError ? null : (
          <div class="weather">
            <WeatherCardDesktop weather={weather} forecast={forecast} />
          </div>
        )}
    </div>
    </>
  );
};

export default Content;
