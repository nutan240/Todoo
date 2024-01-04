import React from 'react';

function List(props) {
  const { tododata, handleDelete ,handleCheckboxChange } = props;

 
  return (
    <div className='w-screen '>
      {tododata.length > 0 && (
        <div className='ml-5  mt-7  mb-0 mr-10 w-98 '>
          <h1 className='font-medium font-mono text-xl mb-1'>Todo App</h1>
          {tododata.map((e) => (
            <div className='border-2 bg-white flex justify-between rounded pl-2 pr-4 py-1 mb-2 mt-1 text-overflow-ellipsis' key={e.id}>
              <div>
                <input className='mx-2' type='checkbox' checked={e.check} onChange={() => handleCheckboxChange(e.id)}/>
                <p className='break-all w-50'>
                  {e.name}
                </p>
              </div>
              <div className='icons flex gap-2'>
                <i className="fa-solid fa-trash-can mt-2" onClick={() => handleDelete(e.id)}/>
                <i className="fa-solid fa-pencil mt-2" onClick={() => handleEdit(e.id)}></i>
                {e.check && <button className=' border-2 rounded h-8 ' type='submit'>Completed</button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
