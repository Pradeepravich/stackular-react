import React, { FC } from "react";

interface Props {
  companyStandardData: any;
}
const CompanyStandards: FC<Props> = ({ companyStandardData }) => {
  return (
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
  );
};

export default CompanyStandards;
