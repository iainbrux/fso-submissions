import React, { useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Input from "./components/Input";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filtered, setFiltered] = useState("");

  const addToPhonebook = (object) => {
    if (persons.find((person) => person.name === object.name)) {
      alert(`${object.name} is already in the phonebook`);
      setNewNumber("");
      return setNewName("");
    } else {
      setPersons(persons.concat(object));
      setNewNumber("");
      return setNewName("");
    }
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

    const filteredNames = persons
      .filter(
        (person) =>
          person.name.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0
      )
      .map((person) => {
        return <ContactDetails name={person.name} number={person.number} />;
      });

    setFiltered(filteredNames);
  };

  return (
    <div>
      <Heading text="Find a contact" />
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
