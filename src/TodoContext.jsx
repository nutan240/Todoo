
import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoinput, setTodoInput] = useState('');
  const [tododata, setTododata] = useState([]);
  const [sortedtodo, setSortedtodo] = useState('all');
  const [edit, setEdit] = useState(null);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      handleUpdateTodo();
    } else {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (todoinput.trim() !== '') {
      const newTodo = {
        name: todoinput,
        id: uuidv4(),
        check: false,
      };
      setTododata([...tododata, newTodo]);
      setTodoInput('');
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
    const editTodo = tododata.find((e) => e.id === id);
    setTodoInput(editTodo.name);
    setEdit(true);
  };

  const handleUpdateTodo = () => {
    const updatedData = tododata.map((e) =>
      e.id === edit.id ? { ...e, name: todoinput } : e
    );
    setTododata(updatedData);
    setEdit(null);
    setTodoInput('');
  };

  const handleCancelEdit = () => {
    setEdit(null);
    setTodoInput('');
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
        return tododata;
      default:
        return tododata;
    }
  };

  const contextValue = {
    
    todoinput,
    setTodoInput,
    tododata,
    setTododata,
    sortedtodo,
    setSortedtodo,
    edit,
    handleInputChange,
    handleFormSubmit,
    handleAddTodo,
    handleDelete,
    handleCheckboxChange,
    handleEdit,
    handleUpdateTodo,
    handleCancelEdit,
    handleFilterButton,
    filteredData,
   
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};