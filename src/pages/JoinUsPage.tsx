import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import JoinUs from "../sections/JoinUs";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { kontentVariables } from "../utils";
import useContentTypes from "../services/useContentTypes";
import ContentItemsByType from "../services/ContentItemsByType";

const JoinUsPage = () => {

  const { data, loading } = useKontentServiceApi(kontentVariables.joinusPage);

  const { contentItems } = useContentTypes(kontentVariables.jobOpeningsContentType);

  const [openingsType, setOpeningsType] = useState<any>([]);
  useEffect(() => {
    const loadOpeningsType = async () => {
      try {
        const itemElements = await ContentItemsByType(kontentVariables.jobRoleContentType);
        setOpeningsType(itemElements);
      } catch (error) {
        console.log("Failed to fetch content item elements.");
      }
    };
    loadOpeningsType();
  }, []);
  
  return (
    <>
      <Header loading={loading}/>
      <JoinUs data={data} openings={contentItems} openingsType={openingsType}/>
      <Footer />
    </>
  );
};

export default JoinUsPage;
