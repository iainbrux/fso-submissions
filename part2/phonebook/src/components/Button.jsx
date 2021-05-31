import React from "react";

const Button = ({ text, handleSubmit }) => {
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        {text}
      </button>
    </div>
  );
};

export default Button;
