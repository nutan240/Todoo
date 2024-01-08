import React from 'react';

function Button({ onSubmit, title }) {
  return (
    <>
      <button className="px-2  border-2 rounded h-10 " onClick={onSubmit}>
        {title}
      </button>
    </>
  );
}

export default Button;
