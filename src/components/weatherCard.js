import React, { useEffect } from "react";
import moment from "moment";
var capitalize = require("lodash/capitalize");

function getIcon(id) {
  var icon = "wi wi-owm-" + id;
  return icon;
}

function getCelsius(kelvins) {
  var celsius = kelvins - 273.15;
  return Math.round(celsius);
}

export const WeatherCard = ({ weather }) => {

  return (
    <div class="container">
      <div class="row">
        {weather.map((data) => (
          <div key={data.time} class="card m-3 w-25 ">
            <h5 class="card-header text-center">
              {moment(data.time).format("HH:mm")}
            </h5>
            <div class="card-body d-flex flex-column align-content-center">
              <div class="card-text">
                <i class={getIcon(data.iconId)}></i>
                <p>{getCelsius(data.temp)}°</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;

/* <p>{data.city}</p>
                    <p>{data.weather}</p>
                    <p>{data.description}</p>
                    <p>{data.temp}</p>
                    <p>{data.feelsLike}</p>
                    <p>{data.humidity}</p> */
