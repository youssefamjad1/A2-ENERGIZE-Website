import React from "react";

const Block2 = () => {
  const cardData = [
    {
      iconSrc: "/images/icon/icon_14.svg",
      title: "une expertise acquise à travers +1200",
      subtitle: "Projets réalisés.",
      delay: 0,
    },
    {
      iconSrc: "/images/icon/icon_15.svg",
      title: "Une équipe compétente de 15 personnes",
      subtitle: "entre cadres et techniciens",
      delay: 200,
    },
    {
      iconSrc: "/images/icon/icon_16.svg",
      title: "une collaboration permanente avec les partenaires",
      subtitle: "Au niveau local et national",
      delay: 300,
    },
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className="card-style-twentySix text-center mt-25">
            <div className="icon rounded-circle m-auto d-flex align-items-center justify-content-center">
              <img src={card.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="tx-dark mt-40 lg-mt-30 mb-5">{card.title}</h5>
            <p className="fs-18">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block2;
