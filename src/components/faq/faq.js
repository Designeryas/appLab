import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./faq.scss";

const Faq = () => {
  //============ variables ===============
  const data = [
    {
      question: "How to contact with riders emergency?",
      answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
    },
    {
      question: "App installation failed, how to update system information?",
      answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
    },
    {
      question: "Website reponse taking time, how to improve?",
      answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
    },
    {
      question: "New update fixed all bug and issues",
      answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
    },
    {
      question: "How to contact with riders emergency?",
      answer: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
    },
  ];
  const [activeItem, setActiveItem] = useState({ id: 0, status: false });
  //======================================

  //============ methods =================
  const handleList = (id) => {
    if (id === activeItem.id) {
      setActiveItem({ ...activeItem, status: !activeItem.status });
    } else {      
      setActiveItem({ ...activeItem, id: id, status: true });
    }
  };
  //======================================
  return (
    <div className="container faq pt-2 pt-md-5 pb-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 title mb-3 p-3 justify-content-center d-flex">
          <div className="col-12 col-sm-8 col-md-6">
            <h2 className="mb-3">Frequently asked questions</h2>
            <p className="subtitle">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-8 faqs mb-3 p-3">
          <ul>
            {data.map((item, index) => {
              return (
                <li
                  className={`item`}
                  key={index}
                  onClick={() => {
                    handleList(index);                    
                  }}
                >
                  {activeItem.status ? (
                    data.indexOf(item) === activeItem.id ? (
                      <React.Fragment>
                        <div className="question">
                          <h3>{item.question}</h3>
                          <span>-</span>
                        </div>
                        <p className="answer">{item.answer}</p>
                      </React.Fragment>
                    ) : (
                      <div className="question">
                        <h3>{item.question}</h3>
                        <span>+</span>
                      </div>
                    )
                  ) : (
                    <div className="question">
                      <h3>{item.question}</h3>
                      <span>+</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
