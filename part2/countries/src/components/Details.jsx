import React from "react";

const Details = ({ country }) => {
  return (
    <>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <p>languages {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}</p>
      <img src={country.flag} style={{maxWidth: 200}} alt={country.name + " flag"} />
    </>
  );
};

export default Details;
