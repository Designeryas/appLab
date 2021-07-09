import React, { useState } from "react";
import "./price.scss";

const Price = () => {
  const [activeButton, setActiveButton] = useState(true);
  return (
    <div className="container price pt-2 pt-md-5 pb-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 title mb-3 p-3 text-center">
          <h2>Get awesome features, without extra charges</h2>
          <p>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>
        <div className="col-12 btns mb-2">
          <div className="btnContainer">
            <div
              className={activeButton ? "active" : ""}
              onClick={() => setActiveButton(!activeButton)}
            >
              Monthly
            </div>
            <div
              className={!activeButton ? "active" : ""}
              onClick={() => setActiveButton(!activeButton)}
            >
              Annually
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="box">
            <div className="top">
              <div className="price-number">
                <span>$0</span>
                <span>/month</span>
              </div>
              <p className="subtitle">Business Class</p>
              <p>For small teams or office</p>
            </div>
            <div className="bottom">
              <p>Drag & Drop Builder</p>
              <p>1,000's of Templates</p>
              <p>Blog Support Tools</p>
              <p>eCommerce Store </p>
              <a href="#">Start free trail</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <div className="top">
              <div className="price-number">
                <span>$0</span>
                <span>/month</span>
              </div>
              <p className="subtitle">Pro Master</p>
              <p>For Best opportunities</p>
            </div>
            <div className="bottom">
              <p>Drag & Drop Builder</p>
              <p>1,000's of Templates</p>
              <p>Blog Support Tools</p>
              <p>eCommerce Store </p>
              <a href="#">Subscribe Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
