import React, { useEffect, useState } from "react";
import Input from './components/Input';
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState("");
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [limit, setLimit] = useState("Please begin your search.");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      setCountries(data);
    };

    getData();
  }, []);

  const filterCountries = (e) => {
    setQuery(e.target.value);

    const filteredCountries = countries
      .filter(
        (country) =>
          country.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
      )

    setFiltered(filteredCountries);

    if (e.target.value === "") {
      return setLimit("Please begin your search.");
    }

    if (!filteredCountries.length) {
      return setLimit("No countries found")
    } else if (filteredCountries.length > 10) {
      return setLimit("Please specify further")
    } else if (filteredCountries.length === 1) {
      console.log("One left")
    } else {
      return setLimit(false)
    }

  };

  return (
    <div>
      <Input filterCountries={filterCountries} query={query} />
      <Filter limit={limit} filtered={filtered} />
    </div>
  );
};

export default App;
