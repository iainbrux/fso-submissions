import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Input from "./components/Input";
import ContactDetails from "./components/ContactDetails";
import axios from "axios";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [filtered, setFiltered] = useState("");
  const [persons, setPersons] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3001/persons");
      const data = await response.json();
      setPersons(data);
    };

    getData();
  }, []);

  const addToPhonebook = (object) => {
    const url = "http://localhost:3001/persons";

    if (persons.find((person) => person.name === object.name)) {
      alert(`${object.name} is already in the phonebook`);
      setNewNumber("");
      return setNewName("");
    } else {
      const postData = async () => {
        try {
          const response = await axios.post(url, object);
          setPersons(persons.concat(response.data));
          setNewNumber("");
          setNewName("");
        } catch (err) {
          console.error(err);
        }
      };

      return postData();
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
        return (
          <ContactDetails
            name={person.name}
            number={person.number}
            key={person.id}
          />
        );
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
