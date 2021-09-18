import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  let [display, setDisplay] = useState(window.innerWidth)

  const chackWidth = () => {
    setDisplay(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', chackWidth)
    return () => {
      window.removeEventListener('resize', chackWidth)
    }
  }, [])

  return (
    <div className="body">
      <h2>Window Current Size is:</h2>
      <h2>
        {display} px
      </h2>
    </div>
  )
};

export default UseEffectCleanup;
