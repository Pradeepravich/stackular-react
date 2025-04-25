import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../style/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { useCallback, useEffect } from "react";
import IndustryInfo from "../sections/IndustryInfo";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const IndustryInfoPage = () => {
  const navigate = useNavigate();
  const query = useQuery();
  // const [code, setCode] = useState<string>("");
  const validateURLParams = useCallback(
    (str: string) => {
      try {
        return atob(str);
      } catch (err) {
        navigate(PATHS.notFoundPage);
      }
    },
    [navigate]
  );

  const id = query.get("id") as string;
  const decodedStr = validateURLParams(id) as string;
  const slug = decodedStr
    ?.toString()
    ?.toLowerCase()
    ?.trim()
    .replace(/\s+/g, "_");

  const { data, errorCode, loading } = useKontentServiceApi(slug);

  useEffect(() => {
    if (decodedStr && errorCode === 100) {
      navigate(PATHS.notFoundPage);
    }
  }, [decodedStr, errorCode, navigate]);

  return (
    <>
      <Header loading={loading} />
      <IndustryInfo data={data} />
      <Footer />
    </>
  );
};

export default IndustryInfoPage;
