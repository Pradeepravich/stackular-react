import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import ServiceInfo from "../sections/ServiceInfo";
import { useMainContext } from "../hooks/useMainContext";







const ServiceInfoPage = () => {
  const { serviceInfo1,serviceInfo2, projectUrl } = useMainContext();

  const id = projectUrl;
  
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   if(isEmpty(projectUrl))
  //     navigate(PATHS.home)
  // },[navigate, projectUrl])
  
  return (
    <>
      <Header />
      {id === serviceInfo1?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ) && (
              <ServiceInfo data={serviceInfo1} />
      )}
      {id === serviceInfo2?.elements?.slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ) && (
              <ServiceInfo data={serviceInfo2} />
      )}     
      <Footer />
    </>
  );
};

export default ServiceInfoPage;
