import React, { useEffect } from "react";
import Search from "../icons/search";
import Title from "./title";
import { gsap } from "gsap";

const cities = [
  { name: "Paris" },
  { name: "London" },
  { name: "Berlin" },
  { name: "Barcalona" },
  { name: "Madrid" },
  { name: "Lisbon" },
  { name: "Lyon" },
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
  { name: "Hamburg" },
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
    gsap.from(".underline", {
      duration: 1,
      delay: 0.5,
      width: "0%",
    });

    gsap.from(".search-header", {
      duration: 0.5,
      delay: 0.8,
      y: "25vw",
    });
    gsap.from(".location-input", {
      duration: 0.3,
      delay: 1.5,
      y: "1vh",
      opacity: 0,
    });
    gsap.from(".suggestion", {
      duration: 0.1,
      delay: 1.8,
      y: "10vh",
      opacity: 0,
      stagger: {
        amount: 1.2,
      },
    });
  }, []);
  return (
    <>
      <Title title={"Forecast Finder"} />
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
            <div className="underline" style={{ backgroundColor: "red" }}></div>
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
    </>
  );
};

export default Landing;
