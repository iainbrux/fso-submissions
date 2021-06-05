import axios from "axios";

const BASE_URL = `http://localhost:3001/persons`

const getContacts = async () => {
  const request = await axios.get(BASE_URL)
  const response = await request.data;
  return response
}

const addContact = async (contact) => {
  const request = await axios.post(BASE_URL, contact)
  const response = await request.data;
  return response
}

const updateContact = async (person, contact) => {
  const request = await axios.put(`${BASE_URL}/${person.id}`, contact)
  const response = await request.data;
  return response;
}

const deleteContact = async (contact) => {
  const request = await axios.delete(`${BASE_URL}/${contact.id}`)
  const response = await request.data
  return response
}

export default {
  getContacts,
  addContact,
  updateContact,
  deleteContact
};
