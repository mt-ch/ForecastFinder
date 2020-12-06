import React from "react";
import { StyledWeatherMobile, StyledCircle } from "../css/components.styled";
import BackButton from "./backButton";
import Forecast from "./forecast";
import DayTime from "./daytime";
import { useEffect } from "react";
import { TimelineLite, Expo } from "gsap";


function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

export const WeatherCard = ({ weather, forecast, setDisplay }) => {
  useEffect(() => {
    reveal();
    return () => {};
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1.from(".temp", {
      delay: 1,
      opacity: 0,
      y: "6vh",
      duration: 0.4,
      ease: Expo.easeInOut,
    })
      .from(".city-header, .back-button", {
        opacity: 0,
        y: "3vh",
        duration: 0.4,
        ease: Expo.easeInOut,
      })
      .from(".circle", {
        x: "70vw",
        duration: 0.8,
        ease: Expo.easeInOut,
      });
  };

  return (
    <>
      {weather.map((data) => (
        <>
          {getCelsius(data.temp) >= 15 ? (
            <StyledCircle
              className="circle"
              color={"#fbd810"}
              right={"-40vw"}
              bottom={0}
            ></StyledCircle>
          ) : (
            <StyledCircle
              className="circle"
              color={"#57b0f3"}
              right={"-40vw"}
              bottom={0}
            ></StyledCircle>
          )}
        </>
      ))}
      <StyledWeatherMobile className="weather-info">
        {weather.map((data) => (
          <div key={data.time}>
            <div className="weather-header-wrapper">
              <p className="city-header">{data.city}</p>
              <div className="back-button">
                <BackButton setDisplay={setDisplay} />
              </div>
            </div>
            <h2 className="temp">{getCelsius(data.temp)}°</h2>
          </div>
        ))}

        <div className="weather-bottom">
          <Forecast forecast={forecast} />
          <DayTime weather={weather} />
        </div>
      </StyledWeatherMobile>
    </>
  );
};

export default WeatherCard;
