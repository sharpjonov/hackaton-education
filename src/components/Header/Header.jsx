import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../assets/arrow.png"
import Logo from "../../assets/Logo.svg"
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="head_inner">
          <div className="head_inner_top">
            <Link to={"/coursesopenpage"} className="head_inner_top_link">
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
                    to="/coursesopenpage"
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
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/usercard"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    User Card
                  </NavLink>
                </li>
                <li className="head_inner_bottom_left_list_item">
                  <NavLink
                    to="/map"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Our Brenches
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
            <div
              className="burger"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span style={{ transform: menuOpen ? "rotate(45deg) translate(6px, 6px)" : "" }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? "rotate(-45deg) translate(7px, -7px)" : "" }} />
            </div>
          </div>
          {menuOpen && (
            <nav className="mobile_menu">
              <ul>
                <li>
                  <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/games" onClick={() => setMenuOpen(false)}>
                    Games
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;