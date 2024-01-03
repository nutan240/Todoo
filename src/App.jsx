import React, { useState } from 'react';
import './App.css';

function App() {
  const [tododata, setTododata] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(null);
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input !== '') {
      if (edit !== null) {
        const id = edit[0].id;
        setTododata(tododata.map((e) => (e.id === id ? { ...e, name: input } : e)));
        setEdit(null);
      } else {
        const newdata = [
          ...tododata,
          { name: input, id: Math.floor(Math.random() * 10), check: false },
        ];
        setTododata(newdata);
      }
      setInput('');
    }
  };
  console.log(tododata);
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleEdit = (id) => {
    const newdata = tododata;
    const value = newdata.filter((item) => item.id === id);
    setInput(value[0].name);
    setEdit(value);
  };
  const handleDelete = (id) => {
    console.log(id);
    const newdata = [...tododata];
    const value =newdata.filter((value)=>value.id!==id)
    setTododata(value);
    setInput('');
  };
  const handleCheckboxChange = (id) => {
    setTododata(tododata.map((e)=>e.id===id?{...e,check:!e.check}:e))
  };
  return (
    <>
    <div className='w-screen min-h-screen'>
      {tododata.length > 0 && (
        <div className='ml-5  mt-7  mb-0 mr-10 w-98 '>
          <h1 className='font-medium font-mono text-xl mb-1'>Todo App</h1>
          {tododata.map((e) => (
            <div className='border-2 bg-white flex justify-between rounded pl-2 pr-4 py-1 mb-2 mt-1 text-overflow-ellipsis 		' key={e.id}>
            <div>
              <input className='mx-2' type='checkbox' checked={e.check} onClick={() => handleCheckboxChange(e.id)}/>
              <p className='break-all w-50'>

              {e.name}
              </p>

              </div>
              <div className='icons flex gap-2'>
                <i className="fa-solid fa-trash-can mt-2" onClick={() => handleDelete(e.id)}></i>
              <i class="fa-solid fa-pencil mt-2" onClick={() => handleEdit(e.id)}></i>
                {e.check && <button className=' border-2 rounded h-8 ' type='submit'>Completed</button>}
              </div>
            </div>
          ))}
        </div>
      )}
      <form className=' mb-7 pl-4 mt-0 mr-10  whitespace-nowrap ' onSubmit={(e) => handleAddTodo(e)}>
        <p>Todo</p>
        <textarea
          className='border-2 rounded my-1 w-full focus:outline-none min-h-3'
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
      </div>
    </>
  );
}

export default App;