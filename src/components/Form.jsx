import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
    setInput(e.target.value);
    props.handleAddTodo(input);
      setInput("");
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value); 
  };
  return (
    <div className="">
      <form
        className="mb-7 pl-4   mt-0 mr-10 whitespace-nowrap"
        onSubmit={handleFormSubmit}
      >
        <p>Todo</p>
        <textarea
          className="resize-y border-2 rounded my-1 w-full focus:outline-none "
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="your task..."
        />
        <br />
        <button className="my-1 px-2 border-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
