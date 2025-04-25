import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import Logo from "../../assets/images/general/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { PATHS } from "../../utils";
import { ClipLoader } from 'react-spinners';


interface Props {
  loading?: boolean;
}

const Header: FC<Props> = ({loading = false}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const scrollTopRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);

    if (!isMobileNavActive) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  };

  /**
   * Handle scroll to add sticky class to header element
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (scrollTopRef.current) {
        window.scrollY > 100 ? scrollTopRef.current.classList.add('active') : scrollTopRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

   /**
   * Navbar links active state on scroll
   */
  useEffect(() => {
    const links = document.querySelectorAll('#navbar a');
    links.forEach(link => {
      if (link instanceof HTMLAnchorElement) {
        if (link.href === window.location.href) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }, [location]);



  /**
     * Navbar links active state on scroll
     */
  useEffect(() => {
    const navbarlinks = document.querySelectorAll<HTMLAnchorElement>('#navbar a');

    const navbarlinksActive = () => {
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;

        const section = document.querySelector<HTMLElement>(navbarlink.hash);
        if (!section) return;

        const position = window.scrollY + 200;

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('load', navbarlinksActive);
      document.removeEventListener('scroll', navbarlinksActive);
    };
  }, []);

  /**
     * Mobile nav toggle
     */
  useEffect(() => {
    const mobileNavShow = document.querySelector<HTMLElement>('.mobile-nav-show');
    const mobileNavHide = document.querySelector<HTMLElement>('.mobile-nav-hide');

    const mobileNavToggle = () => {
      document.querySelector('body')?.classList.toggle('mobile-nav-active');
      mobileNavShow?.classList.toggle('d-none');
      mobileNavHide?.classList.toggle('d-none');
    };

    const handleToggleClick = (event: Event) => {
      event.preventDefault();
      mobileNavToggle();
    };

    const mobileNavToggleElements = document.querySelectorAll<HTMLElement>('.mobile-nav-toggle');

    mobileNavToggleElements.forEach(el => {
      el.addEventListener('click', handleToggleClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      mobileNavToggleElements.forEach(el => {
        el.removeEventListener('click', handleToggleClick);
      });
    };
  }, []);

  
  /**
     * Hide mobile nav on same-page/hash links
     */
  useEffect(() => {
    const mobileNavToggle = () => {
      document.querySelector('body')?.classList.toggle('mobile-nav-active');
      const mobileNavShow = document.querySelector<HTMLElement>('.mobile-nav-show');
      const mobileNavHide = document.querySelector<HTMLElement>('.mobile-nav-hide');
      mobileNavShow?.classList.toggle('d-none');
      mobileNavHide?.classList.toggle('d-none');
    };

    const navbarLinks = document.querySelectorAll<HTMLAnchorElement>('#navbar a');

    navbarLinks.forEach(navbarLink => {
      if (!navbarLink.hash) return;

      const section = document.querySelector<HTMLElement>(navbarLink.hash);
      if (!section) return;

      navbarLink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      navbarLinks.forEach(navbarLink => {
        navbarLink.removeEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
    };
  }, []);

  /**
     * Toggle mobile nav dropdowns
     */
  useEffect(() => {
    const navDropdowns = document.querySelectorAll<HTMLAnchorElement>('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          (this.nextElementSibling as HTMLElement)?.classList.toggle('dropdown-active');

          const dropDownIndicator = this.querySelector<HTMLElement>('.dropdown-indicator');
          if (dropDownIndicator) {
            dropDownIndicator.classList.toggle('bi-chevron-up');
            dropDownIndicator.classList.toggle('bi-chevron-down');
          }
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      navDropdowns.forEach(el => {
        el.removeEventListener('click', function(event) {
          if (document.querySelector('.mobile-nav-active')) {
            event.preventDefault();
            this.classList.toggle('active');
            (this.nextElementSibling as HTMLElement)?.classList.toggle('dropdown-active');

            const dropDownIndicator = this.querySelector<HTMLElement>('.dropdown-indicator');
            if (dropDownIndicator) {
              dropDownIndicator.classList.toggle('bi-chevron-up');
              dropDownIndicator.classList.toggle('bi-chevron-down');
            }
          }
        });
      });
    };
  }, []);

  // const handleScrollTopClick = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  
  return (
    <>
    {loading ? (
        <div className="loader-container">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <>
      {/* <div className="top-boreder fixed-top"></div> */}
      <header
        id="header"
        className={`header fixed-top d-flex align-items-center ${isSticky ? 'sticked' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-between px-4">
          <Link
            to={"/"}
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img src={Logo} alt="" />
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to={PATHS.frontpage}>Home</Link>
              </li>
              <li>
                <Link to={PATHS.about}>About</Link>
              </li>
              <li>
                <Link to={PATHS.services}>Services</Link>
              </li>
              <li>
                <Link to={PATHS.portfolio}>Portfolio</Link>
              </li>
              <li>
                <Link to={PATHS.joinUs}>Join Us</Link>
              </li>
              <li>
                <Link className="d-lg-none" to={PATHS.contactUs}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <Link className="btn-contact-us d-none d-lg-block" to={PATHS.contactUs}>
            Contact Us
          </Link>
          <i className={`mobile-nav-toggle mobile-nav-show ${isMobileNavActive ? `d-none` : ``} bi bi-list`} onClick={handleMobileNavToggle}></i>
          <i className={`mobile-nav-toggle mobile-nav-hide ${isMobileNavActive ? `` : `d-none`} bi bi-x`} onClick={handleMobileNavToggle}></i>
        </div>
      </header>
          {/* <div
            className="scroll-top"
            ref={scrollTopRef}
            onClick={handleScrollTopClick}
          >
            ↑
          </div> */}
      </>
      )}
    </>
  );
};

export default Header;
