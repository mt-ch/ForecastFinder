import React, { useEffect, useState } from "react";
import moment from "moment";
import { TimelineLite, gsap, CSSPlugin, Expo } from "gsap";
import Humidity from "../icons/humidity";
import Wind from "../icons/wind";
import Sunset from "../icons/sunset";
import Sunrise from "../icons/sunrise";
import Arrow from "../icons/arrow";
import Title from "./title";
import Search from "../icons/search";
import Menu from "./menu";

import styled from "styled-components";

const StyledMenu = styled.div`
  position: relative;
  z-index: 10;
  padding: 0.5em 1em 0.5em 1em;
  color: black;
  background-color: ${({ open }) => (open ? "black" : "")};
  border-radius: 1.8em;
  border: 1px solid black;
  z-index: -1;
  color: #fff;
  z-index: 2;
  width: ${({ open }) => (open ? "350px" : "160px")};
  height: ${({ open }) => (open ? "200px" : "60px")};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: black;
  }
  &:hover {
    background-color: black;
    p {
      color: white;
    }
  }
`;

gsap.registerPlugin(CSSPlugin);

function getIcon(id) {
  var icon = "wi wi-owm-" + id;
  return icon;
}

function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

export const WeatherCardDesktop = ({
  weather,
  forecast,
  location,
  setLocation,
  hasError,
  handleSubmit,
}) => {
  const [open, setOpen] = useState(false);

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
      {weather.map((data) => (
          <>
            {getCelsius(data.temp) > 15 ? (<h1>It's hot.</h1>) : (<h1>It's cold.</h1>)}
            <StyledMenu open={open}>
              <a onClick={() => setOpen(!open)}>
                <p>{data.city}</p>
              </a>
            </StyledMenu>
          </>
        ))}
      </div>

      <div className="bottom-info">
        {weather.map((data) => (
          <div class="extra-info">
            <div class="info-item">
              <Sunrise width={"2.25em"} fill="black" />
              <p class="sunrise">{moment(data.sunrise).format("HH:mm")}</p>
            </div>
            <div class="info-item">
              <Sunset width={"2.25em"} fill="black" />
              <p>{moment(data.sunset).format("HH:mm")}</p>
            </div>
          </div>
        ))}

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
