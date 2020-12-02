import React, { useEffect, useState } from "react";
import moment from "moment";
import { TimelineLite, gsap, CSSPlugin, Expo } from "gsap";
import Humidity from "../icons/humidity";
import Wind from "../icons/wind";
import Sunset from "../icons/sunset";
import Sunrise from "../icons/sunrise";
import Arrow from "../icons/arrow";
import Title from "./title";

gsap.registerPlugin(CSSPlugin);

function getIcon(id) {
  var icon = "wi wi-owm-" + id;
  return icon;
}

function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

export const WeatherCardDesktop = ({ weather, forecast }) => {
  const handleBack = (evt) => {
    back();
  };

  const back = () => {
    const t1 = new TimelineLite();
    t1.to(".weather", {
      x: "100%",
      duration: 0.3,
      ease: Expo.easeInOut,
    }).to(".landing", { x: "0%", duration: 0.3, ease: Expo.easeInOut });
  };

  return (
    <div class="weather-info-d">
      <div class="weather-title">
        <h1>It's hot.</h1>
        {weather.map((data) => (
          // <p className="weather-city">{data.city}</p>
          <div className="location-input" onSubmit={handleSubmit}>
            <input
              value={data.city}
              placeholder={"Search for a place"}
              // onChange={(e) => setLocation(e.target.value)}
            />
            <div>
              <a type="submit" value="Submit" onClick={handleSubmit}>
                <Search className="search-icon" height="2.5vh" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-info">
        {/* {weather.map((data) => (
          <div class="extra-info">
            <div class="info-item">
              <Sunrise width={"2em"} fill="black" />
              <p class="sunrise">{moment(data.sunrise).format("HH:mm")}</p>
            </div>
            <div class="info-item">
              <Sunset width={"2em"} fill="black" />
              <p>{moment(data.sunset).format("HH:mm")}</p>
            </div>
            <div class="info-item">
              <Wind width={"2em"} fill="black" />
              <p>{data.windSpeed} mph</p>
            </div>
            <div class="info-item">
              <Humidity width={"2em"} fill="black" />
              <p>{data.humidity}%</p>
            </div>
          </div>
        ))} */}

        <div class="bottom-container">
          <div className="forecast-wrapper-d">
            {forecast.slice(0, 5).map((data) => (
              <div className="forecast-d">
                <i class={getIcon(data.iconId) + " icon-d"}></i>
                <p>{moment(data.time).format("ha")}</p>
              </div>
            ))}
          </div>
          {weather.map((data) => (
            <div key={data.time}>
              <h1>{getCelsius(data.temp)}°</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCardDesktop;
