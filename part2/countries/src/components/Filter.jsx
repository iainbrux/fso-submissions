import React from "react";
import List from "./List";
import Details from "./Details";

const Filter = ({ filtered, limit }) => {

  if (limit) {
    return <div>{limit}</div>;
  }

  if (filtered.length === 1) {
    return <Details details={filtered} />;
  }

  return (
    <div>
      {filtered.map((country) => (
        <List
          name={country.name}
          key={country.name}
        />
      ))}
    </div>
  );
};

export default Filter;
