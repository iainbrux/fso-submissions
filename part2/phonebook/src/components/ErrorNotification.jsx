import React from "react";

const ErrorNotification = ({ errorMessage }) => {
  const errorStyle = {
    border: "4px solid red",
    borderRadius: 10,
    background: "lightgrey",
    color: "darkred",
    marginBottom: 20,
  };

  if (errorMessage === null) {
    return null;
  }

  return (
    <div style={errorStyle}>
      <h3 style={{ marginLeft: 20 }}>{errorMessage}</h3>
    </div>
  );
};

export default ErrorNotification
