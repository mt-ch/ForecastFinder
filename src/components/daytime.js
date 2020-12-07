import React from "react";
import moment from "moment";
import Sunset from "../icons/sunset";
import Sunrise from "../icons/sunrise";
import { StyledDayTime } from "../css/components.styled";

const DayTime = ({ weather }) => {
  return (
    <StyledDayTime>
      {weather.map((data) => (
        <div className="info-container">
          <div className="info-item">
            <Sunrise width={"2em"} />
            <p>{moment(data.sunrise).format("HH:mm")}</p>
          </div>
          <div className="info-item">
            <Sunset width={"2em"} />
            <p>{moment(data.sunset).format("HH:mm")}</p>
          </div>
        </div>
      ))}
    </StyledDayTime>
  );
};

export default DayTime;
