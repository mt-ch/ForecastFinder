import React from "react";
// import { TimelineLite, Expo } from "gsap";
import moment from "moment";
import Sunset from "../icons/sunset";
import Sunrise from "../icons/sunrise";
import { StyledDayTime } from "../css/components.styled";
import { useEffect } from "react";
import { TimelineLite, Expo } from "gsap";

const DayTime = ({ weather }) => {
  useEffect(() => {
    // reveal();
    return () => {};
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1.from(".info-item", {
      delay: 0.5,
      opacity: 0,
      y: "3vh",
      duration: 0.4,
      ease: Expo.easeInOut,
      stagger: {
        amount: 0.5,
      },
    });
  };
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
