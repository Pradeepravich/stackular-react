import React, { FC } from "react";
// import globeFile from "../assets/images/home/videos/globe-comp.mp4";
import globeFile from "../assets/images/home/globe-20mb.gif";
// import ClientSlider from "../components/ClientSlider";
import { Link, useNavigate } from "react-router-dom";
import CompanyStandards from "./CompanyStandards";
import TribeSection from "./TribeSection";
import { kontentVariables, PATHS } from "../utils";
import SuccessStoriesSection from "./SuccessStoriesSection";
import useContentTypes from "../services/useContentTypes";
import ArrowRightBtn from "../assets/images/general/right_arrow_btn.png";
import MultiClientSlider from "../components/MultiClientSlider";

interface Props {
  data: any;
}

const Home: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  // const { contentItems } = useContentTypes(kontentVariables.servicesContentType);
  const { contentItems } = useContentTypes(
    kontentVariables.serviceCategoriesContentType
  );
  const serviceCategories = contentItems ? contentItems?.slice(0, 4) : [];

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <section id="hero" className="hero-sec hero-padding home-top">
                <div className="container">
                  <div className="row gy-4">
                    <div className="col-lg-8 hero-header">
                      <div className="top-section">
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
                    </div>
                  </div>
                  <div className="global-section ">
                    <img
                      src={globeFile}
                      className="img-fluid img-globe"
                      alt=""
                    />
                  </div>
                </div>
              </section>

              <section id="map" className="map-sec">
                <div className="container">
                  <div className="row mt-5 mt-sd-1 mt-med-1">
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
                    <div className="col-lg-12">
                      <div className="slider-images-container">
                        {/* <ClientSlider
                        images={data?.elements?.client_slider_images?.value}
                      /> */}
                        <div className="client-slider mt-5 mb-4">
                          <MultiClientSlider
                            images={data?.elements?.client_slider_images?.value}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="services" className="services smt-8 mt-sd-2 mt-med-2 mt-ld-4">
                <div className="container">
                  <div className="row gy-4">
                    <div className="col-lg-4 ">
                      <div className="service-header">
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
                            className="btn btn-primary !text-left py-2 group top-notch-btn"
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
                    </div>
                    <div className="col-lg-8 mt-med-0">
                      <div className="all-services">
                        <div className="row">
                          {serviceCategories &&
                            serviceCategories.map((item: any, i: any) => (
                              <div className="col-lg-6 services-card" key={i}>
                                <div
                                  onClick={() =>
                                    navigate(PATHS.services, {
                                      state:
                                        item?.elements?.title?.value[0]?.name.replace(
                                          /(<([^>]+)>)/gi,
                                          ""
                                        ),
                                    })
                                  }
                                  className="cursor-pointer"
                                >
                                  <img
                                    src={item?.elements?.image?.value[0]?.url}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h4>
                                    {item?.elements?.title?.value[0]?.name.replace(
                                      /(<([^>]+)>)/gi,
                                      ""
                                    )}
                                  </h4>
                                  <p>
                                    {item?.elements?.description?.value.replace(
                                      /(<([^>]+)>)/gi,
                                      ""
                                    )}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-sd-2 mt-med-2">
                <CompanyStandards />
              </div>
              <div className="mt-sd-2 mt-med-2">
                <SuccessStoriesSection limit={3} />
              </div>
              <div className="form-group">
                <Link
                  to={PATHS.portfolio}
                  className="btn btn-primary !text-left py-2 mt-5 group view-projects-btn"
                >
                  View All Projects
                  <span className="float-end ml-4 ">
                    <img src={ArrowRightBtn} alt="" />
                  </span>
                  <span className="clear-both"></span>
                </Link>
              </div>
              <div className="mt-med-2">
                <TribeSection />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
