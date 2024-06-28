import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Satisfaction",
      subtitle: "Client",
    },
    {
      id: 2,
      title: "30+",
      cardNo: "card-two",
      subtitle: "Collaborateurs",
    },
    {
      id: 3,
      title: "+1200",
      cardNo: "card-three",
      subtitle: "Prestations",
    },
  ];

  return (
    <>
     

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
           
            <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
              A2 Energize a réalisé<span className="fw-500">~+1200</span> installation réussite des panneaux solaire dans tout le royaume.
            </p>
            <h6
              className="fs-20 tx-dark d-inline-block fst-italic position-relative ps-4"
              data-aos="fade-up"
            >
              Aiman Abou Ameur
            </h6>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_01.svg"
              alt="shape"
              className="lazy-img"
            />
            <img
              src="/images/media/img_01.png"
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3>{item.title}</h3>
                  <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* */}
      </div>
    </>
  );
};

export default IntroAbout;
