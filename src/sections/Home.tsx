import React, { FC } from "react";
import globeFile from "../assets/images/home/videos/globe.mp4";
import ClientSlider from "../components/ClientSlider";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

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
  const scrollToTop = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                        <a
                          href={"/"}
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
                        </a>
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
                      <ClientSlider />
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
                      <a
                        href={"#top"}
                        onClick={scrollToTop}
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
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 all-services">
                    <div className="row">
                      <div className="col-lg-6 services-card">
                        <img
                          src={data?.elements?.product_development_img?.value[0]?.url}
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
                        <a href={"/"}>
                          {data?.elements?.product_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </a>
                      </div>
                      <div className="col-lg-6 services-card">
                        <img
                          src={data?.elements?.data_intelligence_img?.value[0]?.url}
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
                        <a href={"/"}>
                          {data?.elements?.data_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </a>
                      </div>
                      <div className="col-lg-6 services-card">
                        <img
                          src={data?.elements?.enterprise_systems_img?.value[0]?.url}
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
                        <a href={"/"}>
                          {data?.elements?.enterprise_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </a>
                      </div>
                      <div className="col-lg-6 services-card">
                        <img
                          src={data?.elements?.digital_experience_img?.value[0]?.url}
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
                        <a href={"/"}>
                          {data?.elements?.digital_learn_more?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="make_us" className="make-us-sec smt-8">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-4 make-us-haed">
                    <div className="section-header">
                      <h3>
                        {companyStandardData?.elements?.what_makes_us_different?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-2 make-us-haed"></div>
                  <div className="col-lg-6 mt-lg-5">
                    <div className="make-us-content">
                      <p>
                        {companyStandardData?.elements?.we_succeed?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 gy-4">
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={companyStandardData?.elements?.block_img1?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.unique_culture?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.fostering_innovation?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={companyStandardData?.elements?.block_img2?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.technology_focus?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.driving_progress?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={companyStandardData?.elements?.block_img3?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.product_workflow?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.a_structured_approach?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={companyStandardData?.elements?.block_img4?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.experienced_team?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.seasoned_experts?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={companyStandardData?.elements?.block_img5?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.high_quality_services?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.elevating_standards?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                  <div className="col-lg-4 make-us-card">
                    <img
                      src={companyStandardData?.elements?.block_img6?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                    <h4>
                      {companyStandardData?.elements?.prioritize_usability?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {companyStandardData?.elements?.putting_user?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="projects smt-8">
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
                    <img
                      src={
                        storiesData?.elements?.sustainable_delivery_img
                          ?.value[0]?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
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
                  <div className="col-lg-6">
                    <img
                      src={
                        storiesData?.elements?.financial_systems_img?.value[0]
                          ?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mt-5 g-0">
                  <div className="col-lg-6">
                    <img
                      src={
                        storiesData?.elements?.compliance_mobile_img?.value[0]
                          ?.url
                      }
                      className="img-fluid"
                      alt=""
                    />
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
                  <div className="col-lg-6">
                    <img
                      src={storiesData?.elements?.legacy_app_img?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <a
                    id="goToTop"
                    href={"#top"}
                    onClick={scrollToTop}
                    className="btn btn-primary !text-left py-2 group"
                  >
                    {storiesData?.elements?.view_all_projects?.value.replace(
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
            </section>

            <section id="join_us" className="join-us-sec mt-5">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 join-us-haed">
                    <div className="section-header">
                      <h2>
                        {tribeData?.elements?.join_our_tribe?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h2>
                      <div className="mt-5"></div>
                      <div className="join-card flex items-center">
                        <img
                          src={tribeData?.elements?.img1?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                        <span className="ml-1">
                          {tribeData?.elements?.work_life?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </span>
                      </div>
                      <div className="join-card flex items-center">
                        <img
                          src={tribeData?.elements?.img2?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                        <span className="ml-1">
                          {tribeData?.elements?.continuous_learning?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </span>
                      </div>
                      <div className="join-card flex items-center">
                        <img
                          src={tribeData?.elements?.img3?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                        <span className="ml-1">
                          {tribeData?.elements?.competitive_compensation?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </span>
                      </div>
                      <div className="join-card flex items-center">
                        <img
                          src={tribeData?.elements?.img4?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                        <span className="ml-1">
                          {tribeData?.elements?.recognition?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </span>
                      </div>
                      <div className="join-card flex items-center">
                        <img
                          src={tribeData?.elements?.img5?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                        <span className="ml-1">
                          {tribeData?.elements?.innovation_labs?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </span>
                      </div>
                      <a
                        href={"/"}
                        className="btn btn-primary !text-left py-2 group"
                      >
                        {tribeData?.elements?.join_learn_more?.value.replace(
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
                  <div className="col-lg-6 mt-5 join-us-image">
                    <img
                      src={tribeData?.elements?.tribe_img?.value[0]?.url}
                      className="img-fluid"
                      alt="Animation"
                    />
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

export default Home;
