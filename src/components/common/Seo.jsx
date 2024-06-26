import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} || A2 ENERGIZE - WEBSITE}`}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;