import React, { useState, useEffect } from "react";
import GetForecast from "../utils/getForecast";
import GetWeather from "../utils/getWeather";
import WeatherCard from "./weatherCard";
import WeatherCardDesktop from "./weatherCardDesktop";
import Landing from "./landing";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

const Content = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [hasError, setHasError] = useState(false);

  const { width } = useViewport();
  const breakpoint = 700;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    GetWeather(location, setWeather, setHasError);
    GetForecast(location, setForecast);
  };

  const handleAutoSubmit = (evt, input) => {
    evt.preventDefault();
    GetWeather(input, setWeather, setHasError);
    GetForecast(input, setForecast);
  };

  return (
    <>
      <div className="content">
        <Landing
          location={location}
          setLocation={setLocation}
          hasError={hasError}
          handleSubmit={handleSubmit}
          handleAutoSubmit={handleAutoSubmit}
        />
        {hasError ? null : (
          <div className="weather">
            {width < breakpoint ? (
              <>
                <WeatherCard
                  weather={weather}
                  forecast={forecast}
                  location={location}
                />
              </>
            ) : (
              <>
                <WeatherCardDesktop
                  weather={weather}
                  forecast={forecast}
                  location={location}
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
