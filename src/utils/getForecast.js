import CreateForecastData from "./createForecastData";

export default async function GetForecast(location, setForecast) {
  try {
    var cityWeather = [];
    const url =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      location +
      "&appid=7de0445d2dc48c73e429027355084626";
    const response = await fetch(url);
    const data = await response.json();
    const {
      list,
    } = data;

    // De-structure and push data into new array
    for (const {
      weather: [array],
      main: { temp: temp, feels_like: feelsLike, humidity: humidity },
      wind: { speed: spe },
      dt_txt: time,
    } of list) {
      const { id: iconId, main: type, description: desc } = array;
      cityWeather.push(
        CreateForecastData(
          time,
          type,
          desc,
          iconId,
          temp,
          feelsLike,
          humidity,
          spe
        )
      );
    }

    // Sort array for todays forecast
    var startDate = new Date();
    var endDate = new Date(Date.now() + ( 3600 * 1000 * 24));

    var filteredWeather = cityWeather.filter((a) => {
      var date = new Date(a.time);
      return date >= startDate && date <= endDate;
    });

    return setForecast(filteredWeather);
  } catch (er) {
    return ;
  }
}
