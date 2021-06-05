import React from "react";

const SuccessNotification = ({ successMessage }) => {
  const successStyle = {
    border: "4px solid green",
    borderRadius: 10,
    background: "lightgrey",
    color: "darkgreen",
    marginBottom: 20,
  };

  if (successMessage === null) {
    return null;
  }

  return (
    <div style={successStyle}>
      <h3 style={{ marginLeft: 20 }}>{successMessage}</h3>
    </div>
  );
};

export default SuccessNotification
