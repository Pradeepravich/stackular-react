import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import Services from "../sections/Services";
import { IContentItem, IContentItemElements } from "@kontent-ai/delivery-sdk";
// import useKontentServiceApi from "../services/useKontentServiceApi";
import kontentService from "../services/kontentService";
import useContentItemsByCategory from "../services/useContentItemsByCategory";
import useCategories from "../services/useCategories";
import { kontentVariables } from "../utils";
// import useContentTypes from "../services/useContentTypes";

const ServicesPage = () => {
  // const { loading, data } = useKontentServiceApi("services");
  const { categories } = useCategories(kontentVariables.serviceTaxonomies);
  const { contentItemsByCategory, loading } = useContentItemsByCategory(kontentVariables.serviceByCategoryInfoContentType,kontentVariables.serviceCategoryField,kontentVariables.serviceTaxonomies);
  // const { contentTypes, loading } = useContentTypes("service_content_info");
  const [elements, setElements] =
  useState<IContentItem<IContentItemElements> | null>(null);

  useEffect(() => {
    const loadContentElements = async () => {
      try {
        const itemElements = await kontentService(kontentVariables.servicesPage);
        setElements(itemElements);
      } catch (error) {
        console.log("Failed to fetch content item elements.");
      }
    };
    loadContentElements();
  }, []);

  // console.log("contentItemsByCategory", contentItemsByCategory)

  return (
    <>
      <Header loading={loading} />
      <Services
        pageData={elements}
        services={contentItemsByCategory}
        categories={categories}
      />
      <Footer />
    </>
  );
};

export default ServicesPage;
