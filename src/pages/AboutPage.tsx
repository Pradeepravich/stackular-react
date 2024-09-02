import React from "react";
import Header from "../sections/Header";
import About from "../sections/About";
import Footer from "../sections/Footer";
import "../style/style.css";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { kontentVariables } from "../utils";

const AboutPage = () => {
 
  const { data,loading } = useKontentServiceApi(kontentVariables.aboutusPage);

  return (
    <>
      <Header loading={loading}/>
      <About data={data} />
      <Footer />
    </>
  );
};

export default AboutPage;
