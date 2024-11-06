import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  // Get the cart count from the Redux store
  const cartCount = useSelector((state) => state.cart.cartCount);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  const cartItems = useSelector((state) => state.cart.items);  // Books in the cart
  const courses = useSelector((state) => state.cart.courses);  // Courses in the cart

  // Calculate the total number of items (courses + books + 1)
  const totalItems = courses.length + cartItems.length + 1;

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
                    Cart ({totalItems-1})
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
