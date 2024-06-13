import React, { FC } from "react";
import globeFile from "../assets/images/home/videos/globe.mp4";
import ClientSlider from "../components/ClientSlider";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import SuccessStories from "./SuccessStories";
import CompanyStandards from "./CompanyStandards";
import TribeSection from "./TribeSection";
import { PATHS } from "../utils";
import { useMainContext } from "../hooks/useMainContext";

interface Props {
  data: any;
  storiesData: any;
  tribeData: any;
  companyStandardData: any;
}

const Home: FC<Props> = ({
  data,
  storiesData,
  tribeData,
  companyStandardData,
}) => {
  console.log("data", data)
  const { setProjectUrl } = useMainContext();
  const navigate = useNavigate()
  const redirectToServiceInfo = (slug: any)=>{
    setProjectUrl(slug);
    navigate('/service-info');
  }
  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="hero" className="hero-sec hero-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8 hero-header">
                    <div className="section-header">
                      <h1>
                        {data?.elements?.crafting_a_better_world?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h1>
                      <p>
                        {data?.elements?.all_your_technology?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <div className="form-group ">
                        <Link
                          to={data?.elements?.say_hello_url?.value}
                          className="btn btn-primary !text-left py-2 group"
                        >
                          {data?.elements?.say_hello?.value}{" "}
                          <span className="float-end ml-4 ">
                            <ArrowRightCircleFill
                              color="#87FCFE"
                              size="1.7em"
                              className="arrow-right-circle-fill"
                            />
                          </span>
                          <span className="clear-both"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-9 d-flex align-items-end globel-main">
                    <div className="globel-inner ps-0 ps-lg-5">
                      <div className="position-relative">
                        <video autoPlay loop muted playsInline={false}>
                          <source src={globeFile} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="map" className="map-sec">
              <div className="container">
                <div className="row mt-5">
                  <div className="col-lg-7 map-img">
                    <div className="section-img">
                      <img
                        src={data?.elements?.map_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="map-content content-width">
                      <h3>
                        {data?.elements?.zero_sales?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h3>
                      <p>
                        {data?.elements?.we_are_an_industry_leading?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-end">
                    <div className="container">
                      <ClientSlider
                        images={data?.elements?.client_slider_images?.value}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="services smt-8">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-4 service-header">
                    <div className="section-header">
                      <h2>
                        {data?.elements?.top_notch?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h2>
                      <p>
                        {data?.elements?.premier_services_tailored?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <Link
                        to={PATHS.services}
                        className="btn btn-primary !text-left py-2 group"
                      >
                        {data?.elements?.view_all_services?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                        <span className="float-end ml-4 ">
                          <ArrowRightCircleFill
                            color="#87FCFE"
                            size="1.7em"
                            className="arrow-right-circle-fill"
                          />
                        </span>
                        <span className="clear-both"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 all-services">
                    <div className="row">
                      <div className="col-lg-6 services-card">
                          
                     <img
                          src={
                            data?.elements?.product_development_img?.value[0]
                              ?.url
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <h4>
                          {data?.elements?.product_development?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.comprehensive_development?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <button  onClick={()=>redirectToServiceInfo(data?.elements?.product_development_slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ))}>
                          {data?.elements?.product_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </button>
                      </div>
                      <div className="col-lg-6 services-card">
                        <img
                          src={
                            data?.elements?.digital_experience_img?.value[0]
                              ?.url
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <h4>
                          {data?.elements?.digital_experience?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.elevating_digital?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <button  onClick={()=>redirectToServiceInfo(data?.elements?.digital_experience_slug?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            ))}>
                          {data?.elements?.digital_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </button>
                      </div>
                      <div className="col-lg-6 services-card">
                        <img
                          src={
                            data?.elements?.data_intelligence_img?.value[0]?.url
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <h4>
                          {data?.elements?.data_intelligence?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.data_driven_excellence?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <Link to={PATHS.home}>
                          {data?.elements?.data_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </Link>
                      </div>
                      <div className="col-lg-6 services-card">
                        <img
                          src={
                            data?.elements?.enterprise_systems_img?.value[0]
                              ?.url
                          }
                          className="img-fluid"
                          alt=""
                        />
                        <h4>
                          {data?.elements?.enterprise_systems?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.empowering_enterprises?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <Link to={PATHS.home}>
                          {data?.elements?.enterprise_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <CompanyStandards companyStandardData={companyStandardData} />

            <SuccessStories successStories={storiesData} />

            <TribeSection tribeData={tribeData} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
