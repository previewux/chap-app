import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setCount] = useState(0)
  const incri = () => {
    setCount(value + 1)
  }
  const reset = () => {
    setCount(0)
  }
  const decri = () => {
    setCount(value - 1)
  }
  const differentCount = () => {
    setTimeout(() => {
      setCount(value => value + 1)
    }, 1500)
  }


  return (
    <div className="container">
      <h2>{value}</h2>

      <button type='button' className='btn btn-primary' onClick={decri}>Decrement</button>
      <button type='button' className='btn btn-danger' onClick={reset}>Reset</button>
      <button type='button' className='btn btn-success' onClick={incri}>Increment</button>

      <div className="body" style={{ marginTop: '2rem' }}>
        <h2>Different Count</h2>
        <h2>{value}</h2>
        <button type='button' className='btn btn-danger' onClick={differentCount}>Count</button>
      </div>

    </div>


  )
};

export default UseStateCounter;
