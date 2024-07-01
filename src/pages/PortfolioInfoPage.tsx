import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import PortfolioInfo from "../sections/PortfolioInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const PortfolioInfoPage = () => {
  
  const navigate = useNavigate();

  const query = useQuery();
  const id: any = query.get('id');

  const decodedStr = atob(id);
  const slug = decodedStr.toString().toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '_').replace(/-/g, '') || '';

  const codename = slug;

  const { data} = useKontentServiceApi(codename);

  // Validate the id parameter (example: it should be a number)
  if (!id) {
    navigate(PATHS.notFoundPage)// Redirect to 404 page
    return null;
  }

  return (
    <>
      <Header />
      <PortfolioInfo data={data} />
      <Footer />
    </>
  );
};

export default PortfolioInfoPage;
