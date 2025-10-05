import React, { useState } from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram, BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import "./footer.css";
import logo from "../../assets/Logo.svg";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    home: false,
    about: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer>
      <div className="container">
        <div className="footer__inner">
          {/* Logo va Contact */}
          <div className="footer__logo">
            <img className="footer__logo-icon" src={logo} alt="Logo" />
            <ul className="footer__contact">
              <li><GrMail /> e-learning@gmail.com</li>
              <li><BsFillTelephoneFill /> +77 070 70 71</li>
              <li><HiLocationMarker /> Somewhere in the World</li>
            </ul>
          </div>

          {/* Home & About */}
          <div className="footer__links">
            <div>
              <h3
                className="footer__title clickable"
                onClick={() => toggleSection("home")}
              >
                Home
              </h3>
              <ul
                className={`footer__nav ${
                  openSections.home ? "footer__nav--visible" : ""
                }`}
              >
                <li><a href="/">Benefits</a></li>
                <li><a href="/">Our Clients</a></li>
                <li><a href="/">Our Testimonials</a></li>
                <li><a href="/">Our FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3
                className="footer__title clickable"
                onClick={() => toggleSection("about")}
              >
                About Us
              </h3>
              <ul
                className={`footer__nav ${
                  openSections.about ? "footer__nav--visible" : ""
                }`}
              >
                <li><a href="/">Company</a></li>
                <li><a href="/">Achievements</a></li>
                <li><a href="/">Our Goals</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__socials">
            <h3 className="footer__title">Social Profiles</h3>
            <div className="footer__icons">
              <a href="https://telegram.org/" target="_blank" rel="noreferrer"><BsTelegram /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <p className="footer__copyright">
          © 2023 Skillbridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
