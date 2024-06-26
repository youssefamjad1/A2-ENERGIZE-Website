import React from "react";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import SocialShare from "../components/references/SocialShare";
import {Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import blogsData from "../data/blog";
import RecentPost from "../components/references/RecentPost";
import Footer from "../components/footer/Footer";
import CopyrightFooter from "../components/footer/CopyrightFooter";

const ReferencesPage = () => {
  const [blog, setBlogItem] = useState({});
  let params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setBlogItem(blogsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Refernces" />
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
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                A2 ENERGIZE :
                <a href="#" className="fw-500">
                  Aymane Abu Amer
                </a>
              </p>
              <h2 className="blog-heading-one tx-dark">{blog?.title}</h2>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_21.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.imageSrc && (
                      <img
                        src={blog.imageSrc}
                        alt={blog.title}
                        className="lazy-img image-meta w-100"
                      />
                    )}
                    <p>
                    A2 ENERGIZE, spécialisée dans l'installation de panneaux solaires, a récemment achevé un projet majeur pour la société JLEC, une centrale thermique située à El Jadida, au Maroc. Dans le cadre de cette collaboration, A2 ENERGIZE a mis en place un système solaire innovant qui permet à JLEC de diversifier ses sources d'énergie et de réduire son empreinte carbone. Grâce à l'expertise et au professionnalisme de notre équipe, nous avons pu offrir une solution clé en main, incluant la conception, l'installation et la maintenance des panneaux solaires. Ce projet renforce notre engagement envers les énergies renouvelables et notre volonté de soutenir des entreprises dans leur transition énergétique vers des pratiques plus durables.
                    </p>
                    
                    <h4>
                    Prestation à Youssoufia pour OCP
                    </h4>
                    <p>
                    A2 ENERGIZE a récemment mené à bien une installation solaire significative pour le groupe OCP à Youssoufia, un acteur majeur de l'industrie des phosphates. Ce projet ambitieux a impliqué la mise en place de panneaux solaires de haute efficacité sur les infrastructures d'OCP, permettant ainsi de réduire considérablement leur consommation d'énergie conventionnelle. Grâce à notre approche personnalisée et à notre expertise technique, nous avons pu intégrer de manière fluide le système solaire à leurs opérations existantes, garantissant une production énergétique optimale. Cette collaboration avec OCP démontre notre capacité à gérer des projets complexes et à fournir des solutions énergétiques durables aux entreprises de toutes tailles.
                    </p>
                    <h4>Prestation dans la Région de Larache pour des Fermes</h4>
                    <p>
                    A2 ENERGIZE a récemment réalisé un projet innovant dans la région de Larache, en installant des panneaux solaires sur plusieurs fermes locales. Ce projet vise à fournir une source d'énergie renouvelable et fiable pour les opérations agricoles, réduisant ainsi la dépendance aux sources d'énergie traditionnelles et contribuant à une agriculture plus durable. Grâce à notre expertise, nous avons conçu et installé des systèmes solaires adaptés aux besoins spécifiques de chaque ferme, assurant une efficacité maximale et une réduction significative des coûts énergétiques. Cette initiative illustre notre engagement à soutenir le secteur agricole en lui offrant des solutions énergétiques propres et économiques.
                    </p>
                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                      <SocialShare />
                    </div>
                    {/* /.bottom-widget */}
                  </article>
                  {/* /.blog-details-content */}
                  {/*}
                  <div className="blog-comment-area">
                    <h3 className="blog-inner-title tx-dark pb-15">
                      2 Comments
                    </h3>
                    <SingleComments />
                  </div>
                  {/* /.blog-comment-area */}
                 {/*
                  <div className="blog-comment-form">
                    <h3 className="blog-inner-title tx-dark">
                      Leave A Comment
                    </h3>
                    <p>
                      <Link to="/login" className="text-decoration-underline">
                        Sign
                      </Link>
                      in to post your comment or signup if you dont have any
                      account.
                    </p>
                    <CommentBox />
                  </div>
                  {/* /.blog-comment-form */}
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                 

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Projets Récents</h4>
                    <RecentPost/>
                  </div>
                  {/* /.sidebar-recent-news ltaht banner post component */}

                  
                  {/* /.sidebar-banner-add */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

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
      {/* /.footer-style-nine */}
    </>
  );
};

export default ReferencesPage;
