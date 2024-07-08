import React from 'react'
import Product from '../../Components/Product'

const DeskProduct = () => {
  return (
    <>
    <div><Product/></div>
    <div className='d-none d-md-inline'><Product/></div>
    <div className='d-none d-md-inline'><Product/></div>
    </>
    
  )
}

export default DeskProduct