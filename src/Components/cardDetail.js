import React, { useState, useEffect } from "react";

import "./cardView.css";

import { useLocation } from "react-router-dom";

const CardDetail = () => {
  const [data, setData] = useState({
    coord: { lon: "", lat: "" },
    sys: {
      type: "",
      id: "",
      message: "",
      country: "",
      sunrise: "",
      sunset: "",
    },
    weather: [
      {
        id: "",
        main: "",
        description: "",
        icon: "",
      },
    ],
    main: {
      temp: "",
      pressure: "",
      humidity: "",
      temp_min: "",
      temp_max: "",
    },
    visibility: "",
    wind: {
      speed: "",
      deg: "",
    },
    clouds: {
      all: 0,
    },
    dt: "",
    id: "",
    name: "",
  });
  const [formattedDateTime, setFformattedDateTime] = useState("");
  const location = useLocation();

  useEffect(() => {
    const API_KEY = "895284fb2d2c50a520ea537456963d9c";
    const CITY_CODE = location.state.id;
    const weatherAPI = `https://api.openweathermap.org/data/2.5/group?id=${CITY_CODE}&units=metric&appid=${API_KEY}`;

    fetch(weatherAPI)
      .then((response) => response.json())
      .then((data) => {
        setData(data.list[0]);
      })
      .catch((error) => console.error(error));

    // Create a new Date object
    const now = new Date();

    // Get the hour and minute values from the Date object
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Format the hour and minute values with leading zeros and AM/PM suffix
    const formattedHour = hour % 12 || 12;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const ampm = hour < 12 ? "am" : "pm";

    // Get the month abbreviation from the Date object
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthAbbreviation = monthAbbreviations[now.getMonth()];

    // Get the day of the month value from the Date object
    const dayOfMonth = now.getDate();

    // Combine the formatted time and date values into a single string
    setFformattedDateTime(
      `${formattedHour}.${formattedMinute}${ampm}, ${monthAbbreviation} ${dayOfMonth}`
    );
  }, [location.state.id]);

  return (
    <div id="cardView">
      <div id="cView">
        <div
          id="top"
          style={{ backgroundColor: location.state.backgroundColor }}
        >
          <h1 id="heading">
            {data.name}, {data.sys.country}
          </h1>
          <p id="time">{formattedDateTime}</p>
          <button
            id="btn"
            onClick={() => {
              window.location.assign("/");
            }}
          ></button>
          <label htmlFor="btn">
            <img src="./back.png" alt="back-icon" id="goBack" />
          </label>
          <div id="sect1">
            <div id="left">
              <img src="./cloud-computing.png" alt="cloud-icon" id="cloud" />
              <p id="cloudText"> {data.weather[0].description}</p>
            </div>
            <div id="right">
              <h1 id="centi">{data.main.temp}°C</h1>
              <p id="min">Temp Min: {data.main.temp_min}°C</p>
              <p id="max">Temp Max: {data.main.temp_max}°C</p>
            </div>
          </div>
        </div>

        <div id="bcard">
          <div id="bleft">
            <p>
              Pressure: <span>{data.main.pressure}hpa</span>{" "}
            </p>
            <p>
              Humidity: <span>{data.main.humidity}%</span>{" "}
            </p>
            <p>
              Visibility: <span>{data.visibility}km</span>{" "}
            </p>
          </div>
          <div id="bcenter">
            <img src="./send.png" alt="send-icon" id="Send" />
            <p id="bcent">
              {data.wind.speed} m/s {data.wind.deg} Degree
            </p>
          </div>
          <div id="bright">
            <p>
              Sunrise:{" "}
              <span>
                {new Date(data.sys.sunrise * 1000).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>{" "}
            </p>
            <p>
              Sunset:{" "}
              <span>
                {new Date(data.sys.sunset * 1000).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
