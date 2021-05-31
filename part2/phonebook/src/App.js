import React, { useState } from "react";

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
  const [filtered, setFiltered] = useState('')

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
        return (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        );
      });

      setFiltered(filteredNames)
  };

  return (
    <div>
      <h2>Find a contact</h2>
      <form>
        <div>
          name:
          <input onChange={handleFilter} value={filterBy} />
        </div>
      </form>
      <h2>Add a new contact</h2>
      <form>
        <div>
          name:
          <input onChange={handleName} value={newName} />
        </div>
        <div>
          number:
          <input onChange={handleNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filtered}
      </div>
    </div>
  );
};

export default App;
