import React from 'react';
import Icon from './Icon';
import Button from './Button';
import Badge from './Badge';

function List({ tododata, handleDelete, handleCheckboxChange, handleEdit }) {
  console.log(tododata, "==================");
  return (
    <>
      <div >
        {tododata.length > 0 && (
          <div className='ml-5 mt-7 mb-0  mr-10 text-balance break-words  h-auto   '>
            <h1 className='font-medium  text-2xl font-serif mb-1'> Todo List </h1>
            {tododata.map((e) => (
              <div className=' border border-slate-300  rounded-md pl-2 pr-4 py-1 text-balance break-words  mb-2 mt-1 text-overflow-ellipsis flex justify-between ' key={e.id}>
                <div className='icons flex  w-full '>
                  <Badge type="checkbox" checked={e.check} handleCheckboxChange={() => handleCheckboxChange(e.id)} />
                  <div className='text-balance truncate break-words '>
                    <p className=' break-words rounded-md mx-auto pl-4 '>
                      {e.name}
                    </p>
                  </div>
                  <div className='flex  justify-center items-center gap-2'>
                    <Icon type="delete" handleClick={() => handleDelete(e.id)} color="red" />
                    <Icon type="edit" handleClick={() => handleEdit(e.id)} />
                    {e.check && <Button title={"completed"} type='submit' />}
                  </div>
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
