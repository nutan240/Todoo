import React from 'react';
import PropTypes from 'prop-types';
function Input({ handleInputChange, input ,type, checked }) {

  return (
    <>
      <input 
        className="border border-slate-300  rounded-md pl-2  py-3 mb-4 w-full focus:outline-none "
        value={input}
        onChange={handleInputChange }
        placeholder="your task..."
        type={type}
        checked={checked} 
      />
    </>
  );
}
Input.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
};
export default Input;
