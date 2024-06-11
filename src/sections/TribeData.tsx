import React, { FC } from 'react'
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

interface Props {
  tribeData: any;
}
const TribeData: FC<Props> = ({tribeData}) => {
  return (
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
                      <Link
                        to={tribeData?.elements?.join_learn_more_url?.value}
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
                      </Link>
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
  )
}

export default TribeData