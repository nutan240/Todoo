import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'; 

function Icon({ type, handleClick }) {
  let iconToRender;
  
  switch (type) {
    case 'delete':
      iconToRender = faTrashAlt;
      break;
    case 'edit':
      iconToRender = faPencilAlt;
      break;
    
  }

  return (
    <FontAwesomeIcon className='py-2' icon={iconToRender} onClick={handleClick} />
  );
}

export default Icon;
