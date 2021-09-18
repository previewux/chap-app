import React from 'react';

const UseStateObject = () => {

  let myObj = {
    name: 'Alexzender The Great',
    age: 909,
    description: `Recently I'm death`
  }

  const [object, setChange] = React.useState(myObj)


  const changeDes = () => {
    setChange({ ...object, description: 'Remember I am not Forgotted' })
  }

  const { name, age, description } = object
  return (<>
    <h2>{name} </h2>
    <h2>{age} </h2>
    <h2>{description} </h2>

    <button className="btn btn-primary" onClick={changeDes}>
      Change Description
    </button>
  </>)
};

export default UseStateObject;
