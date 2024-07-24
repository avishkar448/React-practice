//Devlop a weather app that fetches and display weather information based on users location

import React, { useEffect, useState } from "react";

const Fourteen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=462b507674d41f36e2268f37683f6c3b`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  }, []);
  return (
    <div>
      {weather ? (
        <div>
          <h1>Current Weather</h1>
          <h3>Teamprature:{weather.main.temp}</h3>
          <h4>Conditions:{weather.weather[0].description}</h4>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl">Loading...</h1>
        </div>
      )}
    </div>
  );
};
//462b507674d41f36e2268f37683f6c3b
export default Fourteen;
