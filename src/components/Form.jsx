import React from "react";
import Button from "./Button";
import Input from "./Input";
function Form({ input, setInput, handleAddTodo }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setInput(e.target.value);
      handleAddTodo(input);
      setInput("");
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form
        className="mb-7 pl-4   mt-0 mr-10 whitespace-nowrap"
        onSubmit={handleFormSubmit}
      >
        <p>Todo</p>
       <Input  handleInputChange={handleInputChange} input={input} />
        <br />
        <Button title={'submit'} onSubmit={handleFormSubmit}  />
      </form>
    </>
  );
}

export default Form;
