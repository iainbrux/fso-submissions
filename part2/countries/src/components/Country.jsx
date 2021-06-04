import React from "react";

const Country = ({ name, details, setIsClicked, country, setCountry }) => {

  const handleClick = (e) => {
    let index = details.findIndex(
      (item) => item.name === e.target.previousSibling.data
    );
    setCountry(details[index]);
    setIsClicked(true)
  };

  return (
    <p>
      {name}
      <button onClick={handleClick} style={{ marginLeft: 5 }}>
        show
      </button>
    </p>
  );
};

export default Country;
