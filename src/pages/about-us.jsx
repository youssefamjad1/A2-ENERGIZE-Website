import React from "react";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import CopyrightFooter from "../components/footer/CopyrightFooter";

import OurMission from "../components/about/OurMission";
import Block2 from "../components/about/Block2";
import CounterSection from "../components/about/Counter";
import Testimonial2 from "../components/about/Testimonial2";
import Faq2 from "../components/about/Faq2";

const AboutUs = () => {
  return (
    <>
      <Seo pageTitle="A propos" />
      {/* <!-- 
      =============================================
      Theme Default header
      ============================================== 	
      --> */}
      <DefaulHeader/>
      {/* 
        =============================================
        Our mission section
        ============================================== 
        */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-70"
                data-aos="fade-up"
              >
                <div className="sc-title">A PROPOS DE NOUS</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Notre Mission et de vous assurer un meilleur service en matière d'Energie {" "}
                  <span className="position-relative">
                    Solaire{" "}
                    <img src="/images/shape/shape_07.svg" alt="shape" />
                  </span>
                </h2>
              </div>
             
            </div>
          </div>
          <OurMission />
         

          <img
            src="/images/shape/shape_08.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>
      {/* /.fancy-feature-fiftyEight */}
      {/*
        =====================================================
        Block2 countersection
        =====================================================
        */}
       <div
        className="fancy-feature-fiftyNine position-relative mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              A2 ENERGIZE, une équipe{" "}
              <span className="position-relative">
                d'Experts.
                <img src="/images/shape/shape_09.svg" alt="shape" />
              </span>
            </h2>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-9 m-auto">
              <p
                className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                data-aos="fade-up"
              >
                A2 Energize, une entreprise marocaine créée en 2015, spécialisée dans l'installation des panneaux photovoltaiques et l'accompagnement de ses clients en matière d'energie solaire
              </p>
            </div>
          </div>
          {/* End .row */}
          <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2/>
            </div>
          </div>{" "}
          {/* /.card-wrapper */}
        </div>{" "}
        {/* /.container */}
        <div className="wrapper mt-50 lg-mt-10">
          <div className="container">
            <div className="row">
              <CounterSection/>
            </div>
          </div>
        </div>{" "}
        {/* /.wrapper */}
        <img
          src="/images/shape/shape_10.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.fancy-feature-fiftyNine */}
      {/* 
        =============================================
        Testimonial 2 Section 
        ============================================== 
        */}
         <div
        className="feedback-section-ten position-relative zn2 pt-110 pb-150 mt-160 lg-mt-100 lg-pt-80 lg-pb-80"
        style={{ background: "#fafafa" }}
      >
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  aos="fade-right"
                >
                  <div className="sc-title">TEMOIGNAGES</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    Témoignages de nos
                    <span className="position-relative">
                      {" "}
                      clients <img src="/images/shape/shape_11.svg" alt="" />
                    </span>
                    
                  </h2>
                </div>
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial2/>
          </div>
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_12.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_13.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.feedback-section-testimonial2 */}
       {/*
        =====================================================
        Faq Section
        =====================================================
        */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Réponses <img src="/images/shape/shape_132.svg" alt="" />
              </span>
            </h2>
          </div>
          {/* /*/}

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
            <Faq2/>
            <img
              src="/images/shape/shape_14.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Avez-vous des Projets? <br />
                  <span className="position-relative">
                    Contacter nous <img src="/images/shape/shape_132.svg" alt="" />
                  </span>
                  &amp; Collaborons ensemble
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                Nous sommes là pour vous accompagner!Laisser nous un message!
              </p>
              <Link
                to="/contact"
                className="btn-twenty fw-500 tran3s"
                aos-delay="300"
                aos="fade-up"
              >
                Envoyer Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /end Faq Section*/}
      {/*

      {/*
        =====================================================
        Footer
        =====================================================
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

        <CopyrightFooter />

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

export default AboutUs;
