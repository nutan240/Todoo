import React from 'react';
import PropTypes from 'prop-types';

function Button({ onSubmit, title }) {
  return (
    <>
      <button className="px-2  border-2 rounded hover:shadow-lg focus:outline-none h-8 " onClick={onSubmit}>
        {title}
      </button>
    </>
  );
}
Button.PropTypes ={
  onSubmit:PropTypes.func.isRequired,
  title:PropTypes.string.isRequired
}

export default Button;
