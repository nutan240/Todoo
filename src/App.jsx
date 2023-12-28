import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setData([...data, { input }]);
    setInput('');
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      {data.length > 0 && <div className='px-5 my-7' >
        <h1 className='font-medium text-lg'>Todo App</h1>
        {
          data.map((e, i) => {
            return (<p className='border-2 rounded px-2 my-4' key={i} >
              <input className='mx-2' type='checkbox' />
              {e.input}
            </p>
            )
          })}
      </div>
      }
      <form className='mx-5 my-7' onSubmit={(e) => handleAddTodo(e)}>
        <p>Todo</p>
        <input
          className='border-2 rounded my-1 w-full focus:outline-none'
          type='text'
          value={input} 
          onChange={(e) => handleOnChange(e)}
          placeholder='your task...'
        />
        <br />
        <button
          className='my-1 px-2 border-2 rounded'
          type='submit'
          onClick={handleAddTodo} 
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
