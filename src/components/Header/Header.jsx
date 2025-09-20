import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../assets/arrow.png";
import Logo from "../../assets/Logo.svg";
import "../Header/header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="head_inner">
          <div className="head_inner_top">
            <Link to={"/courses/information"} className="head_inner_top_link">
              Free Courses 🌟 Sale Ends Soon, Get It Now
              <span>
                <img width={24} height={24} src={LogoIcon} alt="arrow" />
              </span>
            </Link>
          </div>
          <div className="head_inner_bottom">
            <div className="head_inner_bottom_left">
              <ul className="head_inner_bottom_left_list">
                <li className="logo_box">
                  <Link to="/" style={{ border: "none" }}>
                    <img src={Logo} alt="Logo" />
                  </Link>
                </li>
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="head_inner_bottom_right">
              <ul className="head_inner_bottom_right_list">
                <li className="head_inner_bottom_right_list_item">
                  <NavLink
                    className="head_inner_bottom_right_list_item_1"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li className="head_inner_bottom_right_list_item">
                  <NavLink
                    className="head_inner_bottom_right_list_item_2 text-light"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
