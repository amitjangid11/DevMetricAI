// MainHome.jsx
import React from "react";
import MainHeroSection from "../component/MainHeroSection";
import CommonNavbar from "../component/CommonNavbar";
import DualAudiences from "../component/DualAudiences";
import MainHomeFeature from "../component/MainHomeFeature";
import Testinomial from "../component/Testinomial";
import Footer from "../component/Footer";

function MainHome() {
  return (
    <div className="h-auto text-white ">
     
      <header className="sticky top-0 bg-[#010301]">
        <CommonNavbar />
      </header>
      <main>
        <MainHeroSection />
        <DualAudiences />
        <MainHomeFeature />
        <Testinomial />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainHome;
