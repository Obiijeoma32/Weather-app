import Search from "./Components/Search";
import Weather from "./Components/Weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./Components/Forecast";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  function handleOnSearchChange(setData) {
    const [lat, lon] = setData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const currentForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, currentForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: setData.label, ...weatherResponse });
        setForecast({ city: setData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);
  return (
    <>
      <div className="">
        <Search onSearchChange={handleOnSearchChange} />

        {currentWeather && <Weather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
