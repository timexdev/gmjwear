import React from 'react'
import "./Checkoutmain.css";
import mastercard from "../Assets/Logo/mastercard logo.png"

const Checkoutmain = () => {
  return (
    <div style={{overflow:"hidden"}}>
        <div className="container">
        <div className="row mt-5">
            <div className="col-md-8 col-12">
                <div className='mb-4'>
                    <span className='fw-bolder' style={{fontSize24:"24px"}} > <i class="bi bi-check-circle me-4"></i>Customer Information </span>  <a href="" className='a1'>Edit</a>
                    <p className='ms-5'>Micheal Agboola</p>
                    <p className='ms-5'>Pipeline road Narayi, Kaduna state| Kaduna-ZARIA| +234 8112300138</p>
                </div>
                <div className='mb-4'>
                    <span className='fw-bolder' style={{fontSize24:"24px"}}> <i class="bi bi-check-circle me-4"></i>Delivery Method </span>  <a href="" className='a2'>Edit</a>
                    <p className='ms-5' >Door Deliver (from 2100)</p>
                    <p className='ms-5'>Delivery between 19th July and 25th July</p>
                </div>
                <div className='mb-4'>
                    <span className='fw-bolder' style={{fontSize24:"24px"}}> <i class="bi bi-clock me-4"></i>Payment Method </span>
                    <form action="" className='mb-5 ms-5' >
                        <div style={{display:"flex"}}>
                            <div>
                            <label htmlFor="firstname">First Name </label> <br />
                            <input id=""firstname type="text" placeholder='Micheal' />
                            </div>
                            <div>
                            <label htmlFor="firstname">First Name </label> <br />
                            <input id=""firstname type="text" placeholder='Micheal' />
                            </div>
                        </div>

                        <div>
                        <div style={{display:"flex"}}>
                            <div>
                                <label htmlFor="cardNumber">Card Number</label>  <br />
                                <input id="cardNumber" type="number" placeholder='1234 **** **** ****'/>
                                <img className='mastercrd' src={mastercard} alt="" />
                            </div>
                            <div>
                            <label htmlFor="expDate">Expiry Date</label> <br />
                            <input id="expDate" type="number" placeholder='12/25'/>
                            </div>
                        </div>
                        </div>
                        <div>
                        <label htmlFor="cvv">CVV</label> <br />
                        <input id="expDate" type="number" placeholder='426'/>
                        </div>

                    </form>
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
            <button className='checkbtn'>Checkout</button>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default Checkoutmain