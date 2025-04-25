import React, { useEffect, useState } from "react";
import Logo_b from "../assets/images/general/Logo_b.png";
import {
  Linkedin,
  Facebook,
  ArrowUpShort,
  Whatsapp,
  Github,
  Instagram,
  TwitterX,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { kontentVariables } from "../utils";
import useKontentServiceApi from "../services/useKontentServiceApi";
import { ReactComponent as InstagramColoredIcon } from "../assets/images/general/Instagram.svg";
import useCategories from "../services/useCategories";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import styled from "styled-components";

const Footer = () => {
  const { data } = useKontentServiceApi(kontentVariables.footerPage);
  const [isActive, setIsActive] = useState(false);

  const { categories } = useCategories("menu_category");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("load", handleScroll);
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row footer_first">
            <div className="col-lg-8 col-md-10 d-flex">
              <div className="footer-info-sec">
                <h2>
                  {data?.elements?.reach_out?.value.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </h2>
                <p>
                  {data?.elements?.step_into?.value.replace(
                    /(<([^>]+)>)/gi,
                    ""
                  )}
                </p>
                <div className="footer-contact-info">
                  <span>
                    <a href="mailto:info@stackular.com">
                      {data?.elements?.email?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </a>
                  </span>
                  <span>
                    <a href="tel:+14436097406" className="telephone">
                      {data?.elements?.telephone?.value.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      )}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-2 ">
              <div className="footer-links">
                <figure className="figure footer-right-img-area">
                  <img
                    src={data?.elements?.footer_img?.value[0]?.url}
                    className="figure-img img-fluid rounded"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row footer_second">
            <div className="col-lg-3  d-flex logo">
              <div className="mt-2 footer-logo">
                <img src={Logo_b} alt="" />
              </div>
            </div>
            <div className="col-lg-6  footer-links d-flex">
              <div className="footer-menu">
                <nav>
                  <ul className="footer-nav-list">
                    {categories?.map((category: any, i: number) => (                      
                      <li>
                        <Link to={`/${category?.codename}`} className="active">
                          {category?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-3  footer-links">
              <div className="social-links d-flex">
                <a
                  href="https://twitter.com/stackular"
                  className="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterX />
                </a>
                <a
                  href="https://api.whatsapp.com/message/4F6NRKL5EAFFC1"
                  className="whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Whatsapp />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100088815441246"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>

                <a
                  href="https://www.linkedin.com/company/stackular/"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://github.com/Stackular"
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/stackular/"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="instagram-icon" />
                  <InstagramColoredIcon className="instagram-colored-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row footer_third">
            <div className="copyright">
              &copy;&nbsp;
              <span>{`${data?.elements?.copyrights_year?.value.replace(
                /(<([^>]+)>)/gi,
                ""
              )}, All Rights Reserved`}</span>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#scroll-to-top"
        className={`scroll-top ${
          isActive ? "active" : ""
        } d-flex align-items-center justify-content-center`}
        onClick={scrollToTop}
      >
        <ArrowUpShort size="1.7em" className="scroll-top-btn" />
      </a>
    </>
  );
};

export default Footer;
