import React, { useState } from 'react';

const UseStateBasics = () => {


  const [value, setNewTittle] = useState('Random Tittle')

  const setTittle = () => {
    setNewTittle('Hello World')

    if (value === 'Hello World') {
      setNewTittle('Random Tittle')
    }
    else {
      setNewTittle('Hello World')

    }
  }

  return (
    <div className='body'>

      <h2>{value}</h2>
      <button type='button' className='btn btn-success' onClick={setTittle}>Tittle</button>

    </div>

  )

};

export default UseStateBasics;
