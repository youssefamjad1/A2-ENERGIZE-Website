import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaulHeader from "../components/header/DefaulHeader";
import Footer from "../components/footer/Footer";
import CopyrightFooter from "../components/footer/CopyrightFooter";

const Contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section 
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Informations de contact
                </div>
                <h2 className="main-title fw-500 tx-dark">Contacter nous</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_23.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section 
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2
                className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40"
                data-aos="fade-up"
              >
                Nous sommes là! n'hesiter pas à nous contacter!
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
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
              <Footer/>
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
    </>
  );
};

export default Contact;
