export default function createForecastData(
    time,
    weather,
    description,
    iconId,
    temp,
    feelsLike,
    humidity,
    windSpeed,
  ) {
    return {
      time,
      weather,
      description,
      iconId,
      temp,
      feelsLike,
      humidity,
      windSpeed,
    };
  }