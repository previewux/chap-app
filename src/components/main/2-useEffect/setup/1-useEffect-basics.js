import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, changeValue] = useState(0)

  useEffect(() => {
    if (value > 0) {
      document.title = `My | React (${value})`
      console.log('Effect is used')
    }
  }, [value])



  return (
    <div className="body">

      <h2>{value}</h2>

      <button type='button' className='btn btn-primary' onClick={() => changeValue(value + 1)} >click me 😋 </button>


    </div>
  )
};

export default UseEffectBasics;
