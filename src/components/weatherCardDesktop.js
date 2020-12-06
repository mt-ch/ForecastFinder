import React from "react";
import DayTime from "./daytime";
import BackButton from "./backButton";
import Forecast from "./forecast";
import {StyledWeatherDesktop, StyledCircle} from '../css/components.styled';

function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

export const WeatherCardDesktop = ({ weather, forecast }) => {
  return (
    <>
    {weather.map((data) => (
      <>
        {getCelsius(data.temp) > 15 ? (
          <StyledCircle
            color={"#fbd810"}
            bottom={"-160vh"}
            right={0}
          ></StyledCircle>
        ) : (
          <StyledCircle
            color={"#57b0f3"}
            bottom={"-160vh"}
            right={0}
          ></StyledCircle>
        )}
      </>
    ))}

    <StyledWeatherDesktop>
      <div class="weather-header-d">
        {weather.map((data) => (
          <>
            {getCelsius(data.temp) >= 15 ? (
              <h1>It's hot.</h1>
            ) : (
              <h1>It's cold.</h1>
            )}
            <p className="city-header">{data.city}</p>
            <BackButton />
          </>
        ))}
      </div>

      <div className="bottom-info-d">
        <DayTime weather={weather} />
        <div class="bottom-container">
          <Forecast forecast={forecast} />
          {weather.map((data) => (
            <div key={data.time}>
              <h1 className="temp-d">{getCelsius(data.temp)}°</h1>
            </div>
          ))}
        </div>
      </div>
    </StyledWeatherDesktop>
    </>
  );
};

export default WeatherCardDesktop;
