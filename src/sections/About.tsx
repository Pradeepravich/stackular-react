import React, { FC, useCallback } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}

const About: FC<Props> = ({ data }) => {
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const container = event.currentTarget;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const mouseX = event.clientX - container.getBoundingClientRect().left;
      const mouseY = event.clientY - container.getBoundingClientRect().top;

      let gradientDirection = "";
      if (mouseX < centerX && mouseY < centerY) {
        gradientDirection = "top left";
      } else if (mouseX < centerX && mouseY > centerY) {
        gradientDirection = "bottom left";
      } else if (mouseX > centerX && mouseY < centerY) {
        gradientDirection = "top right";
      } else {
        gradientDirection = "bottom right";
      }

      const gradient = `linear-gradient(to ${gradientDirection}, #293240, rgba(224, 233, 224, 0.3))`;
      (
        container.querySelector(".commitment_card") as HTMLDivElement
      ).style.background = gradient;
    },
    []
  );

  const handleMouseOut = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const container = event.currentTarget;
      (
        container.querySelector(".commitment_card") as HTMLDivElement
      ).style.background = "";
    },
    []
  );

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="">
            <section id="about" className="about-sec page-top-padding">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-10">
                    <div className="section-header mx-auto mb-[24px] mb-sd-0">
                      <h1>
                        {data?.elements?.we_take_pride?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h1>
                      <p className="!mb-0 mx-auto">
                        {data?.elements?.we_specialize_in_custom?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
                <div className=" mt-lg-5 mt-med-0">
                  <div className="row gy-4">
                    <div className="col-5">
                      <img
                        src={data?.elements?.top_left_img?.value[0]?.url}
                        className="img-fluid top_left_img"
                        alt=""
                      />
                    </div>
                    <div className="col-7">
                      <img
                        src={data?.elements?.top_right_img?.value[0]?.url}
                        className="img-fluid top_right_img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>                
              </div>
            </section>

            <section id="projects" className="projects aboutus-first-content sm-8 mt-sd-2 mb-sd-0 my-ld-4">
              <div className="container">
                <div className="row g-0">
                  <div className="col-lg-6 project-issues-info">
                    <h2 className="small">
                      {data?.elements?.our_mission?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h2>
                  </div>
                  <div className="col-lg-6 job-cards">
                    <div className="project-info">
                      <p>
                        {data?.elements?.our_mission_data?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="projects aboutus-second-content smb-8 mb-sd-1 mb-ld-4">
              <div className="container">
                <div className="row g-0">
                  <div className="col-lg-6 project-issues-info">
                    <h2 className="small">
                      {data?.elements?.our_vision?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h2>
                  </div>
                  <div className="col-lg-6 job-cards">
                    <div className="project-info">
                      <p>
                        {data?.elements?.our_vision_data?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="our_list" className="our-list section-padding my-sd-1">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-3 col-md-6 our-list-info">
                    <h2 className="small">
                      <CountUp
                        start={0}
                        end={data?.elements?.locations?.value}
                        duration={2}
                        prefix="0"
                      />
                    </h2>
                    <p>
                      {data?.elements?.locations_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 our-list-info">
                    <h2 className="small">
                      <CountUp
                        start={0}
                        end={data?.elements?.clients?.value}
                        duration={3}
                        suffix="+"
                      />
                    </h2>
                    <p>
                      {data?.elements?.clients_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 our-list-info">
                    <h2 className="small">
                      <CountUp
                        start={0}
                        end={data?.elements?.consultants?.value}
                        duration={2}
                        suffix="+"
                      />
                    </h2>
                    <p>
                      {data?.elements?.consultants_title?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 our-list-info text-center">
                    <img
                      src={data?.elements?.happiness_index_img?.value[0]?.url}
                      className="smile_gif img-fluid mx-auto"
                      alt=""
                    />
                    <p>
                      {data?.elements?.happiness_index?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="founding" className="founding-team sm-8 mb-sd-1 my-ld-4">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-4 founding-header">
                    <div className="section-header">
                      <h2 className="small">
                        {data?.elements?.founding_team?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h2>
                      <p>
                        {data?.elements?.we_both_bring?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 all-founders">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 founder-card mt-5 mt-med-0 mt-sd-0">
                        <div className="founders_img">
                          <img
                            src={
                              data?.elements?.founder_background_img?.value[0]
                                ?.url
                            }
                            className="img-fluid founder_bg_img mx-auto"
                            alt=""
                          />
                          <img
                            src={
                              data?.elements?.team_founder_img2?.value[0]?.url
                            }
                            className="img-fluid founder_img mx-auto"
                            alt=""
                          />
                        </div>
                        <h4 className="mt-2">
                          {data?.elements?.team_founder2?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.team_founder2_role?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <Link
                          to={data?.elements?.founder2_linkedin_url?.value.trim()}
                          target="_blank"
                        >
                          <img
                            src={data?.elements?.linkedin_img?.value[0]?.url}
                            className="img-fluid mx-auto"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="col-lg-6 col-md-6 founder-card mt-5 mt-med-0 mt-sd-0">
                        <div className="founders_img">
                          <img
                            src={
                              data?.elements?.founder_background_img?.value[0]
                                ?.url
                            }
                            className="img-fluid founder_bg_img mx-auto"
                            alt=""
                          />
                          <img
                            src={
                              data?.elements?.team_founder_img1?.value[0]?.url
                            }
                            className="img-fluid founder_img mx-auto"
                            alt=""
                          />
                        </div>
                        <h4 className="mt-2">
                          {data?.elements?.team_founder1?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {data?.elements?.team_founder1_role?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <Link
                          to={data?.elements?.founder1_linkedin_url?.value.trim()}
                          target="_blank"
                        >
                          <img
                            src={data?.elements?.linkedin_img?.value[0]?.url}
                            className="img-fluid mx-auto"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="make_us" className="make-us-sec commitment-sec">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-12 commitment-head">
                    <div className="section-header">
                      <h6 className="text-white">
                        {data?.elements?.pioneering?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h6>
                      <h3 className="mt-lg-3">
                        {data?.elements?.commitment?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 mt-med-1 mt-sd-0 gy-4">
                  <div
                    className="col-lg-6  commitment-cards"
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.agile_process?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.nimble_process?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6  commitment-cards"
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.global_delivery?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.global_delivery_with?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6  commitment-cards"
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.on_time?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.every_engineer?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6  commitment-cards"
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="commitment_card commitment-card">
                      <h4>
                        {data?.elements?.under_promise?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h4>
                      <p>
                        {data?.elements?.manage_expectations?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export default About;
