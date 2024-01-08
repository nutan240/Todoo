import React from 'react';

function Input({ handleInputChange, input}) {

  return (
    <>
      <input 
        className="border border-slate-300  rounded-md pl-2  py-3 mb-4 hover:shadow-lg w-full focus:outline-none "
        value={input}
        onChange={handleInputChange}
        placeholder="your task..."
      />
    </>
  );
}

export default Input;
