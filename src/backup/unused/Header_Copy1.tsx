import React, { useEffect, useState } from "react";
import { FC } from "react";
import Logo from "../assets/images/general/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { PATHS } from "../../utils";
import { ClipLoader } from "react-spinners";
// import useCategories from "../../services/useCategories";

interface Props {
  loading?: boolean;
}

const Header: FC<Props> = ({ loading = false }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const location = useLocation();

  // const { categories } = useCategories("menu_category");

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
    if (!isMobileNavActive) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  };

  /**
   * Adding sticky class to header upon scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Making only current nav link active upon click
   */
  const handleNavLinkClick = (path: string) => {
    setActiveLink(path);
    if (isMobileNavActive) {
      setIsMobileNavActive(false);
      document.body.classList.remove("mobile-nav-active");
    }
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <>
          <header
            id="header"
            className={`header fixed-top d-flex align-items-center ${
              isSticky ? "sticked" : ""
            }`}
          >
            <div className="container d-flex align-items-center justify-content-between px-4">
              <Link
                to={PATHS.home}
                className="logo d-flex align-items-center me-auto me-lg-0"
              >
                <img src={Logo} alt="" />
              </Link>
              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link
                      to={PATHS.home}
                      className={activeLink === PATHS.home ? "active" : ""}
                      onClick={() => handleNavLinkClick(PATHS.home)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATHS.about}
                      className={activeLink === PATHS.about ? "active" : ""}
                      onClick={() => handleNavLinkClick(PATHS.about)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATHS.services}
                      className={activeLink === PATHS.services ? "active" : ""}
                      onClick={() => handleNavLinkClick(PATHS.services)}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATHS.portfolio}
                      className={activeLink === PATHS.portfolio ? "active" : ""}
                      onClick={() => handleNavLinkClick(PATHS.portfolio)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATHS.joinUs}
                      className={activeLink === PATHS.joinUs ? "active" : ""}
                      onClick={() => handleNavLinkClick(PATHS.joinUs)}
                    >
                      Join Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATHS.contactUs}
                      className={`d-lg-none ${
                        activeLink === PATHS.contactUs ? "active" : ""
                      }`}
                      onClick={() => handleNavLinkClick(PATHS.contactUs)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link
                className="btn-contact-us d-none d-lg-block"
                to={PATHS.contactUs}
              >
                Contact Us
              </Link>
              <i
                className={`mobile-nav-toggle mobile-nav-show ${
                  isMobileNavActive ? `d-none` : ``
                } bi bi-list`}
                onClick={handleMobileNavToggle}
              ></i>
              <i
                className={`mobile-nav-toggle mobile-nav-hide ${
                  isMobileNavActive ? `` : `d-none`
                } bi bi-x`}
                onClick={handleMobileNavToggle}
              ></i>
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
