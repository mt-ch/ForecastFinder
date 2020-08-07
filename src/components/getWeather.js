import CreateWeatherData from "../utils/createWeatherData";

export default async function getWeather(location) {
  try {
    var cityWeather = [];
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=7de0445d2dc48c73e429027355084626";
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

    const { main: type, description: desc, icon: iconId } = array;

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
    
    return cityWeather;
  } catch (er) {
    return console.error(er);
  }
}
