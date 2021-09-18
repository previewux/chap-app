// import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react'
import React, { useState, useEffect, useCallback } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
import { data } from '../../../data';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
// const UseCont = React.createContext()

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [card, setCard] = useState(0)


  const incriceCard = useCallback(() => {
    setCard(card + 1)
  }, [card])

  // const expesive = () => {
  //   const price = products.map(e => e.fields.price)
  //   return price
  // }

  useEffect(() => {

    const allCategories = ['all', ...new Set(data.map((item) => item.catagory))]
    console.log(allCategories)

  }, [])


  // const xyz = useMemo(() => expesive(), [products])

  return (
    // <UseCont.Provider value={{ incriceCard }}>
    <>
      <h1>Count : {count}</h1>
      <h2>you Add on card {card}</h2>
      {/* <h1>Your total price is :{xyz[0]}</h1> */}
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} incriceCard={incriceCard} />
    </>

    // </UseCont.Provider>
  )
}

const BigList = React.memo(({ products, incriceCard }) => {
  // console.log('big')
  // const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} incriceCard={incriceCard}></SingleProduct>
      })}
    </section>
  )
})

const SingleProduct = React.memo(({ fields, incriceCard }) => {
  // console.log('single')
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  // const { incriceCard } = useContext(UseCont)
  //  console.log(cardcontext);

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button type='button' className='btn btn-primary' onClick={incriceCard}>add card</button>
    </article>
  )
})
export default Index
