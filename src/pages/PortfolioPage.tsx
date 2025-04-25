import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import Portfolio from "../sections/Portfolio";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { kontentVariables } from "../utils";

const PortfolioPage = () => {
  const { data, loading } = useKontentServiceApi(kontentVariables.portfolioPage);
  return (
    <>
      <Header loading={loading}/>
      <Portfolio data={data} />
      <Footer />
    </>
  );
};

export default PortfolioPage;
