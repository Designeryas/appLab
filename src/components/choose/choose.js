import "./choose.scss";
import webDesign from "../../assets/images/web-design.png";
import award from "../../assets/images/trophy.png";
import computer from "../../assets/images/computer.png";
import customization from "../../assets/images/customer-support.png";
import ui from "../../assets/images/ui.png";
import support from "../../assets/images/customer-service.png";

const Choose = () => {
  const data = [
    {
      icon: webDesign,
      title: "App Development",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "webDesign",
    },
    {
      icon: award,
      title: "10 Times Award",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "award",
    },
    {
      icon: computer,
      title: "Cloud Storage",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "computer",
    },
    {
      icon: customization,
      title: "Customization",
      describe:
        "Get your blood tests delivered at home collect a sample from the news your blood tests.",
      color: "customization",
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
    <div className="container choose pt-2 pt-md-5 pb-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 title text-center mb-md-3 text-center p-3">
          <h2>Why you should choose our app</h2>
          <p>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>
        {data.map((item,index) => {
          return (
            <div className={`col-12 col-sm-6 col-md-4 mb-sm-3 p-4 box text-center p-3 ${item.color}`} key={index}>
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
  );
};

export default Choose;
