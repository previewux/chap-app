import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [people, setPeople] = useState([])

  const submitted = (e) => {
    e.preventDefault()
    if (mail && name) {
      const person = { id: new Date().getTime().toString(), mail, name }

      setPeople([...people, person])

    } else {
      alert('Please fill input')
    }
    console.log(people);

  }

  return (
    <>
      <form className='form' onSubmit={submitted}>
        <div className="form-control">
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} id="" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" value={mail} onChange={(e) => setMail(e.target.value)} id="" />
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>

      {people.map(e => {
        const { id, name, mail } = e
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <span>{mail}</span>
          </div>
        )
      })}
    </>
  )

};

export default ControlledInputs;
