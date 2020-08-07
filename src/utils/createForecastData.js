export default function createForecastData(
    city,
    time,
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
      time,
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