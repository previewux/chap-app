import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function


const reducerFunction = (state, action) => {
  const { type, newPerson } = action
  const allPeople = [...state.people, newPerson]
  if (type === 'Add_Person') {
    return {
      ...state,
      people: allPeople,
      modalContent: 'Item added',
      isModel: true
    }
  }
  if (type === 'Close_Model') {
    return {
      ...state,
      isModel: false
    }
  }
  if (type === 'Remove') {

    const remaining = state.people.filter(e => e.id !== action.newPerson)
    // const remaining = state.people.filter(e => e)
    console.log(remaining)
    return {
      ...state,
      people: remaining
    }
  }
  if (type === 'Error') {
    return {
      ...state,
      modalContent: 'Please Input fild',
      isModel: true

    }
  }
}

const defaultState = {
  people: [],
  modalContent: 'hello buddy',
  isModel: false
}



const Index = () => {

  const [name, setName] = useState('')

  const [state, dispatch] = useReducer(reducerFunction, defaultState)
  // console.log(state);
  const sumitHandle = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name }
      console.log(newPerson)
      dispatch({ type: 'Add_Person', newPerson: newPerson })
      setName('')
    }
    else {
      dispatch({ type: 'Error' })
    }
  }

  const modelClose = () => {
    dispatch({ type: 'Close_Model' })
  }


  return (
    <>
      {state.isModel && <Modal Closing={modelClose} modeContent={state.modalContent} />}
      <form className='form' onSubmit={sumitHandle}>
        <div className="form-control">
          <input type="text" name="name" id="" value={name} onChange={(e) => { setName(e.target.value) }} />
          <br />
          <button type="submit" className='btn btn-primary'>submit</button>
        </div>
      </form>


      {state.people.map(e => {
        const { name, id } = e
        return (
          <div className="item" key={id}>
            <h6>{name}</h6>
            <button type='button' className='btn btn-danger' onClick={() => { dispatch({ type: 'Remove', newPerson: id }) }} >remove</button>
          </div>
        )
      })}

    </>
  )

};

export default Index;
