import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper mb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 pt-5">
              <h1>GMJ Wears</h1>
              <p>
                Get update for upcoming product and <br /> best discount for all
                items
              </p>
              <input type="email" placeholder="Your Email" />
              <button className="sub-btn">Subscribe</button>
            </div>

            <div className="col-md-4 col-12 pt-5">
              <div className="row">
                <div className="col-6">
                  <h4>Product</h4>
                  <ul>
                    <li>TShirt</li>
                    <li>Jacket</li>
                    <li>Shoes</li>
                    <li>Pants</li>
                    <li>Suits</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4>Categories</h4>
                  <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>New and Featured</li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-12 pt-5">
                <h4>Our Social Media</h4>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"#0D0D0D"}} className="py-2 mt-5">
            <div className="container">
            <p style={{fontSize:"14px", color:"#EDEDED"}}>© GMJ Copyright 2024. All Rights Reserved</p>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Footer;
