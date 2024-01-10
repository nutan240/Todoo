
import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoinput, setTodoInput] = useState('');
  const [tododata, setTododata] = useState([]);
  const [sortedtodo, setSortedtodo] = useState('all');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todoinput.trim() !== '') {
      handleAddTodo(todoinput);
      setTodoInput('');
    }
  };

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (inputText) => {
    if (inputText !== '') {
      const newTodo = {
        name: inputText,
        id: uuidv4(),
        check: false,
      };
      setTododata([...tododata, newTodo]);
    }
  };

  const handleDelete = (id) => {
    setTododata((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCheckboxChange = (id) => {
    setTododata((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  const handleEdit = (id) => {
    const todoToEdit = tododata.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodoInput(todoToEdit.name);
      handleDelete(id);
    }
  };

  const handleFilterButton = (filterType) => {
    setSortedtodo(filterType);
  };

  const filteredData = () => {
    switch (sortedtodo) {
      case 'completed':
        return tododata.filter((todo) => todo.check);
      case 'incompleted':
        return tododata.filter((todo) => !todo.check);
      case 'all':
      default:
        return tododata;
    }
  };

  return (
    <div className='w-[60%] overflow-hidden m-auto'>
      <Form
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        input={todoinput}
        setTodoInput={setTodoInput}
      />
      <List
        tododata={tododata}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleEdit={handleEdit}
        handleFilterButton={handleFilterButton}
        filteredData={filteredData()}
        sortedtodo={sortedtodo}
      />
    </div>
  );
}

App.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  todoinput: PropTypes.string.isRequired,
  setTodoInput: PropTypes.func.isRequired,
};

export default App;
