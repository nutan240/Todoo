import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

function Icon({ type, handleClick }) {
  let iconToRender;

  switch (type) {
    case 'delete':
      iconToRender = faTrashAlt;
      break;
    case 'edit':
      iconToRender = faEdit;
      break;
  }
  return (
    <>
      <FontAwesomeIcon className='py-2'   icon={iconToRender} onClick={handleClick} />
    </>
  );
}

export default Icon;
