import React from 'react';
import "./CartProduct.css"
import product1 from "../Assets/Product/Product 1.png";
import product2 from "../Assets/Product/Product 2.png";
import product4 from "../Assets/Product/Product 4.png";
import deleteIcon from "../Assets/Icons/delete-icon.png";


const CartProduct = () => {
    const navigateToCart = () => {
        window.location.href = '/checkout';
      };
  return (
    <div>
<div className="container">
    <div className="row mt-5">
        <div className="col-md-8 col-12">
            <div className='mb-5' style={{display:"flex"}}>
                <div >
                    <img className='productImg' src={product1} alt="" />
                </div>
                <div className='ms-3'>
                    <h6>Yahweh T-shirt <span style={{marginLeft:"100px"}}>$60</span></h6>
                    <div><span>Size: </span> 
                        <span className='small me-2'>S</span>
                        <span className='medium me-2'>M</span>
                        <span className='large me-2'>L</span>
                        <span className='xlarge me-2'>XL</span>
                    </div>
                    <div className='mt-2'><span>Color: </span> 
                        <span><i className="bi bi-circle-fill grey me-2"></i></span>
                        <span ><i className="bi bi-circle-fill black me-2"></i></span>
                        <span ><i className="bi bi-circle-fill blue me-2"></i></span>
                        <span><i className="bi bi-circle-fill green"></i></span>
                    </div>
                    <div style={{marginTop:"90px"}}>
                        <span><i className="bi bi-plus-circle me-2"></i></span>
                        <span className='number'>1</span>
                        <span><i class="bi bi-plus-circle plus ms-2"></i></span>
                        <img className='deleteicon' src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='mb-5' style={{display:"flex"}}>
                <div>
                    <img className='productImg' src={product2} alt="" />
                </div>
                <div className='ms-3'>
                    <h6>Koinonia T-shirt<span style={{marginLeft:"100px"}}>$60</span></h6>
                    <div><span>Size: </span> 
                        <span className='small me-2'>S</span>
                        <span className='medium me-2'>M</span>
                        <span className='large me-2'>L</span>
                        <span className='xlarge me-2'>XL</span>
                    </div>
                    <div className='mt-2'><span>Color: </span> 
                        <span><i className="bi bi-circle-fill grey me-2"></i></span>
                        <span ><i className="bi bi-circle-fill black me-2"></i></span>
                        <span ><i className="bi bi-circle-fill blue me-2"></i></span>
                        <span><i className="bi bi-circle-fill green"></i></span>
                    </div>
                    <div style={{marginTop:"90px"}}>
                        <span><i className="bi bi-plus-circle me-2"></i></span>
                        <span className='number'>1</span>
                        <span><i class="bi bi-plus-circle plus ms-2"></i></span>
                        <img className='deleteicon' src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='mb-5' style={{display:"flex"}}>
                <div>
                    <img className='productImg' src={product4} alt="" />
                </div>
                <div className='ms-3'>
                    <h6>Lux Green T-shirt <span style={{marginLeft:"100px"}}>$60</span></h6>
                    <div><span>Size: </span> 
                        <span className='small me-2'>S</span>
                        <span className='medium me-2'>M</span>
                        <span className='large me-2'>L</span>
                        <span className='xlarge me-2'>XL</span>
                    </div>
                    <div className='mt-2'><span>Color: </span> 
                        <span><i className="bi bi-circle-fill grey me-2"></i></span>
                        <span ><i className="bi bi-circle-fill black me-2"></i></span>
                        <span ><i className="bi bi-circle-fill blue me-2"></i></span>
                        <span><i className="bi bi-circle-fill green"></i></span>
                    </div>
                    <div style={{marginTop:"90px"}}>
                        <span><i className="bi bi-plus-circle me-2"></i></span>
                        <span className='number'>1</span>
                        <span><i class="bi bi-plus-circle plus ms-2"></i></span>
                        <img className='deleteicon' src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-12 mb-5">
            <h5>Summary</h5>
            <div>
                <p>Subtotal <span className='fw-bold' style={{fontSize:"16px", marginLeft:"200px"}}>$1500</span></p>
                <p>Estimated Delivery and Handling <span style={{marginLeft:"30px"}}>Free</span></p>
                <p>Estimated Taxes <span className='fw-bold' style={{fontSize:"16px", marginLeft:"150px"}}>$125</span></p>
                <h5>Total <span className='fw-bold' style={{fontSize:"20px", marginLeft:"200px"}}>$1625</span></h5>
            </div>
            <button className='checkbtn' onClick={navigateToCart}>Checkout</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default CartProduct