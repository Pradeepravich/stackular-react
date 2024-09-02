import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { kontentVariables, PATHS } from "../utils";
import useContentTypes from "../services/useContentTypes";

interface Props {
  data: any;
}

const PortfolioInfo: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const { contentItems } = useContentTypes(
    kontentVariables.portfolioInfoContentType
  );

  return (
    <>
      <main id="main">
        <div className="container">
          <section id="join" className="project-info-sec info-top-padding">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6  project-info-header">
                  <div className="section-header">
                    <h5 className="text-white">
                      <span>
                        {data?.elements?.main_category?.value[0]?.name ? (
                          <>
                            <span
                              onClick={() => navigate(PATHS.portfolio)}
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
                    </h5>
                    <h1>
                      {data?.elements?.title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h1>
                    <p>
                      {data?.elements?.description?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <div className="project-card">
                      <span className="badge">
                        {data?.elements?.technologies_3752ab0__label1?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span className="badge">
                        {data?.elements?.technologies_3752ab0__label2?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span className="badge">
                        {data?.elements?.technologies_3752ab0__label3?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  mt-5 mt-sd-1">
                  <img
                    src={data?.elements?.image?.value[0]?.url}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="projects sm-8 mt-sd-2 mb-sd-1 mt-ld-4 mb-ld-2">
            <div className="container">
              <div className="row mt-lg-5 mt-med-0 mt-sd-0 g-0">
                <div className="col-lg-3  project-issues-info">
                  <h4>
                    {data?.elements?.portfolio_second_block_info__title1?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9  job-cards mb-3 mb-med-0 mb-sd-0">
                  <div className="project-info">
                    <p>
                      {data?.elements?.portfolio_second_block_info__description1?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-lg-3 mt-med-1 mt-sd-0 g-0">
                <div className="col-lg-3  project-issues-info">
                  <h4>
                    {data?.elements?.portfolio_second_block_info__title2?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9  job-cards mb-3 mb-med-0 mb-sd-0">
                  <div className="project-info">
                    <p>
                      {data?.elements?.portfolio_second_block_info__description2?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                    <img
                      src={
                        data?.elements?.portfolio_second_block_info__large_img
                          ?.value[0]?.url
                      }
                      className="figure-img img-fluid rounded mt-3 mt-ld-3"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 mt-med-1 mt-sd-1 g-0">
                <div className="col-lg-3  project-issues-info">
                  <h4 className="d-none d-md-block project-issues-info-width">
                    {data?.elements?.portfolio_second_block_info__technology_tools_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                  <h4 className="d-block d-md-none project-issues-info-width">
                    {data?.elements?.portfolio_second_block_info__technology_tools_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9  job-cards mb-3 mb-med-0 mb-sd-0">
                  <div className="project-info tec-tools flex flex-wrap items-center justify-start">
                    {data?.elements
                      ?.portfolio_second_block_info__technology_tools_images
                      ?.value &&
                      data?.elements?.portfolio_second_block_info__technology_tools_images?.value.map(
                        (item: any) => (
                          <span
                            key={item?.name}
                            className="w-1/3 md:w-auto lg:w-auto p-1"
                          >
                            <img
                              src={item?.url}
                              className="figure-img img-fluid rounded"
                              alt="..."
                            />
                          </span>
                        )
                      )}
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 mt-med-1 mt-sd-1 g-0">
                <div className="col-lg-3  project-issues-info">
                  <h4>
                    {data?.elements?.portfolio_second_block_info__result?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9  job-cards mb-3 mb-med-0 mb-sd-0">
                  <div className="project-info">
                    <p>
                      {data?.elements?.portfolio_second_block_info__result_description?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 mt-med-1 mt-sd-0 g-0">
                <div className="col-lg-3  project-issues-info">
                  <h4 className="d-none d-md-block project-issues-info-width pr-1">
                    {data?.elements?.portfolio_second_block_info__success_metrics?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                  <h4 className="d-block d-md-none">
                    {data?.elements?.portfolio_second_block_info__success_metrics?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </h4>
                </div>
                <div className="col-lg-9  job-cards mb-3 mb-med-0 mb-sd-0">
                  <div className="project-info job-card">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 metrics flex flex-col items-center">
                        <h2 className="small">
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_orders
                                ?.value
                            }
                            duration={2}
                            prefix="+"
                            suffix="%"
                            className="portfolio-info-count"
                          />
                        </h2>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_orders_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-lg-3 col-md-3  metrics">
                        <h2 className="small">
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_revenue
                                ?.value
                            }
                            duration={2}
                            prefix="+$"
                            suffix="M"
                            className="portfolio-info-count"
                          />
                        </h2>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_revenue_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-lg-3 col-md-3  metrics">
                        <h2 className="small">
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_performance
                                ?.value
                            }
                            duration={2}
                            prefix="0"
                            suffix="x"
                            className="portfolio-info-count"
                          />
                        </h2>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_performance_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                      <div className="col-lg-3 col-md-3 metrics">
                        <h2 className="small">
                          <CountUp
                            start={0}
                            end={
                              data?.elements
                                ?.portfolio_second_block_info__count_completion
                                ?.value
                            }
                            duration={2}
                            prefix="+"
                            suffix="%"
                            className="portfolio-info-count"
                          />
                        </h2>
                        <p>
                          {data?.elements?.portfolio_second_block_info__count_completion_title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="works" className="other-works section-padding1 mt-ld-1">
            <div className="container">
              <div className="row mt-lg-5 mt-med-2 mt-sd-0 g-0">
                <div className="section-header">
                  <h3>
                    {contentItems &&
                      data?.elements?.other_works__other_works_title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                  </h3>
                </div>
                {contentItems &&
                  contentItems.map((item: any, i: any) =>
                    item?.system?.codename !== data?.system?.codename ? (
                      <div
                        className="col-lg-4  other-work-cards mb-med-1 mb-sd-0"
                        key={i}
                      >
                        <div className="other-work-card">
                          <Link
                            to={`${PATHS.portfolioInfo}?id=${btoa(
                              item?.system?.codename
                            )}`}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <img
                              src={item?.elements?.image?.value[0]?.url}
                              className="figure-img img-fluid rounded-tl-[10px] rounded-tr-[20px]"
                              alt="..."
                            />
                          </Link>
                          <div className="content">
                            <Link
                              to={`${PATHS.portfolioInfo}?id=${btoa(
                                item?.system?.codename
                              )}`}
                              onClick={() => window.scrollTo(0, 0)}
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
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PortfolioInfo;
