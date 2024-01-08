import React from 'react';

function CheckBox({type, checked,title1, handleCheckboxChange }) {
  return (
    <>
      <input className='mx-2 focus:outline-none' type={type} checked={checked} onChange={handleCheckboxChange} />
      
    </>
  );
}

export default CheckBox;