import React, { useEffect } from 'react';
import { FC } from 'react';
import Logo from '../assets/images/logos/Logo.png'

interface Props {}

const Header: FC<Props> = () => {

  useEffect(() => {
    const currentPageUrl = window.location.href;
    const navbarLinks = document.querySelectorAll('#navbar a');

    navbarLinks.forEach(link => {
      const menuItemUrl = link.getAttribute('href') || '';
      if (currentPageUrl.includes(menuItemUrl)) {
        link.classList.add('active');
      }
    });
  }, []);


  return (
    <>
    <div className="top-boreder fixed-top"></div>
    <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <a href={"/"} className="logo d-flex align-items-center me-auto me-lg-0">
        <img src={Logo} alt="" />
      </a>
      <nav  id="navbar" className="navbar">
        <ul >
          <li><a href={"/about"} >About</a></li>
          <li><a href={"/services"} >Services</a></li>
          <li><a href={"/portfolio"} >Portfolio</a></li>
          <li><a href={"/join-us"} >Join Us</a></li>
          <li><a className="d-lg-none" href={"/contact-us"}>Contact Us</a></li>
        </ul>
      </nav>
      <a className="btn-contact-us d-none d-lg-block" href={"/contact-us"}>Contact Us</a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
  </>
  );
};

export default Header;
