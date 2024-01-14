
import React from 'react';
import PropTypes from 'prop-types';
import { useTodoContext } from '../TodoContext';
function Button({  title,color }) {
  const {  onSubmit} = useTodoContext();
  return (
    <button
      className={`px-2 mt-4 border-2 mr-3  rounded hover:shadow-lg focus:outline-none h-8 ${color}`}
      onClick={onSubmit}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;