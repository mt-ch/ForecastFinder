import React, { useEffect } from "react";
import DayTime from "./daytime";
import BackButton from "./backButton";
import Forecast from "./forecast";
import { StyledWeatherDesktop, StyledCircle } from "../css/components.styled";
import { TimelineLite, Expo, gsap, CSSPlugin } from "gsap";
import moment from "moment";
gsap.registerPlugin(CSSPlugin);

function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

export const WeatherCardDesktop = ({ weather, forecast, setDisplay }) => {
  useEffect(() => {
    reveal();
    return () => {};
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1.from(".city-header, .back-button", {
      delay: 0.3,
      opacity: 0,
      y: "10vh",
      duration: 0.5,
      ease: Expo.easeInOut,
    })
      .from(".description", {
        opacity: 0,
        y: "10vh",
        duration: 0.5,
        ease: Expo.easeInOut,
      })
      .from(".temp-d", {
        opacity: 0,
        y: "10vh",
        duration: 0.5,
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
      .from(".weather-main-info", {
        opacity: 0,
        y: "10vh",
        duration: 0.5,
        ease: Expo.easeInOut,
      })
      .from(".circle", {
        y: "100vw",
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
              bottom={"-160vh"}
              right={0}
            ></StyledCircle>
          ) : (
            <StyledCircle
              className="circle"
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
              <div class="description">
                {getCelsius(data.temp) >= 15 ? (
                  <h1>It's hot.</h1>
                ) : (
                  <h1>It's cold.</h1>
                )}
              </div>
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
            </>
          ))}
        </div>

        <div className="bottom-info-d">
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
