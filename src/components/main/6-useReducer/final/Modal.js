import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 4000);
  });
  return (
    <div className='form-modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
