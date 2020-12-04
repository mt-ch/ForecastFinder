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
function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

const Content = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [hasError, setHasError] = useState(false);

  const { width } = useViewport();
  const breakpoint = 620;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    GetWeather(location, setWeather, setHasError);
    GetForecast(location, setForecast);
  };

  const handleAutoSubmit = (evt, input) => {
    evt.preventDefault();
    setLocation(input);
    GetWeather(location, setWeather, setHasError);
    GetForecast(location, setForecast);
  };

  return (
    <>
      <div className="content">
        <div className="landing">
          <Landing
            location={location}
            setLocation={setLocation}
            hasError={hasError}
            handleSubmit={handleSubmit}
            handleAutoSubmit={handleAutoSubmit}
          />
        </div>
        {hasError ? null : (
          <div className="weather">
            {width < breakpoint ? (
              <>
                <div className="circle"></div>
                <WeatherCard
                  weather={weather}
                  forecast={forecast}
                  location={location}
                />
              </>
            ) : (
              <>
                {weather.map((data) => (
                  <>
                    {getCelsius(data.temp) > 15 ? (
                      <div
                        className="circle-d"
                        style={{ backgroundColor: "#fbd810" }}
                      ></div>
                    ) : (
                      <div
                        className="circle-d"
                        style={{ backgroundColor: "#57b0f3" }}
                      ></div>
                    )}
                  </>
                ))}
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
