import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import ServiceInfo from "../sections/ServiceInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";




const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


const ServiceInfoPage = () => {
  const navigate = useNavigate();
  const validateURLParams = (str: string) => {
    try {
      return  atob(str);
    } catch (err) {
      navigate(PATHS.notFoundPage)
    }
  };

  const query = useQuery();
  const id = query.get('id') as string;
  const decodedStr = validateURLParams(id) as string;   
  const slug = decodedStr?.toString()?.toLowerCase()?.trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '_').replace(/-/g, '') || '';
  const codename = slug;
  const { data } = useKontentServiceApi(codename);
  if(!data){
    navigate(PATHS.noDataFoundPage)
  }
  return (
    <>
      <Header />
      <ServiceInfo data={data} /> 
      <Footer />
    </>
  );
};

export default ServiceInfoPage;
