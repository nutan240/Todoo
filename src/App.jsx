import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(input!=='')
    setData([...data, { name: input, id: Math.random() * 10 }]);
    setInput('');
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleDelete = (id) => {
    const newdata = [...data];
    newdata.splice(id, 1);
    setData(newdata);
    setInput('');
  };
  const handleCheckboxChange = (index) => {
    const newdata = [...data];
    console.log(newdata , data)
    newdata[index].completed = !newdata[index].completed;
    setData(newdata);
  };
  return (
    <>
      {data.length > 0 && (
        <div className='ml-5  mt-7  mb-0 mr-10 '>
          <h1 className='font-medium font-mono text-xl mb-1'>Todo App</h1>
          {data.map((e, index) => (
            <p className='border-2 bg-white flex justify-between rounded pl-2 pr-4 py-1 mb-4 mt-1 w-full ' key={index}>
            <div>
              <input className='mx-2' type='checkbox' checked={e.completed} onChange={() => handleCheckboxChange(index)}/>
              {e.name}
              </div>
              <span className='icons'>
                <i className="fa-solid fa-trash-can" onClick={() => handleDelete(index)}></i>
                {e.completed && <button className='my-1 ml-3 px-2 border-2 rounded ' type='submit'>Completed</button>}
              </span>
            </p>
          ))}
        </div>
      )}
      <form className=' mb-7 pl-4 mt-0 mr-10 ' onSubmit={(e) => handleAddTodo(e)}>
        <p>Todo</p>
        <input
          className='border-2 rounded my-1 w-full focus:outline-none'
          type='text'
          value={input}
          onChange={(e) => handleOnChange(e)}
          placeholder='your task...'
        />
        <br />
        <button className='my-1 px-2 border-2 rounded ' type='submit' onClick={handleAddTodo}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;