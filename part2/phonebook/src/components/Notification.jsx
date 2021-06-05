import React from "react";
import SuccessNotification from "./SuccessNotification";
import ErrorNotification from "./ErrorNotification";

const Notification = ({ successMessage, errorMessage }) => {
  if (successMessage !== null) {
    return <SuccessNotification successMessage={successMessage} />;
  } else if (errorMessage !== null) {
    return <ErrorNotification errorMessage={errorMessage} />;
  } else {
    return null;
  }
};

export default Notification;
