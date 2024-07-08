import React from "react";
import product1 from "../Assets/Product/Product 1.png";
import product2 from "../Assets/Product/Product 2.png";
import product3 from "../Assets/Product/Product 3.png";
import product4 from "../Assets/Product/Product 4.png";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-3 col-12 mb-4">
            <div className="me-2">
              <img src={product2} alt="" className="card-img-top" />
              <div className="card-body ">
                <span className="card-title fw-bold">Yahweh T-shirt</span>
                <span className="ms-5"><i class="bi bi-star-half"></i> 4.8/5</span>
                <p className="card-text">
                Simple T-shirt for daily use
                </p>
                <h5>$60</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-4">
            <div className="me-2" >
              <img src={product3} alt="" className="card-img-top" />
              <div className="card-body">
                <span className="card-title fw-bold">Koinonia T-shirt </span>
                <span  className="ms-5"><i class="bi bi-star-half"></i> 4.8/5</span>
                <p className="card-text">
                Koinonia global T-shirt
                </p>
                <h5>$80</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-4">
            <div className="me-2" >
              <img src={product4} alt="" className="card-img-top" />
              <div className="card-body">
                <span className="card-title fw-bold">Original Cat T-shirt</span>
                <span  className="ms-5"><i class="bi bi-star-half"></i> 4.8/5</span>
                <p className="card-text">
                Classic T-shirt for daily use
                </p>
                <h5>$30</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-4">
            <div className="me-2" >
              <img src={product1} alt="" className="card-img-top" />
              <div className="card-body">
                <span className="card-title fw-bold">Lux Green T-shirt </span>
                <span className="ms-5"><i class="bi bi-star-half"></i> 4.8/5</span>
                <p className="card-text">
                Casual T-shirt for daily use
                </p>
                <h5>$45</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
