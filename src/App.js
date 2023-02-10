import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("cities.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const API_KEY = "895284fb2d2c50a520ea537456963d9c";
        const CITY_CODE = jsonData.List.map((city) => city.CityCode).join(",");
        const weatherAPI = `https://api.openweathermap.org/data/2.5/group?id=${CITY_CODE}&units=metric&appid=${API_KEY}`;

        fetch(weatherAPI)
          .then((response) => response.json())
          .then((data) => {
            setData(
              data.list.map((i) => {
                return {
                  description: i.weather[0].description,
                  temp: i.main.temp,
                  dt: i.dt,
                  id: i.id,
                  name: i.name,
                };
              })
            );
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  const cache = new Map();

  function getWeatherData() {
    const now = new Date().getTime();

    if (cache.has("WeatherData")) {
      const cachedData = cache.get("WeatherData");
      if (now - cachedData.time < 1000 * 60 * 5) {
        return cachedData.data;
      } else {
        cache.delete("WeatherData");
      }
    }

    cache.set("WeatherData", { data: data, time: now });
    return data;
  }

  return <></>;
}

export default App;
