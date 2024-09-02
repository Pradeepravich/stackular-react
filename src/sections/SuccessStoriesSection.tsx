import React, { FC } from "react";
import { Link } from "react-router-dom";
import { kontentVariables, PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";
import useContentTypes from "../services/useContentTypes";

interface Props {
  limit?: number;
}
const SuccessStoriesSection: FC<Props> = ({ limit }) => {
  const { data } = useKontentServiceApi(kontentVariables.successStoriesPage);
  const { contentItems } = useContentTypes(
    kontentVariables.portfolioInfoContentType
  );

  const displayedContentItems = limit
    ? contentItems?.slice(0, limit)
    : contentItems;

  return (
    <section id="projects" className="projects smt-8 mt-sd-2  mt-med-2 mt-ld-4">
      <div className="container">
        <div className="section-header">
          <p>
            {displayedContentItems?.length
              ? data?.elements?.title?.value.replace(/(<([^>]+)>)/gi, "")
              : ""}
          </p>
          <h2>
            {displayedContentItems?.length
              ? data?.elements?.description?.value.replace(/(<([^>]+)>)/gi, "")
              : ""}
          </h2>
        </div>
        {displayedContentItems &&
          displayedContentItems.map((item: any, i: any) => (
            <div className="row mt-5 mt-sd-1 mt-med-2 g-0" key={i}>
              <div className={`col-lg-6 col-md-6 align-items-center pr-med-1`}>
                {i % 2 === 0 ? (
                  <>
                    <Link
                      to={`${PATHS.portfolioInfo}?id=${btoa(
                        item.system.codename
                      )}`}
                      className="no-underline text-inherit"
                    >
                      <img
                        src={item?.elements?.image?.value[0]?.url}
                        className="img-fluid sm-block   !hidden"
                        alt=""
                      />
                    </Link>
                    <div className="project-card sm-hidden   !block">
                      <Link
                        to={`${PATHS.portfolioInfo}?id=${btoa(
                          item.system.codename
                        )}`}
                        className="no-underline text-inherit"
                      >
                        <h4>
                          {item?.elements?.title?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                      </Link>
                      <p>
                        {item?.elements?.short_description?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <span>
                        {item?.elements?.technologies_3752ab0__label1?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span>
                        {item?.elements?.technologies_3752ab0__label2?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span>
                        {item?.elements?.technologies_3752ab0__label3?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </>
                ) : (
                  <Link
                    to={`${PATHS.portfolioInfo}?id=${btoa(
                      item.system.codename
                    )}`}
                    className="no-underline"
                  >
                    <img
                      src={item?.elements?.image?.value[0]?.url}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                )}
              </div>
              <div className={`col-lg-6 col-md-6 align-items-center`}>
                {i % 2 === 0 ? (
                  <>
                    <Link
                      to={`${PATHS.portfolioInfo}?id=${btoa(
                        item.system.codename
                      )}`}
                      className="no-underline text-inherit"
                    >
                      <img
                        src={item?.elements?.image?.value[0]?.url}
                        className="img-fluid sm-hidden  !block"
                        alt=""
                      />
                    </Link>
                    <div className="project-card sm-block  !hidden">
                      <Link
                        to={`${PATHS.portfolioInfo}?id=${btoa(
                          item.system.codename
                        )}`}
                        className="no-underline text-inherit"
                      >
                        <h4>
                          {item?.elements?.title?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                      </Link>
                      <p>
                        {item?.elements?.description?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <span>
                        {item?.elements?.technologies_3752ab0__label1?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span>
                        {item?.elements?.technologies_3752ab0__label2?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span>
                        {item?.elements?.technologies_3752ab0__label3?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-card">
                      <Link
                        to={`${PATHS.portfolioInfo}?id=${btoa(
                          item.system.codename
                        )}`}
                        className="no-underline text-inherit"
                      >
                        <h4>
                          {item?.elements?.title?.value.replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )}
                        </h4>
                      </Link>
                      <p>
                        {item?.elements?.description?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </p>
                      <span>
                        {item?.elements?.technologies_3752ab0__label1?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span>
                        {item?.elements?.technologies_3752ab0__label2?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                      <span>
                        {item?.elements?.technologies_3752ab0__label3?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
