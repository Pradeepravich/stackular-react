import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import { useMainContext } from "../hooks/useMainContext";
import PortfolioInfo from "../sections/PortfolioInfo";



const PortfolioInfoPage = () => {
  const { portfolioInfo1, portfolioInfo2, portfolioInfo3, portfolioInfo4, projectUrl } = useMainContext();
  
  const id = projectUrl;
  return (
    <>
      <Header />
      {id === portfolioInfo1?.system?.id && (
        <PortfolioInfo data={portfolioInfo1} />
      )}
      {id === portfolioInfo2?.system?.id && (
        <PortfolioInfo data={portfolioInfo2} />
      )}
      {id === portfolioInfo3?.system?.id && (
        <PortfolioInfo data={portfolioInfo3} />
      )}
      {id === portfolioInfo4?.system?.id && (
        <PortfolioInfo data={portfolioInfo4} />
      )}
      <Footer />
    </>
  );
};

export default PortfolioInfoPage;
