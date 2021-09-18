import React from 'react';
import { data } from '../../../data';



const UseStateArray = () => {

  const [person, setPerson] = React.useState(data)

  const deletPerson = (idNo) => {
    const removedPerson = person.filter(e => e.id !== idNo)
    console.log(removedPerson);
    setPerson(removedPerson)
  }

  return (
    <React.Fragment>

      {person.map(e => {
        const { id, name } = e
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button className="btn btn-primary" onClick={() => deletPerson(id)}>Remove</button>
          </div>
        )
      })}

      <button className="btn btn-primary" onClick={() => setPerson([])}>
        clear
      </button>

    </React.Fragment>
  )

};

export default UseStateArray;
