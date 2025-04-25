import React, { FC } from "react";
import CountUp from "react-countup";
import videoTop from "../assets/images/general/portfolio.mp4";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";
import SuccessStoriesSection from "./SuccessStoriesSection";
import ArrowRightBtn from "../assets/images/general/right_arrow_btn.png";

interface Props {
  data: any;
}

const Portfolio: FC<Props> = ({ data }) => {
  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio-sec hero-padding">
          <video autoPlay muted loop id="myVideo" playsInline webkit-playsInline>
            <source src={videoTop} type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="section-header">
                  <h1>
                    {data?.elements?.creative_things?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h1>
                  <p>
                    {data?.elements?.showcasing_innovation?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                  <div className="form-group">
                    <Link
                      to={PATHS.contactUs}
                      className="btn btn-primary !text-left py-2 group"
                    >
                      {data?.elements?.talk_to_us?.value.replace(
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
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>
        <section className="portfolio-count-sec">
          <div className="container">
            <div className="">
              <section id="map" className="map-sec portfolio-info">
                <div className="container">
                  <div className="row gy-4">
                    <div className="col-lg-2 col-md-2 portfolio-projects">
                      <h2>
                        <CountUp
                          start={0}
                          end={data?.elements?.count_clients?.value}
                          duration={2}
                          suffix="+"
                        />
                      </h2>
                      <p>
                        {data?.elements?.count_clients_title?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-2 portfolio-projects">
                      <h2>
                        <CountUp
                          start={0}
                          end={data?.elements?.count_projects?.value}
                          duration={2}
                          suffix="+"
                        />
                      </h2>
                      <p>
                        {data?.elements?.count_projects_title?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                    {/* <div className="col-lg-1 portfolio-projects d-none d-md-block"></div> */}
                    <div className="col-lg-8 col-md-8">
                      <div className="map-content portfolio-content">
                        <p>
                          {data?.elements?.count_portfolio_content?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mb-32 mb-sd-1 mb-med-1 mb-ld-2">                
                <SuccessStoriesSection />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
