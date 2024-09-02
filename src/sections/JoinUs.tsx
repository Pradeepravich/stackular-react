import React, { FC } from "react";
// import { ArrowDownCircleFill } from "react-bootstrap-icons";
import play from "../assets/images/general/8180-4a2b-a6e4-784e016a00b3.mp4";
import TribeSection from "./TribeSection";
import ArrowDownBtn from "../assets/images/general/down_arrow_btn.png";
import { Link } from "react-router-dom";
import CurrentOpenings from "./CurrentOpenings";

interface Props {
  data: any;
  openings?: any;
  openingsType?: any;
}

const JoinUs: FC<Props> = ({ data, openings, openingsType }) => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetDiv = document.getElementById("scroll-to-projects-section");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="join" className="join-us-sec page-top-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-7 col-md-7 join-us-header">
                    <div className="section-header mt-5">
                      <h1>
                        {data?.elements?.title?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h1>
                      <p>
                        {data?.elements?.description?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <div className="form-group">
                        <Link
                          to={"#scroll-to-projects-section"}
                          onClick={scrollToSection}
                          className="btn btn-primary !text-left !py-2 !pl-4 group"
                        >
                          {data?.elements?.btn_title?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                          <span className="float-end ml-4 ">
                            <img src={ArrowDownBtn} alt="" />
                          </span>
                          <span className="clear-both"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <img
                      src={data?.elements?.joinus_img?.value[0]?.url}
                      className="figure-img img-fluid rounded w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="join_us" className="join-inner-sec mt-5 mt-med-3">
              <div className="container">
                <div className="section-header">
                  <h3>
                    {data?.elements?.treasure_section?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h3>
                </div>
                <div className="row gy-lg-4 gy-md-4">
                  <div className="col-lg-4 col-md-4 mt-lg-5 mt-sd-0 inner-page">
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.work_life_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.work_life?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.recognition_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.recognition?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={
                          data?.elements?.growth_opportunities_img?.value[0]
                            ?.url
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.growth_opportunities?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.indoor_games_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.indoor_games?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 mt-lg-5 inner-page">
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.competitive_pay_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.competitive_pay?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.innovation_labs_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.innovation_labs?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.flexible_leave_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.flexible_leave?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.daily_snacks_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.daily_snacks?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 mt-lg-5 inner-page">
                    <div className="join-card flex items-center">
                      <img
                        src={
                          data?.elements?.continuous_learning_img?.value[0]?.url
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.continuous_learning?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.help_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.help?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={data?.elements?.spot_bonuses_img?.value[0]?.url}
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.spot_bonuses?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                    <div className="join-card flex items-center">
                      <img
                        src={
                          data?.elements?.unlimited_coffee_img?.value[0]?.url
                        }
                        className="img-fluid"
                        alt=""
                      />
                      <span className="ml-1">
                        {data?.elements?.unlimited_coffee?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-lg-5 mt-med-2 gy-lg-4 gy-md-4">
                  <div className="col-lg-6 col-md-6 mt-3 mt-sd-0 mt-med-0">
                    <img
                      src={data?.elements?.image1?.value[0]?.url}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mt-lg-0 mt-med-0">
                    <div className="col-lg-12 col-md-12">
                      <video autoPlay muted loop id="join_us_video">
                        <source src={play} type="video/mp4" />
                      </video>
                    </div>
                    <div className="row mt-lg-3 mt-sd-0 mt-med-0">
                      <div className="col-lg-6 col-md-6">
                        <img
                          src={data?.elements?.image2?.value[0]?.url}
                          className="figure-img img-fluid rounded mt-sd-1 mb-sd-1"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img
                          src={data?.elements?.image3?.value[0]?.url}
                          className="figure-img img-fluid rounded mt-sd-1 mb-sd-1"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div id="scroll-to-projects-section"></div>
            <CurrentOpenings
              data={data}
              openings={openings}
              openingsType={openingsType}
            />
            <TribeSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default JoinUs;
