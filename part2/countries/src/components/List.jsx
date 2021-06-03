import React from "react";

const List = ({ name, key }) => {
  const handleClick = () => {
    console.log(key);
  };

  return (
    <ul>
      <li>{name}</li>
      <button onClick={handleClick}>show</button>
    </ul>
  );
};

export default List;
