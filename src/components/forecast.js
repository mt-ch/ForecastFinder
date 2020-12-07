import React from "react";
import moment from "moment";
import { StyledForecast } from "../css/components.styled";

function getIcon(id) {
    var icon = "wi wi-owm-" + id;
    return icon;
  }

const Forecast = ({forecast}) => {
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
