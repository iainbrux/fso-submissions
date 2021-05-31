import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({
  handleName,
  handleNumber,
  handleSubmit,
  newName,
  newNumber,
}) => {
  return (
    <form>
      <Input text="name: " handleData={handleName} newData={newName} />
      <Input text="number: " handleData={handleNumber} newData={newNumber} />
      <Button text="add" handleSubmit={handleSubmit} />
    </form>
  );
};

export default Form;
