import React, { FC } from "react";
import globeFile from "../../assets/images/home/videos/globe-comp.mp4";
import ClientSlider from "../../components/ClientSlider";
import { Link } from "react-router-dom";
import CompanyStandards from "../../sections/CompanyStandards";
import TribeSection from "../../sections/TribeSection";
import { kontentVariables, PATHS } from "../../utils";
import SuccessStoriesSection from "../../sections/SuccessStoriesSection";
import useContentTypes from "../../services/useContentTypes";
import ArrowRightBtn from "../../assets/images/general/right_arrow_btn.png";

interface Props {
  data: any;
}

const Home: FC<Props> = ({
  data  
}) => {
  const { contentItems } = useContentTypes(kontentVariables.servicesContentType);
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
                          className="btn btn-primary !text-left py-2 group home-btn"
                        >
                          {data?.elements?.say_hello?.value}{" "}
                          <span className="float-end ml-4 ">                           
                            <img src={ArrowRightBtn} alt="" />                            
                          </span>
                          <span className="clear-both"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 hero-part"></div>
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
                  <div className="col-lg-7 map-img d-none d-sm-none d-md-none d-lg-block">
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
                  <div className="col-lg-7 map-img d-lg-none d-sm-block d-md-block">
                    <div className="section-img">
                    <img
                        src={data?.elements?.map_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
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
                        <img src={ArrowRightBtn} alt="" />
                        </span>
                        <span className="clear-both"></span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-8 all-services">
                    <div className="row">
                    {contentItems && contentItems.map((item: any,i: any)=>(
                     (i < 4) ? (
                      <div className="col-lg-6 services-card" key={i}>
                        <Link
                      to={`${PATHS.serviceInfo}?id=${btoa(item.system.codename)}`}
                    >                         
                        <img
                              src={
                                item?.elements?.image?.value[0]
                                  ?.url
                              }
                              className="img-fluid"
                              alt=""
                            /></Link>
                        <h4>
                          {item?.elements?.title?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {item?.elements?.short_description?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        {/* <Link
                      to={`${PATHS.serviceInfo}?id=${btoa(item.system.codename)}`}
                    >
                          <img src={item?.elements?.button_icon?.value[0]?.url} className="figure-img img-fluid rounded" alt="..." />
                        </Link> */}
                      </div>
                    ) : ""))}
                    </div>
                  </div>


                </div>
              </div>
            </section>
            <CompanyStandards />
            {/* <SuccessStories successStories={storiesData} /> */}
            <SuccessStoriesSection limit={3}/>
            <div className="form-group">
          <Link
            to={PATHS.portfolio}
            className="btn btn-primary !text-left py-2 mt-5 group"
          >
            View All Projects
            <span className="float-end ml-4 ">
              
              <img src={ArrowRightBtn} alt="" />
            </span>
            <span className="clear-both"></span>
          </Link>
        </div>
            <TribeSection  />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
