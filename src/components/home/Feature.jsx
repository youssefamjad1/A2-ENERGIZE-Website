import React from "react";
const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
          Installation des panneaux <br /> Solaires.
        </>
      ),
      description: "100% Fiables et Efficaces",
      icon: "images/icon/icon_01.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          Assitance en permanence <br /> H24.
        </>
      ),
      width: "202",
      height: "170",
      description: "Claim Support",
      icon: "images/icon/icon_02.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          Accampagnement  <br /> des Experts.
        </>
      ),
      width: "175",
      height: "175",
      description: "Consultation",
      icon: "images/icon/icon_03.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <img src={feature.icon} alt="icon" className="position-absolute" />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
