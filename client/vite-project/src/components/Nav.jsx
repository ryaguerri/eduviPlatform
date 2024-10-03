import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation(); // To track the current path
  const [activeLink, setActiveLink] = useState(location.pathname); // Set the initial state based on the path

  const handleLinkClick = (path) => {
    setActiveLink(path); // Update the active link on click
  };

  return (
    <div className="nav">
      <nav>
        <div className="top">
          <div className="topLeft">
            <img src="src/assets/image.png" alt="" />
            <p>Eduvi</p>
          </div>

          <ul>
            <div className="flex">
              <li>
                <Link
                  to="/Shop"
                  onClick={() => handleLinkClick("/Shop")}
                  className={activeLink === "/Shop" ? "active" : ""}
                >
                  <div className="navi">Shop</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/Kindergarten"
                  onClick={() => handleLinkClick("/Kindergarten")}
                  className={activeLink === "/Kindergarten" ? "active" : ""}
                >
                  <div className="navi">
                    For Kindergarten
                    <img src="src/assets/image1.png" alt="" className="im" />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/High"
                  onClick={() => handleLinkClick("/High")}
                  className={activeLink === "/High" ? "active" : ""}
                >
                  <div className="navi">
                    For High School
                    <img src="src/assets/image1.png" alt="" className="im" />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/College"
                  onClick={() => handleLinkClick("/College")}
                  className={activeLink === "/College" ? "active" : ""}
                >
                  <div className="navi">
                    For College
                    <img src="src/assets/image1.png" alt="" className="im" />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/Courses"
                  onClick={() => handleLinkClick("/Courses")}
                  className={activeLink === "/Courses" ? "active" : ""}
                >
                  <div className="navi">
                    Courses
                    <img src="src/assets/image1.png" alt="" className="im" />
                  </div>
                </Link>
              </li>
            </div>
            <div className="flex">
              <li>
                <Link
                  to="/Cart"
                  onClick={() => handleLinkClick("/Cart")}
                  className={activeLink === "/Cart" ? "active" : ""}
                >
                  <div className="navi">
                    Cart(0)
                    <img src="src/assets/image2.png" alt="" className="im" />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/Myaccount"
                  onClick={() => handleLinkClick("/Myaccount")}
                  className={activeLink === "/Myaccount" ? "active" : ""}
                >
                  <div className="navi">
                    My account
                    <img src="src/assets/image4.png" alt="" className="im" />
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
