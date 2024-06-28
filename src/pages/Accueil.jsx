import React from "react";
import Seo from "../components/common/Seo";
import Header from "../components/header/Header";
import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";
import Banner from "../components/home/Banner";
import IntroAbout from "../components/home/IntroAbout";
import Service from "../components/home/Service";
import { Link } from "react-router-dom";
import WhyChoose from "../components/home/WhyChoose";
import Block from "../components/home/Block";
import Testimonial from "../components/home/Testimonial";
import ContactForm from "../components/home/ContactForm";
import Blog from "../components/home/Blog";
import Footer from "../components/footer/Footer";

const Accueil = () => {
  return (
    <>
      <Seo pageTitle="Accueil" />
      {/* <!-- 
      =============================================
			Header
			============================================== 	
      --> */}
      <Header />
       {/* <!-- 
      =============================================
			Hero section
			============================================== 	
      --> */}
      <Hero/>
      {/* <!-- 
			=============================================
				Feature Section 
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature/>
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
       {/*
			=====================================================
				Benner & Intro about section
			=====================================================
			*/}
      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner/>
          {/* /.top-banner */}
        </div>
        {/* End .container */}

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout/>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
   {/* 
			=============================================
				Services Section
			============================================== 
			*/}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Découvrez Nos Services.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service/>
            </div>
            {/* /.row */}

            <div className="text-center md-mt-50">
              <Link
                to="/service-details"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Voir tous les Services
              </Link>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
        {/* 
			=============================================
				Feature whychoose & block
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Pourquoi Nous choisir</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    Qu'est ce qui rend A2 Energiz le Meilleur choix?
                  </h2>
                </div>
                <WhyChoose/>
                {/* /. */}
              </div>
            </div>
            {/* End .*/}

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block/>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.*/}
      {/*=====================================================
				Testimonial section
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Témoignages</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial/>
          </div>

          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
     
      {/* =============================================
				Contact Form section
			============================================== 
			*/}
        <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_02.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Copmétence, Expertise chez A2 Energize
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        Nous mettons notre compétence, nos experts à votre service
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm/>
                    </div>
                    {/* /.form-style-two */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Renseigner  <br />
              le formulaire
            </div>
            <img
              src="/images/shape/shape_05.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_06.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
       {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section 
		   ============================================== */}
      <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Gallerie</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Blog/>
            </div>
            {/* /.row */}
            <div className="text-center xs-mt-40">
              <Link
                to="/projets"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Voir Gallerie
              </Link>
            </div>
          </div>
        </div>
      </div>
       {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo/logo_02.png" alt="logo" width={95} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Meilleur Acteur Solaire.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  A2ENERGIEZ.
                </p>
              </div>
              <Footer/>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/footerleft.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/footerright.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    
    </>
  );
};

export default Accueil;
