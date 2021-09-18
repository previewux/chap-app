import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setisTrue] = useState('')

  const x = <h2>hi hi hi 😂😂😂</h2>

  return <>
    <div>
      <button className="btn btn-primary" onClick={() => setisTrue(x)} >
        set new
      </button>

      {text &&
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum consequuntur numquam aliquam animi nostrum, ducimus quidem quisquam beatae placeat ullam non qui facilis ipsum! Voluptatem, totam? Sapiente, perspiciatis amet.</p>
      }
    </div>
    <div> {text || (
      <p>what's wrong</p>
    )}
    </div>
    {text ? (
      <p>there is no error...</p>
    ) : (
      <div>
        <h2>there is an error</h2>
      </div>
    )}
  </>;
};

export default ShortCircuit;
