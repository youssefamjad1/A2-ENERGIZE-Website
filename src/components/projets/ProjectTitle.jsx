import React from "react";
const ProjectTitle = () => {
    return (
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Nos projets récents
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Découvrir Nos Projets.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_19.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_20.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
    );
  };
  
  export default ProjectTitle;
  