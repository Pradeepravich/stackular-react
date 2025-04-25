import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import { IContentItem, IContentItemElements } from "@kontent-ai/delivery-sdk";
// import useKontentServiceApi from "../services/useKontentServiceApi";
import kontentService from "../services/kontentService";
import useContentItemsByCategory from "../services/useContentItemsByCategory";
import useCategories from "../services/useCategories";
import { kontentVariables } from "../utils";
import Industries from "../sections/Industries";
// import useContentTypes from "../services/useContentTypes";

const IndustriesPage = () => {
  // const { loading, data } = useKontentServiceApi("services");
  const { categories } = useCategories(kontentVariables.industryTaxonomies);
  const { contentItemsByCategory, loading } = useContentItemsByCategory(kontentVariables.industryByCategoryInfoContentType,kontentVariables.industryCategoryField,kontentVariables.industryTaxonomies);
  // const { contentTypes, loading } = useContentTypes("service_content_info");
  const [elements, setElements] =
  useState<IContentItem<IContentItemElements> | null>(null);

  useEffect(() => {
    const loadContentElements = async () => {
      try {
        const itemElements = await kontentService(kontentVariables.industriesPage);
        setElements(itemElements);
      } catch (error) {
        console.log("Failed to fetch content item elements.");
      }
    };
    loadContentElements();
  }, []);

  // console.log("Industries contentItemsByCategory", contentItemsByCategory)

  return (
    <>
      <Header loading={loading} />
      <Industries
        pageData={elements}
        industries={contentItemsByCategory}
        categories={categories}
      />
      <Footer />
    </>
  );
};

export default IndustriesPage;
