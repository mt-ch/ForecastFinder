import React from "react";
import Search from "../icons/search";
import Title from "./title";

const Landing = ({ location, setLocation, hasError, handleSubmit }) => {
  return (
    <div class="landing-search">
      <div class="title-wrapper">
        <div class="title">
          <Title title={"Forecast Finder"} />
        </div>
      </div>

      <div className="location-input" onSubmit={handleSubmit}>
        <input
          value={location}
          placeholder={"Search for a place"}
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
          <p>Invalid location. Try again!</p>
        </div>
      ) : null}
    </div>
  );
};

export default Landing;
