export default function createWeatherData(
    city,
    date,
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
      date,
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