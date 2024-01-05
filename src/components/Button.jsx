import React from 'react';

function Button({ onSubmit, title }) {
  return (
    <>
      <button className="px-2  border-2 rounded mr-2 h-8" onClick={onSubmit}>
        {title}
      </button>
    </>
  );
}

export default Button;
