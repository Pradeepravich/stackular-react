import React, { FC } from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { Link} from "react-router-dom";
import { kontentVariables, PATHS } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";
import useContentTypes from "../services/useContentTypes";

interface Props {}
const SuccessStoriesSection: FC<Props> = () => {

  const { data } = useKontentServiceApi("success_stories_section");
  const { contentTypes, loading } = useContentTypes(kontentVariables.projects);

  return (
    <section id="projects" className="projects smt-8">
      <div className="container">
        <div className="section-header">
          <p>
            {data?.elements?.title?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </p>
          <h2>
            {data?.elements?.description?.value.replace(
              /(<([^>]+)>)/gi,
              ""
            )}
          </h2>
        </div>

        {contentTypes && contentTypes.map((item: any,i: any)=>(
        <div className="row mt-5 g-0" key={i}>
          <div className={`col-lg-6 ${i % 2 === 1 ? 'align-items-center project-card' : ''}`}>
          {i % 2 === 0 ? (
          <Link to={`${PATHS.portfolioInfo}?id=${btoa(item.system.codename)}`}>
          <img src={
                item?.elements?.image?.value[0]
                  ?.url
              }
              className="img-fluid"
              alt=""
            /></Link>
          ) : (
            <>           
            <h4>
              {item?.elements?.title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
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
            </>
            )}
          </div>
          <div className={`col-lg-6  ${i % 2 === 0 ? 'align-items-center project-card' : ''}`}>
          {i % 2 === 0 ? (
            <>           
            <h4>
              {item?.elements?.title?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}
            </h4>
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
            </>
            ) : (
              <Link to={`${PATHS.portfolioInfo}?id=${btoa(item.system.codename)}`}>
              <img src={
                    item?.elements?.image?.value[0]
                      ?.url
                  }
                  className="img-fluid"
                  alt=""
                /></Link>
              )}
          </div>
        </div>
        ))}

        <div className="form-group">
          <Link
            to={PATHS.portfolio}
            className="btn btn-primary !text-left py-2 group"
          >
            {data?.elements?.view_btn?.value.replace(
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
