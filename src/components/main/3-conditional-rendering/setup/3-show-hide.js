import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <button type='button' className='btn btn-primary' onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}

      </button>
      {toggle && <ShowItem />}

    </>
  )

};

const ShowItem = () => {

  const [width, setWidth] = useState(window.innerWidth)

  const chackSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', chackSize)
    return () => {
      window.removeEventListener('resize', chackSize)

    }
  }, [])
  return (
    <React.Fragment>
      <h1 style={{ margin: '1.5rem 0', color: 'plum' }}>Window Size is <br /> </h1>

      <h5> {width}:PX</h5>

    </React.Fragment>
  )
}


export default ShowHide;
