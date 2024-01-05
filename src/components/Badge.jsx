import React from 'react';

function Badge({ }) {
  return (
    <>
      <input className='mx-2 focus:outline-none' type={type} checked={checked} onChange={handleCheckboxChange} />
    </>
  );
}

export default Badge;