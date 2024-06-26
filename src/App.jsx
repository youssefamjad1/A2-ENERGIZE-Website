import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import AboutUs from "./pages/about-us";
import ServiceDetails from "./pages/service-details";
import Projets from "./pages/Projets";
import ReferencesPage from "./pages/ReferencePage";
import Contact from "./pages/Contact";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Routes>
        <Route path="/">
          <Route index element={<Accueil/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route
            path="/service-details"
            element={<ServiceDetails/>}
          />
          <Route path="/projets" element={<Projets/>} />
          <Route path="/references/:id" element={<ReferencesPage/>} />
          <Route path="/contact" element={<Contact/>} />

         

        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
