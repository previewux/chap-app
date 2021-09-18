import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refarence = useRef(null)
  const age = useRef(null)


  const submitHandling = (e) => {
    e.preventDefault()
    // console.log(refarence.current.value);
    // console.log(age.current.value);
  }
  useEffect(() => {
    console.log(refarence.current);
    refarence.current.focus();
    age.current.focus();

  })

  return (
    <>

      <form className='form' onSubmit={submitHandling}>
        <div className="form-control">
          <label htmlFor="name"></label>
          <input type="text" name="name" ref={refarence} />
          <input type="text" name="age" ref={age} />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
      </form>

    </>
  )
};

export default UseRefBasics;
