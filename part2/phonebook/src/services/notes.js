import axios from "axios";

const postData = async () => {
  const url = "http://localhost:3001/persons";
  try {
    const response = await axios.post(url, object);
    setPersons(persons.concat(response.data));
    setNewNumber("");
    setNewName("");
  } catch (err) {
    console.error(err);
  }
};

const checkPhonebook = (object) => {
  alert(`${object.name} is already in the phonebook`);
  setNewNumber("");
  return setNewName("");
};

export default {
  postData,
  checkPhonebook,
};
