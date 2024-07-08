import React from 'react'
import "./HomeHeader.css"

const HomeHeader = () => {
  return (
    <>
        <div className='text-center mt-5'>
        <h2>Men Clothing Collection</h2>
        <p>Find everything you need to look and feel your best, and shop the latest Men’s fashion and lifestyle products</p>
        </div>
        <div className='d-none d-md-inline' style={{marginLeft:"350px"}}>
            <button>Jacket</button>
            <button>Pants</button>
            <button className='bg-dark text-light'>T-shirt</button>
            <button>Hoodie</button>
            <button>Short</button>
            <button>Suit</button>
        </div>
        <div className='d-inline d-md-none'>
            <button style={{marginLeft:"15px"}}>Jacket</button>
            <button>Pants</button>
            <button className='bg-dark text-light'>T-shirt</button>
            <button>Hoodie</button>
            <br />
            <button style={{marginLeft:"150px", marginTop:"30px"}}>Short</button>
            <button>Suit</button>
        </div>
        
    </>
  )
}

export default HomeHeader