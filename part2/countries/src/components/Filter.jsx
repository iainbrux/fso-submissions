import React, { useState } from "react";
import Details from "./Details";
import Country from "./Country";

const Filter = ({ filtered, limit, isClicked, setIsClicked }) => {
  const [country, setCountry] = useState(filtered);

  if (limit) {
    return <div>{limit}</div>;
  }

  if (filtered.length === 1) {
    return (
      <>
        {filtered.map(country => <Details country={country} key={country.name} />)}
      </>
    )
  }

  if (!isClicked) {
    return (
      <ul>
        {filtered.map((country) => (
          <Country
            name={country.name}
            key={country.name}
            details={filtered}
            setCountry={setCountry}
            setIsClicked={setIsClicked}
          />
        ))}
      </ul>
    );
  }

  return <Details country={country} />;
};

export default Filter;
