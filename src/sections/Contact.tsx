import React, { FC } from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import CityLocations from "./CityLocations";


interface Props {
  data: any;
}

const Contact: FC<Props> = ({data}) => {

  return (
    <>
      <main id="main">
      <div className="container">
      <div className="row">
        <section id="contact_us" className="contact-us hero-padding">
          <div className="container">
            <div className="section-header">
              <h1>{data?.elements?.title?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}</h1>
              <p>{data?.elements?.description?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}</p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-6 contact-main">
                <div className="contact-container">
                  <form action="" className="contact-form mt-5">
                    <div className="form-group">
                      <label>NAME</label>
                      <input type="text" className="form-control" id="name" name="name" />
                    </div>
                    <div className="form-group">
                      <label >EMAIL</label>
                      <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                      <label >Got something to share?</label>
                      <input type="text" className="form-control" id="msg" name="msg" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary !text-left py-2 group">Submit 
                      <span className="float-end ml-4 ">
                            <ArrowRightCircleFill
                              color="#87FCFE"
                              size="1.7em"
                              className="arrow-right-circle-fill"
                            />
                          </span>
                          <span className="clear-both"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-end">
                <div className="contact-img ps-0 ps-lg-5">
                  <div className="position-relative">
                    <img src={data?.elements?.contactus_img?.value[0]?.url} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-with-background my-3" style={{backgroundImage:`url(${data?.elements?.background_img?.value[0]?.url})`}}>
          <div className="container">
            <div className="row">
              <div className="col-md-2">                
                <div className="header-content">
                  <h2>{data?.elements?.we_unfold?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}</h2>
                </div>
              </div>
              <div className="col-md-10">                
                <CityLocations  data={data}/>
                
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

export default Contact;
