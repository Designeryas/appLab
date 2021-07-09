import "./apps.scss";
import mobile from "../../assets/images/mobile2.png";
import speed from "../../assets/images/speed.png";
import vector from "../../assets/images/vector.png";
import prototyping from "../../assets/images/prototyping.png";
import bill from "../../assets/images/bill.png";
import network from "../../assets/images/network.png";
import badge from "../../assets/images/badge.png";

const Apps = () => {
  const data = [
    {
      icon: bill,
      title: "Automatic Payouts",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
        color: 'red'
    },
    {
      icon: network,
      title: "Network Effect",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
        color: 'blue'
    },
    {
      icon: badge,
      title: "Bigger Rewards Method",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
        color: 'green'
    },
  ];
  return (
    <div className="container apps pt-2 pt-md-5 pb-md-5">
      <div className="row justify-content-center mb-5">
        <div className="d-none d-md-block col-sm-5 col-md-6 col-lg-5 img">
          <img src={mobile} alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-5 text">
          <h2>Awesome apps features</h2>
          <span>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </span>
          <ul className="items">
            <li className="speed">
              <div className="icon">
                <img src={speed} alt="" />
              </div>
              <div className="feature">
                <h3>Fast Performance</h3>
                <span>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </span>
              </div>
            </li>
            <li className="proto">
              <div className="icon">
                <img src={prototyping} alt="" />
              </div>
              <div className="feature">
                <h3>Prototyping</h3>
                <span>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </span>
              </div>
            </li>
            <li className="vector">
              <div className="icon">
                <img src={vector} alt="" />
              </div>
              <div className="feature">
                <h3>Vector</h3>
                <span>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center bottom-mobile mt-5 mb-5">
        <div className="col-12 col-sm-6 col-md-5">
          <h2>Smart jackpots that you may love this anytime & anywhere</h2>
        </div>
        <div className="col-12 col-sm-6 col-md-5 pt-0 pt-sm-3">
          <span>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </span>
        </div>
      </div>
      <div className="row justify-content-center other-features pt-5 mb-5">
        <div className="col-12 col-md-11 col-lg-10">
          <div className="row">
            {data.map((item,index) => {
              return (
                <div className={`col-12 col-sm-6 col-md-4 p-2 p-lg-5 mb-5 mb-sm-3 box ${item.color}`} key={index}>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                  <span>{item.describe}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
