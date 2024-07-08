import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Banner/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
         
        {/* <Cart/>
        <Checkout/> */}
          <Footer/>

    </>
  );
}

export default App;
