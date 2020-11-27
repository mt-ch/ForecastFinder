import React, { useState } from "react";
import Content from "./components/Content";
import "./css/weather-icons.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossorigin="anonymous"
        />
      </header>
      <Content />
    </div>
  );
}

export default App;
