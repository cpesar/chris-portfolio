import React from 'react';

function Modal({ onClose, currentProject }) {
  const { name, category, description, site, repo, index } = currentProject;

  return (
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{name}</h3>
        <img
          src={require(`../../assets/files/${category}/${index}.png`).default}
          alt='current category'
        />
        <p>{description}</p>
        <button type='button' onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
