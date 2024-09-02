import React, { FC } from "react";
import CountUp from "react-countup";
import useContentTypes from "../services/useContentTypes";
import { kontentVariables, PATHS } from "../utils";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}

const ServiceInfo: FC<Props> = ({ data }) => {
  const { contentTypes } = useContentTypes(kontentVariables.designServices);

  return (
    <>
      <main id="main">
        <div className="container">
          <section id="join" className="services-info-sec hero-padding">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 services-info-header">
                  <div className="section-header">
                    <h5 className="text-white">
                      {data?.elements?.category?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                      /
                      {data?.elements?.title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}{" "}
                      /
                    </h5>
                    <h1>
                      {data?.elements?.top_title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h1>
                  </div>
                </div>
                <div className="col-lg-6 service-content">
                  <p>
                    {data?.elements?.description?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <img
                  src={data?.elements?.image?.value[0]?.url}
                  className="figure-img img-fluid rounded mt-lg-5"
                  alt="..."
                />
              </div>
            </div>
          </section>

          <section id="design" className="design-sec mt-5">
            <div className="container">
              <div className="row gy-4">
                <div className="section-header">
                  <h3>
                    {data?.elements?.why_choose_services__title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h3>
                </div>
                <div className="col-lg-4 design-list">
                  <div className="why-chose-list">
                    <h4>
                      {data?.elements?.why_choose_services__title1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.why_choose_services__description1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 design-list">
                  <div className="why-chose-list">
                    <h4>
                      {data?.elements?.why_choose_services__title2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.why_choose_services__description2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 design-list">
                  <div className="why-chose-list">
                    <h4>
                      {data?.elements?.why_choose_services__title3?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.why_choose_services__description3?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 design-list">
                  <div className="why-chose-list">
                    <h4>
                      {data?.elements?.why_choose_services__title4?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.why_choose_services__description4?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 design-list">
                  <div className="why-chose-list">
                    <h4>
                      {data?.elements?.why_choose_services__title5?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.why_choose_services__description5?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 design-list">
                  <div className="why-chose-list">
                    <h4>
                      {data?.elements?.why_choose_services__title6?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h4>
                    <p>
                      {data?.elements?.why_choose_services__description6?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="our_list" className="our-list section-padding1">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-3 our-list-info">
                  <h3>
                    <CountUp
                      start={0}
                      end={
                        data?.elements?.services_count__count_projects?.value
                      }
                      duration={2}
                      className="service-info-count !text-[#87FCFE]"
                    />
                  </h3>
                  <p>
                    {data?.elements?.services_count__count_projects_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="col-lg-3 our-list-info">
                  <h3>
                    <CountUp
                      start={0}
                      end={parseInt(
                        data?.elements?.services_count__count_clients?.value
                          ?.replace(/(<([^>]+)>)/gi, "")
                          .toString()
                          .replace(/,/g, "")
                      )}
                      duration={2}
                      className="service-info-count !text-[#87FCFE]"
                    />
                  </h3>
                  <p>
                    {data?.elements?.services_count__count_clients_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="col-lg-3 our-list-info">
                  <h3>
                    <CountUp
                      start={0}
                      end={
                        data?.elements?.services_count__count_delivery?.value
                      }
                      duration={2}
                      suffix="days"
                      className="service-info-count !text-[#87FCFE]"
                    />
                  </h3>
                  <p>
                    {data?.elements?.services_count__count_delivery_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="col-lg-3 our-list-info">
                  <h3>
                    <CountUp
                      start={0}
                      end={data?.elements?.services_count__count_value?.value}
                      duration={2}
                      prefix="+"
                      suffix="%"
                      className="service-info-count !text-[#87FCFE]"
                    />
                  </h3>
                  <p>
                    {data?.elements?.services_count__count_value_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="our_design" className="our-design-sec section-padding1">
            <div className="container">
              <div className="row gy-4">
                <div className="section-header">
                  <h3>
                    {data?.elements?.design_services__title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h3>
                </div>
                {contentTypes &&
                  contentTypes.map((item: any, i: any) => (
                    <div className="col-lg-6 mt-5 our-design-list" key={i}>
                      <div className="design-list-card">
                        <img
                          src={item?.elements?.image?.value[0]?.url}
                          className="figure-img img-fluid rounded"
                          alt="..."
                        />
                        <h4>
                          {item?.elements?.title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <p>
                          {item?.elements?.description?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                        <Link
                          to={`${PATHS.serviceInfo}?id=${btoa(
                            item.system.codename
                          )}`}
                        >
                          {item?.elements?.button_text?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ServiceInfo;
