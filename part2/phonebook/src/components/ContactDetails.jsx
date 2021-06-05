import React, { useState } from "react";

const ContactDetails = ({ contact, deleteFromPhonebook, setFilterBy }) => {
  const [deleted, setDeleted] = useState(false);

  const deleteContact = () => {
    deleteFromPhonebook(contact);
    setDeleted(true);
    setFilterBy("")
  };

  if (deleted) {
    return <div>Contact successfully deleted!</div>;
  }

  return (
    <li>
      {contact.name} {contact.number}
      <button onClick={deleteContact}>delete</button>
    </li>
  );
};

export default ContactDetails;
