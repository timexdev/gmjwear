import React from 'react'

const CheckoutHeader = () => {
  return (
    <>
        <div className='text-center mt-5'>
        <h2>Checkout</h2>
        <p className='d-none d-md-inline'>You're just a few steps away from completing your purchase. Please fill <br /> out the information below to finalize your order</p>
        <p className='d-inline d-md-none'>You're just a few steps away from completing <br /> your purchase. Please fill out the information <br /> below to finalize your order</p>
        </div>
    </>
  )
}

export default CheckoutHeader