import React from "react";
import moment from "moment";
import { TimelineLite, gsap, CSSPlugin, Expo } from "gsap";
import Sunset from "../icons/sunset";
import Sunrise from "../icons/sunrise";
import Arrow from "../icons/arrow";

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
    <div className="weather-info">
      <a className="back" onClick={handleBack}>
        <Arrow width="3em" fill="#040403" />
      </a> */}

      {weather.map((data) => (
        <>
          <div className="" key={data.time}>
            <div className='weather-header-wrapper'>
              <p className="weather-header">{data.city}</p>
            </div>
            <h2 className="temp">{getCelsius(data.temp)}°</h2>
            <i className={getIcon(data.iconId) + " bg-weather"}></i>
          </div>
        </>
      ))}

      <div className="forecast-wrapper">
        {forecast.slice(0, 5).map((data) => (
          <div className="forecast">
            <i className={getIcon(data.iconId) + " icon"}></i>
            <p>{moment(data.time).format("ha")}</p>
          </div>
        ))}
      </div>

      {weather.map((data) => (
        <>
          <div className="extra-info">
            <div className="info-item">
              <Sunrise width={"2em"} fill="black" />
              <p className="sunrise">{moment(data.sunrise).format("HH:mm")}</p>
            </div>
            <div className="info-item">
              <Sunset width={"2em"} fill="black" />
              <p>{moment(data.sunset).format("HH:mm")}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default WeatherCard;
