import React from 'react'
import { useCart } from '../Context/CartContext'

const Cart = () => {
    const {state} = useCart()
  return (
    <>
      <div className='container'>
        {state.cartItem.length === 0?(
            <h1>Your Cart is Empty</h1>
        ):(
            <table className='table'>
               <thead>
               <tr>
                    <th>S.No.</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
               </thead>
               <tbody>
                {state.cartItem.map((item,index)=>(
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td><img src={item.images} style={{width:'60px'}}/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                    </tr>
                ))}
               <tr>
                </tr>
               </tbody>
            </table>
        )}
      </div>
    </>
  )
}

export default Cart
