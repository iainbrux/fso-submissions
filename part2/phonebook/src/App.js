import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
  ]);
  const [newName, setNewName] = useState("");

  const addToPhonebook = (object) => {
    if (persons.find((person) => person.name === object.name)) {
      alert(`${object.name} is already in the phonebook`);
      return setNewName('');
    } else {
      setPersons(persons.concat(object));
      return setNewName('')
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
    };

    addToPhonebook(personObject);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:
          <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
