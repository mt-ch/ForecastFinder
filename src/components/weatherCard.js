import React from "react";
import { StyledWeatherMobile, StyledCircle } from "../css/components.styled";
import BackButton from "./backButton";
import Forecast from "./forecast";
import DayTime from "./daytime";
import { useEffect } from "react";
import { TimelineLite, Expo, CSSPlugin, gsap } from "gsap";
import moment from "moment";
gsap.registerPlugin(CSSPlugin);

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
    t1.from(".weather-main-info", {
      delay: 0.3,
      opacity: 0,
      y: "10vh",
      duration: 0.5,
      ease: Expo.easeInOut,
    })
      .from(".temp", {
        opacity: 0,
        y: "10vh",
        duration: 0.3,
        ease: Expo.easeInOut,
      })
      .from(".forecast", {
        opacity: 0,
        y: "10vh",
        duration: 0.2,
        ease: Expo.easeInOut,
        stagger: {
          amount: 0.5,
        },
      })
      .from(".circle", {
        x: "70vw",
        duration: 0.5,
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
          <>
          <div key={data.time}>
            <div className="weather-header-wrapper">
              <div class="weather-main-info">
                <div class="top">
                  <h3 className="city-header">
                    <strong>{data.city}</strong>
                  </h3>
                  <div className="back-button">
                    <BackButton setDisplay={setDisplay} />
                  </div>
                </div>
                <div class="time">
                  <p>{moment(data.date).format("ddd D MMM 'YY")}</p>
                  <p>{moment(data.date).format("H:mm A")}</p>
                </div>
                <DayTime weather={weather} />
              </div>
            </div>
            
          </div>
          <h2 className="temp">{getCelsius(data.temp)}°</h2>
          </>
        ))}

        <div className="weather-bottom">
          <Forecast forecast={forecast} />
        </div>
      </StyledWeatherMobile>
    </>
  );
};

export default WeatherCard;
