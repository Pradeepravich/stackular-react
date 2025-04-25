import React, { FC } from "react";
import { Link } from "react-router-dom";
import useKontentServiceApi from "../services/useKontentServiceApi";
import ArrowRightBtn from "../assets/images/general/right_arrow_btn.png";
import { kontentVariables } from "../utils";


interface Props {}
const TribeSection: FC<Props> = () => {

  const { data } = useKontentServiceApi(kontentVariables.joinUsTribeContentType);

  return (
    <section id="join_us" className="join-us-sec mt-5 mt-sd-1 mt-med-1 tribe-sec">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 join-us-haed">
            <div className="section-header">
              <h2>
                {data?.elements?.join_our_tribe?.value.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )}
              </h2>
              {/* <div className="mt-5 mt-sd-1 mt-md-2 md-hidden"></div> */}
              <div className="join-card flex items-center learning-skills">
                <img
                  src={data?.elements?.img1?.value[0]?.url}
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
              <div className="join-card flex items-center learning-skills">
                <img
                  src={data?.elements?.img2?.value[0]?.url}
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
              <div className="join-card flex items-center learning-skills">
                <img
                  src={data?.elements?.img3?.value[0]?.url}
                  className="img-fluid"
                  alt=""
                />
                <span className="ml-1">
                  {data?.elements?.competitive_compensation?.value.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </span>
              </div>
              <div className="join-card flex items-center learning-skills">
                <img
                  src={data?.elements?.img4?.value[0]?.url}
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
              <div className="join-card flex items-center learning-skills">
                <img
                  src={data?.elements?.img5?.value[0]?.url}
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
              <div className="join-card flex items-center learning-skills">
                <img
                  src={data?.elements?.img6?.value[0]?.url}
                  className="img-fluid"
                  alt=""
                />
                <span className="ml-1">
                  {data?.elements?.growth?.value.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </span>
              </div>
              <Link
                to={data?.elements?.join_learn_more_url?.value}
                className="btn btn-primary !text-left py-2 group tribe-btn"
                onClick={()=>window.scrollTo(0,0)}
              >
                {data?.elements?.join_learn_more?.value.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )}
                <span className="float-end ml-4 ">
                <img src={ArrowRightBtn} alt="" />
                </span>
                <span className="clear-both"></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mt-5 join-us-image">
            <img
              src={data?.elements?.tribe_img?.value[0]?.url}
              className="img-fluid"
              alt="Animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TribeSection;
