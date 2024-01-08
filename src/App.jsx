import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <div className='w-[60%]   m-auto'>
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