import React from 'react'

const Cart = ({cart}) => {
  return (
    <>
      <div className='container mt-4'>
        <h2 className='text-center mb-4'>Cart Items</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Product Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, index)=>(
                    <tr key={item.id}>
                        <td className='ps-3 pt-2'>{index+1}</td>
                        <td className='ps-4'><img src={item.images} alt='cart-item' width={'60px'} height={'30px'}/></td>
                        <td className='ps-4'>{item.title}</td>
                        <td className='ps-4'>{item.price}</td>
                        <td className='ps-4'>{item.stock}</td>
                        <td className='ps-4'>{item.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default Cart
