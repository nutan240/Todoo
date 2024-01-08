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
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e);
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
        <h1 className="font-serif  text-3xl">Todo</h1>
       <Input  handleInputChange={handleInputChange} input={input}  handleKeyPress={handleKeyPress}/>
        <br />
        <Button title={'submit'} onSubmit={handleFormSubmit}  />
      </form>
    </>
  );
}

export default Form;
