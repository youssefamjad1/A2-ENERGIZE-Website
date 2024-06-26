import React from "react";

const Hero = () => {

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              Votre Meilleur <span>Partenaire</span>  Solaire.
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Meilleure Qualité à un prix imbattable
            </p>
            
            <div>
              <div className="approval-info d-inline-flex align-items-center mt-0 lg-mt-0">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>au service des particuliers et des entreprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <img
        src="/images/assets/heroleft.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
      />
      <img
        src="/images/assets/heroright.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Hero;
