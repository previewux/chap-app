import React from 'react';


const Product = ({ name, image, price }) => {
  const defultUrl = 'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg'
  const imgUrl = image && image.url
  return (<article className='product'>
    <h6>{name || 'Sofa Sat'}</h6>
    <img src={imgUrl || defultUrl} alt={name} />
    <span>$ {price || '8.54'}</span>
  </article>)
};

// Product.propTypes = {
//   img: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// }

// Product.dafaultProps = {
//   name: 'It is Defult name',
//   price: 2.5,
//   img: '%PUBLIC_URL%/logo192.png'
// }

export default Product;
