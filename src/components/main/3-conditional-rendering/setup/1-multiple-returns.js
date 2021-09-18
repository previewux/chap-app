import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsonA';
const MultipleReturns = () => {

  const [isLoading, setLoding] = useState(true)
  const [isError, setError] = useState(false)
  const [isUser, serUser] = useState('Unknown User...')

  useEffect(() => {

    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          setLoding(false)
          setError(true)
          throw new Error(res.statusText);

        }
      }).then(e => {
        const { login } = e
        setLoding(false)
        serUser(login)
      }).catch(e => {
        console.log(e.name)
      })

  }, [])



  if (isLoading) {
    return <h1>Loading.....</h1>
  }
  if (isError) {
    return <h1>Error...</h1>
  }


  return <h1>{isUser}</h1>;


};

export default MultipleReturns;
