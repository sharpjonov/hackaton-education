import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import React from "react";
import "./footer.css";
import logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__inner">
            <div className="footer__logo">
              <img className="footer__logo-icon" src={logo} alt="" />
              <ul className="footer__contact">
                <li className="footer__contact-item">
                  <GrMail
                    className="footer__contact-icon"
                    style={{ color: "black" }}
                  />
                  <span
                    style={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "150%",
                    }}
                  >
                    hello@skillbridge.com
                  </span>
                </li>
                <li className="footer__contact-item">
                  <BsFillTelephoneFill
                    style={{ color: "black" }}
                    className="footer__contact-icon"
                  />
                  <span
                    style={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "150%",
                    }}
                  >
                    +91 91813 23 2309
                  </span>
                </li>
                <li className="footer__contact-item">
                  <HiLocationMarker
                    className="footer__contact-icon"
                    style={{ color: "black" }}
                  />
                  <span
                    style={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "150%",
                    }}
                  >
                    Somewhere in the World
                  </span>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h3 className="footer__title">Home</h3>
              <ul className="footer__nav">
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Benefits
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Our Clients
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Our Testimonials
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Our FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h3 className="footer__title">About Us</h3>
              <ul className="footer__nav">
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Company
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Achievements
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Our Goals
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h3 className="footer__title">Social Profiles</h3>
              <div className="footer__social">
                <a
                  href="https://telegram.org/"
                  className="footer__social-link telegram"
                  target="_blanket"
                >
                  <BsTelegram className="footer__social-icon" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="footer__social-link instagram"
                  target="_blanket"
                >
                  <AiFillInstagram className="footer__social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="footer__social-link linkedin"
                  target="_blanket"
                >
                  <AiFillLinkedin className="footer__social-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__copyright">
            <p>© 2023 Skillbridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
