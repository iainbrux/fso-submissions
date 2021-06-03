import React, { useEffect, useState } from "react";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState("");
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState("");
  const [moreThanTen, setMoreThanTen] = useState("Please begin your search.");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      setCountries(data);
    };

    getData();
  }, []);

  const searchCountries = (e) => {
    setQuery(e.target.value);

    const filteredCountries = countries
      .filter(
        (country) =>
          country.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
      )
      .map((country) => {
        return <Country name={country.name} key={country.name} />;
      });

    setFiltered(filteredCountries);

    if (e.target.value === "") {
      return setMoreThanTen("Please begin your search.");
    }

    if (!filteredCountries.length) {
      return setMoreThanTen("No countries found.");
    }

    if (filteredCountries.length > 10) {
      return setMoreThanTen("Please specify further.");
    } else if (filteredCountries.length === 1) {
      console.log("One left! :D");
    } else {
      return setMoreThanTen(false);
    }
  };

  return (
    <div>
      find countries: <input onChange={searchCountries} value={query} />
      <div>{moreThanTen ? moreThanTen : filtered}</div>
    </div>
  );
};

export default App;
