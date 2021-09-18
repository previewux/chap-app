import React, { useState, useContext } from 'react';
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const RemoveContext = React.createContext()

const PropDrilling = () => {
  const [people, setPeople] = useState(data)

  const remove = (id) => {
    setPeople((person) => {
      return person.filter(e => e.id !== id)
    })
  }
  return (
    <RemoveContext.Provider value={{ remove, people }}>
      <article>
        <h2>Use Context Api</h2>
        <List />
      </article>
    </RemoveContext.Provider>
  )
};

const List = () => {
  const peopleData = useContext(RemoveContext)
  return (
    <>
      {peopleData.people.map(e => {
        return <Person key={e.id} {...e} />
      })}
    </>
  )
}

const Person = ({ id, name }) => {
  const { remove } = useContext(RemoveContext)
  return (
    <>
      <div className="item">
        {name}
        <button className='btn btn-danger' onClick={() => { remove(id) }}>remove</button>
      </div>

    </>
  )
}

export default PropDrilling;
