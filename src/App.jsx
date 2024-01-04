import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [tododata, setTododata] = useState([]);

  const handleAddTodo = (inputText) => {
    if (inputText !== '') {
      const newTodo = {
        name: inputText,
        id: Math.floor(Math.random() * 10),
        check: false,
      };
      setTododata([...tododata, newTodo]);
    }
  };
 
  return (
    <>
    <div className='w-screen  h-svh overflow-x-hidden overflow-y-auto'>
      <Form handleAddTodo={handleAddTodo} />
      <List tododata={tododata}/>
      </div>
    </>
  );
}
export default App;
