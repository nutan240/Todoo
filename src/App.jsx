import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [input, setInput] = useState("");
  const [tododata, setTododata] = useState([]);
  const [edit, setEdit] = useState('');

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
    const todoToEdit = tododata.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEdit(todoToEdit);
      setInput(todoToEdit.name);
    }
  };

  return (
    <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
      <Form handleAddTodo={handleAddTodo} input={input} setInput={setInput} />
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