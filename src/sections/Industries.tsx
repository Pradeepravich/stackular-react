import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../utils";
import { useLocation } from "react-router-dom";

interface Props {
  pageData: any;
  industries: any;
  categories?: any;
}

const Industries: FC<Props> = ({ pageData, industries, categories }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const params = useLocation();

  // const selectedCategoryCodename = categories.map((item: any)=> item.name === params.state ? item.codename : item);

  // const categoryNames = categories.map((item: any)=> item.name);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveTab(categories[0]?.codename);
    }
    if (params.state !== null || undefined) {
      categories.map((item: any) => {
        if (item.name === params.state) {
          setActiveTab(item.codename);
        }
        return item;
      });
    }
  }, [categories, params.state]);

  const openGrid = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    categoryName: string
  ) => {
    setActiveTab(categoryName);
  };

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section
              id="services"
              className="services hero-padding services-list"
            >
              <div className="container">
                <div className="row gy-4 services-main">
                  <div className={`col-lg-8 services-title d-none d-md-block`}>
                    <h1>
                      {pageData?.elements?.title?.value?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </h1>
                  </div>
                  <div className="col-lg-4 d-flex align-items-end d-none d-md-block">
                    <div className="contact-img ps-0 ps-lg-5">
                      <div className="position-relative">
                        <img
                          src={pageData?.elements?.top_right_img?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 md:hidden lg:hidden">
                    <div className="relative d-flex align-items-center justify-between my-4">
                      <h1 className="absolute text-left">
                        {pageData?.elements?.title?.value?.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h1>
                      <div className="ps-0 ps-lg-5">
                        <img
                          src={pageData?.elements?.top_right_img?.value[0]?.url}
                          className="img-fluid w-[55%] float-end"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 tabs">
                  <div className="box" id="boxid">
                    <div className="navlist">
                      {categories.map((category: any) => (
                        <button
                          onMouseOver={(event) =>
                            openGrid(event, category?.codename)
                          }
                          className={`btn btn-plain tablinks ${
                            activeTab === category?.codename ? "active_tab" : ""
                          }`}
                          key={category?.codename}
                        >
                          {category?.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tabcontents mt-5 mt-sd-1 mt-med-1">
                  <div className="textbox">
                    {categories.map(
                      (category: any) =>
                        activeTab === category?.codename && (
                          <div
                            id="Product"
                            className="tabcontent active_content"
                            key={category?.codename}
                          >
                            <div className="row">
                              {industries?.map((service: any, index: any) =>
                                service?.elements?.industry_category?.value[0]
                                  ?.codename === category?.codename ? (
                                  <div
                                    className="col-lg-4 col-md-6"
                                    key={index}
                                  >
                                    <div className="services-cards border-[0.6px] border-[#D1D5DB] rounded-lg mb-4 border-opacity-20">
                                      <Link
                                        to={`${PATHS.industryInfo}?id=${btoa(
                                          service.system.codename
                                        )}`}
                                      >
                                        <img
                                          src={
                                            service?.elements?.image?.value[0]
                                              ?.url
                                          }
                                          className="img-fluid rounded-tl-lg rounded-tr-lg w-full"
                                          alt=""
                                          key={index}
                                        />
                                      </Link>
                                      <div className="p-3">
                                        <div className="service-content">
                                          <Link
                                            to={`${PATHS.industryInfo}?id=${btoa(
                                              service.system.codename
                                            )}`}
                                          >
                                            <h4 className="fixed-txt">
                                              {service?.elements?.title?.value?.replace(
                                                /(<([^>]+)>)/gi,
                                                ""
                                              )}
                                            </h4>
                                          </Link>
                                          <p>
                                            {service?.elements?.short_description?.value?.replace(
                                              /(<([^>]+)>)/gi,
                                              ""
                                            )}
                                          </p>
                                        </div>
                                        <Link to={`${PATHS.industryInfo}?id=${btoa(
                                              service.system.codename
                                            )}`}>
                                          <img
                                            src={
                                              service?.elements?.button_icon
                                                ?.value[0]?.url
                                            }
                                            className="figure-img img-fluid rounded"
                                            alt="..."
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )
                              )}
                            </div>
                          </div>
                        )
                    )}
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

export default Industries;
