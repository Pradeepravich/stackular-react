import React, { FC } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

interface Props {
  data: any;
  openings?: any;
  openingsType?: any;
}
const CurrentOpenings: FC<Props> = ({ data, openings, openingsType }) => {
  return (
    <section
      id="projects"
      className="projects our-jobs smt-8 current-openings-area mt-sd-2 mt-med-4 mt-ld-4"
    >
      <div className="container">
        <div className="section-header">
          <p>
            {data?.elements?.opening_description?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </p>
          <h2>
            {data?.elements?.opening_title?.value.replace(/(<([^>]+)>)/gi, "")}
          </h2>
        </div>

        {openingsType?.map((type: any) => (
          <>
            <div className="row mt-5 mt-sd-1 mt-med-2 g-0" key={type?.system?.codename}>
              <div className="col-lg-5 col-md-5 job-titles">
                <h4 className="small">
                  {type?.elements?.current_openings_title?.value?.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </h4>
                <p>
                  <span>
                    {formatNumber(
                      Number(
                        type?.elements?.positions_number?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )
                      )
                    )}
                  </span>
                  &nbsp;&nbsp;
                  <span>
                    {type?.elements?.positions_title?.value?.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </span>
                </p>
              </div>
              <div className="col-lg-7 col-md-7 align-items-center job-cards mb-3 md:!mb-0 job-openings">
                {openings?.map((item: any, i: any) =>
                  item?.elements?.openings_type?.linkedItems[0]?.system
                    ?.codename === type?.system?.codename ? (
                    <div className="job-card" key={i}>
                      <div className="d-lg-flex justify-content-between">
                        <h4 className="small">
                          {item?.elements?.title?.value?.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                        <div className="justify-content-end work-location">
                          <span>
                            <i className="bi bi-clock"></i>
                            {item?.elements?.work_type?.value[0].name}
                          </span>
                          <span>
                            <i className="bi bi-geo-alt"></i>
                            {item?.elements?.location?.value?.replace(
                              /(<([^>]+)>)/gi,
                              ""
                            )}
                          </span>
                        </div>
                      </div>
                      <p>
                        {item?.elements?.description?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <Link
                        to={item?.elements?.button_url?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                        target="_blank"
                        className="btn btn-linkedin"
                      >
                        <i className="bi bi-linkedin mr-2"></i>{" "}
                        {item?.elements?.button_text?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </Link>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-3 mb-4 mt-med-0 border-middle"></div>
          </>
        ))}
      </div>
    </section>
  );
};

export default CurrentOpenings;
