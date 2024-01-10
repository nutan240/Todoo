import React from 'react';
import PropTypes from 'prop-types';
function Input({ handleInputChange, input ,type, checked ,width }) {

  return (
    <>
      <input 
        className={`border border-slate-300 ${width}  rounded-md  py-3  pl-4 focus:outline-none `}
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
