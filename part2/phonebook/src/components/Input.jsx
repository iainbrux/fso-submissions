import React from "react";

const Input = ({ text, handleData, newData }) => {
  return (
    <div>
      {text}
      <input onChange={handleData} value={newData} />
    </div>
  );
};

export default Input;
