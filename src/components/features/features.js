import "./features.scss";
import mobile from "../../assets/images/mobile3.png";
import webDesign from "../../assets/images/web-design.png";
import computer from "../../assets/images/computer.png";
import ui from "../../assets/images/ui.png";
import support from "../../assets/images/customer-support.png";

const Features = () => {
  const data = [
    {
      icon: webDesign,
      title: "App Development",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "webDesign",
    },
    {
      icon: computer,
      title: "Cloud Storage",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "computer",
    },
    {
      icon: ui,
      title: "UX Planning",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "ui",
    },
    {
      icon: support,
      title: "Customer Support",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "support",
    },
  ];
  return (
    <div className="container-fluid features pt-2 pt-md-5 pb-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-6 col-lg-7 text">
            <div className="row">
              <div className="col-12 title mb-3 p-3">
                <h2>Ultimate features that we built</h2>
                <p>
                  The rise of mobile devices transforms the way we consume
                  information entirely.
                </p>
              </div>
              {data.map((item,index) => {
                return (
                  <div className={`col-12 col-sm-6 box p-md-4 ${item.color}`} key={index}>
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <span>{item.describe}</span>
                  </div>
                );
              })}              
              <a href="#">See all</a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block col-lg-5 img">
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
