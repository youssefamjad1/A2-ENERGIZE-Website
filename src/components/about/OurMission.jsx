import React from "react";
const OurMission = () => {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-lg-5 col-md-6 order-md-last ms-auto">
          <div className="feedback-block-thirteen mb-50" data-aos="fade-left">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src="/images/icon/icon_13.svg" alt="icon" />
            </div>
            <p className="tx-dark mt-35 lg-mt-30 mb-45 lg-mb-30">
              A2ENERGIZE vous assure une installation complete rapide et efficace des systèmes solaires photovoltaïques.
            </p>
            <h6 className="tx-dark fs-20">
              - AIMAN ABOU AMEUR.{" "}
              <span className="fs-18 fw-normal opacity-50">
                CEO &amp; Fondateur A2ENERGIEZ
              </span>
            </h6>
          </div>
          {/* /.feedback-block-thirteen */}
        </div>
        {/* End .col */}

        <div className="col-md-6 order-md-first" data-aos="fade-right">
          <div className="row align-items-end">
            <div className="col-sm-6">
              <div className="img-meta mb-50 lg-mb-40">
                <img
                  style={{ objectFit: "cover" }}
                  src="/images/media/img_04.jpg"
                  alt="media"
                  className="lazy-img w-100"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="img-meta position-relative mb-50 lg-mb-40">
                <img
                  style={{ objectFit: "cover" }}
                  src="/images/media/img_05.jpg"
                  alt="media"
                  className="lazy-img w-100"
                />
                
                {/* /.rating */}
              </div>{" "}
              {/* /.img-meta */}
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <div className="row justify-content-end" data-aos="fade-up">
        <div className="col-sm-4">
          <div className="img-meta mb-50 lg-mb-40">
            <img
              style={{ objectFit: "cover" }}
              src="/images/media/img_06.jpg"
              alt="media"
              className="lazy-img w-100"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="img-meta position-relative">
            <img
              style={{ objectFit: "cover" }}
              src="/images/media/img_07.jpg"
              alt="media"
              className="lazy-img w-100"
            />
            <div
              className="customer-data d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <div className="fw-500 tx-dark amount">+1200</div>
              <div className="fs-18 tx-dark">Clients</div>
            </div>{" "}
            {/* /.customer-data */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
