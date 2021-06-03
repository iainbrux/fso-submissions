import React from "react";

const Input = ({ filterCountries, query }) => {
  return (
    <form>
      <label>Find countries:</label>
      <input onChange={filterCountries} value={query} />
    </form>
  );
};

export default Input;
