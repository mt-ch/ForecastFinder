import React, { useEffect } from "react";
import Search from "../icons/search";
import { TimelineLite, Expo } from "gsap";
import { StyledLanding } from "../css/components.styled";

const cities = [
  { name: "Paris" },
  { name: "London" },
  { name: "Berlin" },
  { name: "Barcelona" },
  { name: "Madrid" },
  { name: "Lisbon" },
  { name: "Florida" },
  { name: "Manchester" },
  { name: "Abu Dhabi" },
  { name: "Kyiv" },
  { name: "Copenhagen" },
  { name: "Cairo" },
  { name: "Hanoi" },
  { name: "Monaco" },
  { name: "Prague" },
  { name: "Vienna" },
  { name: "Amsterdam" },
  { name: "Budapest" },
  { name: "Athens" },
  { name: "Warsaw" },
  { name: "Dublin" },
  { name: "Helsinki" },
  { name: "Sofia" },
  { name: "Riga" },
  { name: "Milan" },
  { name: "Genoa" },
  { name: "Zagreb" },
];

const Landing = ({
  location,
  setLocation,
  hasError,
  handleSubmit,
  handleAutoSubmit,
}) => {
  useEffect(() => {
    reveal();
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite();
    t1
      .from(".landing", {
        duration: 0.1,
        y: "100vh",
        ease: Expo.easeInOut,
      })
      .from(".title", {
        duration: 0.5,
        delay: 0,
        y: "25vw",
        ease: Expo.easeInOut,
      })
      .from(".underline", {
        duration: 0.5,
        delay: 0,
        width: "0%",
        ease: Expo.easeInOut,
      })
      .from(".search-header", {
        duration: 0.5,
        delay: 0,
        y: "25vw",
        ease: Expo.easeInOut,
      })
      .from(".location-input", {
        duration: 0.5,
        delay: 0,
        y: "1vh",
        opacity: 0,
        ease: Expo.easeInOut,
      })
      .from(".suggestion", {
        duration: 0.1,
        delay: 0,
        ease: Expo.easeInOut,
        y: "10vh",
        opacity: 0,
        stagger: {
          amount: 1,
        },
      });
  };
  return (
    <>
      <StyledLanding className="landing">
        <div className="line-wrap">
          <h2 className="title">
            <strong>Forecast Finder</strong>
          </h2>
        </div>
        <div className="landing-search">
          <div className="line-wrap">
            <h5 className="search-header">Search for a place.</h5>
          </div>
          <div className="location-input">
            <input
              value={location}
              placeholder={"London, Rome, Munich"}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div>
              <a type="submit" value="Submit" onClick={handleSubmit}>
                <Search className="search-icon" height="2.5vh" />
              </a>
            </div>
          </div>
          {hasError ? (
            <div>
              <div
                className="underline"
                style={{ backgroundColor: "red" }}
              ></div>
            </div>
          ) : (
            <div className="underline"></div>
          )}
          <div className="suggestions">
            {cities.map((city) => (
              <a
                key={city.name}
                className="suggestion"
                onClick={(e) => handleAutoSubmit(e, city.name)}
              >
                <p>
                  <small>{city.name}</small>
                </p>
              </a>
            ))}
          </div>
        </div>
      </StyledLanding>
    </>
  );
};

export default Landing;
