import React from "react";
import "./download.scss";
import appStore from "../../assets/images/app-store.png";
import googlePlay from "../../assets/images/google-play.png";

const Download = () => {
  return (
    <div className="container-fluid download pt-2 pt-md-5 pb-5">
      <div className="container">
        <div className="row justify-content-start mb-4">
          <div className="col-12 col-md-6 text mb-3 p-3">
            <h2 className="mb-3">Download our App now !</h2>
            <p className="subtitle">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
            <div className="btns mt-5 mb-3">
              <div className="btn-google">
                <img src={googlePlay} alt="" />
              </div>
              <div className="btn-app">
                <img src={appStore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
