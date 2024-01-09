import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({type, checked, handleCheckboxChange }) {
  return (
    <>
      <input className='mx-2 focus:outline-none' type={type} checked={checked} onChange={handleCheckboxChange} />
      
    </>
  );
}
CheckBox.propTypes = {
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
export default CheckBox;