import "./codes.scss";
import codes from "../../assets/images/codes.png";

const Codes = () => {
  return (
    <div className="container-fluid codes pt-2 pt-md-5 pb-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="d-none d-md-block col-md-6 img">
            <img src={codes} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-5 text d-flex align-items-start justify-content-center flex-column pl-0 pl-md-3">
            <h2>Designed & built by the latest code integration</h2>
            <span>
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </span>

            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codes;
