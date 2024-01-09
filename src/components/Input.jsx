import React from 'react';
import propTypes from 'prop-types'

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
Input.proptype={
  onchange:propTypes.func.isRequired,
  value:propTypes.string.isRequired
}
export default Input;
