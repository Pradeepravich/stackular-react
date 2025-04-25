import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import Contact from "../sections/Contact";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { kontentVariables } from "../utils";

const ContactPage = () => {

  const { data, loading } = useKontentServiceApi(kontentVariables.contactUsPage);

  return (
    <>
      <Header loading={loading}/>
      <Contact data={data} />
      <Footer />
    </>
  );
};

export default ContactPage;
