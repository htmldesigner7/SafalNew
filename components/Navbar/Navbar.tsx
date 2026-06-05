"use client";

import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar_wrapper">

          {/* Logo */}
          <div className="navbar_logo">
            <img src="/images/logo.png" alt="logo" />
          </div>

          {/* Menu */}
          <nav className="navbar_menu">
            <ul>
              <li>
                <a href="#">
                  The Group
                  <span>⌄</span>
                </a>
              </li>

              <li>
                <a href="#">
                  Technology
                  <span>⌄</span>
                </a>
              </li>

              <li>
                <a href="#">
                  Industries We Serve
                  <span>⌄</span>
                </a>
              </li>

              <li>
                <a href="#">
                  Partnerships
                  <span>⌄</span>
                </a>
              </li>

              <li>
                <a href="#">
                  Insights
                  <span>⌄</span>
                </a>
              </li>

              <li>
                <a href="#">
                  Careers
                  <span>⌄</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Button */}
          <div className="navbar_btn">
            <a href="#">Get In Touch</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="mobile_toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </header>
  );
}