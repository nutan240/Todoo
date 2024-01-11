// List.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Icon from './Icon';
import Badge from './Badge';

function List({
  tododata,
  filteredData,
  handleDelete,
  handleCheckboxChange,
  handleEdit,
  handleFilterButton,
  sortedtodo,
}) {
  const buttonData = [
    { title: 'All', type: 'all', color: sortedtodo === 'all' ? 'bg-gray-400' : 'bg-white' },
    { title: 'Complete', type: 'completed', color: sortedtodo === 'completed' ? 'bg-gray-400' : 'bg-white-500' },
    { title: 'Incomplete', type: 'incompleted', color: sortedtodo === 'incompleted' ? 'bg-gray-400' : 'bg-white' },
  ];

  return (
    <>
      <div>
        {tododata.length > 0 && (
          <div className='ml-5 mt-7 mb-0 mr-10 overflow-hidden text-balance break-words h-auto'>
            <h1 className='font-medium text-2xl font-serif mb-1'> Todo List </h1>
            <div className='flex gap-4 mb-4'>
              {buttonData.map((button) => (
                <Button
                  key={button.title}
                  title={button.title}
                  onSubmit={() => handleFilterButton(button.type)}
                  color={button.color}
                />
              ))}
            </div>
            {filteredData.map((e) => (
              <div
                className='border border-slate-300 rounded-md pl-2 pr-4 py-1 text-balance break-words mb-2 mt-1 text-overflow-ellipsis flex'
                key={e.id}
              >
                <div className='icons flex w-full justify-between'>
                  <Input
                    type='checkbox'
                    checked={e.check}
                    handleInputChange={() => handleCheckboxChange(e.id)}
                  />
                  <div className='text-balance flex justify-between text-left truncate break-words size-full'>
                    <p className=' break-all rounded-md pt-1 pl-4 flex justify-center'>
                      {e.name}
                    </p>
                    <div className='flex items-center gap-2'>
                      <Icon
                        type='delete'
                        handleClick={() => handleDelete(e.id)}
                        color='text-red-500'
                      />
                      <Icon
                        type='edit'
                        color='text-blue-500'
                        handleClick={() => handleEdit(e.id)}
                      />
                      {e.check && <Badge badge='completed' />}
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

List.propTypes = {
  tododata: PropTypes.array.isRequired,
  filteredData: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleFilterButton: PropTypes.func.isRequired,
  sortedtodo: PropTypes.string.isRequired,
};

export default List;
