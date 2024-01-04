import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [tododata, setTododata] = useState([]);
  const [edit, setEdit] = useState('');

  const handleAddTodo = (inputText) => {
    console.log('handleAddTodo called with inputText:', inputText);
    if (inputText !== '') {
       {
        const newTodo = {
          name: inputText,
          id: Math.floor(Math.random() * 10),
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
    setTododata((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  const handleEdit = (id) => {
    console.log('handleEdit called with id:',id);
    const todoToEdit = tododata.find((todo) => todo.id === id);
    
      setEdit(todoToEdit)
    
  };

  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
      <Form handleAddTodo={handleAddTodo} edit={edit} />
      <List
        tododata={tododata}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;