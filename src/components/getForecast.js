import CreateForecastData from '../utils/createForecastData';

export default async function GetForecast(location) {
    try{
        var cityWeather = [];
        const url =
          "http://api.openweathermap.org/data/2.5/forecast?q="+location+"&appid=7de0445d2dc48c73e429027355084626";
        const response = await fetch(url);
        const data = await response.json();
        const {
            cnt: count,
            list,
            city: {name: name, timezone: timeZ, sunrise: sunR, sunset: sunS},
        } = data;
        
        for (const { weather: [array], main: { temp: temp, feels_like: feelsLike, humidity: humidity }, wind: { speed: spe }, dt_txt: time} of list){
            const { id: iconId, main: type, description: desc } = array;
            cityWeather.push(
                CreateForecastData(name, time, timeZ, type, desc, iconId, temp, feelsLike, humidity, spe, sunR, sunS)
            )
        }
        return cityWeather
    }
    catch(er){
        return console.error(er);
    }
}


