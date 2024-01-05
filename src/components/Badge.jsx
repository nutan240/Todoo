import React from 'react';

function Badge({ }) {
  return (
    <div>
      <input className='mx-2 focus:outline-none' type={type} checked={checked} onChange={handleCheckboxChange} />
    </div>
  );
}

export default Badge;
