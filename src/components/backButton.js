import React from "react";
import { TimelineLite, Expo, gsap, CSSPlugin } from "gsap";
import Arrow from "../icons/arrow";
import { StyledBackButton } from "../css/components.styled";

gsap.registerPlugin(CSSPlugin);

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
      <Arrow className="arrow" />
    </StyledBackButton>
  );
};

export default BackButton;
