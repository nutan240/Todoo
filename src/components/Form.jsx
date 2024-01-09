import React from "react";
import Button from "./Button";
import Input from "./Input";
import PropTypes from 'prop-types';
function Form({ input, handleInputChange, handleFormSubmit }) {

  return (
    <>
      <form
        className="mb-7 pl-4 overflow-hidden  mt-10 mr-10 whitespace-nowrap"
        onSubmit={handleFormSubmit}
      >
        <h1 className="font-serif  text-3xl">Todo</h1>
       <Input  handleInputChange={handleInputChange} input={input}  />
        <br />
        <Button title={'submit'} onSubmit={handleFormSubmit}  />
      </form>
    </>
  );
}
Form.propTypes={
  input: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
}
export default Form;
