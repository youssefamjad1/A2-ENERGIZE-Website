import React from "react";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import ProjectTitle from "../components/projets/ProjectTitle";
import ProjectGallery from "../components/projets/ProjectGallery";
import CopyrightFooter from "../components/footer/CopyrightFooter";

const Projets = () => {
  return (
    <>
      <Seo pageTitle="Projets" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <ProjectTitle/>

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <ProjectGallery/>

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Avez vous des projets ?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Contacter nous au plus vite! pour collaborer ensemble.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link to="/contact" className="btn-twentyOne fw-500 tran3s">
                      Envoyer message!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo/logo_02.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

        <CopyrightFooter/>

        <div className="shapes shape-one" />
        <img
          src="/images/shape/shape_22.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.footer-style-nine */}
    </>
  );
};

export default Projets;
