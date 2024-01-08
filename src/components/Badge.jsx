import React from 'react';

function Badge({type, checked, handleCheckboxChange }) {
  return (
    <>
      <input className='mx-2 focus:outline-none' type={type} checked={checked} onChange={handleCheckboxChange} />
    </>
  );
}

export default Badge;