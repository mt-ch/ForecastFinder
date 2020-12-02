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

export const WeatherCard = ({ weather, forecast }) => {
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
    <div class="weather-info">
      {/* <div class="circle"></div>
      <a className="back" onClick={handleBack}>
        <Arrow width="3em" fill="#040403" />
      </a> */}

      {weather.map((data) => (
        <>
          <div class="" key={data.time}>
            <div class="">
              <h2 className="temp">{getCelsius(data.temp)}°</h2>
              <i class={getIcon(data.iconId) + " bg-weather"}></i>
              {/* <p class="pt-3">{data.description}</p> */}
            </div>
          </div>
        </>
      ))}

      <div className="forecast-wrapper">
        {forecast.slice(0, 5).map((data) => (
          <div className="forecast">
            <i class={getIcon(data.iconId) + " icon"}></i>
            <p>{moment(data.time).format("ha")}</p>
            {/* <p class="pb-1">{getCelsius(data.temp)}°</p> */}
          </div>
        ))}
      </div>

      {weather.map((data) => (
        <>
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
        </>
      ))}
    </div>
  );
};

export default WeatherCard;
