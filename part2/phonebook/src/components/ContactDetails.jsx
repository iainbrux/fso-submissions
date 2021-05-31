import React from "react";

const ContactDetails = ({ name, number }) => {
  return (
    <li key={name}>
      {name} {number}
    </li>
  );
};

export default ContactDetails;
