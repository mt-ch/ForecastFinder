import React from "react";
import { TimelineLite, Expo } from "gsap";
import Arrow from "../icons/arrow";
import { StyledBackButton } from "../css/components.styled";

const BackButton = ({setDisplay}) => {
  const handleBack = (evt) => {
    evt.preventDefault();
    back();
  };
  const back = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        setDisplay(false);
      }
    });
    t1.fromTo(
      ".weather",
      {
        y: "-100vh",
      },
      {
        y: "100vh",
        duration: 0.3,
        ease: Expo.easeInOut,
      }
    ).fromTo(
      ".landing",
      { y: "-200vh" },
      {
        y: "0vh",
        duration: 0.3,
        ease: Expo.easeInOut,
      }
    );
  };
  return (
    <StyledBackButton onClick={handleBack}>
      <Arrow className="arrow" width="1.5em" />
    </StyledBackButton>
  );
};

export default BackButton;
