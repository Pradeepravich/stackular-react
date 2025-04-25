import React, { FC } from "react";
import CountUp from "react-countup";
import { kontentVariables, PATHS } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import useContentItemsByCategory from "../services/useContentItemsByCategory";

interface Props {
  data: any;
}

const ServiceInfo: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { contentItemsByCategory } = useContentItemsByCategory(
    kontentVariables.serviceByCategoryInfoContentType,
    kontentVariables.serviceCategoryField,
    kontentVariables.serviceTaxonomies
  );

  const otherServices = contentItemsByCategory?.filter(
    (item: any) =>
      item?.system?.codename !== data?.system?.codename &&
      item?.elements?.category.value === data?.elements?.category.value
  );

  const handleScrollTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main id="main">
        <div className="container">
          <section id="join" className="services-info-sec info-top-padding">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 services-info-header">
                  <div className="section-header">
                    <h5 className="text-white">
                      <span>
                        {data?.elements?.main_category?.value[0]?.name ? (
                          <>
                            <span
                              onClick={() => navigate(PATHS.services)}
                              className="breadcrumb-service text-white mr-2 cursor-pointer"
                            >
                              {data?.elements?.main_category?.value[0]?.name}
                            </span>
                            /
                          </>
                        ) : (
                          ""
                        )}
                      </span>
                      <span>
                        {data?.elements?.category?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        ) ? (
                          <>
                            <span
                              onClick={() =>
                                navigate(PATHS.services, {
                                  state:
                                    data?.elements?.service_category?.value[0]
                                      ?.name,
                                })
                              }
                              className="mx-2 cursor-pointer"
                            >
                              {data?.elements?.service_category?.value[0]?.name}
                            </span>
                            /
                          </>
                        ) : (
                          ""
                        )}
                      </span>
                    </h5>
                    <h1>
                      {data?.elements?.title?.value?.replace(
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
                  src={data?.elements?.info_image?.value[0]?.url}
                  className="figure-img img-fluid rounded mt-lg-5"
                  alt="..."
                />
              </div>
            </div>
          </section>

          <section id="design" className="design-sec mt-5 mt-med-2">
            <div className="container">
              <div className="section-header">
                <h3>
                  {data?.elements?.why_choose_services__title?.value?.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </h3>
              </div>
              <div className="row gy-4">
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

          <section id="our_list" className="our-list section-padding1 mt-ld-4">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-3 our-list-info">
                  <h2 className="small">
                    <CountUp
                      start={0}
                      end={
                        data?.elements?.services_count__count_projects?.value
                      }
                      duration={2}
                      className="service-info-count"
                    />
                  </h2>
                  <p>
                    {data?.elements?.services_count__count_projects_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 our-list-info">
                  <h2 className="small">
                    <CountUp
                      start={0}
                      end={parseInt(
                        data?.elements?.services_count__count_clients?.value
                          ?.replace(/(<([^>]+)>)/gi, "")
                          .toString()
                          .replace(/,/g, "")
                      )}
                      duration={2}
                      className="service-info-count"
                    />
                  </h2>
                  <p>
                    {data?.elements?.services_count__count_clients_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 our-list-info">
                  <h2 className="small">
                    <CountUp
                      start={0}
                      end={
                        data?.elements?.services_count__count_delivery?.value
                      }
                      duration={2}
                      suffix="days"
                      className="service-info-count"
                    />
                  </h2>
                  <p>
                    {data?.elements?.services_count__count_delivery_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 our-list-info">
                  <h2 className="small">
                    <CountUp
                      start={0}
                      end={data?.elements?.services_count__count_value?.value}
                      duration={2}
                      prefix="+"
                      suffix="%"
                      className="service-info-count"
                    />
                  </h2>
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
                    {otherServices &&
                      data?.elements?.design_services__title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                  </h3>
                </div>
                {otherServices &&
                  otherServices.map((item: any, i: any) => (
                    <div className="col-lg-6 mt-4 our-design-list  mt-med-1" key={i}>
                      <div className="design-list-card">
                        <Link
                          to={`${PATHS.serviceInfo}?id=${btoa(
                            item.system.codename
                          )}`}
                          onClick={handleScrollTopClick}
                        >
                          <img
                            src={item?.elements?.image?.value[0]?.url}
                            className="figure-img img-fluid rounded w-full"
                            alt="..."
                          />
                        </Link>
                        <div className="service-content">
                          <Link
                            to={`${PATHS.serviceInfo}?id=${btoa(
                              item.system.codename
                            )}`}
                            onClick={handleScrollTopClick}
                          >
                            <h4>
                              {item?.elements?.title?.value?.replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                            </h4>
                          </Link>
                          <p>
                            {item?.elements?.short_description?.value?.replace(
                              /(<([^>]+)>)/gi,
                              ""
                            )}
                          </p>
                        </div>
                        <Link
                          to={`${PATHS.serviceInfo}?id=${btoa(
                            item.system.codename
                          )}`}
                          onClick={handleScrollTopClick}
                        >
                          <img
                            src={item?.elements?.button_icon?.value[0]?.url}
                            className="figure-img img-fluid rounded"
                            alt="..."
                          />
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
