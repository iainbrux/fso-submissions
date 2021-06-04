import React, { useEffect, useState } from "react";

const Details = ({ country }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`,
          { mode: "cors" }
        );
        const data = await response.json();
        setTemperature(data.main);
        setWeather(data.weather.pop());
        setWind(data.wind);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    getWeather();
  }, []);

  return (
    <>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <p>
        languages{" "}
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </p>
      <img
        src={country.flag}
        style={{ maxWidth: 200 }}
        alt={country.name + " flag"}
      />
      <h2>Weather in {country.capital}</h2>
      <p>
        <strong>temperature:</strong> {(temperature.temp - 273.15).toFixed(2)}°C
      </p>
      <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
      <p>
        <strong>wind:</strong> {wind.speed} mph in {wind.deg} degrees direction
      </p>
    </>
  );
};

export default Details;
