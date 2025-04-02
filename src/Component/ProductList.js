import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewItem } from '../store/addToCart'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((data)=>setProducts(data.products))
    }, [])

    const addToCart = (product) =>{
        dispatch(addNewItem(product))
    }
  return (
    <>
      <div className='container'>
        <div className='row'>
            {products.length?(
                products.map((product)=>(
                    <div key={product.id} className='col-md-4 mb-3'>
                        <div className='card'>
                            <img src={product.images} className='card-img-top' alt='' style={{width:'350px', height:'260px'}}/>
                            <div className='card-body'>
                                <h5 className='card-title'>{product.title}</h5>
                                <p className='card-text'>{product.description}</p>
                                <p className='card-text'>$ {product.price}</p>
                                <button className='btn btn-primary' onClick={()=>addToCart(product)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            ):(
                <div className='display-1 mt-3'>Data is Loading...</div>
            )}
        </div>
      </div>
    </>
  )
}

export default ProductList
