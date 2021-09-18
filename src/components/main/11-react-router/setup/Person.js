import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [people, setPeople] = useState()
  const { name } = useParams()

  useEffect(() => {

    // const newPerson = data.find((person) => person.id === parseInt(name));
    const newPerson = data.filter((person) => person.id === parseInt(name));
    // setPeople(newPerson.name)
    setPeople(newPerson.map(e => e.name))
  }, [])

  return (
    <div>
      <h2>{people}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium totam soluta aliquam vitae tempora odit, amet ratione cumque aperiam perspiciatis est officia eos ducimus vero nostrum beatae nesciunt facilis rerum!
        Libero quod qui, doloremque pariatur quas, consectetur sit optio modi animi explicabo accusantium velit in deleniti. Odio esse, aliquid corrupti praesentium laboriosam aut blanditiis vel, amet atque earum repellat laborum?
        Nemo praesentium ad, totam repellendus possimus nesciunt similique sed? Beatae illum doloremque vitae soluta, neque numquam amet nesciunt commodi tempore, recusandae in a quasi provident totam. Pariatur labore soluta cupiditate.
        Iusto, at sint. Deleniti veritatis eum recusandae officiis explicabo nemo facere eos unde. Quidem in vero, laudantium iusto vitae quam aut fuga necessitatibus nostrum! Culpa ea alias voluptatum corporis amet!
        Veniam necessitatibus corrupti neque cumque magnam, corporis iure animi illum minima. Rem laborum veniam commodi doloribus cumque ratione excepturi quam modi obcaecati dolor facilis vel, voluptate debitis natus aliquam architecto!
        Quam ipsa illum magnam ad? Excepturi harum quidem beatae blanditiis suscipit eos, necessitatibus eum iure quasi sint eligendi eveniet et voluptatibus minus nisi vitae consequatur dicta. Optio velit qui aut?
        Laboriosam recusandae nemo inventore quisquam nam rem maiores cumque illum, iure deserunt a veritatis eum aspernatur, velit amet fuga adipisci iste sed dolorem laborum neque asperiores explicabo. Commodi, eaque consequatur?
        Velit, totam in repudiandae enim tempore quis dolorum soluta unde assumenda magnam repellendus cum adipisci pariatur rerum? Odit quae repellendus laboriosam rerum, debitis earum amet odio quibusdam officiis, voluptas eius.
        Exercitationem, optio. Minima tempora vero voluptatem incidunt ducimus, doloremque et ut aliquid exercitationem autem magnam, quo ipsa deserunt vel qui facere expedita. Ut, quibusdam nobis consequatur laboriosam voluptas et beatae.
        Ipsum unde illum in odit, quia est recusandae voluptate velit nihil dolorem ratione maiores, iusto quidem aut totam adipisci, provident distinctio harum necessitatibus illo! Accusamus debitis ipsum maiores alias fuga!</p>
      <Link to='/people' className='btn btn-primary'> Back to people</Link>

    </div>
  );
};

export default Person;
