import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// const url = 'https://www.trackcorona.live/api/countries';


const UseEffectFetchData = () => {

  const [people, setstate] = useState([])

  const displayUsers = async () => {
    const request = await fetch(url)
    const people = await request.json()
    setstate(people)
  }

  useEffect(() => {
    displayUsers()
  }, [])


  return (<>
    <ul className="users">

      {people.map(user => {
        const { id, login, avatar_url, html_url } = user;

        <h2>hi</h2>

        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h6>{login}</h6>
              <a href={html_url}>profile</a>
            </div>
          </li>
        )
      })}
    </ul>
  </>
  )

};

export default UseEffectFetchData;
