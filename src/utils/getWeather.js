import CreateWeatherData from "./createWeatherData";
import { TimelineLite, Expo } from "gsap";

export default async function getWeather(location, setWeather, setHasError, setDisplay) {
  const reveal = () => {
    const t1 = new TimelineLite()
    t1
    .fromTo(
      ".landing",
      {
        y: '0',
      },{
        y: '-200vh',
        duration: 0.3,
        ease: Expo.easeInOut,
      })
    .fromTo('.weather', {
      y: '100vh',
    },
    {
      y: '-100vh',
      duration: 0.3,
      ease: Expo.easeInOut,
    })
  };
  

  
  try {
    setHasError(false);
    var cityWeather = [];
    const url =
      "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&appid=7de0445d2dc48c73e429027355084626";
    const response = await fetch(url);
    const data = await response.json();

    // De-structure and push data into new array
    const {
      weather: [array],
      main: { temp: temp, feels_like: feelsLike, humidity: humidity },
      wind: { speed: spe },
      dt: dt,
      sys: { sunrise: sunR, sunset: sunS },
      name: name,
      timezone: time,
    } = data;

    // Calculate times for local timezones
    let sunRise = new Date(1000*time+(sunR*1000));
    let sunSet = new Date(1000*time+(sunS*1000));
    let today = Date.now();
    let date = new Date(1000*time+(today));
    const { main: type, description: desc, id: iconId } = array;

    cityWeather.push(
      CreateWeatherData(
        name,
        date,
        type,
        desc,
        iconId,
        temp,
        feelsLike,
        humidity,
        spe,
        sunRise,
        sunSet
      )
    );
    setWeather(cityWeather);
    setDisplay(true);
    return reveal();
  } catch (er) {
    return setHasError(true);
  }
}