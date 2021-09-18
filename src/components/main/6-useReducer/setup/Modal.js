import React, { useEffect } from 'react';

const Modal = ({ modeContent, Closing }) => {
  useEffect(() => {
    setTimeout(() => {
      Closing()
    }, 2000)

  })
  return <>
    {modeContent}
  </>;
};

export default Modal;
