import React from "react";
const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/images/shape/shape_02.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8" data-aos="fade-down">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>+1200</h3>
            <p>Clients Servis et 100% Satisfaits</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7" data-aos="fade-down">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              30+ <br />
              <span>Collaborateurs</span>
            </h3>
            <p>
              un Partenariat solide et basé sur la confiance avec des partenaires nationaux
            </p>
            <img
              src="/images/shape/shape_04.svg"
              alt="sahpe"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5" data-aos="fade-up">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>Assistance</span>
            </h3>
            <p>Nous sommes toujours là pour vous assister</p>
          </div>
          {/* /.block-wrapper */}
          <img
            src="/images/shape/shape_03.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
