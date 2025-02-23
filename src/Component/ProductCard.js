import React from 'react'

const ProductCard = ({product, addToCart}) => {
  return (
    <>
      <div className='col-md-4 mb-3'>
        <div className='card'>
            <img src={product.images} alt='products' className='rounded-top' width={'350px'} height={'250px'}/>
            <div className='card-body'>
            <h5 className='card-title'>{product.title}</h5>
            <h5 className='card-title'>{product.category}</h5>
            <h5 className='card-title'>{product.price}</h5>
            <p className='card-text mb-2'>{product.description}</p>
            <button className='btn btn-primary' onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
