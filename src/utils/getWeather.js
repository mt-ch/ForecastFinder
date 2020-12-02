import CreateWeatherData from "./createWeatherData";
import { TimelineLite, gsap, CSSPlugin, Expo } from "gsap";

export default async function getWeather(location, setWeather, setHasError) {
  try {
    setHasError(false);
    var cityWeather = [];
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&appid=7de0445d2dc48c73e429027355084626";
    const response = await fetch(url);
    const data = await response.json();
    const {
      weather: [array],
      main: { temp: temp, feels_like: feelsLike, humidity: humidity },
      wind: { speed: spe },
      sys: { sunrise: sunR, sunset: sunS },
      name: name,
      timezone: time,
    } = data;

    const { main: type, description: desc, id: iconId } = array;

    cityWeather.push(
      CreateWeatherData(
        name,
        time,
        type,
        desc,
        iconId,
        temp,
        feelsLike,
        humidity,
        spe,
        sunR,
        sunS
      )
    );
    setWeather(cityWeather);
    return reveal();
  } catch (er) {
    return setHasError(true);
  }
}

const reveal = () => {
  const t1 = new TimelineLite()
  t1
  // .to(
  //   ".landing-search",
  //   {
  //     y: '-40vh',
  //     duration: 0.3,
  //     ease: Expo.easeInOut,
  //   })
  .to(
    ".landing-search",
    {
      y: '-100vh',
      duration: 0.3,
      ease: Expo.easeInOut,
    })
  .to('.weather', {
    y: '-100vh',
      duration: 0.3,
      ease: Expo.easeInOut,
  })
};
