import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [input, setInput] = useState("");
  const [tododata, setTododata] = useState([]);
  const [edit, setEdit] = useState('');
  const [filter, setFilter] = useState('all');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleAddTodo(input);
      setInput("");
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = (inputText) => {
    if (inputText !== '') {
      if (edit !== '') {
        const updatedTodos = tododata.map((todo) =>
          todo.id === edit.id ? { ...todo, name: inputText } : todo
        );
        setTododata(updatedTodos);
        setEdit('');
      } else {
        const newTodo = {
          name: inputText,
        id:  uuidv4(),
          check: false,
        };
        setTododata([...tododata, newTodo]);
      }
    }
  };
  const handleDelete = (id) => {
    setTododata((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleCheckboxChange = (id) => {
    console.log(id,"===================");
    setTododata((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };
  const handleEdit = (id) => {
    const todoToEdit = tododata.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEdit(todoToEdit);
      setInput(todoToEdit.name);
    }
  };
  const showall = () => {
    setFilter('all');
  };
  const showcompleted = () => {
    setFilter('complete');
  };
  const showincompleted = () => {
    setFilter('incomplete');
  };
  const filteredData = () => {
    switch (filter) {
      case 'complete':
        return tododata.filter((todo) => todo.check);
      case 'incomplete':
        return tododata.filter((todo) => !todo.check);
      case 'all':
      default:
        return tododata;
    }
  };
  return (
    <div className='w-[60%]   m-auto'>
      <Form handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} handleAddTodo={handleAddTodo} input={input} setInput={setInput} />
      <List
        tododata={tododata}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleEdit={handleEdit}
        showall={showall}
        showcompleted={showcompleted}
        showincompleted={showincompleted}
        filteredData={filteredData}
      />
    </div>
  );
}
App.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};
export default App;