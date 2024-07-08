import React from 'react';
import "./CartHeader.css"

const CartHeader = () => {
  return (
    <>
        <div className='text-center mt-5'>
        <h2>Your Cart</h2>
        <p className='d-none d-md-inline'>Review your selected items below before proceeding to checkout. Make <br /> sure everything looks good!</p>
        <p className='d-inline d-md-none'>Review your selected items below before <br /> proceeding to checkout. Make sure <br /> everything looks good!</p>
        </div>
    </>
  )
}

export default CartHeader