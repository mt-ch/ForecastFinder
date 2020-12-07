import React, { useState } from "react";
import "./css/weather-icons.min.css";
import "./css/App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./css/global";
import { theme } from "./css/theme";
import GetForecast from "./utils/getForecast";
import GetWeather from "./utils/getWeather";
import WeatherCard from "./components/weatherCard";
import WeatherCardDesktop from "./components/weatherCardDesktop";
import Landing from "./components/landing";
import { useEffect } from "react";

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

function App() {
  const [display, setDisplay] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [hasError, setHasError] = useState(false);

  const { width } = useViewport();
  const breakpoint = 550;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    GetWeather(location, setWeather, setHasError, setDisplay);
    GetForecast(location, setForecast);
  };

  const handleAutoSubmit = (evt, input) => {
    evt.preventDefault();
    GetWeather(input, setWeather, setHasError, setDisplay);
    GetForecast(input, setForecast);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Landing
          location={location}
          setLocation={setLocation}
          hasError={hasError}
          handleSubmit={handleSubmit}
          handleAutoSubmit={handleAutoSubmit}
        />

        {display ? (
          <>
            {hasError ? null : (
              <div className="weather">
                {width < breakpoint ? (
                  <>
                    <WeatherCard
                      weather={weather}
                      forecast={forecast}
                      location={location}
                      setDisplay={setDisplay}
                    />
                  </>
                ) : (
                  <>
                    <WeatherCardDesktop
                      weather={weather}
                      forecast={forecast}
                      location={location}
                      setDisplay={setDisplay}
                    />
                  </>
                )}
              </div>
            )}
          </>
        ) : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
