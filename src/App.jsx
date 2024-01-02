import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(null);
  const handleAddTodo = (e) => {
    e.preventDefault();
    if(input!=='') {
      const newData = [...data, { name: input, id: Math.floor(Math.random() * 10), check:false}];
      setData(newData);
    }
    setInput('');
  };
  console.log(data);

  const handleOnChange = (e) => {
    setInput(e.target.value);

  };
  const handleEdit = (index) => {
    setInput(data[index].name);
    setEdit(index);
    // console.log(edit);
  };
  
  const saveChange = () => {
    const newData = [...data];
    newData[edit].name = input;
    setData(newData);
    // console.log(data);
    setEdit(null);
    setInput('');
  }; 
  const handleDelete = (id) => {
    console.log(id);
    const newdata = [...data];
    // console.log(newdata,":::::::")
    const s =newdata.filter((value)=>value.id!==id)
    console.log(s,":::>>>")
    setData(s);
    setInput('');
  };
  const handleCheckboxChange = (id) => {
    const newdata = [...data];
    console.log(newdata , data)
    newdata[id].completed = !newdata[id].completed;
    setData(newdata);
  };
  return (
    <>
      {data.length > 0 && (
        <div className='ml-5  mt-7  mb-0 mr-10 '>
          <h1 className='font-medium font-mono text-xl mb-1'>Todo App</h1>
          {data.map((e) => (
            <p className='border-2 bg-white flex justify-between rounded pl-2 pr-4 py-1 mb-2 mt-1 w-full ' key={e.id}>
            <div>
              <input className='mx-2' type='checkbox' checked={e.check} onClick={() => handleCheckboxChange(e.id)}/>
              {e.name}
              </div>
              <span className='icons flex gap-2'>
                <i className="fa-solid fa-trash-can mt-2" onClick={() => handleDelete(e.id)}></i>
              <i class="fa-solid fa-pencil mt-2" onClick={() => handleEdit(index)}></i>
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
        {edit !== null && (
          <button className='my-1 px-2 border-2 rounded ' type='button' onClick={saveChange}>
            Update
          </button>
        )} 
      </form>
    </>
  );
}

export default App;