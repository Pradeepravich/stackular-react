import React from "react";
import Header from "../sections/Header";
import Home from "../sections/Home";
import Footer from "../sections/Footer";
import "../style/style.css";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { kontentVariables } from "../utils";

const HomePage = () => {

  const { data, loading } = useKontentServiceApi(kontentVariables.homePage);

  return (
    <>
      <Header loading={loading} />
      <Home
        data={data}        
      />
      <Footer />
    </>
  );
};

export default HomePage;
