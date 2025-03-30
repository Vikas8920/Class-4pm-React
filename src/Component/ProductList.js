import React, { useEffect, useState } from 'react'
import { useCart } from '../Context/CartContext'

const ProductList = () => {
    const {dispatch} = useCart()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=> response.json())
        .then((data)=>setProducts(data.products))
    }, [])

    const addToCart = (product) =>{
        dispatch({type: 'ADD_TO_CART', payload: product})
    }
    
  return (
    <>
      <div className='container'>
        <div className='row'>
            {products.map((product)=>(
                <div key={product.id} className='col-md-4 mb-3'>
                    <div className='card'>
                        <img src={product.images} className='card-img-top' alt='' style={{width:'350px', height:'250px'}}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{product.title}</h5>
                            <p className='card-text'>{product.description}</p>
                            <p className='card-text'>${product.price}</p>
                            <button className='btn btn-primary' onClick={()=>addToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
