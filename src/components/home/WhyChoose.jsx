import React from "react";
const whychooseItems = [
  {
    id: 1,
    icon: "/images/icon/icon_09.svg",
    title: "Meilleur Rapport Qualité Prix.",
    content:
      "une excellente qualité à un prix imbattable",
  },
  {
    id: 2,
    icon: "/images/icon/icon_10.svg",
    title: "Processus Rapide",
    content:
      "une installation complete dans les plus brefs délais",
  },
  {
    id: 3,
    icon: "/images/icon/icon_11.svg",
    title: "Suivi permanent",
    content:
      "une assistance assurée et un suivi régulier",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {whychooseItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
