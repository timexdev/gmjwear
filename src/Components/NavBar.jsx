import React from 'react';
import "./NavBar.css";
import logo from "../Assets/Logo/Logo.png";
import search from "../Assets/Icons/search.png"
import cart from "../Assets/Icons/cart.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navigateToCart = () => {
    window.location.href = '/cart';
  };
  return (
    <>
        <nav className="navbar navbar-expand-lg nav-container">
        <div className="container">
          <Link to="/"><img src={logo} alt="logo"  style={{cursor:"pointer"}}/></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New and Featured</a>
              </li>
            </ul>
            <section className="rightNav">
            <img src={search} alt="search" style={{cursor:"pointer"}} />
            <Link to="/cart"><img src={cart} alt="cart" style={{cursor:"pointer"}}/></Link>
            
              <button className="btn btn-outline-dark" type="submit">Login</button>
            </section>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar