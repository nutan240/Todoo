import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from './TodoContext';


function App() {
  const [todoinput, setTodoInput] = useState('');
  const [tododata, setTododata] = useState([]);
  const [sortedtodo, setSortedtodo] = useState('all');
  const [edit, setEdit] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      handleUpdate();
      
    } else {
      handleAddTodo();
    }
  };

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
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

  const handleUpdate = () => {
    if (editingTodoId !== null) {
      setTododata((prevData) =>
        prevData.map((todo) =>
          todo.id === editingTodoId ? { ...todo, name: todoinput } : todo
        )
      );
      setEdit(false);
      setEditingTodoId(null);
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
  
    if (editTodo) {
     
      setTodoInput(editTodo.name); // Assuming 'editTodo' has a 'name' property
      console.log('Edit Todo:', setTodoInput);
      setEdit(true);

      setEditingTodoId(id);
    }
  };

  const handleCancelEdit = () => {
    setEdit(false);
    setEditingTodoId(null);
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
    setEdit,
    editingTodoId,
    setEditingTodoId,
    handleInputChange,
    handleFormSubmit,
    isEditing: edit,
    handleUpdate,
    handleCancelEdit,
    filteredData: filteredData(), 
    handleDelete,
    handleCheckboxChange,
    handleFilterButton,
    handleEdit
  };

  return (
    <TodoContext.Provider value={contextValue}>
    <div className='w-[60%] max-lg:[100%] max-sm:w-[100%] overflow-y-hidden m-auto pb-10'>
      <Form
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        input={todoinput}
        setTodoInput={setTodoInput}
        isEditing={edit}
        handleUpdate={ handleUpdate}
        handleCancel={handleCancelEdit}
      />
      <List
        tododata={tododata}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleEdit={handleEdit}
        handleFilterButton={handleFilterButton}
        filteredData={filteredData()}
        edit={edit}
        sortedtodo={sortedtodo}
        editingTodoId={editingTodoId}
      />
    </div>
    </TodoContext.Provider>
  );
}

App.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  todoinput: PropTypes.string.isRequired,
  setTodoInput: PropTypes.func.isRequired,
};

export default App;