import React from 'react'
import HomeHeader from '../Components/HomeHeader'
import Product from '../Components/Product'
import DeskProduct from './DesktopProduct/DeskProduct'

const Home = () => {
  return (
    <>
        <HomeHeader/>
        <DeskProduct/>
    </>
  )
}

export default Home