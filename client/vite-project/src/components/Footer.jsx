import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">
      <div className="item1">
        <img src="src/assets/im1.png" alt="" className="ima1" />
        <img src="src/assets/im2.png" alt="" className="ima2" />
        <img src="src/assets/im3.png" alt="" className="ima3" />
        <img src="src/assets/im4.png" alt="" className="ima4" />
        <img src="src/assets/im5.png" alt="" className="ima5" />
        <img src="src/assets/im4.png" alt="" className="ima6" />
        <div className="images">
          <div className="imagesitem1">
            <p>
              Subscribe For Get Update
              <br /> Every New Courses
            </p>
          </div>
          <div className="imagesitem2">
            <p>
              20k+ students daily learn with Eduvi. Subscribe for new courses.
            </p>
          </div>
          <div className="imagesitem3">
            <input type="text" placeholder="enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="item2">
        <div className="item21">
          <div className="item211">
            <img src="src/assets/image.png" alt="" />
            <p>Eduvi</p>
          </div>
          <div className="item212">
            <div>
              {" "}
              <img src="src/assets/r1.png" alt="" />
            </div>
            <div>
              {" "}
              <img src="src/assets/r2.png" alt="" />
            </div>
            <div>
              {" "}
              <img src="src/assets/r3.png" alt="" />
            </div>
            <div>
              {" "}
              <img src="src/assets/r4.png" alt="" />
            </div>
          </div>
          <div className="item213">
            <p>©2021 Eduvi.co</p>
          </div>
          <div className="item213">
            <p>Eduvi is a registered trademark of Eduvi.co</p>
          </div>
        </div>
        <div className="item22">
          <div className="titre">Courses</div>
          <p>Classroom courses</p>
          <p>Virtual classroom courses</p>
          <p>E-learning courses</p>
          <p>Video Courses</p>
          <p>Offline Courses</p>
        </div>
        <div className="item23">
          <div className="titre">Community</div>
          <p>Learners</p>
          <p>Parteners</p>
          <p>Developers</p>
          <p>Transactions</p>
          <p>Blog</p>
          <p>Teaching Center</p>
        </div>
        <div className="item24"><div className="titre">Quick links</div><p>Home</p><p>Professional Education</p><p>Courses</p><p>Admissions</p><p>Testimonial</p><p>Programs</p></div>
        <div className="item25"><div className="titre">More</div><p>Press</p><p>Investors</p><p>Terms</p><p>Privacy</p><p>Help</p><p>Contact</p></div>
      </div>
    </div>
  );
};

export default Footer;
