import React, { FC } from "react";
import CountUp from "react-countup";
import videoTop from '../assets/images/general/6d43-4a9e-93e5-6a8769c08851.mp4';
import { ArrowRightCircleFill } from "react-bootstrap-icons";

interface Props {
  data: any;
  storiesData: any;
}

const Portfolio: FC<Props> = ({data,storiesData}) => {
  
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio-sec hero-padding">
          <video autoPlay muted loop id="myVideo">
            <source
              src={videoTop}
              type="video/mp4"
            />
          </video>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="section-header">
                  <h1>{data?.elements?.creative_things?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}</h1>
                  <p>{data?.elements?.showcasing_innovation?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}</p>
                  <div className="form-group">
                    <a
                        href={"/"}
                        className="btn btn-primary !text-left py-2 group"
                      >
                        {data?.elements?.talk_to_us?.value.replace(
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
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <section id="map" className="map-sec portfolio-info">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-2 portfolio-projects">
                    <h2><CountUp start={0} end={data?.elements?.count_clients?.value} duration={2} suffix="+" /></h2>
                    <p>{data?.elements?.count_clients_title?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}</p>
                  </div>
                  <div className="col-lg-2 portfolio-projects">
                    <h2><CountUp start={0} end={data?.elements?.count_projects?.value} duration={2} suffix="+" /></h2>
                    <p>{data?.elements?.count_projects_title?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}</p>
                  </div>
                  <div className="col-lg-2 portfolio-projects d-none d-md-block"></div>
                  <div className="col-lg-6">
                    <div className="map-content portfolio-content">
                      <p>
                      {data?.elements?.count_portfolio_content?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="projects sm-8">
              <div className="container">
              <div className="section-header">
                  <p>
                    {storiesData?.elements?.our_success_stories?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                  <h2>
                    {storiesData?.elements?.customer_success_is_paramount?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h2>
                </div>
                <div className="row mt-5 g-0">
                <div className="col-lg-6">
                    <img src={storiesData?.elements?.sustainable_delivery_img?.value[0]?.url} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 align-items-center project-card">
                    <h4>
                      {storiesData?.elements?.sustainable_delivery?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {storiesData?.elements?.stackular_helped_a_startup?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <span>
                      {storiesData?.elements?.web_and_mobile_application?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.apis_and_integration?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.cloud_automation?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                  </div>
                </div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-6 d-block d-md-none">
                    <img
                      src={storiesData?.elements?.financial_systems_img?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 align-items-center project-card">
                    <h4>
                      {storiesData?.elements?.financial_systems_automation?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {storiesData?.elements?.when_a_national_health_services?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <span>
                      {storiesData?.elements?.business_apps?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.financial_systems?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.microsoft_power_platform?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                  </div>
                  <div className="col-lg-6 d-none d-md-block">
                  <img src={storiesData?.elements?.financial_systems_img?.value[0]?.url} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-6">
                    <img src={storiesData?.elements?.compliance_mobile_img?.value[0]?.url} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 align-items-center project-card">
                    <h4>
                      {storiesData?.elements?.compliance_mobile_platform?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {storiesData?.elements?.a_national_construction_company?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <span>
                      {storiesData?.elements?.web_and_mobile_application?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.apis_and_integration?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.cloud_automation?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                  </div>
                </div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-6 d-block d-md-none">
                    <img
                      src={storiesData?.elements?.legacy_app_img?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 align-items-center project-card">
                    <h4>
                      {storiesData?.elements?.legacy_app_modernization?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {storiesData?.elements?.when_a_leading_hospitality?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <span>
                      {storiesData?.elements?.web_and_mobile_application?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.apis_and_integration?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                    <span>
                      {storiesData?.elements?.cloud_automation?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </span>
                  </div>
                  <div className="col-lg-6 d-none d-md-block">
                  <img src={storiesData?.elements?.legacy_app_img?.value[0]?.url} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="form-group">
                <a id="goToTop" href={"#top"} onClick={scrollToTop} className="btn btn-primary">
                    {storiesData?.elements?.view_all_projects?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
