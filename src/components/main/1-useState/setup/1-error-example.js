import React from 'react';

const ErrorExample = () => {
  let tittle = 'Fist State code!!'

  const tittleHandalar = () => {
    tittle = 'Fist State code on click mathod'
    console.log(tittle);
  }

  return (
    <div>
      <h2>{tittle}</h2>
      <button className="btn btn-primary" onClick={tittleHandalar}>Click me</button>
    </div>
  )
};

export default ErrorExample;
