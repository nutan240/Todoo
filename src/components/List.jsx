import React from 'react';
import Icon from './Icon';
import Button from './Button';
import Badge from './Badge';

function List({ tododata, handleDelete, handleCheckboxChange, handleEdit }) {
  return (
    <>
    <div className='w-screen '>
      {tododata.length > 0 && (
        <div className='ml-5 mt-7 mb-0 mr-10 w-98 '>
          <h1 className='font-medium font-mono text-xl mb-1'>Todo App</h1>
          {tododata.map((e) => (
            <div className='border-2 bg-white rounded pl-2 pr-4 py-1 mb-2 mt-1 text-overflow-ellipsis' key={e.id}>
              <div className='icons flex justify-between'>
                <Badge />
                <div className='flex gap-2'>
                  <Icon type="delete" handleClick={() => handleDelete(e.id)} />
                  <Icon type="edit" handleClick={() => handleEdit(e.id)} />
                  {e.check && <Button title={"completed"} type='submit' />}
                </div>
              </div>
              <div>
                <p className='break-all w-50'>
                  {e.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default List;
