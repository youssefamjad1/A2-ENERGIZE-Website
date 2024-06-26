import React from "react";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import CopyrightFooter from "../components/footer/CopyrightFooter";
import ProgressBar from "../components/services/ProgressBar";
import Faq2 from "../components/about/Faq2";
import Social from "../components/services/Social"

const ServiceDetails = () => {
  return (
    <>
      <Seo pageTitle="Service Details" />
      <DefaulHeader />

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Services
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  nous offrons des Services de Qualité.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_16.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_17.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>

      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">Installation des panneaux solaires</h2>
                <p className="text-lg tx-dark">
                  Chez A2 Energize, nous sommes spécialisés dans l'installation de panneaux solaires. Notre mission est de fournir des solutions énergétiques durables et efficaces pour répondre aux besoins énergétiques de nos clients. Nous offrons une gamme complète de services, allant de la conception à l'installation et à la maintenance de systèmes solaires.
                </p>
                <img
                  src="/images/media/img_06.jpg"
                  alt="media"
                  className="main-img-meta"
                />
                <p>
                  Chez A2 ENERGIZE, nous offrons un service complet et personnalisé d'installation de panneaux solaires, conçu pour répondre aux besoins énergétiques spécifiques de chaque client. Notre processus commence par une consultation approfondie et une analyse de site détaillée pour déterminer la faisabilité et optimiser l'emplacement des panneaux solaires.
                  Nous utilisons des technologies de pointe pour concevoir un système solaire sur mesure, maximisant ainsi l'efficacité énergétique et le rendement. Notre équipe d'experts se charge de l'installation avec une précision et une compétence inégalées, garantissant la conformité aux normes de sécurité les plus strictes et une intégration harmonieuse avec l'infrastructure existante.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Nos objectifs</h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>Maximiser l'Efficacité Énergétique.</li>
                        <li>Promouvoir la Durabilité.</li>
                        <li>Garantir la Satisfaction Client.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Notre Défi</h4>
                      <p className="pe-xxl-5">
                        Chez A2 ENERGIZE, notre principal défi est de repousser constamment les limites de l'innovation dans le domaine de l'énergie solaire. Nous nous efforçons de surmonter les obstacles techniques et environnementaux pour fournir des solutions énergétiques durables et efficaces. Que ce soit en intégrant les dernières technologies, en optimisant chaque installation pour des performances maximales, ou en garantissant une maintenance proactive, nous sommes déterminés à transformer chaque défi en opportunité pour offrir une énergie propre et renouvelable à nos clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar/>
                  </div>
                </div>
                <p>
                  Une fois l'installation terminée, nous effectuons des tests rigoureux pour assurer le bon fonctionnement du système et offrir une formation complète aux utilisateurs pour une utilisation optimale. De plus, nous proposons des services de maintenance continue pour garantir la longévité et la performance de votre installation solaire.

                  En choisissant A2 ENERGIZE, vous investissez dans une solution énergétique durable, fiable et rentable, tout en contribuant à la réduction de votre empreinte carbone. Notre engagement envers la qualité et la satisfaction client fait de nous le partenaire idéal pour votre transition vers l'énergie solaire.
                </p>
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Savoir plus sur nous.
                </h3>
                <Faq2/>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">Services</h4>
                  <ul className="style-none">
                    <li className="current-page">
                      <a href="#">Installations des Panneaux solaires</a>
                    </li>
                    <li>
                      <a href="#">Accompagnement</a>
                    </li>
                    <li>
                      <a href="#">Conseil</a>
                    </li>
                    <li>
                      <a href="#">Assurance Qualité</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_18.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                    A2 Energize est le premier acteur solaire au niveau de Safi
                  </p>
                  <div className="name">- Aiman Abu Ameur</div>
                </div>
                <h4 className="tx-dark mb-15">Partager.</h4>
                 <Social/>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                        Vous avez des Projets?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        N'attendez pas!
                      </h2>
                    </div>
                  </div>

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link to="/contact" className="btn-twentyOne fw-500 tran3s">
                    Contactez-nous!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

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
          src="/images/shape/shape_18.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
    </>
  );
};

export default ServiceDetails;
