import { useState } from "react";
import InfoBox from "./InfoBox";
import Search from "./Search";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Kathmandu",
    feelsLike: 24.94,
    humidity: 52,
    temp: 25.02,
    tempMax: 25.02,
    tempMin: 25.02,
    weather: "broken clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <Search updateInfo={updateInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
