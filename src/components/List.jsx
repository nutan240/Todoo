import React from 'react';
import Icon from './Icon';
import CheckBox from './CheckBox';
import Badge from './Badge';

function List({ tododata, handleDelete, handleCheckboxChange, handleEdit }) {
  return (
    <>
      <div >
        {tododata.length > 0 && (
          <div className='ml-5 mt-7 mb-0  mr-10 text-balance break-words  h-auto   '>
            <h1 className='font-medium  text-2xl font-serif mb-1'> Todo List </h1>
            {tododata.map((e) => (
              <div className=' border border-slate-300  rounded-md pl-2 pr-4 py-1 text-balance break-words  mb-2 mt-1 text-overflow-ellipsis flex  ' key={e.id}>
                <div className='icons flex w-full justify-between '>
                  <CheckBox type="checkbox" checked={e.check} handleCheckboxChange={() => handleCheckboxChange(e.id)} />
                  <div className='text-balance flex justify-between text-left truncate break-words size-full'>
                    <p className=' break-words break-all rounded-md  pl-4 '>
                      {e.name}
                    </p>
                    <div className='flex  items-center gap-2'>
                      <Icon type="delete" handleClick={() => handleDelete(e.id)} color="red" />
                      <Icon type="edit" handleClick={() => handleEdit(e.id)} />
                      {e.check &&
                      <Badge badge= "completed"/>}
                    </div>
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
