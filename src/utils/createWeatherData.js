export default function createWeatherData(
    city,
    timeZone,
    weather,
    description,
    iconId,
    temp,
    feelsLike,
    humidity,
    windSpeed,
    sunrise,
    sunset
  ) {
    return {
      city,
      timeZone,
      weather,
      description,
      iconId,
      temp,
      feelsLike,
      humidity,
      windSpeed,
      sunrise,
      sunset
    };
  }