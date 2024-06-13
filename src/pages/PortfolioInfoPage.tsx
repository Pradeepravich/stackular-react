import React, { useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import { useMainContext } from "../hooks/useMainContext";
import PortfolioInfo from "../sections/PortfolioInfo";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../utils";



const PortfolioInfoPage = () => {
  
  const { portfolioInfo1, portfolioInfo2, portfolioInfo3, portfolioInfo4, projectUrl } = useMainContext();

  const id = projectUrl;
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(isEmpty(projectUrl))
      navigate(PATHS.home)
  },[navigate, projectUrl])
  // console.log("id", id);
  // console.log("portfolioInfo1", portfolioInfo1?.elements?.slug?.value);
  // console.log("portfolioInfo2", portfolioInfo2?.elements?.slug?.value);
  // console.log("portfolioInfo3", portfolioInfo3?.elements?.slug?.value);
  // console.log("portfolioInfo4", portfolioInfo4?.elements?.slug?.value);
  // console.log("type",typeof id);
  return (
    <>
      <Header />
      {id === portfolioInfo1?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ) && (
        <PortfolioInfo data={portfolioInfo1} />
      )}
      {id === portfolioInfo2?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ) && (
        <PortfolioInfo data={portfolioInfo2} />
      )}
      {id === portfolioInfo3?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ) && (
        <PortfolioInfo data={portfolioInfo3} />
      )}
      {id === portfolioInfo4?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ) && (
        <PortfolioInfo data={portfolioInfo4} />
      )}
      <Footer />
    </>
  );
};

export default PortfolioInfoPage;
