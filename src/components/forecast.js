import React from "react";
import moment from "moment";
import { StyledForecast } from "../css/components.styled";
import { useEffect } from "react";
import { TimelineLite, Expo } from "gsap";

function getIcon(id) {
    var icon = "wi wi-owm-" + id;
    return icon;
  }

const Forecast = ({forecast}) => {
  useEffect(() => {
    reveal();
    return () => {};
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1.from(".forecast", {
      opacity: 0,
      y: "6vh",
      duration: 0.4,
      ease: Expo.easeInOut,
      stagger: {
        amount: 1
      }
    })
  };

  return (
    <StyledForecast>
      {forecast.slice(0, 5).map((data) => (
        <div className="forecast">
          <i className={getIcon(data.iconId) + " icon"}></i>
          <p>{moment(data.time).format("ha")}</p>
        </div>
      ))}
    </StyledForecast>
  );
};

export default Forecast;
