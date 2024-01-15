import React from 'react';
import PropTypes from 'prop-types';
import { useTodoContext } from '../TodoContext';
function Input({width , handleInputChange,type, checked , onkeyprees}) {

  const { todoinput} = useTodoContext();

  return (
    <>
      <input 
        className={`border border-slate-300 ${width}  rounded-md  py-3  pl-4 focus:outline-none `}
        value={todoinput}
        onChange={handleInputChange}
        placeholder="your task..."
        type={type}
        checked={checked} 
        onkeyprees={onkeyprees}
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