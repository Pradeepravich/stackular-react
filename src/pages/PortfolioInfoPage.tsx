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
  const decodeEncodeValue = (str: string) => {
    try {
      return  atob(str);
    } catch (err) {
      navigate(PATHS.notFoundPage)
    }
  };
  const query = useQuery();
  const id = query.get('id') as string;
  const decodedStr = decodeEncodeValue(id) as string;    
  const slug =   decodedStr?.toString()?.toLowerCase()?.trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '_').replace(/-/g, '') ;
  const codename = slug;
  const { data} = useKontentServiceApi(codename);

  return (
    <>
      <Header />
      <PortfolioInfo data={data} />
      <Footer />
    </>
  );
};

export default PortfolioInfoPage;
