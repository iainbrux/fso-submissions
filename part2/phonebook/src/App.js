import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Input from "./components/Input";
import ContactDetails from "./components/ContactDetails";
import contactServices from "./services/notes";
import Notification from './components/Notification'

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filtered, setFiltered] = useState("");
  const [persons, setPersons] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => contactServices.getContacts().then((data) => setPersons(data)), []);

  const removeSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)
  }

  const removeErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const addToPhonebook = async (contact) => {
    const person = persons.find((person) => person.name === contact.name);

    if (person) {
      if (window.confirm(`${contact.name} is already in the phonebook, replace old number with new one?`)) {
        await contactServices
          .updateContact(person, contact)
          .then(response => setPersons(persons.map(item => item.id !== person.id ? item : response))); //maps the current state with the newly updated data - see 2d.2 in FSO for refresher
        setNewName("")
        setNewNumber("")
        setSuccessMessage(`${contact.name} successfully updated in phonebook`)
        removeSuccessMessage()
      } else {
        alert('Cancelled change request.')
      }
    } else {
      return contactServices.addContact(contact).then((response) => {
        setNewNumber("");
        setNewName("");
        setPersons(persons.concat(response));
        setSuccessMessage(`${contact.name} successfully added to phonebook`)
        removeSuccessMessage()
      });
    }
  };

  const deleteFromPhonebook = async (contact) => {
    await contactServices.deleteContact(contact)
    .then(res => {
      setSuccessMessage(`${contact.name} has been successfully deleted from the server`)
      removeSuccessMessage();
    })
    .catch(error => {
      setErrorMessage(`${contact.name} has already been deleted from the server`)
      removeErrorMessage();
    });
    contactServices.getContacts().then((data) => setPersons(data))
  };

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    addToPhonebook(personObject);
  };

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
    const filteredNames = persons.filter((person) => person.name.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0)
      .map((person) => {
        return (
          <ContactDetails
            contact={person}
            key={person.id}
            deleteFromPhonebook={deleteFromPhonebook}
            setFilterBy={setFilterBy}
          />
        );
      });
    setFiltered(filteredNames);
  };

  return (
    <div>
      <Heading text="Find a contact" />
      <Notification successMessage={successMessage} errorMessage={errorMessage} />
      <Input text="name: " handleData={handleFilter} newData={filterBy} />
      <Heading text="Add a new contact" />
      <Form
        handleName={handleName}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <Heading text="numbers" />
      <div>{filtered}</div>
    </div>
  );
};

export default App;
