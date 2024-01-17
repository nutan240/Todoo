import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

function Icon({ type, handleClick }) {
let color;
  let iconToRender;
  switch (type) {
    case 'delete':
      iconToRender = faTrashAlt;
      color="text-red-600"
      break;
    case 'edit':
      iconToRender = faEdit;
      color="text-blue-600"
      break;
  }
  return (
    <>
    
      <FontAwesomeIcon className={`py-2 ${color} `} icon={iconToRender} onClick={handleClick} />
    </>
  );
}
Icon.propTypes = {
  type: PropTypes.oneOf(['delete', 'edit']).isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string, 
};
export default Icon;